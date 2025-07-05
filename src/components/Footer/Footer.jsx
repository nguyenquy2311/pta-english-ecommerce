import React from "react";
import './Footer.css';

function Footer(){
    return (
        <div className="footer">
            <div className="footer-contact">
                <div className="footer-contant-phone"><img src="/assets/footer/phone.webp" alt="" /><span>Phone: </span>0981821270</div>
                <div className="footer-contant-email"><img src="/assets/footer/email.webp" alt="" /><span>Email: </span>https://www.instagram.com/phat_tieng_anh/</div>
                <div className="footer-contant-facebook"><img src="/assets/footer/fb.webp" alt="" /><span>Facebook: </span>https://www.facebook.com/phattienganh</div>
                <div className="footer-contant-insta"><img src="/assets/footer/ig.webp" alt="" /><span>Instagram </span>https://www.instagram.com/phat_tieng_anh/</div>
                <div className="footer-contant-insta"><img src="/assets/footer/threads.webp" alt="" /><span>Threads </span>https://www.threads.net/@phat_tieng_anh</div>
                <div className="footer-contant-facebook"><img src="/assets/footer/youtube.webp" alt="" /><span>Youtube </span>https://www.youtube.com/@phattienganh/videos</div>
            </div>
            <img src="/assets/logo/ptalogo.webp" alt="" width="300px"/>
        </div>
    )
}

export default Footer;