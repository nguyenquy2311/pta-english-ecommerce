import React from "react";
import Header from '../../components/Header/Header';
import Courses from '../../pages/Courses/Courses.jsx';
import ReasonPage from "../../pages/ReasonPage/ReasonPage.jsx";
import ResultPage from "../../pages/ResultPage/ResultPage.jsx";
import Form from "../../pages/Form/Form.jsx";
import Footer from '../../components/Footer/Footer.jsx';
import './AppLayout.css';

function AppLayout(){
    return (
        <div className="applayout">
            <Header />
            <Courses />
            <ReasonPage />
            <ResultPage />
            <Form/>
            <Footer/>
        </div>
    )
};

export default AppLayout;