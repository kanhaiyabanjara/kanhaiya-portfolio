import ProjectCard from "../ProjectCard"
import { project } from "../../assets/project.js"

const Projects = () => {

    // const projects = [
    //     {
    //         name: 'Inventory Management System',
    //         desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    //         img: '/projects/inventory.png',
    //         tags: ['ReactJS', 'ExpressJS', 'NodeJS', 'MongoDB'],
    //         url: '',
    //         github: '',
    //     }
    // ]

    return (
        <section id="projects" className=" w-full min-h-screen">
            <h2 className="text-center text-4xl text-white font-bold my-8">My <span className="text-blue-500">Works</span></h2>
            <p className="text-center">Here are some of my recent projects. Each project was carefully crafted with attention to detail, performance, and use experience.</p>

            <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mt-7 mb-10 justify-center">
                {/* <ProjectCard /> */}
                {
                    project.map((value, key) => (
                        <ProjectCard name={ value.name } desc={ value.desc } tags={ value.tags } key={key} />

                    ))
                }

            </div>

        </section>
    )
}

export default Projects
