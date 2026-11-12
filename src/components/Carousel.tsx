import type { ReactNode } from "react";

interface ICarouselProps {
  title: string;
  children: ReactNode;
}

export default function Carousel(props: ICarouselProps) {
  const { title, children } = props;

  return (
    <section className="relative ml-5 sm:mx-0 sm:px-20 sm:py-10">
      <h2 className="mb-5 text-xl leading-[120%] font-bold text-white sm:text-[32px] sm:leading-[110%]">
        {title}
      </h2>
      <div className="flex gap-4 overflow-x-auto [scrollbar-color:#888_transparent] sm:gap-7">
        {children}
      </div>
      <img
        className="absolute top-[250px] left-[58px] z-[2] hidden cursor-pointer sm:block"
        src="assets/images/arrow-left.svg"
        alt="Left Arrow"
      />
      <img
        className="absolute top-[250px] right-[58px] z-[2] hidden cursor-pointer sm:block"
        src="assets/images/arrow-right.svg"
        alt="Right Arrow"
      />
    </section>
  );
}
