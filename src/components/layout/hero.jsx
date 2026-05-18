"use client"
import Navbar from "./navbar"
import profile from "../../../public/portfolio.webp"
import Image from "next/image";
import 'animate.css';
import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";

export default function Hero() {
    const { scrollY } = useScroll();
    const nameY = useTransform(scrollY, [0, 500], [0, -200]);
    const imageY = useTransform(scrollY, [0, 500], [0, -300]);
    const opacity = useTransform(scrollY, [0, 300], [1, 0]);
    return (
        <section className="w-screen h-screen bg-[url('/hero.jpg')] bg-cover bg-center">
            <div className="absolute left-0 top-0 right-0 bottom-0 h-full w-full bg-[#0E1016] mix-blend-color"></div>
            <Navbar />
            <div className="w-full max-sm:h-[55%] md:h-[70%] flex flex-col items-center ">
                <motion.h1 style={{ y: nameY,opacity }} className="font-extrabold  text-[#e4ded7] absolute animate__animated animate__fadeInUp  animate__delay-1s max-sm:text-4xl max-sm:text-center sm:text-6xl md:text-7xl lg:text-9xl top-100 md:top-47 sm:w-full text-center" ><span className="mr-6 max-sm:ml-2">VISHANKH</span> <br /> BHARDWAJ</motion.h1>
                <motion.div style={{y:imageY,opacity}}>
                    <Image
                    data-blobity
                    src={profile}
                    priority
                    alt="Vishankh's headshot"
                    data-blobity-tooltip=""
                    data-blobity-invert="false"
                    className=" w-[200px] rounded-full  hover:grayscale-0 md:w-[200px] md:rounded-[32px] lg:w-[245px] z-20 relative md:top-57 animate__animated animate__fadeInUp animate__delay-2s"
                />
                </motion.div>
            </div>
            <div className=" mt-auto flex flex:row justify-between ml-15 mr-15 max-sm:hidden sm:flex-row">
                <div className="animate__animated animate__fadeInUp">
                    <p className="md:font-medium text-[#e4ded7]"> Ai Engineer and Full Stack Engineer, currently <br className="hidden md:block" /> available for work.</p>
                </div>
                <div className="animate__animated animate__fadeInUp">
                    <p className="md:font-medium text-[#e4ded7]">Focused on FullStack and GenAi.</p>
                </div>
            </div>
            <div className=" md:hidden mt-auto flex flex:row justify-between ml-15 mr-15 max-sm:flex-col max-sm:gap-2 max-sm:ml-5 max-sm:mr-5 max-sm:mb-4 sm:flex-row">
                <div className="animate__animated animate__fadeInUp text-center">
                    <p className="md:font-medium text-[#9e9a96]">
                        Full Stack Developer and AI enthusiast focused on building
                        modern, scalable, and immersive digital experiences.
                        Passionate about clean UI, intelligent systems, and creating
                        products that blend performance with aesthetics.
                    </p>
                </div>
            </div>
        </section>
    );
}