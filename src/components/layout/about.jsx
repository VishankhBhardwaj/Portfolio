"use client"

import React from 'react';
import TextReveal from '../effects/text-reveal';
import { motion } from 'framer-motion';
import textVariants from "../animations/fadeup";

export default function About() {
    const stack = ["TypeScript", "React", "Next.js", "Node.js", "Python", "PyTorch", "LangChain", "Postgres", "AWS", "Docker"];

    return (
        <section id="about" className='relative w-screen min-h-screen bg-[#0E1016] overflow-hidden opacity-60'>
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
            <div className='flex items-center gap-3 text-xs tracking-[0.3em] uppercase t mb-10 h-[20%] text-[#f5f2ed] px-4'>
                <span>01</span>
                <span className='h-px w-8 bg-[#e4ded7]'></span>
                <span>About</span>
            </div>
            <motion.div variants={textVariants} initial="hidden"
                whileInView="visible"
                viewport={{ once: true }} className='flex flex:row justify-center items-center '>
                <p className='text-white text-lg ml-5'>I'm an AI & full-stack engineer crafting cinematic interfaces and shipping GenAI products end-to-end. I obsess over fast loads, expressive motion, and systems that feel inevitable.</p>
            </motion.div>
            <motion.div className=' flex flex-wrap mt-5 p-2 gap-2'>
                {stack.map((s, i) => (
                    <motion.span
                        key={s}
                        variants={textVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="
    text-white/70
    text-sm
    md:text-lg
    px-5
    py-2
    rounded-full
    border
    border-white/20
    bg-white/[0.07]
    backdrop-blur-md
    shadow-[0_0_20px_rgba(255,255,255,0.03)]
    hover:bg-white/[0.06]
    hover:border-white/20
    transition-all
    duration-300
    cursor-default
    shadow-xs
  "
                    >
                        {s}
                    </motion.span>
                ))}
            </motion.div>
        </section>
    );
}