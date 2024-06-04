"use client";

import { useTheme } from "next-themes";
import { SearchBar } from "./searchbar";

export default function Banner() {
  const { theme } = useTheme();
  console.log(theme);
  return (
    <div
      className="flex flex-col justify-center items-center  h-[500px] bg-cover overflow-hidden"
      style={{
        backgroundImage: `url(${
          theme === "dark"
            ? "https://img.freepik.com/free-photo/tasty-pizza-near-ingredients_23-2147772080.jpg?t=st=1717533553~exp=1717537153~hmac=4b9bb36b72be7d15ba3626122cb782d7deeb36857a64aea7ea27babe58617356&w=1380"
            : "https://img.freepik.com/free-photo/copy-space-italian-food-ingredients_23-2148551732.jpg?w=1380&t=st=1717533665~exp=1717534265~hmac=1d3ed73a2c4a47a2831a1d6560a545a48069987955c0ec1168432ab5870416e5"
        })`,
      }}
    >
      <h3 className="text-5xl font-bold">Find a Recipe</h3>
      <SearchBar />
    </div>
  );
}
