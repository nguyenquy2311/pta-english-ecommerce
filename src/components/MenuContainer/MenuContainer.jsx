import React, { useEffect,useRef } from "react";
import { Link } from "react-router-dom";
import './MenuContainer.css'

function MenuContainer({ onClickCloseButton, blurStatus, handleBlurStatus, menuIsToggle, setMenuIsToggle, handleEdit }) {
    const menuRef = useRef(null);
    useEffect(() => {
        console.log(menuRef);
        function handleClickOutside(event){
            console.log(event);
            if(menuRef.current && !menuRef.current.contains(event.target)){
                const copyMenuToggle = !menuIsToggle;
                setMenuIsToggle(copyMenuToggle);
                handleBlurStatus(!blurStatus);
            }
        }
        document.addEventListener('click',handleClickOutside);
        
        console.log("end of useEffect");
        return () => {
            document.removeEventListener('click',handleClickOutside);
        }
    },[])
    return (
            <div ref={menuRef} className="menucontainer">
                <svg onClick={() => {
                    handleBlurStatus();
                    onClickCloseButton();
                }} xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="white">
                    <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
                </svg>
                <Link to="/" className="option">Trang chủ</Link>
                <Link className="option">Khóa học</Link>
                <Link className="option">Về giáo viên</Link>
                <Link className="option">Góp ý</Link>
                <Link className="option">Đội ngũ phát triển</Link>
                <Link onClick={() => {
                    handleEdit();
                    handleBlurStatus();
                    setMenuIsToggle(!menuIsToggle);
                }} className="option">Edit</Link>
            </div>
    )
}

export default MenuContainer;