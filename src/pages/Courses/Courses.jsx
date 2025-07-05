import React from "react";
import { getCoursesData } from "../../services/getData";
import { useEffect, useState } from "react";
import CTAButton from "../../components/CTAButton/CTAButton";
import LeftImageCourse from "../../components/LeftImageCourse/LeftImageCourse";
import RightImageCourse from "../../components/RightImageCourse/RightImageCourse";
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
                    <img src="/assets/logo/ptalogo.webp" alt="PTA" />
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
                                            <img src="/assets/courses/star.webp" alt="" width="65px" height="20px" />
                                        </div>
                                        <div className="courses-body-course-content-description--more">
                                            <p>Chi tiết khóa học</p>
                                            <img src="/assets/courses/morearrow.webp" alt="more" width="8px" height="15px" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>

                <CTAButton />
            </div>

            {coursesData.map((course,index) => {
                if (index % 2 == 0) {
                    return (
                        <LeftImageCourse
                            key={course.id}
                            name = {course.name}
                            img = {course.img}
                            casestudy = {course.casestudy}
                            totalstudent = {course.totalstudent}
                            time = {course.time}
                            targetclient = {course.targetclient}
                            content = {course.content}
                            outcome = {course.outcome}
                        />
                    )
                }
                else{
                    return (
                        <RightImageCourse
                            key={course.id}
                            name = {course.name}
                            img = {course.img}
                            casestudy = {course.casestudy}
                            totalstudent = {course.totalstudent}
                            time = {course.time}
                            targetclient = {course.targetclient}
                            content = {course.content}
                            outcome = {course.outcome}
                        />
                    )
                }
            })}

        </>
    )
}

export default Courses;