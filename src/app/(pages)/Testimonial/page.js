import React from 'react'
import './testiStyle.scss'
import CustomButton from '@/app/Component/Button'

const testi = () => {
    return (
        <div className='testi_container'>
            <div className='testi_btn' data-aos="fade-up">
                <CustomButton
                    text={"TESTIMONIALS"}
                    style={{
                        tb_button: "btin",
                        tb_icon: "icon",
                        btn_text: "text",
                        displaybtn: "displaybtn",
                        subtext: "subtext"
                    }} />
            </div>
            <div className='testi_para'>
                <p className='testi_para_main' data-aos="fade-up">What Our Customers Are Saying</p>
                <p className='testi_para_sub' data-aos="fade-up">Real Storeis,RealResults:Hear from those who've experienced the difference in their healthcare<br />Journey</p>
            </div>
            <div data-aos="fade-up">
                <div className='person_says' >
                    <p><span className='nutri'>NutriCare</span> has transformed my health management.The<br />doctors are professional,and <span>I can consult then anytime,<br />anywhere.Highly recommend!</span></p>
                </div>
                <div className='person_profile'>
                    <div className='person_img'></div>
                    <p className='person_name'>Sarah Williams</p>
                    <p className='person_desig'>Software Engineer</p>
                    <div className='three_bars'>
                        <div className='bar_one'></div>
                        <div className='bar_two'></div>
                        <div className='bar_three'></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default testi