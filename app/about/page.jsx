import Sidebar from "../sidebar";
import React from "react";

export default function Page() {
  return (
    <main className="flex flex-col md:flex-row h-screen w-screen max-h-screen max-w-screen">
      <Sidebar />
      <div className="flex flex-col items-center w-full py-20 px-6 md:p-20">
        <span className="font-[Unison] text-5xl md:text-7xl text-[#1B1A3A]">About</span>
        <p className="text-center p-10 pt-14">
          Hi, I'm Aashritha! I'm a product design student from Hyderabad, now
          based in Pune. I'm all about merging creativity with functionality to
          create something amazing. When I'm not designing, you can find me
          playing my violin, arguing about F1 or football with my brothers,
          exploring new tunes, cooking something to experiment on my roommates
          or binge-watching old rom-coms (I'm just a girl).
          <br />
          <br />
          I've got a knack for leading and managing teams, and I'm super
          passionate about research and analysis - it helps me create designs
          that truly make an impact!
        </p>
      </div>
    </main>
  );
}
