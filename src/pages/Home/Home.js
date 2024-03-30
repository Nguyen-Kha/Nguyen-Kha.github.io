import React from "react";
import './Home.css';

function Home() {
    return(
        <>
            {/* <h1>Home</h1> */}
            <div className="opener">
                <div className="opener_content">
                    <h1>Hey, I'm Kha</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
                {/* <div className="opener_picture"></div> */}
                <div className="opener_content">
                    <p>Click on the link below for the class profile</p>
                </div>
            </div>
        </>
        
    );
}

export default Home;