import React from "react";
import ReasonCard from "../../components/ReasonCard/ReasonCard";
import { useState,useEffect } from "react";
import { getReasonData } from "../../services/getData";
import './reasonPage.css';

function ReasonPage(){
    const [reasonData,setReasonData] = useState([]);
    useEffect(() => {
        getReasonData()
            .then((data) => {
                console.log(data);
                setReasonData(data);
            })
            .catch((err) => {
                console.log(err);
            })
    },[])

    return (
        <div className="reasonpage">
            <h1>VÌ SAO BẠN NÊN CHỌN PHÁT TIẾNG ANH ?</h1>
            <div className="reasonpage-cards">
                {reasonData.length > 0 && reasonData.map((e,index) => {
                    return (
                        <ReasonCard 
                            key = {e.id}
                            img = {e.img}
                            title  = {e.title}
                            content = {e.content}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default ReasonPage;