import React from "react";
import {FaCss3, FaFigma, FaHtml5, FaJs, FaReact} from "react-icons/fa";
import { SiGit, SiGithub } from 'react-icons/si';
import { SiCplusplus, SiMysql } from 'react-icons/si';
// import {SiRadis} from "react-icons/si";
import { FaGoogle } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { RiNetflixFill } from "@remixicon/react";
import { FaAmazon } from "react-icons/fa";
const Experience = () => {
    return <div id="Experience" className="p-10 md:p-24">
        <h1 className="text-2xl md:text-4xl text-white font-bold">Skills & Experience</h1>
        <div className="flex flex-wrap items-center justify-around">
            <div className="flex flex-wrap md:w-2/5 gap-8 md:p-12 py-10">
            <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
                <SiCplusplus color="#1572b6" size={50}/>
                </span>
            <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
                <FaHtml5 color="#E34F26" size={50}/>
                </span>

                <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
                <FaCss3 color="#1572b6" size={50}/>
                </span>
                <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
                <FaReact color="#61DAF8" size={50}/>
                </span>
                <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
                <FaJs color="#F7DF1E" size={50}/>
                </span>
                <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
                <FaFigma color="#F24E1E" size={50}/>
                </span>
                
                <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
                <SiMysql color="#F7DF1E" size={50}/>
                </span>
                <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
                <SiGit color="#F7DF1E" size={50}/>
                </span>
                <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
                <SiGithub color="#F7DF1E" size={50}/>
                </span>
                {/* <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
                <SiRadis color="#FF4438" size={50}/>
                </span> */}

                </div>
                <div className="flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center">
                    <span className="text-white">
                        <h2 className="leading-tight">Front End Intern, Lise Infotech</h2>
                        <p className="text-sm leading-tight font-thin"> Sept 2020 - Nov 2023</p>
                        <ul className="text-sm p-2">
                            <li>
                                Transformed Figma designs into functional components, enhancing user experience and design 
                                accuracy.</li>
                            <li>•
                            Leveraged React's useState and useContext hooks for effective state management.</li>
                            <li> •
                            Implemented client-side routing with React Router, improving navigation and user engagement.</li>
                            <li> •
                            Integrated RESTful APIs for dynamic data, ensuring real-time updates and synchronization.</li>
                        </ul>
                    </span>
                </div>
        </div>
    </div>
};

export default Experience;