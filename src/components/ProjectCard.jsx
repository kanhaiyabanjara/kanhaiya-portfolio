import { BiLayout, BiLinkExternal, BiLogoGithub } from 'react-icons/bi';
import { AiOutlineArrowRight } from "react-icons/ai";
import inventory from '../assets/inventory.png';

const ProjectCard = ({ name, desc, tags }) => {
    return (
        <div className='border-1 p-2 border-white/10 overflow-hidden rounded-md shadow-[0_2px_8px_rgba(59,130,246,0.1)]'>
            {/* <div className='h-50 overflow-hidden'>
                <img className='h-full w-full object-fit transition-transform duration-500 hover:scale-110 cursor-pointer' src={inventory} alt="" />
            </div> */}
            <div className='p-4'>
                <div className='flex justify-center flex-col gap-2'>
                    <h4 className='text-xl font-bold'>
                        {name}
                    </h4>
                    <p className='text-[14px] font-light text-start'>
                        {desc}
                    </p>


                    <div className='flex flex-wrap gap-2 my-2'>
                        {
                            tags.map((value, key) => (
                                <span key={key} className='text-[12px] font-light px-3 py-1 bg-blue-500/10 rounded-full border-white  text-blue-500 cursor-pointer'>
                                    {value}
                                </span>
                            ))
                        }
                    </div>

                    <div className='flex items-center justify-between'>
                        <a href="#" className='flex items-center gap-1 font-semibold text-cyan-400 hover:gap-2 transition-all duration-300 text-[18px]'>
                            View Project <AiOutlineArrowRight size={18} />
                        </a>
                        <div className='flex items-center gap-3 justify-center'>
                            <a href="#" className='p-2 font-bold border-1 border-white rounded-full hover:-translate-y-2 transition-all duration-500 cursor-pointer'>
                                <BiLinkExternal size={20} />
                            </a>
                            <a href="#" className='p-2 font-bold border-1 border-white rounded-full hover:-translate-y-2 transition-all duration-500 cursor-pointer'>
                                <BiLogoGithub size={20} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard