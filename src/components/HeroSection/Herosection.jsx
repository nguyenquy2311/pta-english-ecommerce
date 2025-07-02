import React from "react";
import ptalogo from '../../../public/logo/ptalogo.webp';
import heroimage from '../../../public/Herosection/herosection.webp';
import pseudoheroimage from '../../../public/Herosection/pseudohero.webp';
import CTAButton from "../CTAButton/CTAButton";
import './Herosection.css';

function Herosection(){
    return (
        <div class="header-herosection">
            <div className="header-herosection-rightcontent">
                <img src={ptalogo} alt="logo" />
                <div className="header-herosection-rightcontent--content">
                    <p>English teacher</p>
                    <h1>Đinh Đắc phát</h1>
                    <p>Đơn giản - dễ hiểu</p>
                    <CTAButton />
                </div>
            </div>
            <img className="header-herosection-leftimage" src={heroimage} alt="hero" />
            <img src={pseudoheroimage} alt="pseudo" />
        </div>
    );
}

export default Herosection;