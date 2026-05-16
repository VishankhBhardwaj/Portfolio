import Hero from "./hero";
import About from "./about";
import Skills from "./skills";
import Work from "./work";
import Experience from "./experience";
import ProblemSolving from "./problemSolving";
import Contact from "./contact";
import Footer from "./footer";
export default function Main(){
    return (
        <>
        <main className="flex flex-col items-center justify-center overflow-hidden">
            <Hero/>
            <About/>
            <Skills/>
            <Work/>
            <Experience/>
            <ProblemSolving/>
            <Contact/>
            <Footer/>
          </main>
        </>
    );
}