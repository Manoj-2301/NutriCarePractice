import React from 'react'
import Image from 'next/image'
import CustomButton from '../Component/Button'
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { FaApple } from "react-icons/fa";
import './footerStyle.scss'

const page = () => {
    return (
        <div className='footer'>
            <div className='footer_container'>
                <div className='footer_help_info'>
                    <div className='footer_logo'>
                        <Image
                            src={"/logo.svg"}
                            alt='logo'
                            width={40}
                            height={40} />
                        <p className='footer_brand_name'>NutriCare</p>
                    </div>
                    <div className='footer_contact'>
                        <div className='contact'>
                            <p className='para_main_footer'>Contact us at</p>
                            <p className='para_footer'>Support@nutricare.com</p>
                        </div>
                        <div className='have_question'>
                            <p className='para_main_footer'>Have a question?</p>
                            <p className='para_footer'>123-987-456</p>
                        </div>
                    </div>
                </div>
                <div className='footer_app_link'>
                    <div className='footer_para'>
                        <p>Caring for you,Anytime & Anywhere</p>
                    </div>
                    <div className='btn_primary'>
                        <CustomButton
                            icon={<IoLogoGooglePlaystore />}
                            text={"Get It on "}
                            Subtext={"Google Play"}
                            style={{
                                tb_button: "btn",
                                tb_icon: "icon",
                                btn_text: "text",
                                displaybtn: "displaybtn",
                                subtext: "subtext"
                            }} />
                        <CustomButton
                            icon={<FaApple />}
                            text={"Get It on "}
                            Subtext={"App Store"}
                            style={{
                                tb_button: "btn",
                                tb_icon: "icon",
                                btn_text: "text",
                                displaybtn: "displaybtn",
                                subtext: "subtext"
                            }}
                        />
                    </div>
                </div>
                <hr />
                <div className='footer_list'>
                    <p>About Us</p>
                    <p>Our Services</p>
                    <p>Blog & Health Tips</p>
                    <p>Contact Us</p>
                    <p>FAQs</p>
                    <p>Privacy policy</p>
                    <p>Terms & conditions</p>
                </div>
                <div className='footer_end'>
                    <div className='footer_icon'>
                        <i className="fi fi-brands-facebook"></i>
                        <i className="fi fi-brands-instagram"></i>
                        <i className="fi fi-brands-twitter-alt"></i>
                        <i className="fi fi-brands-linkedin"></i>
                    </div>
                    <div className='footer_last_para'>
                        <p> &copy; 2025.All Rights Reserved By kiwari</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page