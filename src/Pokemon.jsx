import { useEffect, useState } from "react";
import styles from "./Pokemon.module.css";

export function Pokemon() {
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/mewtwo")
      .then((response) => response.json())
      .then((data) => {
        setPokemon(data);
      });
  }, []);

  if (pokemon === null) {
    return (
      <section className={styles.pokemon}>
        <h2>Fetching Pokemon...</h2>
      </section>
    );
  }

  return (
    <section className={styles.pokemon}>
      <h2 className={styles.name}>{pokemon.name}</h2>

      <img
        className={styles.image}
        src={pokemon.sprites.front_default}
        alt={pokemon.name}
      />

      <div>
        {pokemon.types.map((t) => (
          <span key={t.type.name} className={styles[t.type.name]}>
            {t.type.name}
          </span>
        ))}
      </div>

    </section>
  );
}