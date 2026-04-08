import styles from "./AboutMe.module.css";
import autoImage from "./assets/auto.jpeg";

export function AboutMe() {
  return (
    <article className={styles.AboutMe}>
      <img src={autoImage} alt="auto" />

      <div className={styles.text}>
        <h2>About Me</h2>
        <p>
          Ik hou van auto's en programmeren.
          Dit is mijn eerste React component.
        </p>
      </div>
    </article>
  );
}