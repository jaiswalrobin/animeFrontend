import Hero from "./components/Hero";
import AnimeCard from "./components/AnimeCard";
import styles from "./page.module.css";

const dummyAnimeData = [
  { id: 1, title: "Attack on Titan", image: "/images/attack_on_titan.png" },
  { id: 2, title: "My Hero Academia", image: "/images/my_hero_academia.png" },
  { id: 3, title: "Demon Slayer", image: "/images/demon_slayer.png" },
  { id: 4, title: "One Piece", image: "/images/one_piece.png" },
];

export default function HomePage() {
  return (
    <div className={styles.container}>
      <Hero />
      <h2>Featured Anime</h2>
      <div className={styles.animeGrid}>
        {dummyAnimeData.map((anime) => (
          <AnimeCard key={anime.id} title={anime.title} image={anime.image} />
        ))}
      </div>
    </div>
  );
}
