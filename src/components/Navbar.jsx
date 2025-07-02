import { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { AiOutlineMenuUnfold } from "react-icons/ai";

export const Navbar = ({ openMenu, setMenu }) => {
    return (
        <nav className="w-full fixed top-0 left-0 bg-[hsla(0,0%,4%,1)] backdrop-blur-lg shadow-lg border-b border-white/10">
            <div className="max-w-5xl flex justify-between items-center mx-auto p-5">
                <a className="font-bold text-xl">
                    <span className="text-blue-500">kanhaiya.</span>banjara
                </a>

                <div className="hidden md:flex gap-6 navLinks">

                    <AnchorLink href="#home" >
                        Home
                    </AnchorLink>
                    <AnchorLink offset={100} href="#about" >
                        About
                    </AnchorLink>
                    <AnchorLink offset={100} href="#skills">
                        Skills</AnchorLink>
                    <AnchorLink offset={100} href="#projects" >
                        Projects
                    </AnchorLink>
                    <AnchorLink offset={100} href="#contact" >
                        Contact
                    </AnchorLink>
                </div>
                <button className={`${openMenu ? 'hidden' : 'flex' } md:hidden`} onClick={() => setMenu(!openMenu)}>
                    <AiOutlineMenuUnfold size={25} />
                </button>
            </div >
        </nav >
    )
}


{/* <button className="py-2 px-5 rounded-md text-[16px] font-semibold hover:bg-gradient-to-r from-blue-500 to-cyan-400 transition-1s border-1 border-blue-500">Resume </button> */ }
