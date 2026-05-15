"use client"

import React from 'react'
import { Brain } from 'lucide-react';
import Tilt from "react-parallax-tilt";
const skills = [
    { name: 'RAG Pipelines', level: 88 },
    { name: 'LangChain / LangGraph', level: 90 },
    { name: 'Fine-tuning (LoRA)', level: 78 },
    { name: 'Vector Databases', level: 82 },
    { name: 'Prompt Engineering', level: 92 },
    { name: 'Agentic Workflows', level: 85 },
];

const Skillcard = () => {
    return (
        <Tilt
            tiltMaxAngleX={8}
            tiltMaxAngleY={8}
            perspective={1200}
            transitionSpeed={1200}
            scale={1.02}
            glareEnable={false}
        >
            <div className='border border-white/10 w-full h-full flex flex-col gap-5 px-5 py-7 bg-[#09031f]  group transition-all duration-300 cursor-pointer hover:shadow-2xl hover:shadow-white/40 hover:border-white/30'>
                {/* Header */}
                <div className='flex flex-row items-center gap-3'>
                    <div className='border border-white/20 p-2  bg-white/5 group-hover:border-white transition-all duration-300 ease-in-out'>
                        <Brain className='text-white/70 group-hover:text-white transition-all duration-300 ease-in-out' size={20} />
                    </div>
                    <p
                        className='text-sm font-bold tracking-[0.2em] text-white uppercase'
                        style={{ fontFamily: 'monospace' }}
                    >
                        AI &amp; INTELLIGENT <br /> SYSTEMS
                    </p>
                </div>

                {/* Skill list */}
                <ul className='flex flex-col gap-4'>
                    {skills.map(({ name, level }) => (
                        <li key={name} className=' flex flex-col gap-1.5'>
                            {/* Skill name */}
                            <span
                                className='text-sm font-medium font-semibold text-white'
                                style={{ fontFamily: 'monospace' }}
                            >
                                {name}
                            </span>
                            {/* Progress bar: invisible by default, fades in on row hover */}
                            <div className='w-full h-[3px] rounded-full overflow-hidden flex opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out'>
                                <div
                                    className='h-full bg-white rounded-full'
                                    style={{ width: `${level}%` }}
                                />
                                <div className='flex-1 h-full bg-white/15 rounded-full' />
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
         </Tilt>

    );
};

export default Skillcard;
