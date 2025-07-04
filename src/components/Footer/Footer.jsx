import React from "react";
import Logo from "../../../public/logo/ptalogo.webp";
import Phone from '../../../public/footer/phone.webp';
import Email from '../../../public/footer/email.webp';
import Facebook from '../../../public/footer/fb.webp';
import Instagram from '../../../public/footer/ig.webp';
import Threads from '../../../public/footer/threads.webp';
import Youtube from '../../../public/footer/youtube.webp';
import './Footer.css';

function Footer(){
    return (
        <div className="footer">
            <div className="footer-contact">
                <div className="footer-contant-phone"><img src={Phone} alt="" /><span>Phone: </span>0981821270</div>
                <div className="footer-contant-email"><img src={Email} alt="" /><span>Email: </span>https://www.instagram.com/phat_tieng_anh/</div>
                <div className="footer-contant-facebook"><img src={Facebook} alt="" /><span>Facebook: </span>https://www.facebook.com/phattienganh</div>
                <div className="footer-contant-insta"><img src={Instagram} alt="" /><span>Instagram </span>https://www.instagram.com/phat_tieng_anh/</div>
                <div className="footer-contant-insta"><img src={Threads} alt="" /><span>Threads </span>https://www.threads.net/@phat_tieng_anh</div>
                <div className="footer-contant-facebook"><img src={Youtube} alt="" /><span>Youtube </span>https://www.youtube.com/@phattienganh/videos</div>
            </div>
            <img src={Logo} alt="" width="300px"/>
        </div>
    )
}

export default Footer;