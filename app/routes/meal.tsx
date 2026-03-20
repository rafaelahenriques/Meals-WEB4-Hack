import { useParams, useNavigate } from "react-router";
import { useEffect, useState } from "react";

export default function MealDetail() {
  const { id } = useParams();
  const [meal, setMeal] = useState<any>(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then((res) => res.json())
      .then((data) => setMeal(data.meals[0]));
  }, [id]);

  if (!meal) return <p>Loading...</p>;

  const ingredients = Array.from({ length: 20 }, (_, i) => ({
    name: meal[`strIngredient${i + 1}`],
    measure: meal[`strMeasure${i + 1}`],
  })).filter((ing) => ing.name);

  return (
    <div>
      <button onClick={() => navigate(-1)}>← Back</button>

      <h1>{meal.strMeal}</h1>
      <img src={`${meal.strMealThumb}/medium`} alt={meal.strMeal} />
      <div className="meal-meta">
        <span>{meal.strArea}</span>
        <span>·</span>
        <span>{meal.strCategory}</span>
      </div>
      <h2>Ingredients</h2>
      <ul>
        {ingredients.map((ing) => (
          <li key={ing.name}>{ing.measure} {ing.name}</li>
        ))}
      </ul>

      <h2>Instructions</h2>
      <p>{meal.strInstructions}</p>

      {meal.strYoutube && (
        <a href={meal.strYoutube} target="_blank" rel="noreferrer">
          ▶ Watch on YouTube
        </a>
      )}
    </div>
  );
}