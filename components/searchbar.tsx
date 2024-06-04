import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function SearchBar() {
  const handleClick = () => {
    return null;
  };
  return (
    <div className="flex  flex-col gap-4 w-full max-w-sm mt-10 items-center space-x-2">
      <Input type="name" placeholder="Recipe name" />
      <Button type="submit">Search</Button>
    </div>
  );
}
