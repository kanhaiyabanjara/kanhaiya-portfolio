import { AiOutlineClose } from "react-icons/ai";
import AnchorLink from "react-anchor-link-smooth-scroll";

export const MobileNav = ({ openMenu, setMenu }) => {
    return (
        <div>
            <div className={`bg-[rgba(10,10,10,0.8)] w-full fixed top-0 right-0 bottom-0 z-40] flex justify-center items-center transition-all ease-in-out duration-300
            ${openMenu ? "h-screen opacity-100 pointer-events-auto"
                    : "h-0 opacity-0 pointer-events-none"}
            `}>
                <div className="flex flex-col gap-5 navLinks text-center text-xl">

                    <AnchorLink href="#home" onClick={() => setMenu(false)}>
                        Home
                    </AnchorLink>
                    <AnchorLink offset={100} href="#about" onClick={() =>
                        setMenu(false)
                    }>
                        About
                    </AnchorLink>
                    <AnchorLink offset={100} href="#skills"
                        onClick={() => setMenu(false)}
                    >
                        Skills</AnchorLink>
                    <AnchorLink offset={100} href="#projects" onClick={() => setMenu(false)}
                    >
                        Projects
                    </AnchorLink>
                    <AnchorLink offset={100} href="#contact" onClick={() => setMenu(false)}
                    >
                        Contact
                    </AnchorLink>

                </div>
            </div>
            <button className={`${(openMenu === true) ? "flex" : "hidden"} md:hidden fixed top-5 right-5 z-50`} onClick={() => setMenu(!openMenu)}>
                <AiOutlineClose size={25} />
            </button>
        </div>
    )
}
