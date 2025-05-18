import Link from "next/link";
import React from "react";

export default function Sidebar() {
  const tabs = [
    { name: "Home", src: "/" },
    { name: "About", src: "/about" },
    { name: "Portfolio", src: "/portfolio" },
    { name: "Contact", src: "/contact" },
  ];

  return (
    <div className="flex md:flex-col justify-center md:w-36">
      {...tabs.map((tab) => (
        <Link
          href={tab.src}
          key={tab.name}
          className="text-gray-700 hover:underline hover:underline-offset-4 hover:font-bold px-[1.5rem] py-[1rem] decoration-2 decoration-[#1B1A3A]"
        >
          {tab.name}
        </Link>
      ))}
    </div>
  );
}
