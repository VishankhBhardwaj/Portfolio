import Link from "next/link";
import "animate.css"
export default function Navbar() {
    return (
        <div className=" w-full h-[20%] flex flex:row flex-row px-5 py-6 justify-between items-center">
            <div className="border-2 border-white rounded-md  w-[15%] h-[50%]  ml-[5%] mt-[1%] font-bold animate__animated animate__fadeInUp text-[#e4ded7] max-sm:w-[45%] max-sm:h-auto max-sm:py-2 max-sm:ml-[3%] max-sm:mt-0 sm:w-[25%] md:w-[20%] lg:w-[15%] hidden  md:flex md:flex:row justify-center items-center" data-blobity>
                <Link
                    href="https://www.vishankh.dev"
                    target="_blank"
                    aria-label="CONNECT WITH ME">
                    <button>
                        Vishankh Bhardwaj
                    </button></Link>
            </div>
            <div className="border-2 border-white rounded-full  w-[7%] h-[50%] flex flex:row justify-center items-center ml-[5%] mt-[1%] font-bold animate__animated animate__fadeInUp text-[#e4ded7] max-sm:w-[12%] max-sm:h-auto max-sm:py-2 max-sm:px-5 max-sm:ml-[3%] max-sm:mt-0 sm:w-[25%] md:w-[20%] lg:w-[15%] md:hidden relative bottom-3" data-blobity>
                <Link
                    href="https://www.vishankh.dev"
                    target="_blank"
                    aria-label="CONNECT WITH ME">
                    <button>
                        VB.
                    </button></Link>
            </div>
            <div className="  w-[20%] max-sm:w-[45%] sm:w-[30%] md:w-[25%] lg:w-[20%]">
                <ul className="font-bold flex flex:row justify-around py-4 animate__animated animate__fadeInUp text-[#e4ded7] gap-3">
                    <div data-blobity className="w-[13%] h-[50px] text-center max-sm:w-auto"><Link href="https://github.com/VishankhBhardwaj"
                    target="_blank"
                    aria-label="GITHUB"><li >GH</li></Link></div>
                    <div data-blobity className=" w-[13%] h-[50px] text-center max-sm:w-auto"><Link
                    
                    href="https://www.linkedin.com/in/vishankh/"
                    target="_blank"
                    aria-label="LINKEDIN"><li>LN</li></Link></div>
                    <div data-blobity className="  w-[13%] h-[50px] text-center max-sm:w-auto"><Link
                    href=""
                    target="_blank"
                    aria-label="LEETCODE"><li>LC</li></Link></div>
                </ul>
            </div>
        </div>
    );
}