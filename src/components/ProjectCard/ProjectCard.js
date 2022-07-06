import React from "react";
import './ProjectCard.css';
import CardTag from "../CardTag/CardTag";

function ProjectCard() {
    return(
        <div className="project_card_container">
            <div className="pcc_left">
                <h3>Title</h3>
                <h6>Date</h6>
                <p>Blurb</p>
                <div className="card_tag_container">
                    <CardTag/>
                    <CardTag/>
                </div>
                
            </div>
            <div className="pcc_right"></div>
        </div>
    );
}

export default ProjectCard;