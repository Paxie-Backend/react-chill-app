import type { ReactNode } from "react";

interface ICarouselHorizontalProps {
  children: ReactNode;
}

export default function CarouselHorizontal({ children }: Readonly<ICarouselHorizontalProps>) {
  return (
    <section className="continue-watching-section">
      <h2>Melanjutkan Tonton Film</h2>
      <div className="movie-list">{children}</div>
      <img className="arrow-left" src="assets/images/arrow-left.svg" alt="Left Arrow" />
      <img className="arrow-right" src="assets/images/arrow-right.svg" alt="Right Arrow" />
    </section>
  );
}
