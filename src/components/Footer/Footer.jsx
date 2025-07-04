import React from "react";
import Logo from "/logo/ptalogo.webp";
import Phone from '/footer/phone.webp';
import Email from '/footer/email.webp';
import Facebook from '/footer/fb.webp';
import Instagram from '/footer/ig.webp';
import Threads from '/footer/threads.webp';
import Youtube from '/footer/youtube.webp';
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