import React from "react";
import './MenuContainer.css'

function MenuContainer({ onClickCloseButton }) {

    return (
        <div className="menucontainer">
            <svg onClick={() => {
                onClickCloseButton();
            }} xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="white">
                <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
            </svg>
            <p>Trang chủ</p>
            <p>Khóa học</p>
            <p>Về giáo viên</p>
            <p>Góp ý</p>
            <p>Đội ngũ phát triển</p>
        </div>
    )
}

export default MenuContainer;