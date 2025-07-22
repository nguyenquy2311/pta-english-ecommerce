import React from "react";
import Header from '../../components/Header/Header';
import Herosection from "../../components/HeroSection/Herosection.jsx";
import Courses from '../../pages/Courses/Courses.jsx';
import ReasonPage from "../../pages/ReasonPage/ReasonPage.jsx";
import ResultPage from "../../pages/ResultPage/ResultPage.jsx";
import Form from "../../pages/Form/Form.jsx";
import Footer from '../../components/Footer/Footer.jsx';
import { useLocation } from "react-router-dom";
import overwriteData from "../../firebase/overwriteData.jsx";
import State from "../../components/State/State.jsx";
import './AppLayout.css';


function AppLayout() {
    const currentLocation = useLocation();

    function onEnterInTextArea(event) {
        if (event.key == 'Enter' && event.target.localName === "textarea") {
            const dbHeroSectionField = event.target.name;
            const dbHerosectionvalue = event.target.value;
            const textareaData = {
                [dbHeroSectionField]: dbHerosectionvalue
            }
            overwriteData(textareaData);
        }
    }

    return (
        <div onKeyDown={onEnterInTextArea} className="applayout">
            <State>
                <Header />
                <Herosection/>
                <Courses />
                <ReasonPage />
                <ResultPage />
                <Form />
                <Footer />
            </State>
        </div>
    )
};

export default AppLayout;