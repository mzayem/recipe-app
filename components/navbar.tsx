import Link from "next/link";
import MainNav from "@/components/main-nav";
import { ThemeToggle } from "./theme-toggle";

const Navbar = async () => {
  return (
    <div className="border-b">
      <div className="flex h-16 items-center px-4">
        <Link href="/" className="px-10 ml-4 flex lg:ml-0 gap-x-2">
          <p className="font-bold text-xl">Recipe App.</p>
        </Link>
        <MainNav className="mx-6" />
        <div className="ml-auto flex items-center space-x-4">
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
