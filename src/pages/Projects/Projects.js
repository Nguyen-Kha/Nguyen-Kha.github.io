import React from "react";
import './Projects.css';
import ProjectCard from "../../components/ProjectCard/ProjectCard";

function Projects() {
    return(
        <div>
            <h1>Projects</h1>
            <ProjectCard/>
            <ProjectCard/>
        </div>
    );
}

export default Projects;