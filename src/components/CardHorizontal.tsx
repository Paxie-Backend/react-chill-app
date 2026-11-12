interface CardHorizontalProps {
  title: string;
  image: string;
}

export default function CardHorizontal(props: Readonly<CardHorizontalProps>) {
  const { title, image } = props;
  return (
    <article className="relative z-[2] h-[151px] flex-[0_0_309px] overflow-hidden rounded-lg after:absolute after:inset-0 after:z-[1] after:bg-[linear-gradient(to_top,hsla(0,0%,0%,0.5),transparent_45%)] sm:h-[162px] sm:flex-[0_0_302px]">
      <img
        className="block h-full w-full object-cover"
        src={image}
        alt={title}
      />
      <div className="absolute right-4 bottom-4 left-4 z-[2] flex items-center justify-between">
        <p className="text-sm leading-[140%] font-bold tracking-[0.2px] text-white sm:text-lg sm:leading-[120%]">
          {title}
        </p>
        <img
          className="h-[17px] w-[46px] sm:h-5 sm:w-[55px]"
          src="/assets/images/star.svg"
          alt="Rating"
        />
      </div>
    </article>
  );
}
