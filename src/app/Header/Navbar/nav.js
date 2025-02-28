"use client"
import React, { useEffect, useState } from 'react'
import CustomButton from '../../Component/Button'
import Image from "next/image"
import "./navStyle.scss"
import Link from 'next/link'

const nav = () => {
    const [Scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 1) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    return (
        <div className={`nav ${Scrolled ? "scrolled" : ""}`}>
            <div className='nav_list'>
                <div className='nav_item'>
                    <Image
                        src={"/logo.svg"}
                        alt='logo'
                        width={40}
                        height={40} />
                    <Link href={"/"} className='nav_brand_name'>NutriCare</Link>
                </div>
                <div className='nav_link' >
                    <Link href={"/"}>Home</Link>
                    <Link href={"/About"}>About</Link>
                    <Link href={"/Testimonial"}>Testimoni</Link>
                    <Link href={"/FAQ"}>FAQ</Link>
                </div>
                <div>
                    <CustomButton
                        text={"Get Started"}
                        style={{
                            tb_button: "button"

                        }}
                    />
                </div>
            </div>
        </div >
    )
}

export default nav