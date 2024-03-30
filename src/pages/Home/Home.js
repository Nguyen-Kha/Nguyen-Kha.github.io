import React from "react";
import './Home.css';

function Home() {
    return(
        <>
            {/* <h1>Home</h1> */}
            <div className="opener">
                <div className="opener_content">
                    <h1>Hey, I'm Kha</h1>
                    
                        I'm a software developer in the Data Engineering space. I'm interested in in Data Analytics, 
                        Data Engineering, Data Science, and Machine Learning for decision making spaces. I 
                        studied Systems Design Engineering at the University of Waterloo, where I ran all things 
                        Social for the entire undergraduate program.
                    <br></br><br></br>
                    
                        I'm a Canadian currently based in Austin, Texas. You may or may not find me picking up 
                        pickleball, picking up bartending, recovering from a sports injury, re-learning rock climbing, 
                        re-learning parkour, crying at ILLENIUM or Dabin, 
                        or finding great food and drink places in the city. If you're in Austin (especially if 
                        you're a new grad looking for friends in a new city), or from anywhere really, feel free 
                        to reach out.
                    
                    <br></br><br></br>
                        Connect with me on&nbsp;
                        <a href="https://www.linkedin.com/in/kha">LinkedIn</a>
                    <br></br>
                        Or send me an&nbsp;
                        <a href="mailto:kha.nguyen@uwaterloo.ca">email</a>
                    
                </div>
                {/* <div className="opener_picture"></div> */}
                <div className="opener_content">
                    <p>Click on the link below for the class profile</p>
                    <a href="/SYDE_2023_Class_Profile_Official.pdf" target="_blank">SYDE 2023 Class Profile</a>
                </div>
            </div>
        </>
        
    );
}

export default Home;