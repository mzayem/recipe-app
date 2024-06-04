import Banner from "@/components/banner";
import Recipes from "@/components/recipe-feed";
import Image from "next/image";

export default async function Home() {
  let recipe;
  try {
    const data = await fetch(
      "https://www.themealdb.com/api/json/v1/1/random.php"
    );
    const response = await data.json();

    if (response.meals) {
      recipe = response.meals[0];
    } else {
      throw new Error("No random recipes found.");
    }
  } catch (error) {
    console.error("Error fetching random recipes:", error);
  }

  return (
    <div>
      <Banner />
      <Recipes data={recipe} /> {/* Pass the firstRecipe as data */}
    </div>
  );
}
