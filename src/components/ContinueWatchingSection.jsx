export default function ContinueWatchingSection() {
  return (
    <section className="continue-watching-section">
      <h2>Melanjutkan Tonton Film</h2>
      <div className="movie-list">
        <article className="movie-card">
          <img
            src="assets/images/posters/dont-look-up-poster.png"
            alt="Don't Look Up"
          />
          <div className="movie-info">
            <p>Don't Look Up</p>
            <img src="assets/images/dont-look-up-rate.svg" alt="Rating" />
          </div>
        </article>
        <article className="movie-card">
          <img
            src="assets/images/posters/doctor-strange-poster.png"
            alt="Don't Look Up"
          />
          <div className="movie-info">
            <p>Doctor Strange</p>
            <img src="assets/images/dont-look-up-rate.svg" alt="Rating" />
          </div>
        </article>
        <article className="movie-card">
          <img
            src="assets/images/posters/blue-lock-poster.png"
            alt="Don't Look Up"
          />
          <div className="movie-info">
            <p>Blue Lock</p>
            <img src="assets/images/dont-look-up-rate.svg" alt="Rating" />
          </div>
        </article>
        <article className="movie-card">
          <img
            src="assets/images/posters/a-man-called-otto-2-poster.png"
            alt="Don't Look Up"
          />
          <div className="movie-info">
            <p>A Man Called Otto</p>
            <img src="assets/images/dont-look-up-rate.svg" alt="Rating" />
          </div>
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
  );
}
