import React from "react";
import './ProjectCard.css';
import CardTag from "../CardTag/CardTag";

function ProjectCard(props) {

    // let tags = generateTags(props.tags);
    // let test = props.tags;
    // let tagstest = test;

    return(
        <div className="project_card_container">
            <div className="pcc_left">
                <h3>{!props.title ? 'Temp Title' : props.title}</h3>
                <h6>{!props.date ? 'Temp Date' : props.date}</h6>
                <p>{!props.blurb ? 'Temp Blurb' : props.blurb}</    p>
                <div className="card_tag_container">
                    {props.tag1 ? <CardTag tag={props.tag1}/> : null}
                    {props.tag2 ? <CardTag tag={props.tag2}/> : null}
                    {props.tag3 ? <CardTag tag={props.tag3}/> : null}
                    {props.tag4 ? <CardTag tag={props.tag4}/> : null}
                    {props.tag5 ? <CardTag tag={props.tag5}/> : null}
                    {/* <CardTag tag={tags}/> */}
                </div>
                
            </div>
            <div className="pcc_right"></div>
        </div>
    );
}

/*
There's an issue with loading json array of strings. 
if we do 
export const ProjectCard1 = {
    ...
    tags: ['tag3 name', 'tag4 name']
}; 
    from another file
and
    let test = props.tags;
    let tagstest = test;
    
    in this file,
tagstest will print out 
    tag3 nametag4 name

if we do 
    let test = props.tags;
    let tagstest = typeof(test);
tagstest will print out 
    object

if we do 
    let test = props.tags;
    let tagstest = test.length;
tagstest will print out 
    Uncaught TypeError: Cannot read properties of undefined (reading 'length')

if we do 
    let test = props.tags;
    let tagstest = Object.keys(test).length;;
tagstest will print out 
    Uncaught TypeError: Cannot convert undefined or null to object

Essentially, React sees it as an array, but cannot do any array operations on it
This is an issue for dynamic component generation using json parsing
*/
// function generateTags(tagsArray){
//     let workingArray = [];
//     for(let i = 0; i < tagsArray.length; i++){
//         workingArray.push(<CardTag tag={tagsArray[i]}/>);
//     }
//     return workingArray;
// }

export default ProjectCard;