import React from 'react'
import CustomButton from '../../Component/Button'
import './chooseStyle.scss'
import Image from "next/image"
import Card from '../../Component/Card'

const page = () => {
    return (
        <div className='choose_wrapper'>
            <div className='choose_btn' data-aos="fade-up">
                <CustomButton
                    text={"WHY CHOOSE HEALTH CARE"}
                    style={{
                        tb_button: "butn",
                    }} />
            </div>
            <div className='choose_para'>
                <p className='choose_main_para' data-aos="fade-up">Empowering Your Health Journey</p>
                <p className='choose_main_subpara' data-aos="fade-up">Discover a holistic health management system designed for your lifestyle.Explore five key feature that <br />make staying healthy easier and smart</p>
            </div>
            <div>
                <div className="card">
                    <Card
                        title="Expert Advice Anytime"
                        description="Get professional health advice through chat or video call. Connect with certified doctors for personalized guidance and care."
                        imageSrc="/videocall.png"
                        buttonText="Learn more"
                        aosDirection="fade-up-right"
                        style={{
                            choose_card: "choose_card",
                            choose_card_para: "choose_card_para",
                            choose_card_para_two: "choose_card_para_two",
                            choose_card_img: "choose_card_img"
                        }}
                    />
                    <div>
                        <Card
                            title="Insightful Health Summaries"
                            description="Access detailed report summarizing your activity trends, vital statistics, and personalized recommendations for better health."
                            imageSrc="/chart.png"
                            aosDirection="fade-up-left"
                            style={{
                                choose_card: "choose_card_two",
                                choose_card_para: "choose_card_para",
                                choose_card_para_two: "choose_card_para_two",
                                choose_card_img: "choose_card_img"
                            }}
                        />
                        <Card
                            title="Track Your Vital Signs"
                            description="Seamlessly connect with your smartwatch to monitor heart rate, steps, sleep patterns, and more. Stay informed about your health at a glance."
                            imageSrc="/smartwatch.png"
                            aosDirection="fade-up-left"
                            style={{
                                choose_card: "choose_card_three",
                                choose_card_para: "choose_card_para",
                                choose_card_para_two: "choose_card_para_two",
                                choose_card_img: "choose_card_watchimg",
                                img: "img"
                            }}
                        />
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