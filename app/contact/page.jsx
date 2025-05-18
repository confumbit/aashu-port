import Sidebar from "../sidebar";
import React from "react";

export default function Page() {
  return (
    <main className="flex flex-col md:flex-row h-screen w-screen max-h-screen max-w-screen">
      <Sidebar />
      <div className="flex flex-col items-center w-full py-20 px-6 md:p-20">
        <span className="font-[Unison] text-5xl md:text-7xl text-[#1B1A3A]">Contact</span>
        <p className="text-center p-48 pt-14">
          Feel free to reach out! You can email me at{" "}
          <a
            href="mailto:aashrithabidu@gmail.com"
            className="text-blue-700 hover:text-blue-500"
          >
            aashrithabidu@gmail.com
          </a>{" "}
          or drop me a message on Instagram at{" "}
          <a
            href="https://instagram.com/oiiibidu"
            className="text-blue-700 hover:text-blue-500"
          >
            @oiiibidu (https://instagram.com/oiiibidu)
          </a>
        </p>
      </div>
    </main>
  );
}
