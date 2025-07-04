import React from "react";
import CTAButton from "../CTAButton/CTAButton";
import Tick from '/courses/tick.webp';
import './LeftImageCourse.css';

function LeftImageCourse({
    name, 
    img,
    casestudy,
    totalstudent,
    time,
    targetclient,
    content,
    outcome
}){

    return (
        <div className="coursedetail-left">
            <div className="coursedetail-left-title">
                <img src="../../../courses/basicenglish.webp" alt="" width="440px" height="440px"/>
                <h1>{name}</h1>
            </div>
            <div className="coursedetail-left-des">
                <p><img src={Tick} width="20px" height="20px" alt="" /><span>Hình thức: </span>{casestudy}</p>
                <p><img src={Tick} width="20px" height="20px" alt="" /><span>Sỉ số: </span>{totalstudent}</p>
                <p><img src={Tick} width="20px" height="20px" alt="" /><span>Thời lượng: </span>{time}</p>
                <p><img src={Tick} width="20px" height="20px" alt="" /><span>Đối tượng: </span>{targetclient}</p>
                <p><img src={Tick} width="20px" height="20px" alt="" /><span>Nội dung học ( không cam kết đầu ra ):</span>{content}</p>
                <p>{outcome}</p>
                <CTAButton />
            </div>
        </div>  
    )
}

export default LeftImageCourse;