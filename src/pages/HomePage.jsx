import axios from "axios";
import { useEffect, useState } from "react";

import "../styles/homepage.css";
import { API_KEY, ACCESS_TOKEN } from "../lib/constants";

import NavBar from "../components/NavBar";
import HeroSection from "../components/HeroSection";
import CarouselHorizontal from "../components/CarouselHorizontal";
import CardHorizontal from "../components/CardHorizontal";
import Carousel from "../components/Carousel";
import Card from "../components/Card";

export default function HomePage() {
  const [movieRecent, setMovieRecent] = useState([]);
  const [movieTopRating, setMovieTopRating] = useState([]);
  const [movieTrending, setMovieTrending] = useState([]);

  const getRecentMovie = async () => {
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: "https://dytuputtiertanijmjev.supabase.co/rest/v1/video?select=*&type=eq.new_release",
      headers: {
        apikey: API_KEY,

        Authorization: ACCESS_TOKEN,
      },
    };

    try {
      const { data } = await axios.request(config);
      return data;
    } catch (error) {
      throw new Error("Failed to fetch resource", error);
    }
  };

  const getTrendingMovie = async () => {
    const ACCESS_TOKEN = localStorage.getItem("ACCESS_TOKEN");
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: "https://dytuputtiertanijmjev.supabase.co/rest/v1/video?select=*&type=eq.trending",
      headers: {
        apikey: API_KEY,
        Authorization: ACCESS_TOKEN,
      },
    };

    try {
      const { data } = await axios.request(config);
      return data;
    } catch (error) {
      throw new Error("Failed to fetch resource", error);
    }
  };

  const getTopRatingMovie = async () => {
    const ACCESS_TOKEN = localStorage.getItem("ACCESS_TOKEN");
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: "https://dytuputtiertanijmjev.supabase.co/rest/v1/video?select=*&type=eq.top_rating",
      headers: {
        apikey: API_KEY,
        Authorization: ACCESS_TOKEN,
      },
    };

    try {
      const { data } = await axios.request(config);
      return data;
    } catch (error) {
      throw new Error("Failed to fetch resource", error);
    }
  };

  useEffect(() => {
    let ignore = false;

    getRecentMovie()
      .then((data) => {
        if (!ignore) setMovieRecent(data);
      })
      .catch((error) => {
        console.log(error);
      });

    return () => {
      ignore = true;
    };
  }, []);

  useEffect(() => {
    let ignore = false;

    getTopRatingMovie()
      .then((data) => {
        if (!ignore) setMovieTopRating(data);
      })
      .catch((error) => {
        console.log(error);
      });

    return () => {
      ignore = true;
    };
  }, []);

  useEffect(() => {
    let ignore = false;

    getTrendingMovie()
      .then((data) => {
        if (!ignore) setMovieTrending(data);
      })
      .catch((error) => {
        console.log(error);
      });

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
            <CardHorizontal
              title={item.name}
              image={item.cover_url}
              key={item.id}
            />
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
      <footer>
        <div className="footer-content-wrapper">
          <div className="copyright-information">
            <img src="assets/images/chill-app-logo.svg" alt="Chill App Logo" />
            <p>@2026 Chill All Rights Reserved.</p>
          </div>
          <div className="footer-dropdown-wrapper">
            <div className="footer-genre">
              <p>Genre</p>
              <div className="genre-contents">
                <div className="genre-content">
                  <p>Aksi</p>
                  <p>Anak-anak</p>
                  <p>Anime</p>
                  <p>Britania</p>
                </div>
                <div className="genre-content">
                  <p>Drama</p>
                  <p>Fantasi Ilmiah &amp; Fantasi</p>
                  <p>Kejahatan</p>
                  <p>Kdrama</p>
                </div>
                <div className="genre-content">
                  <p>Komedi</p>
                  <p>Petualangan</p>
                  <p>Perang</p>
                  <p>Romantis</p>
                </div>
                <div className="genre-content">
                  <p>Sains &amp; Alam</p>
                  <p>Thriller</p>
                </div>
              </div>
            </div>
            <div className="footer-genre">
              <p>Bantuan</p>
              <div className="genre-contents">
                <div className="genre-content">
                  <p>FAQ</p>
                  <p>Kontak Kami</p>
                  <p>Privasi</p>
                  <p>Syarat &amp; Ketentuan</p>
                </div>
              </div>
            </div>
            <div className="footer-dropdown">
              <button className="footer-dropdown-button" type="button">
                <span>Genre</span>
                <img src="assets/images/chevron-right.svg" alt="arrow" />
              </button>
              <div className="footer-dropdown-list">
                <p>Aksi</p>
                <p>Anak-anak</p>
                <p>Anime</p>
                <p>Britania</p>
                <p>Drama</p>
                <p>Fantasi Ilmiah &amp; Fantasi</p>
                <p>Kejahatan</p>
                <p>Kdrama</p>
                <p>Komedi</p>
                <p>Petualangan</p>
                <p>Perang</p>
                <p>Romantis</p>
                <p>Sains &amp; Alam</p>
                <p>Thriller</p>
              </div>
            </div>
            <div className="footer-dropdown">
              <button className="footer-dropdown-button" type="button">
                <span>Bantuan</span>
                <img src="assets/images/chevron-right.svg" alt="arrow" />
              </button>
              <div className="footer-dropdown-list">
                <p>FAQ</p>
                <p>Kontak Kami</p>
                <p>Privasi</p>
                <p>Syarat &amp; Ketentuan</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
