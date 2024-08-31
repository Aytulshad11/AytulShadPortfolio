import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
    return (
        <div id="Projects" className="p-10 md:p-24 text-white">
            <h1 className="text-2xl md:text-4xl text-white font-bold">Projects</h1>
            <div className="py-12 px-8 flex flex-wrap gap-5">
                <ProjectCard 
                title="Dev Store"
                main="Developed a responsive React.js e-commerce platform with integrated Strapi CMS and Stripe for seamless content management and secure transactions."
                />

                <ProjectCard 
                title="Google Search"
                main="Engineered a fully functional Google Search clone using React.js, featuring dynamic routing and a responsive user interface."
                />
                <ProjectCard 
                title="Schedule Master"
                main="Created an intuitive scheduling tool with advanced features like clashing prevention and automated timetable generation, reducing scheduling conflicts by 40%."
                />
            </div>

        </div>
    )
}
export default Projects;