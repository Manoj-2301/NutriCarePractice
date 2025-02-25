import React from 'react'
import './homeStyle.scss'
import CustomButton from '../../Component/Button'
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { FaApple } from "react-icons/fa";
import Image from 'next/image';

const page = () => {
  return (
    <div className='main_Content'>
      <div className='main_wrapper'>
        <div className='main_btn'>
          <CustomButton
            text={"WHY CHOOSE HEALTH CARE"}
            style={{
              tb_button: "btn",
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
          <Image
            src={"/mockup.png"}
            alt="image"
            width={800}
            height={1000}
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
                  width={70}
                  height={70} />
              </p>
              <p className='main_img_two'>
                <Image
                  src="/doc3.jpg"
                  alt='doc'
                  width={70}
                  height={70} />
              </p>
              <p className='main_img_three'>
                <Image
                  src="/doc1.jpg"
                  alt='doc'
                  width={70}
                  height={70} />
              </p>
              <p className='main_img_four'>
                <Image
                  src="/doc3.jpg"
                  alt='doc'
                  width={70}
                  height={70} />
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
                width={350}
                height={250}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page