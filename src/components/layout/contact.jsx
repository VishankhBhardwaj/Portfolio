"use client"
import { motion } from "framer-motion";
import { InputField } from "../ui/inputComponent";
import { Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import CV from "./cv";
export default function Contact() {
    return (
        <section id="skills" className='relative w-screen min-h-screen bg-black p-3 md:p-24 flex flex-col gap-3'>

            <div className='flex items-center gap-3 text-xs tracking-[0.3em] uppercase t mb-2 h-[20%] text-[#f5f2ed] px-4 py-6'>
                {/* <span>04</span> */}
                <span>GET IN TOUCH</span>
                <span className='h-px w-8 bg-[#e4ded7]'></span>

            </div>
            <div className=" px-5">
                <div className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-2 text-white/40">Based in</div>
                <div className="text-xl">Earth — open to remote</div>
                </div>
            <motion.div className="relative p-4 ">
                <motion.h2
                    initial={{ y: 60, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    viewport={{ margin: "-100px" }}
                    className="font-bold text-3xl md:text-4xl lg:text-6xl mb-7 text-white text-glow"
                >
                    Turning Vision Into <span className="chrome-text">Systems</span>
                </motion.h2>
                <p className="leading-relaxed text-sm text-white/30">Open to building AI-driven products and scalable intelligent systems. Let’s create technology that delivers <br />real-world impact.</p>
            </motion.div>
            <div className="md:flex md:flex-row w-full md:gap-7">
                <div className="flex flex-col  w-full h-full gap-4">
                    <div className="p-2 flex flex-col gap-5  w-full h-full">
                        <InputField />
                    </div>
                    <Button data-blobity className="rounded-4xl text-black bg-white font-bold leading-relaxed h-12 md:h-13 md:w-50 transition-all duration-300 ease-out hover:text-black" variant="outline">SEND MESSAGE <span className="text-"><Send /></span></Button>
                </div>
                <CV />
            </div>

        </section>
    );
}