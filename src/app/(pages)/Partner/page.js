import React from 'react'
import './partnerStyle.scss'
import CustomButton from '../../Component/Button/index'


const page = () => {
    return (
        <div className='trused_partner'>
            <div className='trusted' data-aos="fade-up">
                <CustomButton
                    text={"YOUR TRUSTED HEALTH PARTNER"}
                    style={{
                        tb_button: "buttn",
                        tb_icon: "icon",
                        btn_text: "text",
                        displaybtn: "displaybtn",
                        subtext: "subtext"
                    }} />
            </div>
            <div className='trusted_para'>
                <p className='trusted_para_one' data-aos="fade-up">Trusted Healthcare,Anytime & Anywhere</p>
                <p className='trusted_para_two ' data-aos="fade-up">Bringing quality medical services closer to you with technology and care.</p>
            </div>
            <div className='trust_bg' data-aos="fade-up">
                <div className='trusted_cards'>
                    <div className='trusted_card' data-aos="fade-up">
                        <p className='trusted_card_para'>10,000 +</p>
                        <p className='trusted_card_para_two'>Happy Patients</p>
                        <p className='trusted_card_para_three'>Thousands of patients have benefied from our <br />healthcare service with a high satisfaction rate.</p>
                    </div>
                    <div className='trusted_card_two' data-aos="fade-up">
                        <p className='trusted_card_para'>300 +</p>
                        <p className='trusted_card_para_two'>Certified Doctors</p>
                        <p className='trusted_card_para_three'>Thousands of patients have benefied from our <br />healthcare service with a high satisfaction rate.</p>
                    </div>
                    <div className='trusted_card_three' data-aos="fade-up">
                        <p className='trusted_card_para'>95%</p>
                        <p className='trusted_card_para_two'>Patient Satisifaction</p>
                        <p className='trusted_card_para_three'>Thousands of patients have benefied from our <br />healthcare service with a high satisfaction rate.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page