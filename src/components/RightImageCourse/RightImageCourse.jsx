import React from "react";
import CTAButton from "../CTAButton/CTAButton";
import Tick from '../../../public/courses/tick.webp';
import './RightImageCourse.css';

function RightImageCourse({
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
        <div className="coursedetail-right">
            <div className="coursedetail-right-title">
                <img src={img} width="440px" height="440px" />
                <h1>{name}</h1>
            </div>
            <div className="coursedetail-right-des">
            <p><img src={Tick} width="20px" height="20px" alt="" /><span>Hình thức: </span>{casestudy}</p>
                <p><img src={Tick} width="20px" height="20px" alt="" /><span>Sỉ số: </span>{totalstudent}</p>
                <p><img src={Tick} width="20px" height="20px" alt="" /><span>Thời lượng: </span>{time}</p>
                <p><img src={Tick} width="20px" height="20px" alt="" /><span>Đối tượng: </span>{targetclient}</p>
                <p><img src={Tick} width="20px" height="20px" alt="" /><span>Nội dung học ( không cam kết đầu ra ): </span>{content}</p>
                <p>{outcome}</p>
                <CTAButton />
            </div>
        </div>
    )
}

export default RightImageCourse;