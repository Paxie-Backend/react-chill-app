import { movies } from "../data/movies";

import CardHorizontal from "../components/CardHorizontal";
import CarouselHorizontal from "../components/CarouselHorizontal";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import MovieSection from "../components/MovieSection";
import NavBar from "../components/NavBar";

export default function HomePage() {
  const recentReleases = movies.filter(
    (movie) => movie.type === "new_release" || movie.type === "recent",
  );
  const topRatedMovies = movies.filter((movie) => movie.type === "top_rating");
  const trendingMovies = movies.filter((movie) => movie.type === "trending");

  return (
    <div className="flex min-w-[360px] flex-col bg-[hsla(210,8%,10%,1)]">
      <NavBar />
      <main className="mb-[27px] flex flex-col gap-5">
        <HeroSection />
        <CarouselHorizontal>
          {trendingMovies.map((movie) => (
            <CardHorizontal
              key={movie.id}
              title={movie.name}
              image={movie.cover_url}
            />
          ))}
        </CarouselHorizontal>
        <MovieSection
          title="Top Rating Film dan Series Hari ini"
          movies={topRatedMovies}
        />
        <MovieSection title="Film Trending" movies={trendingMovies} />
        <MovieSection title="Rilis Baru" movies={recentReleases} />
      </main>
      <Footer />
    </div>
  );
}
