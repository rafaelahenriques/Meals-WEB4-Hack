import { useState } from "react";

export function Meals() {
    const [query, setQuery] = useState("");

    const [meal, setMeal] = useState(null)

    const handleRandom = async () => {
        const res = await fetch("https://www.themealdb.com/api/json/v1/1/random.php");
        const data = await res.json();
        const meal = data.meals[0];
        setMeal(data.meals[0])
    };
    return (
        <div>
            <h1>What do you want to eat today?</h1>
            <input
                type="text"
                placeholder="Search for a meal…"
                value={query}
                onChange={async (e) => {
                    setQuery(e.target.value);
                    const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${e.target.value}`);
                    const data = await res.json();
                    if (data.meals) setMeal(data.meals[0]);
                }}
            />
            <button onClick={handleRandom}>Get a random meal</button>
            {meal && (
                <div>
                    <p style={{ fontSize: "1.5rem" }}>{meal.strMeal}</p>
                    <img src={`${meal.strMealThumb}/medium`} alt={meal.strMeal} />
                </div>
            )}
        </div>
    );
}