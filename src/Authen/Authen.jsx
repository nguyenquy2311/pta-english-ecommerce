import React, { Children } from "react";
import { SignedIn, useUser } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Authen({children}){
    const navigate = useNavigate();
    const { isLoaded, isSignedIn, user } = useUser();
    const adminEmail = {
        "admin_1": "maiminhquyn@gmail.com",
        "admin_2": "dinhdacphat123@gmail.com"
    }

    useEffect(() => {
        if(!isLoaded){
            return;
        }
        else if(isSignedIn){
            if(user.emailAddresses[0].emailAddress === adminEmail.admin_1 || user.emailAddresses[0].emailAddress === adminEmail.admin_2)
                navigate('/signedin');
        }
        else{
            navigate('/');
        }
    }, [isLoaded,isSignedIn]);
    
    return (
        <>
            {children}
        </>
    )
}

export default Authen;