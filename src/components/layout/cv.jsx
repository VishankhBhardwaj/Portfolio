import { FileText } from 'lucide-react';
export default function CV(){
    return (
        <div data-blobity
            className="
    w-full
    md:w-1/2
    md:h-[40%]
    rounded-xl
    border
    border-white/10
    bg-black
    px-4
    py-4

    flex
    items-center
    gap-6

    hover:border-white/20
    hover:bg-white/[0.02]

    transition-all
    duration-500
    cursor-pointer bg-white/2
    group
    hover:shadow-xl
    hover:shadow-white/5
  "
        >

            {/* ICON */}
            <div
                className="
      h-10
      w-10
      rounded-full
      border
      border-white/10

      flex
      items-center
      justify-center

      text-white/70
      group-hover:bg-white
      transition-all duration-300 ease-out
    "
            >
               <FileText className='text-white/70 group-hover:text-black transition-all duration-300 ease-out'/>
            </div>

            {/* TEXT */}
            <div className="flex flex-col">

                <span
                    className="
        text-xs
        uppercase
        tracking-[0.35em]
        text-white/30
        mb-2
      "
                >
                    Curriculum Vitae
                </span>

                <h3
                    className="
        text-md
        font-light
        text-white
      "
                >
                    View Latest Resume
                </h3>

            </div>
        </div>
    );
}