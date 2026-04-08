import { useState } from "react";
import styles from "./CookieClicker.module.css";
import cookieImage from "./assets/click-me-button.webp";

export function CookieClicker() {
  const [score, setScore] = useState(0);
  const [grandmas, setGrandmas] = useState(0);

  function scoreUp() {
    setScore(score + 1 + grandmas);
  }

  function buyGrandma() {
    if (score >= 20) {
      setGrandmas(grandmas + 1);
      setScore(score - 20);
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
        <button onClick={buyGrandma}>Buy grandma (20)</button>
      </div>
    </section>
  );
}