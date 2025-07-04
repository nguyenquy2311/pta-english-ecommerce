import React from "react";
import CTAButton from "../../components/CTAButton/CTAButton";
import Image from "../../../public/form/formimage.webp";
import './Form.css';

function Form(){
    return (
        <div className="form">
            <div className="form-rightcontent">
                <h1>BẠN CÒN CÂU HỎI KHÁC ?</h1>
                <p>Hãy để lại thông tin, thầy Phát sẽ liên hệ và hỗ trợ mọi vướng mắt của bạn.</p>
                <img src={Image} alt="" width="375px" height="375px"/>
            </div>
            <form action="submit" className="form-leftcontent">
                <div className="form-leftcontent-nameinput">
                    <p>Họ và tên (*)</p>
                    <input type="text" placeholder="Nhập họ và tên của bạn" />
                </div>
                <div className="form-leftcontent-telnumber">
                    <p>Số điện thoại (*)</p>
                    <input type="tel" placeholder="Nhập số điện thoại của bạn"/>
                </div>
                <div className="form-leftcontent-input">    
                    <div className="form-leftcontent-input-birthdate">
                        <p>Năm sinh (*)</p>
                        <input type="text" placeholder="Nhập năm sinh của bạn"/>
                    </div>
                    <div className="form-leftcontent-input-email" >
                        <p>Email (*)</p>
                        <input type="email" placeholder="Nhập email của bạn"/>
                    </div>
                </div>
                <div className="form-leftcontent-who">
                    <p>Bạn là ?</p>
                    <select name="" id="" >
                        <option value="" disabled selected hidden>Lựa chọn</option>
                        <option value="">Học sinh</option>
                        <option value="">Sinh viên</option>
                        <option value="">Người đi làm</option>
                    </select>
                </div>
                <div className="form-leftcontent-course">
                    <p>Khóa học mà bạn quan tâm (*)</p>
                    <select name="" id="">
                        <option value="" disabled selected hidden>Lựa chọn khóa học</option>
                        <option value="">BASIC ENGLISH</option>
                        <option value="">PRE-IELTS</option>
                    </select>
                </div>
                <div className="form-leftcontent-content">
                    <p>Nội dung</p>
                    <input name="" id="" placeholder="Bạn có câu hỏi gì ? Hãy chia sẻ cùng thầy Phát !"/>
                </div>
                <CTAButton />
            </form>
        </div>
    ) 
}

export default Form;