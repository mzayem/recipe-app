"use client";

import { FormEvent, useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useRouter } from "next/navigation";

export default function SearchForm() {
  const [search, setearch] = useState("");
  const router = useRouter();

  const handleSubscribe = () => {
    if (search === "") {
      router.replace("/");
    } else {
      router.push(`?search=${encodeURIComponent(search).replace(/%20/g, "+")}`);
    }
  };
  return (
    <div className="flex flex-col justify-center my-5 gap-5 items-center w-full max-w-sm space-x-2">
      <Input
        type="name"
        placeholder="Search for recipes"
        onChange={(e) => setearch(e.target.value)}
      />
      <Button onClick={handleSubscribe} type="submit">
        search
      </Button>
    </div>
  );
}
