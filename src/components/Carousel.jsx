export default function Carousel(props) {
  const { title, children } = props;

  return (
    <section className="sub-card-section">
      <h2>{title}</h2>
      <div className="movie-list">{children}</div>
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
