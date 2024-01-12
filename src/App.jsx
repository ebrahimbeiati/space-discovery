import React from 'react'
import bg from '/images/bg.png'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Satellite from './components/Satellite'
import Services from './components/Services'
import SpaceCast from './components/SpaceCast'
import { AOS } from "aos";
import 'aos/dist/aos.css'


//Aos

const App = () => {
  React.useEffect(() => {
    setTimeout(() => {
      AOS.init({
        duration: 1200,
        easing: "ease-in-out",
      });
    }); // Adjust the delay as needed
  });

  return (
    <div>
      <div className='h-[700px] relative'>

        <img src={bg} alt=""
          className=" object-cover fixed right-0 h-[700px] w-full z-[-1]"
          style={{ filter: 'brightness(0.5)' }}

        />
        <Navbar />
        <Hero />
        
        
      </div>
      <Services />
      <SpaceCast />
      <Satellite />
      <Footer/>
    </div>
  )
}

export default App
