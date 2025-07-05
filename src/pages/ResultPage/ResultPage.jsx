import React from "react";
import { useState,useEffect } from "react";
import { getResultData } from "../../services/getData";
import './ResultPage.css';

function ResultPage(){
    const [resultData,setResultData] = useState([]);
    useEffect(() => {
        getResultData()
            .then((data) => {
                console.log(data);
                setResultData(data);
            })
            .catch((err) => {
                console.log(err);
            })
    },[]);

    return (
        <div className="resultpage" >
                <div className="resultpage-title">
                    <div className="resultpage-title--leftcontent">
                        <p>KẾT QUẢ</p>
                        <h1>Từ học viên</h1>
                    </div>
                    <img src="/assets/logo/ptalogo.webp" alt="" />
                </div>
                <div className="resultpage-content">
                    {resultData.length > 0 && resultData.map((e,index) => {
                        return (
                            <img key={e.id} src={e.img} alt="result" width="380px" height="325px"/>
                        )
                    })}
                </div>
        </div>
    )
}

export default ResultPage;