import { useState } from "react"
import { skills } from "../../assets/skills.js"
import SkillCard from "../SkillCard"

export const Skills = () => {
    const categories = ['all', 'frontend', 'backend', 'tools']
    const [activeCategory, setCategory] = useState('all');
    const filterCategory = skills.filter((skill) => activeCategory === 'all' || skill.category === activeCategory)
    return (
        <section id="skills" className=" w-full min-h-screen">
            <h2 className="text-center text-4xl text-white font-bold my-8">My <span className="text-blue-500">Skills</span></h2>

            <div className="flex justify-center items-center gap-5 my-8 flex-wrap">
                {
                    categories.map((category, key) => (
                        <button key={key} className={`
                            px-3 py-1 rounded-sm  capitalize font-semibold cursor-pointer 
                            ${activeCategory === category ? 'bg-blue-500' : 'bg-black'}   
                            `}
                            onClick={() => setCategory(category)}>
                            {category}
                        </button>
                    )
                    )
                }
            </div>

            <div className="flex flex-wrap justify-center gap-5">
                {
                    filterCategory.map((skillVal, key) => {
                        return (
                            < SkillCard name={skillVal.name} img={skillVal.img} key={key} />
                        )
                    })
                }
            </div>

        </section>
    )
}