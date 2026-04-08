import styles from "./FAQ.module.css";
import { Question } from "./Question";

export function FAQ() {
  return (
    <section className={styles.faq}>
      <h2>Veelgestelde vragen</h2>

      <ul className={styles.list}>
        <Question
          question="Hoe werkt deze website?"
          answer="Deze website is gemaakt met React en laat verschillende componenten zien zoals een game en een galerij."
        />
        <Question
          question="Kan ik deze website op mijn telefoon gebruiken?"
          answer="Ja, de website werkt ook op mobiele apparaten zoals telefoons en tablets."
        />
        <Question
          question="Waar is deze website voor gemaakt?"
          answer="Deze website is gemaakt als opdracht om te leren werken met React en componenten."
        />
      </ul>
    </section>
  );
}