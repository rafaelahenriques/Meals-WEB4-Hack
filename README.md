# Meals WEB4 Hack

A React app that helps you decide what to eat. Browse meals by letter, get a random suggestion, and explore full recipes with ingredients, instructions, and more.

## Features

- **Random meal** — can't decide? let the app pick for you
- **Search by letter** — browse all meals starting with any letter
- **Meal detail** — full recipe with ingredients, instructions, origin, and a YouTube link

## Tech Stack

- [React Router v7](https://reactrouter.com)
- [TheMealDB API](https://www.themealdb.com/api.php)
- Vite

## Getting Started

```bash
npm install
npm run dev
```

Then open [http://localhost:5173](http://localhost:5173)

## Project Structure

```
app/
  meals/
    meals.tsx       # random meal component
  routes/
    home.tsx        # home page
    search.tsx      # search by letter
    meal.tsx        # meal detail page
  root.tsx          # layout and navigation
  routes.ts         # route config
```

## API

All data comes from [TheMealDB](https://www.themealdb.com/api.php) — free, no key needed.

| Endpoint | Used for |
|---|---|
| `/random.php` | Random meal on home page |
| `/search.php?f={letter}` | Search by first letter |
| `/lookup.php?i={id}` | Meal detail page |

## Team

Built by Agata & Rafaela as part of WEB4 at Howest Devine.