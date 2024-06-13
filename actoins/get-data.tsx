export default async function getData() {
  const res = await fetch("https://recipes.eerieemu.com/api/recipe/", {
    cache: "no-store", // Disables caching
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
