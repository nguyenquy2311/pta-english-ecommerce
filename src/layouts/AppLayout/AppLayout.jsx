import React from "react";
import Header from '../../components/Header/Header';
import Courses from '../../pages/Courses/Courses.jsx';
import './AppLayout.css';

function AppLayout(){

    
    
    return (
        <div className="applayout">
            <Header />
            <Courses />
        </div>
    )
};

export default AppLayout;