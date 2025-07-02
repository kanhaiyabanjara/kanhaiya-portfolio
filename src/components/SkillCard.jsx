const SkillCard = ({ name, img, key }) => {
    return (
        <div className="bg-[#141C26] text-[12px] sm:text-[16px] px-1 sm:px-5 md:px-5 py-1 flex flex-col justify-center items-center w-full transition-all duration-300 max-w-[120px] gap-2 rounded-sm hover:-translate-y-2" key={key}>
            <img src={img} className="w-[35px] md:w-[70px] sm:w-[50px]"  />
            <h3>{name}</h3>
        </div>
    )
}

export default SkillCard;
