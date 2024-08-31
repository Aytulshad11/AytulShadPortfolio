import React from "react";
import HomeImg from "../../assets/image_3.png"
import TextChange from "../TextChanger.jsx"
const Home = () => {
    return <div className="text-white flex w-full justify-between items-start p-10 md:p-20">
        <div className="md:w-2/4 md:pt-10">
        <h1 
        className="text-3xl md:text-6xl font-bold flex leading-normal tracking-tighter">
            <TextChange/>
        </h1>
        <br />
        <p className="text-sm md:text-2xl tracking-tight">
        Software developer skilled in creating responsive web applications and enhancing user experiences.
        Quick learner with a passion for problem-solving, collaboration, and continuous improvement.
            
        </p>
        <button className="mt-5 md:md-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85
        duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]">Contact Me</button>
        </div>
         <div><img className="max-w-32 h-64 md:max-w-3xl md:h-80" src={HomeImg} alt="" /></div> 
    </div>
}

export default Home;