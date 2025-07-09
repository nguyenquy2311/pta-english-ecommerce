import React from "react";
import CTAButton from '../CTAButton/CTAButton.jsx';
import MenuContainer from "../MenuContainer/MenuContainer.jsx";
import './Herosection.css';

function Herosection({menuIsTogle, setMenuIsToggle}) {

    function onClickCloseButton(){
        const copyMenuToggle = !menuIsTogle;
        setMenuIsToggle(copyMenuToggle);
    }

    return (
        <div class="header-herosection">
            { menuIsTogle && <MenuContainer onClickCloseButton={onClickCloseButton} /> }
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