import React from "react";
import { useState } from "react";
import Herosection from "../HeroSection/Herosection";
import Header from "../Header/Header";

function State({ children }) {
    const [isEdit, setIsEdit] = useState(false);
    const [blurStatus,setBlurStatus] = useState(false);

    function onEdit() {
        setIsEdit(!isEdit)
    }
    function onBlurStatus(){
        setBlurStatus(!blurStatus);
    }

    return (
        <>
            {
                React.Children.map(children, (child) => {
                    if(child.type === Header){
                         return React.cloneElement(child,{
                            handleEdit: onEdit,
                            blurStatus: blurStatus,
                            handleBlurStatus: onBlurStatus,
                            isEdit
                        })
                    }
                    else if(child.type === Herosection){
                        return React.cloneElement(child,{
                            isEdit
                        })
                    }
                    return child
                })
            }
        </>
    )
}

export default State;