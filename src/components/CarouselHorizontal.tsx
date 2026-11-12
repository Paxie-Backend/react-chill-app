import type { ReactNode } from "react";

interface ICarouselHorizontalProps {
  children: ReactNode;
}

export default function CarouselHorizontal({
  children,
}: Readonly<ICarouselHorizontalProps>) {
  return (
    <section className="relative ml-5 py-5 sm:mx-0 sm:px-20 sm:py-10">
      <h2 className="mb-5 text-xl leading-[120%] font-bold text-white sm:mb-8 sm:text-[32px]">
        Melanjutkan Tonton Film
      </h2>
      <div className="flex gap-4 overflow-x-auto [scrollbar-color:#888_transparent]">
        {children}
      </div>
      <img
        className="absolute top-[170px] left-[58px] z-[2] hidden cursor-pointer sm:block"
        src="assets/images/arrow-left.svg"
        alt="Left Arrow"
      />
      <img
        className="absolute top-[170px] right-[58px] z-[2] hidden cursor-pointer sm:block"
        src="assets/images/arrow-right.svg"
        alt="Right Arrow"
      />
    </section>
  );
}
