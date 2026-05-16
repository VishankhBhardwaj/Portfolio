import Navbar from "../components/layout/navbar";
import Hero from "../components/layout/hero";
import Image from "next/image";
import About from "../components/layout/about";
import Skills from "../components/layout/skills";
import Link from "next/link";
import Work from "../components/layout/work";
import Experience from "../components/layout/experience";
export default function Home() {
  return (
    <>
    <main className="flex flex-col items-center justify-center overflow-hidden">
        <Hero/>
        <About/>
        <Skills/>
        <Work/>
        <Experience/>
      </main>
    </>
  );
}
