import { useEffect, useState } from "react";
import type { AxiosRequestConfig } from "axios";

import "../styles/homepage.css";

import { authApi } from "../utils/auth-api";
import type { IResponseMovie } from "../types/response-movie";

import NavBar from "../components/NavBar";
import HeroSection from "../components/HeroSection";
import CarouselHorizontal from "../components/CarouselHorizontal";
import CardHorizontal from "../components/CardHorizontal";
import Carousel from "../components/Carousel";
import Card from "../components/Card";
import Footer from "../components/Footer";

export default function HomePage() {
  const [movieRecent, setMovieRecent] = useState<IResponseMovie[]>([]);
  const [movieTopRating, setMovieTopRating] = useState<IResponseMovie[]>([]);
  const [movieTrending, setMovieTrending] = useState<IResponseMovie[]>([]);

  const getRecentMovie = async () => {
    const movieRecentParams = { select: "*", type: "eq.new_release" };
    const config: AxiosRequestConfig = {
      headers: { apikey: import.meta.env.VITE_API_KEY },
      maxBodyLength: Infinity,
      params: movieRecentParams,
    };

    try {
      const { data } = await authApi.get("/rest/v1/video", config);
      return data;
    } catch (error: any) {
      throw new Error("Failed to fetch resource: ", error);
    }
  };

  const getTrendingMovie = async () => {
    const movieTrendingParams = { select: "*", type: "eq.trending" };
    const config: AxiosRequestConfig = {
      headers: { apikey: import.meta.env.VITE_API_KEY },
      maxBodyLength: Infinity,
      params: movieTrendingParams,
    };

    try {
      const { data } = await authApi("/rest/v1/video", config);
      return data;
    } catch (error: any) {
      throw new Error("Failed to fetch resource: ", error);
    }
  };

  const getTopRatingMovie = async () => {
    const movieTopRatingParams = { select: "*", type: "eq.top_rating" };
    const config: AxiosRequestConfig = {
      headers: { apikey: import.meta.env.VITE_API_KEY },
      maxBodyLength: Infinity,
      params: movieTopRatingParams,
    };

    try {
      const { data } = await authApi("/rest/v1/video?select=*&type=eq.top_rating", config);
      return data;
    } catch (error: any) {
      throw new Error("Failed to fetch resource: ", error);
    }
  };

  useEffect(() => {
    async function fetchDataMovies() {
      try {
        const dataRecentMovies = await getRecentMovie();
        const dataTopRatingMovies = await getTopRatingMovie();
        const dataTrendingMovies = await getTrendingMovie();

        if (!ignore) {
          setMovieRecent(dataRecentMovies);
          setMovieTopRating(dataTopRatingMovies);
          setMovieTrending(dataTrendingMovies);
        }
      } catch (error) {
        console.error("Failed to fetch resource: ", error);
      }
    }

    let ignore = false;
    fetchDataMovies();

    return () => {
      ignore = true;
    };
  }, []);

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
              title={item.year}
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
