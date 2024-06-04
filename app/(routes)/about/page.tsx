"use client";

import * as React from "react";

import { Button } from "@/components/ui/button";
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

export default function AboutPage() {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="outline">Open Drawer</Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <DrawerTitle className=" text-center">Recipe name </DrawerTitle>
          </DrawerHeader>
          <div>
            <h3 className="text-xl font-bold text-black">Ingrediants</h3>
            <p>ingeriadent here</p>
          </div>
          <Separator className="my-5" />
          <DrawerDescription>
            <div>
              <h3 className="text-xl font-bold text-black">Instructions</h3>
              <p>data here</p>
            </div>
          </DrawerDescription>
          <DrawerFooter>
            <div>footer here</div>
            <DrawerClose asChild>
              <Button variant="outline">Close</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
