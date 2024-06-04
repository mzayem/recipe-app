import Banner from "@/components/banner";
import Recipes from "@/components/recipe-feed";
import { Suspense } from "react";

function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function getData() {
  const res = await fetch("https://recipes.eerieemu.com/api/recipe/", {
    cache: "no-store", // Disables caching
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Home() {
  const data = await getData();
  const recipe = data.results;

  return (
    <div>
      <Banner />
      <Suspense fallback={<div>Loading...</div>}>
        <Recipes data={recipe} /> {/* Pass the firstRecipe as data */}
      </Suspense>
    </div>
  );
}
