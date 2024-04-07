import React from "react";
import './Projects.css';
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import { ProjectCard1 } from './ProjectsData.js';

function Projects() {
    return(
        <div className="projects_home">
            <h1>Projects</h1>
            <ProjectCard {...ProjectCard1}/>
            <ProjectCard/>
        </div>
    );
}

export default Projects;