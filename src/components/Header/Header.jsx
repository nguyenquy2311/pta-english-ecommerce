import React from "react";
import Herosection from '../HeroSection/Herosection';
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react';
import './Header.css';

function Header() {
    return (
        <>
            <div class="header">
                <p>Trang chủ</p>
                <p>Khóa học</p>
                <p>Về giáo viên</p>
                <button>Đăng ký ngay</button>
                <span class="material-symbols-outlined">
                    dehaze
                </span>
                <SignedOut>
                    <SignInButton />
                </SignedOut>
                <SignedIn>
                    <UserButton />
                </SignedIn>
            </div>
            <Herosection />
        </>
    )
}

export default Header;