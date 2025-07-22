import React from "react";
import { useState } from "react";
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react';
import { useLocation } from "react-router-dom";
import MenuContainer from "../menucontainer/menucontainer";
import './Header.css';

function Header({handleEdit, blurStatus, handleBlurStatus, isEdit }) {
    const currentLocation = useLocation();
    const [menuIsToggle, setMenuIsToggle] = useState(false);
    function handleClickMenu() {
        const copyTogle = !menuIsToggle;
        setMenuIsToggle(copyTogle);
    }

    function onClickCloseButton(){
        console.log(menuIsToggle);
        const copyMenuToggle = !menuIsToggle;
        setMenuIsToggle(copyMenuToggle);
    }

    return (
            <>
                {blurStatus && <div className="header-blur"></div> }
                <div class="header">
                    { menuIsToggle &&
                         <MenuContainer 
                            onClickCloseButton={onClickCloseButton} 
                            blurStatus={blurStatus} 
                            handleBlurStatus={handleBlurStatus}  
                            menuIsToggle={ menuIsToggle } 
                            setMenuIsToggle = { setMenuIsToggle } 
                            handleEdit={handleEdit}
                        /> }
                    <p>Trang chủ</p>
                    <p>Khóa học</p>
                    <p>Về giáo viên</p>
                    <button>Đăng ký ngay</button>
                    <span onClick={(e)=> {
                        e.stopPropagation();
                        handleBlurStatus();
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
                    {currentLocation.pathname === '/signedin' && (
                        <button onClick={handleEdit} className={!isEdit ? "editbutton" : "donebutton"}>
                            {!isEdit ? "Edit" : "Done"}
                        </button>
                    )}
                </div>
            </>
    )
}

export default Header;