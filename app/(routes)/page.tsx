import getData from "@/actoins/get-data";
import Banner from "@/components/banner";
import Recipes from "@/components/recipe-feed";

import { Suspense } from "react";

export default async function Home() {
  const data = await getData();
  const recipe = data.results;

  return (
    <div>
      <Banner />
      <Suspense fallback={<div>Loading...</div>}>
        <Recipes data={recipe} />
      </Suspense>
    </div>
  );
}
