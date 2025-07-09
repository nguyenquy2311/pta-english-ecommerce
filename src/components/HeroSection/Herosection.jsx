import React from "react";
import CTAButton from '../CTAButton/CTAButton.jsx';
import './Herosection.css';

function Herosection() {
    return (
        <div class="header-herosection">
            <div className="header-herosection-rightcontent">
                <img src="/assets/logo/ptalogo.webp" alt="logo" />
                <div className="header-herosection-rightcontent--content">
                    <p>English teacher</p>
                    <h1>Đinh Đắc Phát</h1>
                    <p>Đơn giản - dễ hiểu</p>
                    <CTAButton />
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