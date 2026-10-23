import "../styles/homepage.css";
import NavBar from "../components/NavBar";
import HeroSection from "../components/HeroSection";
import ContinueWatchingSection from "../components/ContinueWatchingSection";
import SubCardSection from "../components/SubCardSection";

export default function HomePage() {
  return (
    <div className="homepage-container">
      <NavBar />
      <main>
        <HeroSection />
        <ContinueWatchingSection />
        <SubCardSection />
        <section className="sub-card-section">
          <h2>Film Trending</h2>
          <div className="movie-list">
            <article className="movie-card">
              <span className="top-10-info">Top 10</span>
              <img
                src="assets/images/posters/the-tomorrow-war-poster.png"
                alt="The tomorrow War"
              />
            </article>
            <article className="movie-card">
              <span className="top-10-info">Top 10</span>
              <img
                src="assets/images/posters/antman-wasp-poster.png"
                alt="Jurassic World"
              />
            </article>
            <article className="movie-card">
              <span className="top-10-info">Top 10</span>
              <img
                src="assets/images/posters/guardian-of-the-galaxy-poster.png"
                alt="Guardian of the Galaxy"
              />
            </article>
            <article className="movie-card">
              <span className="top-10-info">Top 10</span>
              <img
                src="assets/images/posters/a-man-called-otto-poster.png"
                alt="A man called Otto"
              />
            </article>
            <article className="movie-card">
              <span className="top-10-info">Top 10</span>
              <img
                src="assets/images/posters/the-little-mermaid.png"
                alt="My Little Mermaid"
              />
            </article>
          </div>
          <img
            className="arrow-left"
            src="assets/images/arrow-left.svg"
            alt="Left Arrow"
          />
          <img
            className="arrow-right"
            src="assets/images/arrow-right.svg"
            alt="Right Arrow"
          />
        </section>
        <section className="sub-card-section">
          <h2>Rilis Baru</h2>
          <div className="movie-list">
            <article className="movie-card">
              <span className="top-10-info">Top 10</span>
              <img
                src="assets/images/posters/the-little-mermaid.png"
                alt="The little Mermaid"
              />
            </article>
            <article className="movie-card">
              <span className="new-ep-info">Episode Baru</span>
              <img
                src="assets/images/posters/duty-after-school.png"
                alt="Duty after School"
              />
            </article>
            <article className="movie-card">
              <span className="top-10-info">Top 10</span>
              <img
                src="assets/images/posters/big-hero-six.png"
                alt="Big hero Six"
              />
            </article>
            <article className="movie-card">
              <span className="new-ep-info">Episode Baru</span>
              <img
                src="assets/images/posters/all-of-us-are-dead-poster.png"
                alt="All of us Are Dead"
              />
            </article>
            <article className="movie-card">
              <img
                src="assets/images/posters/missing-poster.png"
                alt="Missing"
              />
            </article>
          </div>
          <img
            className="arrow-left"
            src="assets/images/arrow-left.svg"
            alt="Left Arrow"
          />
          <img
            className="arrow-right"
            src="assets/images/arrow-right.svg"
            alt="Right Arrow"
          />
        </section>
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
