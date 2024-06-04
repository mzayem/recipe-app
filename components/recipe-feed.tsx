import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Separator } from "./ui/separator";

interface RecipesProps {
  data: {
    meals: {
      strMeal: string;
      strArea: string;
      strCategory: string;
    };
  }[];
}

export default function Recipes({ data }: RecipesProps) {
  return (
    <div className="flex flex-col mt-5 p-8">
      <h3 className="text-3xl font-bold">Latest Recipes</h3>
      <Separator className="my-5" />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <Card className="w-[350px] flex flex-col justify-center items-center">
          <CardHeader className="flex flex-col item-center">
            <img
              src="https://img.freepik.com/free-photo/copy-space-italian-food-ingredients_23-2148551732.jpg"
              alt="Italian food ingredients"
              className="aspect-square object-cover rounded-md"
            />
          </CardHeader>
          <CardContent className="flex flex-col items-center gap-4">
            <CardTitle>{data?.meals?.[0]?.strMeal}</CardTitle>
            <CardDescription>
              {data.strArea}
              <p>{`Belong to ${data.strCategory} Category`}</p>
            </CardDescription>
          </CardContent>
          <CardFooter className="flex flex-col justify-between items-center">
            <Button>view recipe</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
