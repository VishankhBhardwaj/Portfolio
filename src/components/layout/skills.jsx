"use client"
import Skillcard from "./skillcard";
import { motion } from "framer-motion";

export default function Skills() {
    return (
        <section id="skills" className='relative w-screen min-h-screen bg-[#0E1016] opacity-60 p-3'>
            <div className="absolute inset-0 z-0">

                <div
                    className="
        absolute
        top-[10%]
        left-[-10%]
        w-[400px]
        h-[400px]
        rounded-full
        bg-blue-500/20
        blur-[140px]
      "
                />

                <div
                    className="
        absolute
        bottom-[10%]
        right-[-10%]
        w-[350px]
        h-[350px]
        rounded-full
        bg-indigo-500/20
        blur-[140px]
      "
                />

                <div
                    className="
        absolute
        top-1/2
        left-1/2
        -translate-x-1/2
        -translate-y-1/2
        w-[500px]
        h-[500px]
        rounded-full
        bg-white/[0.03]
        blur-[160px]
      "
                />

            </div>
            <div className='flex items-center gap-3 text-xs tracking-[0.3em] uppercase t mb-10 h-[20%] text-[#f5f2ed] px-4 py-6'>
                <span>02</span>
                <span className='h-px w-8 bg-[#e4ded7]'></span>
                <span>Technical Arsenal</span>
            </div>
            <motion.div className="p-4">
                <motion.h2
                    initial={{ y: 60, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    viewport={{ margin: "-100px" }}
                    className="font-bold text-4xl md:text-6xl lg:text-8xl"
                >
                    A toolkit for <br /> ambitious ideas.
                </motion.h2>
            </motion.div>

            {/* Outer: clips and scrolls. Inner: w-max on mobile forces overflow, grid on md+ */}
            <div className="mt-4 p-4 w-full overflow-x-auto hide-scrollbar scroll-smooth">
                <div className="flex flex-row gap-5 w-max md:w-full md:grid md:grid-cols-3">
                    <motion.div initial={{ y: 60, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                        viewport={{ margin: "-100px" }} className="w-72 md:w-auto"><Skillcard /></motion.div>
                    <motion.div initial={{ y: 60, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                        viewport={{ margin: "-100px" }} className="w-72 md:w-auto"><Skillcard /></motion.div>
                    <motion.div initial={{ y: 60, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                        viewport={{ margin: "-100px" }} className="w-72 md:w-auto"><Skillcard /></motion.div>
                </div>
            </div>
        </section>
    );
}
