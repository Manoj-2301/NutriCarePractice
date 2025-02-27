"use client"
import Main from "./(pages)/Home/page"
import About from "./(pages)/About/page";
import Choose from './(pages)/Choose/page';
import Partner from './(pages)/Partner/page';
import Testimonial from './(pages)/Testimonial/page';
import Questions from './(pages)/FAQ/page'
import { React, useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
export default function Home() {
  useEffect(() => {
    AOS.init({
         duration: 800,
         once: false,
       })
 }, [])
  return (
   <div>
    <Main/>
    <Choose/>
    <Partner/>
    <About/>
    <Testimonial/>
    <Questions/>

   </div>
  );
}
