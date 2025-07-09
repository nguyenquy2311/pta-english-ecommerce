import React from "react";
import { useState } from "react";
import Herosection from '../HeroSection/Herosection';
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react';
import MenuContainer from "../MenuContainer/MenuContainer";
import './Header.css';

function Header() {
    const [isTogle,setIsToggle] = useState(false);
    function handleClickMenu(){
        const copyTogle = !isTogle;
        setIsToggle(copyTogle);
    }

    return (
        <>
            <div class="header">
                <p>Trang chủ</p>
                <p>Khóa học</p>
                <p>Về giáo viên</p>
                <button>Đăng ký ngay</button>
                <span onClick={()=> {
                    handleClickMenu();
                }} class="material-symbols-outlined">
                    dehaze
                </span>
                <SignedOut>
                    <SignInButton />
                </SignedOut>
                <SignedIn>
                    <UserButton />
                </SignedIn>
            </div>
            <Herosection menuIsTogle={isTogle}  setMenuIsToggle={setIsToggle} />
        </>
    )
}

export default Header;