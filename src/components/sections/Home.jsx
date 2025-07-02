import AnchorLink from "react-anchor-link-smooth-scroll";
import { BiLayer, BiDownload } from "react-icons/bi";
import { ReactTyped } from "react-typed";


export const Home = () => {
    return (
        <section id="home" className="flex justify-center items-center w-full min-h-screen">
            <div className="text-center ">
                <h1 className="text-5xl md:text-7xl mb-2 font-bold bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
                    Hi! I'm Kanhaiya Banjara

                </h1>
                <h2 className="text-blue-500 text-4xl font-bold">
                    I'm a  <span>
                        <ReactTyped
                            strings={[
                                " Frontend Developer",
                                " Backend Developer",
                                " Full Stack Developer",
                                " Web Developer",
                            ]}
                            typeSpeed={100}
                            backSpeed={100}
                            loop
                        />
                    </span>
                </h2>
                <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto">
                    who loves crafting clean, scalable web applications.
                    My goal is to build solutions that deliver exceptional performance and a delightful user experience.
                </p>
                <div className="flex justify-center items-center">
                    <AnchorLink offset={100} href="#projects" className="py-2 px-10  text-[16px] font-semibold bg-gradient-to-r from-blue-600 to-cyan-400 transition-1s border-1 border-blue-500 cursor-pointer flex gap-1 items-center hover:-translate-y-0.5">
                        View My Work <BiLayer size={20} fontWeight={600} />
                    </AnchorLink>
                </div>
            </div>

        </section>
    )
}
