/* eslint-disable @next/next/no-img-element */
import styles from "../styles/AnimeCard.module.css";

interface AnimeCardProps {
  title: string;
  image: string;
}

const AnimeCard: React.FC<AnimeCardProps> = ({ title, image }) => {
  return (
    <div className={styles.card}>
      <img src={image} alt={title} className={styles.image} />
      <h3 className={styles.title}>{title}</h3>
    </div>
  );
};

export default AnimeCard;
