import { useState } from "react";
import styles from "./CookieClicker.module.css";
import cookieImage from "./assets/click-me-button.webp";

export function CookieClicker() {
  const [score, setScore] = useState(0);
  const [grandmas, setGrandmas] = useState(0);

  const grandmaPrice = Math.floor(20 * Math.pow(1.15, grandmas));

  function scoreUp() {
    setScore(score + 1 + grandmas);
  }

  function buyGrandma() {
    if (score >= grandmaPrice) {
      setGrandmas(grandmas + 1);
      setScore(score - grandmaPrice);
    }
  }

  return (
    <section className={styles.cookieClicker}>
      <h2>Cookie Clicker</h2>

      <div>score: {score}</div>

      <button className={styles.cookie} onClick={scoreUp}>
        <img src={cookieImage} alt="cookie" />
      </button>

      <div>
        <p>Grandmas: {grandmas}</p>
        <button className={styles.buyButton} onClick={buyGrandma}>
          Buy grandma ({grandmaPrice})
        </button>
      </div>
    </section>
  );
}