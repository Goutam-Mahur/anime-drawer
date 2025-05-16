import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

import AnimeCard, { type AnimeProp } from "./AnimeCard";

const MAX_LIMIT = 8;
let page = 1;

async function fetchAnime(page: number) {
  const response = await fetch(
    `https://shikimori.one/api/animes?page=${page}&limit=${MAX_LIMIT}&order=popularity`,
  );
  const data = await response.json();
  return data;
}

function LoadMore() {
  const { ref, inView } = useInView();

  const [data, setData] = useState<AnimeProp[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [pageLength, setPageLength] = useState(0);

  useEffect(() => {
    if (inView) {
      setIsLoading(true);
      const delay = 500;
      setPageLength(data.length);

      const timeoutId = setTimeout(() => {
        fetchAnime(page).then((res) => {
          setData([...data, ...res]);
          page++;
        });

        setIsLoading(false);
      }, delay);

      return () => clearTimeout(timeoutId);
    }
  }, [inView, data, isLoading]);

  return (
    <>
      <section className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10 place-items-center">
        {data.map((item: AnimeProp, index: number) => (
          <AnimeCard key={item.id} anime={item} index={index - pageLength} />
        ))}
      </section>
      <section className="flex justify-center items-center w-full">
        <div ref={ref}>
          {inView && isLoading && (
            <img
              src="./spinner.svg"
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
