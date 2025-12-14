export interface AnimeProp {
  id: string;
  name: string;
  image: {
    original: string;
  };
  kind: string;
  episodes: number;
  episodes_aired: number;
  score: string;
}

interface Prop {
  anime: AnimeProp;
  index: number;
}

function AnimeCard({ anime, index }: Prop) {
  const src = anime.image.original.startsWith("http")
    ? anime.image.original
    : `https://shikimori.one${anime.image.original}`;

  return (
    <div
      className="max-w-sm w-full rounded-xl overflow-hidden bg-[#161921]
                 opacity-0 translate-x-[5px] translate-y-[30px]
                 animate-[fadeUp_0.3s_ease-in-out_forwards]"
      style={{
        animationDelay: `${index * 200}ms`,
      }}
    >
      <div className="relative w-full h-[37vh]">
        <img
          src={src}
          alt={anime.name}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

      <div className="p-4 flex flex-col gap-4">
        <div className="flex justify-between items-start gap-3">
          <h2 className="text-white font-bold text-lg truncate flex-1">
            {anime.name}
          </h2>
          <span className="bg-[#0F1117] px-2 py-0.5 rounded text-white text-sm font-semibold capitalize">
            {anime.kind}
          </span>
        </div>

        <div className="flex justify-between text-white text-sm font-medium">
          <div className="flex items-center gap-2">
            <img src="./episodes.svg" alt="episodes" width={20} height={20} />
            <span>{anime.episodes || anime.episodes_aired}</span>
          </div>

          <div className="flex items-center gap-2">
            <img src="./star.svg" alt="star" width={18} height={18} />
            <span className="text-[#FFAD49] font-bold">{anime.score}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AnimeCard;
