export default function Footer() {
    return (
        <footer className="relative w-full border-t border-white/10 bg-black px-6 py-5 overflow-hidden flex flex-col">

            <div className="mx-auto flex items-center justify-between gap-4">



                {/* CENTER TEXT */}
                <div className="flex-1 border-t border-white/10 pt-4 text-center">

                </div>



            </div>
            <div className=" flex flex-col md:flex-row justify-around text-xs gap-3 md:gap-0">
                <p className="text-xs tracking-[0.2em] text-white/60">
                    ✧ Designed & Built by Vishankh Bhardwaj
                </p>
                <div className="text-center text-xs uppercase tracking-[0.3em] text-white/20">

                    © 2026 · Built with Next.js & Systems Thinking
                </div>
            </div>

        </footer>
    );
}