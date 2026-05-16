"use client"
import { motion } from "framer-motion";
import Projectcard from "./projectcard"
export default function Work(){
    return(
         <section id="skills" className='relative w-screen min-h-screen bg-black p-3 md:p-24 flex flex-col gap-3'>
            
            <div className='flex items-center gap-3 text-xs tracking-[0.3em] uppercase t mb-10 h-[20%] text-[#f5f2ed] px-4 py-6'>
                <span>03</span>
                <span className='h-px w-8 bg-[#e4ded7]'></span>
                <span>Selected Work</span>
            </div>
            <motion.div className="relative p-4  md:flex md:flex-row md:justify-between">
                <motion.h2 
                    initial={{ y: 60, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    viewport={{ margin: "-100px" }}
                    className="font-bold text-4xl md:text-6xl lg:text-8xl mb-7"
                >
                    Cinematic <br />by default.
                </motion.h2>
            </motion.div>
            <div className=" p-2 flex flex-col gap-9">
                <Projectcard/>
                <Projectcard/>
            </div>
        </section>
    );
}