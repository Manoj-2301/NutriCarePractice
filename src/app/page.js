import Main from "./(pages)/Home/page"
import About from "./(pages)/About/page";
import Choose from './(pages)/Choose/page';
import Partner from './(pages)/Partner/page';
import Testimonial from './(pages)/Testimonial/page';
import Questions from './(pages)/FAQ/page'

export default function Home() {
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
