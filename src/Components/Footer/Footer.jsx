import React from "react";
import {MdOutlineEmail} from "react-icons/md";
import {CiLinkedin} from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { FaFileAlt } from 'react-icons/fa';
const Footer = ()=> {
    return (
        <div
        id="Footer"
        className="flex justify-around bg-[#465697] text-white p-10 md:p-12 items-center">

        <div>
            <h1 className="text-2xl md:text-6xl font-bold">Contact</h1>
            <h3 className="text-sm md:text-2xl font-normal"> Feel free to Reach out</h3>
        </div>
        <ul className="text-sm md:text-xl">
        <li className="flex gap-1 items-center">
            <MdOutlineEmail size={20}/>
            <a href="mailto:aytulansari11@gmail.com"> Click here to email</a>
        </li>
        <li className="flex gap-1 items-center">
            <CiLinkedin size={20}/>
            <a href="https://www.linkedin.com/in/md-aytul-shad-ansari-593063216/">Linkedin</a>
        </li>
        <li className="flex gap-1 items-center">
            <FaGithub size={20}/>
            <a href="https://github.com/Aytulshad11">Github</a>
        </li>
        <li className="flex gap-1 items-center">
            <FaFileAlt size={20}/>
            <a href="https://drive.google.com/file/d/1TtzxPOkt7Qpptnecl51rg_-Bhx3J_ZX_/view?usp=drive_link">Resume</a>
        </li>
            </ul>
        </div>
    )
}

export default Footer;