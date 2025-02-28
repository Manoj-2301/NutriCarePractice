import React from 'react'
import './homeStyle.scss'
import CustomButton from '../../Component/Button'
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { FaApple } from "react-icons/fa";
import Image from 'next/image';

const page = () => {
  return (
    <div className='main_Content'>
      <div data-aos="fade-up" className='main_wrapper' >
        <div className='main_btn'>
          <CustomButton
            text={"WHY CHOOSE HEALTH CARE"}
            style={{
              tb_button: "btan",
              tb_icon: "icon",
              btn_text: "text",
              displaybtn: "displaybtn",
              subtext: "subtext"
            }} />
        </div>
        <div className='main_para'>
          <p className='main_para_one'>Your Health,Our Priority</p>
          <p>Comprehensive care tailored for your well-being, anytime and anywhere</p>
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
        <div className='main_img_content'>
          <Image className='mockup_img'
            src={"/mockup.png"}
            alt="image"
            sizes='100vw'
            fill
          />
          <div className='main_img_card'>
            <div className='main_img_para'>
              <p>Available Doctors</p>
            </div>
            <div className='main_img_doc'>
              <p className='main_img'>
                <Image
                  src="/doc1.jpg"
                  alt='doc'
                  sizes='100vw'
                  fill />
              </p>
              <p className='main_img_two'>
                <Image className='img'
                  src="/doc3.jpg"
                  alt='doc'
                  sizes='100vw'
                  fill />
              </p>
              <p className='main_img_three'>
                <Image
                  src="/doc1.jpg"
                  alt='doc'
                  sizes='100vw'
                  fill />
              </p>
              <p className='main_img_four'>
                <Image
                  src="/doc3.jpg"
                  alt='doc'
                  sizes='100vw'
                  fill />
              </p>
              <p className='main_img_doc_para'>+10</p>
            </div>
            <div className='ongoing'>
              <div className='ongoing_para'>
                <p>Ongoing Consultation</p>
                <p className='ongoing_para_two'>"How to manage Balanced Diet?"</p>
              </div>
              <i className="fi fi-rs-arrow-up-right"></i>
            </div>
            <div className='second_img'>
              <Image
                src="/month.png"
                alt="alu"
                sizes='100vw'
                fill
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page