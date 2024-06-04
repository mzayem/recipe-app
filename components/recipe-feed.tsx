"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Separator } from "@/components/ui/separator";

interface RecipesProps {
  data: any[];
}

export default function Recipes({ data }: RecipesProps) {
  // return <pre>{JSON.stringify(data, null, 2)}</pre>;
  return (
    <div className="flex flex-col mt-5 p-8">
      <h3 className="text-3xl font-bold">Latest Recipes</h3>
      <Separator className="my-5" />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {data?.length > 0 &&
          data.map((recipe) => (
            <>
              <Card
                key={recipe.idMeal}
                className="w-[350px] flex flex-col justify-center items-center"
              >
                <CardHeader className="flex flex-col item-center">
                  <img
                    src={`https://recipes.eerieemu.com${recipe.image_path}`}
                    alt="Italian food ingredients"
                    className="aspect-square object-cover rounded-md"
                  />
                </CardHeader>
                <CardContent className="flex flex-col items-center gap-4">
                  <CardTitle className="flex text-center leading-8">
                    {recipe.name}
                  </CardTitle>
                  <CardDescription className="flex flex-col items-center justify-between">
                    {`Author: ${recipe.author}`}
                  </CardDescription>
                </CardContent>
                <CardFooter>
                  <Drawer>
                    <DrawerTrigger
                      asChild
                      className="flex flex-col justify-between items-center"
                    >
                      <Button>View Recipe</Button>
                    </DrawerTrigger>
                    <DrawerContent>
                      <div className="mx-auto w-full max-w-sm overflow-y-auto h-[500px] p-4 scrollbar-hide">
                        <DrawerHeader>
                          <DrawerTitle className=" text-center">
                            {recipe.name}
                          </DrawerTitle>
                        </DrawerHeader>
                        <div>
                          <h3 className="text-xl font-bold text-black">
                            Ingrediants
                          </h3>
                          <ul>
                            {recipe.ingredients.map((ingred: string) => (
                              <li key={ingred}>{ingred}</li>
                            ))}
                          </ul>{" "}
                          <Separator className="my-5" />
                          <h3 className="text-xl font-bold text-black">
                            Instructions
                          </h3>
                          <ul>
                            {recipe.instructions.map((instruction: string) => (
                              <li key={instruction}>{instruction}</li>
                            ))}
                          </ul>
                        </div>
                        <DrawerFooter>
                          <DrawerClose asChild>
                            <Button variant="outline">Close</Button>
                          </DrawerClose>
                        </DrawerFooter>
                      </div>
                    </DrawerContent>
                  </Drawer>
                </CardFooter>
              </Card>
            </>
          ))}
      </div>
    </div>
  );
}
