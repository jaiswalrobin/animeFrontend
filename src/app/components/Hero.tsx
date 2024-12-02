"use client";

import { useState, useEffect } from "react";
import styles from "../styles/Hero.module.css";

const quotes = [
  {
    text:
      "I am the hope of the universe. I am the answer to all living things that cry out for peace.",
    speaker: "Goku",
  },
  {
    text:
      "If you win, you live. If you lose, you die. If you don't fight, you can't win!",
    speaker: "Eren Yaeger",
  },
  {
    text: "When you give up, that's when the game is over.",
    speaker: "Mitsuyoshi Anzai",
  },
  { text: "It's a terrible day for rain.", speaker: "Roy Mustang" },
  { text: "Power comes in response to a need, not a desire.", speaker: "Goku" },
  {
    text: "If you don't take risks, you can't create a future.",
    speaker: "Monkey D. Luffy",
  },
  {
    text:
      "In this world, there are very few people who actually trust each other.",
    speaker: "Light Yagami",
  },
  {
    text: "The deeper the darkness the more dazzling the light shines.",
    speaker: "Midoriya Izuku",
  },
];

const Hero = () => {
  const [currentQuote, setCurrentQuote] = useState("");
  const [quoteIndex, setQuoteIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [showSpeaker, setShowSpeaker] = useState(false);

  // Typewriter effect logic
  useEffect(() => {
    if (charIndex < quotes[quoteIndex].text.length) {
      const timeout = setTimeout(() => {
        setCurrentQuote(
          (prev) => prev + quotes[quoteIndex].text.charAt(charIndex)
        );
        setCharIndex((prev) => prev + 1);
      }, 80); // speed of typing

      return () => clearTimeout(timeout);
    } else {
      // Show the speaker's name after the quote is typed
      const speakerTimeout = setTimeout(() => {
        setShowSpeaker(true);
      }, 1000); // 1 second delay before showing speaker

      // Reset after 3 seconds of showing speaker
      const resetTimeout = setTimeout(() => {
        setCurrentQuote("");
        setShowSpeaker(false);
        setCharIndex(0);
        setQuoteIndex((prev) => (prev + 1) % quotes.length);
      }, 5000); // 3 seconds to show the speaker

      return () => {
        clearTimeout(speakerTimeout);
        clearTimeout(resetTimeout);
      };
    }
  }, [charIndex, quoteIndex]);

  return (
    <div className={styles.hero}>
      <div className={styles.floatingElements}>
        {/* Floating background elements */}
        <div className={styles.star}></div>
        <div className={styles.star}></div>
        <div className={styles.star}></div>
        <div className={styles.star}></div>
        <div className={styles.star}></div>
        <div className={styles.star}></div>
      </div>
      <h1 className={styles.quote}>{currentQuote}</h1>
      <div className={styles.speaker} style={{ opacity: showSpeaker ? 1 : 0 }}>
        <p className={styles.speaker}>- {quotes[quoteIndex].speaker}</p>
      </div>
      <button className={styles.ctaButton}>Explore Anime</button>
    </div>
  );
};

export default Hero;
