import "../styles/homepage.css";

import { movies } from "../data/movies";

import NavBar from "../components/NavBar";
import HeroSection from "../components/HeroSection";
import CarouselHorizontal from "../components/CarouselHorizontal";
import CardHorizontal from "../components/CardHorizontal";
import Carousel from "../components/Carousel";
import Card from "../components/Card";
import Footer from "../components/Footer";

export default function HomePage() {
  const movieRecent = movies.filter((movie) => movie.type === "new_release" || movie.type === "recent");
  const movieTopRating = movies.filter((movie) => movie.type === "top_rating");
  const movieTrending = movies.filter((movie) => movie.type === "trending");

  return (
    <div className="homepage-container">
      <NavBar />
      <main>
        <HeroSection />
        <CarouselHorizontal>
          {movieTrending.map((item) => (
            <CardHorizontal title={item.name} image={item.cover_url} key={item.id} />
          ))}
        </CarouselHorizontal>
        <Carousel title="Top Rating Film dan Series Hari ini">
          {movieTopRating.map((item) => (
            <Card
              title={item.name}
              image={item.banner_url}
              key={item.id}
              newEp={item.is_new_episode}
            />
          ))}
        </Carousel>
        <Carousel title="Film Trending">
          {movieTrending.map((item) => (
            <Card
              title={item.name}
              image={item.banner_url}
              key={item.id}
              newEp={item.is_new_episode}
            />
          ))}
        </Carousel>
        <Carousel title="Rilis Baru">
          {movieRecent.map((item) => (
            <Card
              title={item.name}
              image={item.banner_url}
              key={item.id}
              newEp={item.is_new_episode}
            />
          ))}
        </Carousel>
      </main>
      <Footer />
    </div>
  );
}
