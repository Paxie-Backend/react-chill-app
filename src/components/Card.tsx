interface ICardProps {
  title: string;
  image: string;
  newEp: boolean;
}

export default function Card(props: Readonly<ICardProps>) {
  const { image, title, newEp } = props;

  return (
    <article className="movie-card">
      {newEp ? <span className="new-ep-info">Episode Baru</span> : null}
      <img src={image} alt={title} />
    </article>
  );
}
