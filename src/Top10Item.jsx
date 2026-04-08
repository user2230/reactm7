import styles from './Top10Item.module.css';

export function Top10Item(props) {
  return (
    <li className={styles.item}>
      <div className={styles.number}>
        {props.number}
      </div>

      <div className={styles.info}>
        <h3>{props.title}</h3>
        <p>{props.brand}</p>
      </div>
    </li>
  );
}