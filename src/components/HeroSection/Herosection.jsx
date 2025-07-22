import React from "react";
import CTAButton from '../CTAButton/CTAButton.jsx';
import { useEffect,useState } from "react";
import { db } from "../../../firebase.config.js";
import { onSnapshot, doc } from "firebase/firestore";
import './Herosection.css';

function Herosection({isEdit}) {
    const [leftData,setLeftData] = useState({
        "teacherType": "English Teacher",
        "teacherName": "Đinh Đắc Phát",
        "slogan": "Đơn giản - dễ hiểu"
    })  
    
    const herosectionRef = doc(db,"herosection","content");
    useEffect(() => {
        // onSnapshot -> fetch data whenever data on db changes.
        const unSubcribe = onSnapshot(herosectionRef,(docSnapshot) => {
            let newData = docSnapshot.data();
            setLeftData((prevData) => {
                if (JSON.stringify(prevData) !== JSON.stringify(newData)) {
                    return newData;
                }
                return prevData;
            })
        })
        return (() => {
            unSubcribe();
        })
    },[]);

    return (
        <div class="header-herosection">
            <div className="header-herosection-rightcontent">
                <img src="/assets/logo/ptalogo.webp" alt="logo" />
                <div className="header-herosection-rightcontent--content">
                    {!isEdit ? (
                            <>
                                <p>{leftData.teacherType}</p>
                                <h1>{leftData.teacherName}</h1>
                                <p>{leftData.slogan}</p>
                            </>
                        ) : (
                            <>
                                <textarea name="teacherType" id="">{leftData.teacherType}</textarea>
                                <textarea name="teacherName" id="">{leftData.teacherName}</textarea>
                                <textarea name="slogan" id="">{leftData.slogan}</textarea>
                            </>
                        )
                    }
                    <CTAButton title={leftData.buttonTitle} isEdit={isEdit} />
                </div>
            </div>  
            <div className="header-herosection-leftimage" >
                <img src="/assets/Herosection/herosection.webp" alt="hero" />
                <img src="assets/Herosection/pseudohero.webp" alt="pseudo" />
            </div>
        </div>
    );
}

export default Herosection;