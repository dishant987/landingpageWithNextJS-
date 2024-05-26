"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import { Button } from "./ui/moving-border";

export function Navbar() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <NavbarComp className="top-10 rounded-full" />
    </div>
  );
}

function NavbarComp({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-20 inset-x-0 max-w-3xl mx-auto z-50 border border-gray-500 hover:border-gray-400 duration-500", className)}
    >
      <Menu setActive={setActive}>
      <MenuItem
          setActive={setActive}
          active={active}
          item="Home"
        ></MenuItem>
        <MenuItem setActive={setActive} active={active} item="Our Coures">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="#"> Basic Music Theory</HoveredLink>
            <HoveredLink href="#"> Advanced Composition</HoveredLink>
            <HoveredLink href="#">Songwriting</HoveredLink>
            <HoveredLink href="#"> Music Production</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem
          setActive={setActive}
          active={active}
          item="Contact Us"
        ></MenuItem>
        <MenuItem setActive={setActive} active={active} item="About Us">
         
        </MenuItem>
      </Menu>
    </div>
  );
}
