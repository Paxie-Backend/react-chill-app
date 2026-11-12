interface CardProps {
  title: string;
  image: string;
  newEpisode: boolean;
}

export default function Card({
  image,
  title,
  newEpisode,
}: Readonly<CardProps>) {
  return (
    <article className="relative h-[145px] flex-[0_0_95px] overflow-hidden rounded sm:h-[365px] sm:flex-[0_0_234px]">
      {newEpisode ? (
        <span className="absolute top-2 left-2 rounded-xl bg-[hsla(233,81%,32%,1)] px-[5px] py-0.5 text-[6px] leading-[140%] font-bold tracking-[0.1px] text-white sm:top-4 sm:left-4 sm:px-[10px] sm:py-1 sm:text-sm sm:tracking-[0.2px]">
          Episode Baru
        </span>
      ) : null}
      <img
        className="block h-full w-full object-cover"
        src={image}
        alt={title}
      />
    </article>
  );
}
