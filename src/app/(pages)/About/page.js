import React from 'react'
import './workStyle.scss'
import CustomButton from '../../Component/Button/index'
import Image from 'next/image'
const About = () => {
  return (
    <div className='work'>
      <div className='work_btn_top'  data-aos="fade-up">
        <CustomButton
          text={"HOW IT WORK"}
          style={{
            tb_button: "btun",
            tb_icon: "icon",
            btn_text: "text",
            displaybtn: "displaybtn",
            subtext: "subtext"
          }} />
      </div>
      <div className='work_para' data-aos="fade-up">
        <p className='work_para_main'>How NutriCare Works</p>
        <p className='work_para_sub'>A simple 3-step journey to a healthier you.</p>
      </div>
      <div className='cards' >
        <div className='work_main_card' data-aos="fade-up">
          <div className='work_card_inner_text'>
            <div className='circle'>
            </div>
            <div className='work_inner_card'>
              <p className='work_inner_card_para'>Set Your Fitness Goal!</p>
              <p className='work_inner_card_para_two'>How many workout do you want to complete <br />this week?Let's plan it!</p>
            </div>
          </div>
          <div className='work_card_white_part'>
            <p className='work_white_card_para'>Sign Up & Set Your Goals</p>
            <p className='work_white_card_paraSub'>Set fitness targets,track nutriton,and create reminders<br />effortlessly</p>
            <div className='work_white_learn'>
              <p className='learn'>Learn more</p>
              <i className="fi fi-rr-arrow-small-right"></i>
            </div>
          </div>
        </div>

        {/* 2nd card */} 
        <div className='work_main_card' data-aos="fade-up">
          <div className='work_card_inner_text'>
            <div className='img_card'>
              <Image
              src="/ca.png"
              alt=""
              width={200}
              height={150}/>
            </div>
            <div className='work_inner_card'>
              <p className='work_inner_card_para'>Great job! 5 Days Streak Achieved!</p>
              <p className='work_inner_card_para_two'>You're building a strong habit. <br />Keep going</p>
            </div>
          </div>
          <div className='work_card_white_part'>
            <p className='work_white_card_para'>Track & Monitor</p>
            <p className='work_white_card_paraSub'>Easily log what you eat,your daily activities, and even<br />Your consultation</p>
            <div className='work_white_learn'>
              <p className='learn'>Learn more</p>
              <i className="fi fi-rr-arrow-small-right"></i>
            </div>
          </div>
        </div>
        {/* 3rd  */}
        <div className='work_main_card' data-aos="fade-up" >
          <div className='work_card_inner_text'>
            <div className=''>
              <i className="fi fi-ss-bell"></i>
            </div>
            <div className='work_inner_card'>
              <p className='work_inner_card_para'>Reminder! </p>
              <p className='work_inner_card_para_two'>Time to move! A quick workout can boost  <br />your energy</p>
            </div>
          </div>
          <div className='work_card_white_part'>
            <p className='work_white_card_para'>Insights & Reminders</p>
            <p className='work_white_card_paraSub'>Never miss a neak log,workout,or doctors<br />appointment with AI-powered alerts</p>
            <div className='work_white_learn'>
              <p className='learn'>Learn more</p>
              <i className="fi fi-rr-arrow-small-right"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About