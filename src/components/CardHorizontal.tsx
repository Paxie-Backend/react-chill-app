interface ICardHorizontalProps {
  title: string;
  image: string;
}

export default function CardHorizontal(props: Readonly<ICardHorizontalProps>) {
  const { title, image } = props;
  return (
    <article className="movie-card">
      <img src={image} alt={title} />
      <div className="movie-info">
        <p>{title}</p>
        <img src={image} alt="Rating" />
      </div>
    </article>
  );
}
