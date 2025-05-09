"use client";

import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import { fetchAnime } from "@/actions/action";
import AnimeCard, { AnimeProp } from "./AnimeCard";

type Props = {
  initialData: AnimeProp[];
};

let page = 2;

function LoadMore({ initialData }: Props) {
  const { ref, inView } = useInView();
  const [data, setData] = useState<AnimeProp[]>(initialData);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (inView && !isLoading) {
      setIsLoading(true);

      const delay = 500;
      const timeoutId = setTimeout(() => {
        fetchAnime(page)
          .then((res) => {
            setData((prev) => [...prev, ...res]);
            page++;
            setIsLoading(false);
          })
          .catch((err) => {
            console.error("Error fetching more anime:", err);
            setIsLoading(false);
          });
      }, delay);

      return () => clearTimeout(timeoutId);
    }
  }, [inView]);

  return (
    <>
      <section className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10 place-items-center">
        {data.map((item: AnimeProp, index: number) => (
          <AnimeCard
            key={item.id + item.name + item.episodes + index}
            anime={item}
            index={index}
          />
        ))}
      </section>

      <section className="flex justify-center items-center w-full py-6">
        <div ref={ref}>
          {isLoading && (
            <Image
              src="/spinner.svg"
              alt="spinner"
              width={56}
              height={56}
              className="object-contain"
            />
          )}
        </div>
      </section>
    </>
  );
}

export default LoadMore;
