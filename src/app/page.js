import Navbar from "../components/layout/navbar";
import Hero from "../components/layout/hero";
import Image from "next/image";
import About from "../components/layout/about";
export default function Home() {
  return (
    <>
    <main className="flex flex-col items-center justify-center">
        <Hero/>
        <About/>
      </main>
    </>
  );
}
