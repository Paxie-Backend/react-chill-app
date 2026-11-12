import type { Movie } from "../types/movie";
import Card from "./Card";
import Carousel from "./Carousel";

interface MovieSectionProps {
  title: string;
  movies: Movie[];
}

export default function MovieSection({
  title,
  movies,
}: Readonly<MovieSectionProps>) {
  return (
    <Carousel title={title}>
      {movies.map((movie) => (
        <Card
          key={movie.id}
          title={movie.name}
          image={movie.banner_url}
          newEpisode={movie.is_new_episode}
        />
      ))}
    </Carousel>
  );
}
