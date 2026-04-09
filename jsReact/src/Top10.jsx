

import styles from './Top10.module.css';
import { Top10Item } from './Top10Item.jsx';
import { top10 } from './top10.data.js'



export function Top10() {
  return (
    <section className={styles.top10}>
      <h2 className={styles.heading}>Top 10 Favorite Books</h2>

      <ol className={styles.list}>
        {top10.map((item, index) => (
          <Top10Item
            key={`${item.title}-${index}`}   
            number={index + 1}
            title={item.title}
            author={item.author}
          />
        ))}
      </ol>
    </section>
  );
}