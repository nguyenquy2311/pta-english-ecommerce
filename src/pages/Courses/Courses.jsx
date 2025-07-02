import React from "react";
import Logo from '../../../public/logo/ptalogo.webp';
import { getCoursesData } from "../../services/getData";
import { useEffect, useState } from "react";
import Star from "../../../public/courses/star.webp";
import MoreArrow from "../../../public/courses/morearrow.webp";
import CTAButton from "../../components/CTAButton/CTAButton";
import LeftImageCourse from "../../components/LeftImageCourse/LeftImageCourse";
import './Courses.css';

function Courses({
    courseID,
    courseImage,
    courseName,
    courseTargetClient,
    courseContent,
    courseOutcome,
    courseNumberStar }) {
    const [coursesData, setCoursesData] = useState([]);
    useEffect(() => {
        getCoursesData()
            .then((data) => {
                setCoursesData(data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <>
            <div className="courses">

                <div className="courses-header">
                    <div className="courses-header-name">
                        <p>COURSES OF</p>
                        <h1>Phát Tiếng Anh</h1>
                    </div>
                    <img src={Logo} alt="PTA" />
                </div>

                <div className="courses-body">
                    {coursesData.length > 0 && coursesData.map((element) => {
                        return (
                            <div key={element.id} className="courses-body-course">
                                <img src={element.img} alt="" width="230px" height="230px" />
                                <div className="courses-body-course-content">
                                    <h1>{element.name}</h1>
                                    <p><span>Đối tượng: </span>{element.targetclient}</p>
                                    <p><span>Nội dung khóa học: </span>{element.content}</p>
                                    <p><span>Đầu ra: </span>{element.outcome}</p>
                                    <div className="courses-body-course-content-description">
                                        <div className="courses-body-course-content-description--star">
                                            <p>{element.numberStar}</p>
                                            <img src={Star} alt="" width="65px" height="20px" />
                                        </div>
                                        <div className="courses-body-course-content-description--more">
                                            <p>Chi tiết khóa học</p>
                                            <img src={MoreArrow} alt="more" width="8px" height="15px" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>

                <CTAButton />
            </div>

            <LeftImageCourse/>
        </>
    )
}

export default Courses;