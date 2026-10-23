export default function SubCardSection() {
  return (
    <section className="sub-card-section">
      <h2>Top Rating Film dan Series Hari ini</h2>
      <div className="movie-list">
        <article className="movie-card">
          <span className="new-ep-info">Episode Baru</span>
          <img
            src="assets/images/posters/suzume-film-poster.png"
            alt="Suzume"
          />
        </article>
        <article className="movie-card">
          <img
            src="assets/images/posters/jurassic-world-poster.png"
            alt="Jurassic World"
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
            src="assets/images/posters/sonic-the-hedgehog-poster.png"
            alt="Sonic the Hedgehog"
          />
        </article>
        <article className="movie-card">
          <span className="top-10-info">Top 10</span>
          <img
            src="assets/images/posters/big-hero-six.png"
            alt="Big Hero Six"
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
  );
}
