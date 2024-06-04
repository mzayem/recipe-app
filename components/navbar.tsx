import MainNav from "@/components/main-nav";
import { ThemeToggle } from "./theme-toggle";

const Navbar = async () => {
  return (
    <div className="border-b">
      <div className="flex h-16 items-center px-4">
        <div className="px-10">
          <h3 className=" text-2xl font-bold text-black-500">Recipe App.</h3>
        </div>
        <MainNav className="mx-6" />
        <div className="ml-auto flex items-center space-x-4">
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
