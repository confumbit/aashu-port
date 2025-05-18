import Sidebar from "./sidebar";

export default function Home() {
  return (
    <main className="flex flex-col justify-center md:flex-row h-screen w-screen max-h-screen max-w-screen">
      <Sidebar />
      <div className="flex justify-center md:h-full mt-8 md:mt-0">
        <img
          src="/cover.png"
          alt="cover art"
          className="w-full h-auto md:h-full md:w-auto object-contain"
        />
      </div>
    </main>
  );
}
