import React from "react";
import ptalogo from '/logo/ptalogo.webp';
import heroimage from '/Herosection/herosection.webp';
import pseudoheroimage from '/Herosection/pseudohero.webp';
import CTAButton from '../CTAButton/CTAButton.jsx';
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