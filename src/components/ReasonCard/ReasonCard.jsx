import React from "react";
import './ReasonCard.css';

function ReasonCard({
        img,
        title,
        content
}){
    return (
            <div className="reasonpage-cards-item">
                    <img src={img} />
                    <p><span>{title}: </span>{content}</p>
            </div>
    )
}

export default ReasonCard;