import React from "react";
import './CTAButton.css';

function CTAButton({title,isEdit}){
    return (
        <>
            {!isEdit ? (
                    <button class="cta-button">
                        <p>{title}</p>
                    </button>
                ) : (
                    <button class="cta-button">
                        <textarea name="buttonTitle" id="">{title}</textarea>
                    </button>
                )
            }
        </>
    )
}

export default CTAButton;