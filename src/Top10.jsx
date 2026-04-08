import styles from './Top10.module.css';
import { Top10Item } from './Top10Item';

export function Top10() {

  const cars = [
    { title: "AMG GT", brand: "Mercedes" },
    { title: "M3", brand: "BMW" },
    { title: "G63 AMG", brand: "Mercedes" },
    { title: "M4", brand: "BMW" },
    { title: "C63 AMG", brand: "Mercedes" },
    { title: "M5", brand: "BMW" },
    { title: "CLS 63 AMG", brand: "Mercedes" },
    { title: "X5 M", brand: "BMW" },
    { title: "E63 AMG", brand: "Mercedes" },
    { title: "i8", brand: "BMW" }
  ];

  return (
    <section className={styles.top10}>
      <h2>Top 10 Mercedes en BMW auto's</h2>

      <ol className={styles.list}>
        {cars.map((car, index) => (
          <Top10Item
            key={index}
            number={index + 1}
            title={car.title}
            brand={car.brand}
          />
        ))}
      </ol>
    </section>
  );
}