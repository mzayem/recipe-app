import { SearchBar } from "./searchbar";

export default function Banner() {
  return (
    <div
      className="flex flex-col justify-center items-center  h-[500px] bg-cover overflow-hidden"
      style={{
        backgroundImage: `url(https://img.freepik.com/free-photo/copy-space-italian-food-ingredients_23-2148551732.jpg)`,
      }}
    >
      <h3 className="text-5xl font-bold">Find a Recipe</h3>
      <SearchBar />
    </div>
  );
}
