import Sidebar from "../sidebar";
import React from "react";

export default function Page() {
  return (
    <main className="flex flex-col md:flex-row h-screen w-screen max-h-screen max-w-screen">
      <Sidebar />
      <div className="flex flex-col items-center w-full px-6 md:px-20 pt-20">
        <span className="font-[Unison] text-5xl md:text-7xl text-[#1B1A3A]">
          Portfolio
        </span>
        <div className="flex justify-center items-center h-[70vh] md:h-5/6 w-full md:px-10 pt-14">
          <embed
            src="/port.pdf#toolbar=0&navpanes=0"
            className="h-full w-full md:w-4/5"
          />
        </div>
      </div>
    </main>
  );
}
