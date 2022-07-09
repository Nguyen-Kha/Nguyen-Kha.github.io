import React from "react";
import './CardTag.css'

function CardTag(props) {
    return(
        <div className="tag">
            <p>{props.tag}</p>
        </div>
    );
}

export default CardTag;