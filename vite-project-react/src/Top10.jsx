import styles from './Top10.module.css';

function Top10() {
  return (
    <section className={styles.top10}>
      <h2>Top 10 books</h2>

      <ol className={styles.list}>
        <li>The Final Empire - Brandon Sanderson</li>
        <li>Storm of Swords - George RR Martin</li>
        <li>Saga - Brian K Vaughan</li>
        <li>The Girl Who Kicked the Hornet's Nest - Stieg Larsson</li>
        <li>Harry Potter and the Prisoner of Azkaban - JK Rowling</li>
        <li>Blackthorn - Alan Moore</li>
      </ol>
    </section>
  );
}

export default Top10;