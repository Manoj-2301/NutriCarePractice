"use client"
import React, { useState } from 'react'

import './questionStyle.scss'
import CustomButton from '@/app/Component/Button'

const page = () => {
    const [isAnswerVisible, setIsAnswerVisible] = useState(false);

    const toggleAnswer = () => {
      setIsAnswerVisible(prevState => !prevState);
    };
  
    return (
        <div className='question_container'>
            <div className='question_btn' data-aos="fade-up">
                <CustomButton
                    text={"FREQUENTLY AKSED QUESTIONS "}
                    style={{
                        tb_button: "btten",
                    }} />
            </div>
            <div className='question_para'>
                <p className='question_para_main' data-aos="fade-up">What Our Customers Are Saying</p>
                <p className='question_para_sub' data-aos="fade-up">Real Storeis, Real Results:Hear from those who've experienced the difference in their healthcare<br />Journey</p>
            </div>
            <div className='question_card'>
                <div className='card_border' data-aos="fade-up">
                    <div className='questions'>
                        <div className='questioncard'>
                            <p className='number'>01</p>
                            <p className='question_asked'>Can I track my health progress on NutriCare?</p>
                        </div>
                        <div className='questionicon' onClick={toggleAnswer}>
                        <i className={isAnswerVisible ? "fi fi-rs-minus-circle" : "fi fi-rr-add"}></i>
                        </div>
                    </div>
                    { isAnswerVisible &&(<div className='answer'>
                        <p>Yes, you can! NutriCare allows you to track your health progress effortlessly.You can monitor your daily nutrition,excercise,hydration,and even medication intake.Plus,you'll get personalized insights and progress report to help you stay on track with your health Goals.</p>
                    </div>)}
                </div>
            </div>
            <div className='question_card' data-aos="fade-up">
                <div className='card_border'>
                    <div className='questions'>
                        <div className='questioncard'>
                            <p className='number'>02</p>
                            <p className='question_asked'>How do i access my health records?</p>
                        </div>
                        <div className='questionicon'>
                            <i className="fi fi-rr-add"></i>
                        </div>
                    </div>
                </div>
            </div>
            <div className='question_card' data-aos="fade-up">
                <div className='card_border'>
                    <div className='questions'>
                        <div className='questioncard'>
                            <p className='number'>03</p>
                            <p className='question_asked'>How secure is my personal health data?</p>
                        </div>
                        <div className='questionicon'>
                            <i className="fi fi-rr-add"></i>
                        </div>
                    </div>
                </div>
            </div>
            <div className='question_card' data-aos="fade-up">
                <div className='card_border'>
                    <div className='questions'>
                        <div className='questioncard'>
                            <p className='number'>04</p>
                            <p className='question_asked'>Is NutriCare available 24/7?</p>
                        </div>
                        <div className='questionicon'>
                            <i className="fi fi-rr-add"></i>
                        </div>
                    </div>
                </div>
            </div>
            <div className='question_card' data-aos="fade-up">
                <div className='card_border'>
                    <div className='questions'>
                        <div className='questioncard'>
                            <p className='number'>05</p>
                            <p className='question_asked'>How do I schedule a consultation with a doctor?</p>
                        </div>
                        <div className='questionicon'>
                            <i className="fi fi-rr-add"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page