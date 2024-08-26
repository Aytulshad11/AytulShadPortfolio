import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
    return (
        <div id="Projects" className="p-10 md:p-24 text-white">
            <h1 className="text-2xl md:text-4xl text-white font-bold">Projects</h1>
            <div className="py-12 px-8 flex flex-wrap gap-5">
                <ProjectCard 
                title="Blogging Website"
                main="This is a website craeted in React JS ad used some library"
                />

                <ProjectCard 
                title="Google Search"
                main="This is a website craeted in React JS ad used some library"
                />
                <ProjectCard 
                title="Schedule Master"
                main="This is a website craeted in React JS ad used some library"
                />
            </div>

        </div>
    )
}
export default Projects;