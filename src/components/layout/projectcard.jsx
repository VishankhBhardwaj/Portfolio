import React from 'react'
import DirectionAwareHoverDemo from '../effects/direction-aware-hover-demo'
import Image from 'next/image'
import { motion } from 'framer-motion'
const Projectcard = () => {
    const techStack = [
        "Next.js",
        "LangChain",
        "Postgres",
        "PyTorch",
        "AWS",
    ];
    ``
    return (
        <div className=' relative w-full h-full  rounded-xl overflow-hidden  flex flex-col gap-7 md:flex-row md:gap-11'>

            <motion.div
                initial={{ y: 60, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                viewport={{ amount: 0.1 }}
                className='group border border-white/20 rounded-xl'>
                <span className='absolute top-4 left-4 z-20 text-white text-xl font-light overflow-hidden'>
                    01
                </span>

                <Image
                    src="/project-2.jpg"
                    alt="Project Image"
                    width={1200}
                    height={800}
                    className="
      w-full
      rounded-xl
      grayscale
      group-hover:grayscale-0
      shadow-xl
      shadow-white/10
      md:w-[800px]
      md:max-h-[500px]
      group-hover:scale-105
      transition-all
      duration-700
      ease-out
      overflow-hidden
    "
                />
            </motion.div>
            <motion.div
                initial={{ y: 60, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                viewport={{ amount: 0.1 }}
                className='flex flex-col gap-4 md:flex-row md:justify-between md:items-center '>
                <div className='flex flex-col gap-4 '>
                    <h3  className='font-bold text-white text-3xl md:text-5xl'>Nebula Ai</h3>
                    <p className='mt-2 text-md md:text-lg text-white/40'>An autonomous research agent that synthesizes papers in real time.</p>
                    <div className='flex flex-row flex-wrap gap-2'>
                        {techStack.map((t, i) => (
                            <span
                                key={i}
                                className="w-25 px-3 py-1 rounded-full border border-white/30 bg-white/[0.03] text-white/70 text-sm backdrop-blur-md text-center shadow-md"
                            >
                                {t}
                            </span>
                        ))}
                    </div>
                    <div

                        className="flex items-center gap-4">

                        {/* Live Demo Button */}
                        <button data-blobity className="px-5 py-2 rounded-full bg-[#ffffff] text-black text-lg font-medium transition-all duration-300 hover:scale-105 hover:bg-white"
                        >
                            Live demo →
                        </button>

                        {/* GitHub Button */}
                        <button data-blobity
                            className="px-6 py-1 rounded-full border border-white/10 bg-white/[0.02] text-white text-lg font-medium backdrop-blur-md transition-all duration-300 hover:bg-white/[0.05] hover:border-white/20 hover:scale-105">
                            GitHub
                        </button>

                    </div>
                </div>
            </motion.div>

        </div>
    )
}

export default Projectcard