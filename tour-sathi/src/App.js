import React, { useState } from 'react'
import {BrowserRouter,Route,Router} from "react-router-dom"
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Program from './Components/Programs/Program'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Gallery from './Components/Gallery/Gallery'
import Testimonials from './Components/Testimonials/Testimonials'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import Login from './Components/Login/Login'


import Video from './Components/Video/Video'


const App = () => {
  const [playState,setPlayState]= useState(false);
  return (
    <div>
      
      <Navbar/>
      <Hero/>
      <div className='container'>
      <Title subtitle='our Service' title="What We Offer"/>
      <Program/>
      <About setPlayState={setPlayState}/>
      <Title subtitle='Gallery' title="Some Places To Visit"/>
      <Gallery/>
      <Title subtitle='testimonials' title="What Tourist Says"/>
      <Testimonials/>
      <Title subtitle='Contact Us' title="Get in Touch"/>
      <Contact/>
      <Title subtitle='login' title="login"/>
      <Login/>
      <Footer/>
      
      
       
      </div>
      <Video playState={playState} setPlayState={setPlayState}/>
      
      
      
    </div>
  )
}

export default App
