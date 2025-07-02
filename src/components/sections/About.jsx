import AnchorLink from "react-anchor-link-smooth-scroll";
import { BiCodeAlt, BiSolidMobile, BiDownload, BiPhone } from "react-icons/bi";
import { BsBrushFill } from "react-icons/bs";


export const About = () => {
    return (
        <section id="about" className="w-full min-h-screen">
            <h2 className="text-center text-4xl text-white font-bold mb-8">About <span className="text-blue-500">Me</span></h2>

            <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
                <div className="grid grid-cols-1 gap-5">
                    <div className="px-3 py-5 border-2 border-white/10 flex gap-4 items-center hover:-translate-y-2 transition-transform duration-300">
                        <div className="p-3 rounded-full bg-[#141C26] text-cyan-500">
                            <BiCodeAlt size={30} />
                        </div>
                        <div>
                            <h4 className="text-xl mb-1 font-semibold">
                                Web Developement
                            </h4>
                            <p className="text-gray-400">
                                Collaborating with clients to design multi-page websites with a variety of different animations.
                            </p>
                        </div>
                    </div>
                    <div className="px-3 py-5 border-2 border-white/10 flex gap-4 items-center hover:-translate-y-2 transition-transform duration-300">
                        <div className="p-3 rounded-full bg-[#141C26] text-cyan-500">
                            <BiSolidMobile size={30} />
                        </div>
                        <div>
                            <h4 className="text-xl mb-1 font-semibold">
                                Mobile Responsiveness
                            </h4>
                            <p className="text-gray-400">
                                Collaborating with clients to create websites that adjust to both tablet and mobile.
                            </p>
                        </div>
                    </div>
                    <div className="px-3 py-5 border-2 border-white/10 flex gap-4 items-center hover:-translate-y-2 transition-transform duration-300">
                        <div className="p-3 rounded-full bg-[#141C26] text-cyan-500">
                            <BsBrushFill size={30} />
                        </div>
                        <div>
                            <h4 className="text-xl mb-1 font-semibold">
                                Graphic Design
                            </h4>
                            <p className="text-gray-400">
                                Collaborating with clients to create logos, posters, and business cards.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="">
                    <h4 className="text-xl font-semibold">here's a little bit about myself</h4>
                    <p className="my-4">
                        Looking Towards Every Opportunity Where I Get The Chance To Be Creative And Design A Site That Leaves A Lasting Impression
                    </p>
                    <p className="my-4">
                        In everything that I do, I make sure to put in hard work and perseverance into all aspects of my life. While also at the same time using tools that come from a diverse cultural background through traveling and learning multiple languages to create something clients love.
                    </p>

                    <div>
                        <h4 className="text-xl font-semibold mb-5">Education</h4>
                        <ul className="list-disc pl-5 flex flex-col gap-5">
                            <li>
                                <strong>MCA(Computer Science)</strong> - R. C. Patel Institute of Management Research & Development, Shirpur (2021-2026)
                            </li>
                            {/* <li>
                                <strong>Relevant CourseWork</strong> - Data Structures, Web Development, etc.
                            </li> */}
                        </ul>
                    </div>

                    <div className="flex justify-center items-center gap-5 my-10">
                        <button className="py-2 px-3 md:py-3 md:px-10 rounded-full text-[12px] md:text-[16px] font-semibold bg-gradient-to-r from-blue-600 to-cyan-400 transition-1s border-1 border-blue-500 cursor-pointer flex gap-1 items-center hover:-translate-y-0.5">
                            My Resume <BiDownload className="md:text-[20px] text-[16px]" fontWeight={600} />
                        </button>
                        <AnchorLink offset={100} href="#contact" className="py-2 px-3 md:py-3 md:px-10 rounded-full text-[12px] md:text-[16px] font-semibold bg-transparent transition-1s border-1 border-blue-500 cursor-pointer flex gap-1 items-center hover:-translate-y-0.5">

                            Connect Me <BiPhone className="md:text-[20px] text-[16px]" fontWeight={600} />
                        </AnchorLink>
                    </div>
                </div>
            </div>

        </section>
    )
}

