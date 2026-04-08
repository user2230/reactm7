import { useState } from "react";
import styles from "./FAQ.module.css";

export function Question(props) {
  const [open, setOpen] = useState(false);

  function handleClick() {
    setOpen(!open);
  }

  return (
    <li className={styles.questionItem} onClick={handleClick}>
      <h3 className={styles.question}>{props.question}</h3>
      {open && <p className={styles.answer}>{props.answer}</p>}
    </li>
  );
}