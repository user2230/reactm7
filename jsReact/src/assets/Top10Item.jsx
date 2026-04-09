// src/Top10Item.jsx
import styles from './Top10Item.module.css';

// Je kunt props ook meteen *destructuren*:
export function Top10Item({ number, title, author }) {
  return (
    <li className={styles.book}>
      <div className={styles.number}>{number}</div>
      <div className={styles.info}>
        <h3 className={styles.title}>{title}</h3>
        <h4 className={styles.author}>{author}</h4>
      </div>
    </li>
  );
}
