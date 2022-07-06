import React from "react";
import './FunCard.css';
import CardTag from "../CardTag/CardTag";

function FunCard(){
    return(
        <div className="fun_card_container">
            <div className="fcc_left">
                <h3>Title</h3>
                <h6>Date</h6>
                <p>Blurb</p>
                <div className="card_tag_container">
                    <CardTag/>
                    <CardTag/>
                </div>
                
            </div>
            <div className="fcc_right"></div>
        </div>
    );
}

export default FunCard;