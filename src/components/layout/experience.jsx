"use client"
import { motion } from "framer-motion";
import TimelineDemo from "../effects/timeline-demo";

export default function Experience(){
    return(
         <section id="skills" className='relative w-screen min-h-screen bg-black p-3 md:p-24 flex flex-col gap-3'>
            
            <div className='flex items-center gap-3 text-xs tracking-[0.3em] uppercase t mb-10 h-[20%] text-[#f5f2ed] px-4 py-6'>
                <span>04</span>
                <span className='h-px w-8 bg-[#e4ded7]'></span>
                <span>Key Achievements</span>
            </div>
            <motion.div className="relative p-4  md:flex md:flex-row md:justify-between">
                <motion.h2
                    initial={{ y: 60, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    viewport={{ margin: "-100px" }}
                    className="font-bold text-4xl md:text-6xl lg:text-8xl mb-7"
                >
                    A timeline <br />of craft.
                </motion.h2>
            </motion.div>
            <div className=" p-2 flex flex-col gap-5 border">
                <TimelineDemo/>
            </div>
        </section>
    );
}