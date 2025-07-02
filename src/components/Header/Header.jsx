import React from "react";
import Herosection from '../HeroSection/Herosection';
import './Header.css';

function Header(){
    return (
        <>
            <div class="header">
                <p>Trang chủ</p>
                <p>Khóa học</p>
                <p>Về giáo viên</p>
                <button>Đăng ký ngay</button>
                <span class="material-symbols-outlined">
                    account_circle
                </span>
            </div>
            <Herosection />
        </>
    )
}

export default Header;