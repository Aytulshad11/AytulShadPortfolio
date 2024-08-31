import React from "react";
import {IoArrowForward} from "react-icons/io5";
import AboutImg from "../../assets/image_4.png"
const About = () => {
    return (
        <div id = "About"className="text-white md:flex overflow:hidden items-center md:flex-wrap md:justify-center bg-black
        shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12">
            <div>
                <h2 className="text-2xl md:text-4xl font-bold" >About</h2>
                <div className="md:flex flex-wrap flex-col md:flex-row items-center">
                    <img className="md:h-80"src={AboutImg} alt="" />
                    <ul>
                        <div className="flex gap-3 py-4">
                            <IoArrowForward 
                            size={30} 
                            className="mt-1"/>
                            <span className="w-96">
                                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                                    Front End Developer
                                    </h1>
                                    <p className="text-sm md:text-md leading-tight">
                                    Creative and detail-oriented front-end developer with a passion for building responsive, user-friendly web applications. Skilled in React.js, JavaScript, and modern web technologies, I bring designs to life with clean, efficient code.
                                    </p>
                            </span>
                        </div>

                        <div className="flex gap-3 py-4">
                            <IoArrowForward 
                            size={30} 
                            className="mt-1"/>
                            <span className="w-96">
                                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                                    Software
                                    </h1>
                                    <p className="text-sm md:text-md leading-tight">
                                    Passionate software developer dedicated to building efficient and scalable applications that solve real-world problems. Proficient in multiple programming languages and technologies, with a strong focus on writing clean, maintainable code and continuously learning new skills.
                                    </p>
                            </span>
                        </div>

                        {/* <div className="flex gap-3 py-4">
                            <IoArrowForward 
                            size={30} 
                            className="mt-1"/>
                            <span className="w-96">
                                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                                    Back End Developer
                                    </h1>
                                    <p className="text-sm md:text-md leading-tight">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                        Labore possimus qui placeat magni blanditiis eius ut quam,</p>
                            </span>
                        </div> */}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default About;