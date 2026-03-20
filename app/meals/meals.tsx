import { useState } from "react";

export function Meals() {
    const [query, setQuery] = useState("");

    const handleRandom = () => {
        const meals = ["Pizza", "Sushi", "Tacos", "Ramen", "Burger", "Pasta", "Salad", "Curry"];
        setQuery(meals[Math.floor(Math.random() * meals.length)]);
    };

    return (
        <div>
            <h1>What do you want to eat today?</h1>
            <input
                type="text"
                placeholder="Search for a meal…"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
            <button onClick={handleRandom}>Get a random meal</button>
        </div>
    );
}