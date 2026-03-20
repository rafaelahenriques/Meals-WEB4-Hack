import { useState } from "react";

const letters = "abcdefghijklmnopqrstuvwxyz".split("");

export default function Search() {
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(false);

  const searchByLetter = async (letter: string) => {
    setLoading(true);
    const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`);
    const data = await res.json();
    setMeals(data.meals || []);
    setLoading(false);
  };

  return (
    <div>
      <h1>Search by letter</h1>

      <div>
        {letters.map((letter) => (
          <button key={letter} onClick={() => searchByLetter(letter)}>
            {letter.toUpperCase()}
          </button>
        ))}
      </div>

      {loading && <p>Loading...</p>}

      <ul>
        {meals.map((meal: any) => (
          <li key={meal.idMeal}>{meal.strMeal}</li>
        ))}
      </ul>
    </div>
  );
}