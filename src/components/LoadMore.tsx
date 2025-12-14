import { useEffect, useRef, useState } from "react";
import AnimeCard, { type AnimeProp } from "./AnimeCard";

const MAX_LIMIT = 15;
let page = 1;

async function fetchAnime(page: number) {
  const response = await fetch(
    `https://shikimori.one/api/animes?page=${page}&limit=${MAX_LIMIT}&order=popularity`,
  );
  return response.json();
}

function LoadMore() {
  const observerRef = useRef<HTMLDivElement | null>(null);

  const [data, setData] = useState<AnimeProp[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [pageLength, setPageLength] = useState(0);

  useEffect(() => {
    if (!observerRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || isLoading) return;

        setIsLoading(true);
        setPageLength(data.length);

        const delay = 500;
        setTimeout(() => {
          fetchAnime(page).then((res) => {
            setData((prev) => [...prev, ...res]);
            page++;
            setIsLoading(false);
          });
        }, delay);
      },
      {
        rootMargin: "200px",
      },
    );

    observer.observe(observerRef.current);

    return () => observer.disconnect();
  }, [data, isLoading]);

  return (
    <>
      <section className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10 place-items-center">
        {data.map((item, index) => (
          <AnimeCard key={item.id} anime={item} index={index - pageLength} />
        ))}
      </section>

      <section className="flex justify-center items-center w-full">
        <div ref={observerRef}>
          {isLoading && (
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
