import { useEffect, useState } from "react";

export function Cats() {
  const [catsData, setCatsData] = useState(null);

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    const url = "https://mediacollege.dev/api/cats/";

    try {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }

      const result = await response.json();
      setCatsData(result);
      console.log(result);
    } catch (error) {
      console.error(error.message);
    }
  }

  return (
    <div>
      <h2>Cats</h2>

      {catsData ? (
        catsData.map((cat, index) => (
          <div key={cat.id || index}>
            <p>{cat.name}</p>
            <img src={cat.image} alt={cat.name} width="200" />
          </div>
        ))
      ) : (
        <p>Loading..</p>
      )}
    </div>
  );
}