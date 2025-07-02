import { AiOutlineArrowUp } from "react-icons/ai";
import { BiLogoGithub, BiLogoLinkedinSquare, BiLogoStackOverflow } from "react-icons/bi"
import { BsFillHeartFill } from "react-icons/bs";


const Footer = () => {
    return (
        <div className="w-full bg-black">
            <div className="max-w-5xl mx-auto py-5 px-2">
                <div>
                    <div className="flex justify-center items-center gap-4">
                        <a target="_blank" href="https://www.linkedin.com/in/kanhaiyabanjara" className="flex justify-center items-center gap-2 p-2 rounded-full font-semibold text-medium bg-[#0a66c2] hover:-translate-y-2 transition-all duration-300">
                            <BiLogoLinkedinSquare fontSize={24} />
                        </a>
                        <a target="_blank" href="https://github.com/kanhaiyabanjara" className="flex justify-center items-center gap-2 p-2 rounded-full font-semibold text-medium bg-[#0D1117] hover:-translate-y-2 transition-all duration-300">
                            <BiLogoGithub fontSize={24} />
                        </a>
                        <a href="#" className="flex justify-center items-center gap-2 p-2 rounded-full font-semibold text-medium bg-white text-orange-500 hover:-translate-y-2 transition-all duration-300">
                            <BiLogoStackOverflow fontSize={24} />
                        </a>
                    </div>
                    <hr className="bg-blue-500 border-none rounded-md h-[2px] my-5" />
                    <div>
                        <p className="text-center">Copyright &copy; {new Date().getFullYear()} Developed by <BsFillHeartFill className="inline-block text-red-600" /> <span className="text-blue-500">Kanhaiya</span>

                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
