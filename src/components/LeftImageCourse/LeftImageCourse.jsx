import React from "react";
import CTAButton from "../CTAButton/CTAButton";
import Tick from '../../../public/courses/tick.webp';
import './LeftImageCourse.css';

function LeftImageCourse({
    backgroundColor,
    courseImage,
    courseName,
}){

    return (
        <div className="coursedetail">
            <div className="coursedetail-title">
                <img src="../../../public/courses/basicenglish.webp" alt="" width="440px" height="440px"/>
                <h1>BASIC ENGLISH</h1>
            </div>
            <div className="coursedetail-des">
                <p><img src={Tick} width="20px" height="20px" alt="" /><span>Hình thức: </span>Online qua ZOOM</p>
                <p><img src={Tick} width="20px" height="20px" alt="" /><span>Sỉ số: </span>6 học viên / lớp</p>
                <p><img src={Tick} width="20px" height="20px" alt="" /><span>Thời lượng: </span>3 tháng, 3 buổi / tuần</p>
                <p><img src={Tick} width="20px" height="20px" alt="" /><span>Đối tượng: </span>lấy gốc phát âm và ngữ pháp cơ bản, không còn là "Mình không biết tiếng Anh.</p>
                <p><img src={Tick} width="20px" height="20px" alt="" /><span>Nội dung học ( không cam kết đầu ra ):</span>các kiến thức phát âm và ngữ pháp cơ bản.</p>
                <p><img src={Tick} width="20px" height="20px" alt="" /><span>Hình thức: </span>Online qua ZOOM</p>
                <p>Đầu ra: IELTS 2.5</p>
                <CTAButton />
            </div>
        </div>  
    )
}

export default LeftImageCourse;