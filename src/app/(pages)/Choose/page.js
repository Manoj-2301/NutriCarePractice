import React from 'react'
import CustomButton from '../../Component/Button'
import './chooseStyle.scss'
import Image from "next/image"

const page = () => {
    return (
        <div className='choose_wrapper'>
            <div className='choose_btn'  data-aos="fade-up">
                <CustomButton
                    text={"WHY CHOOSE HEALTH CARE"}
                    style={{
                        tb_button: "butn",
                    }} />
            </div>
            <div className='choose_para'>
                <p className='choose_main_para'  data-aos="fade-up">Empowering Your Health Journey</p>
                <p className='choose_main_subpara'  data-aos="fade-up">Discover a holistic health management system designed for your lifestyle.Explore five key feature that <br />make staying healthy easier and smart</p>
            </div>
            <div>
                <div className='card'>
                    <div className='choose_card' data-aos="fade-up-right">
                        <div>
                            <p className='choose_card_para'>Expert Advice Anytime</p>
                            <p className='choose_card_para_two'>Get professional health advice<br /> through chat or video call.Connect<br /> with certified doctors for <br />personalized guidance and care</p>
                            <CustomButton
                                text={"Learn more"}
                                style={{
                                    tb_button: "btn"
                                }} />
                        </div>
                        <div className='choose_card_img'>
                            <Image
                                src="/videocall.png"
                                alt='doc'
                                width={350}
                                height={550}
                            />
                        </div>
                    </div>
                    <div>
                        <div className='choose_card_two'  data-aos="fade-up-left">
                            <div>
                                <p className='choose_card_para'>Insightful Health <br />Summaries</p>
                                <p className='choose_card_para_two'>Access detailed report summarizing your<br /> including activity trends,vital<br />statistics, and personalized <br />recommendations for better health</p>
                            </div>
                            <div className='choose_card_img'>
                                <Image
                                    src={"/chart.png"}
                                    alt='chart'
                                    width={350}
                                    height={200}
                                />
                            </div>
                        </div>
                        <div className='choose_card_three'  data-aos="fade-up-left">
                            <div>
                                <p className='choose_card_para'>Track Your Vital Signs</p>
                                <p className='choose_card_para_two'>Seamlessely connect with your smartwatch to<br />monitor heart rate, steps, sleep patterns, and more.<br />Stay informed about your health at a glance<br /></p>
                            </div>
                            <div className='choose_card_watchimg'>
                                <Image
                                    src={"/smartwatch.png"}
                                    alt='watch'
                                    width={310}
                                    height={310} />
                            </div>
                        </div>

                    </div>
                </div>
                <div className='second_card'>
                    <div className='card_second_row' data-aos="fade-up-right">
                        <div>
                            <p className='second_card_para'>Never Miss a Dose </p>
                            <p className='second_card_subpara'>Set reminder for medication and health checkups.Manage<br />your health effortlessely with timely notification</p>
                        </div>
                        <div className='second_card_inner_card'>
                            <div>
                                <p className='second_card_para'>Medication</p>
                                <p className='second_card_parasub'>Next dose in 2 hours (4:00 PM)</p>
                                <p className='second_card_medicine'>💊 Ibuprofen 200 mg</p>
                                <p className='second_card_medicine'>💊 Vitamin S 1,000 IU</p>
                            </div>
                        </div>
                    </div>
                    <div className='card_second_row_two' data-aos="fade-up-left">
                        <div>
                            <p className='second_card_para'>Nutrition Tailored for you </p>
                            <p className='second_card_subpara'>Receive meal recommendations based on your goals,dietary prefrence, and <br />health condition. Eating healthy has never been simpler</p>
                        </div>
                        <div className='second_card_inner_card'>
                            <div>
                                <p className='second_card_para'>Nutrition</p>
                                <p className='second_card_paraSub'>🔥800 Kcal</p>
                                <p className='second_card_consumed'>Consumed Today</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page