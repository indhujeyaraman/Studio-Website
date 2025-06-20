"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
const navItems = [
  { name: "Home", path: "/" },
  { name: "Weddings", path: "/weddings" },
  { name: "Maternity", path: "/maternity" },
  { name: "Newborn", path: "/newborn" },
  { name: "Films", path: "/films" },
  { name: "Concerts", path: "/concerts" },
  { name: "Puberty", path: "/puberty" },
  { name: "Destinations", path: "/destinations" },
];
const NavLinks = () => {
  const pathName = usePathname();
  return (
    <div className="flex text-sm justify-center uppercase px-5">
      {navItems.map((item) => (
        <Link
          key={item.name}
          href={item.path}
          className={`transition-all duration-300 px-5 py-2  ${
            pathName === item.path
              ? "text-white bg-75"
              : "hover:bg-[rgba(96,94,94,0.50)] hover:text-white"
          }`}
        >
          {item.name}
        </Link>
      ))}
    </div>
  );
};

export default NavLinks;
