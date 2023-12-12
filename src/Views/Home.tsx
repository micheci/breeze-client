import React from 'react'
import Navbar from '../Components/Navbar'
import Hero from '../Components/Hero'
import Benefits from '../Components/Benefits'
import ChatBot from '../Components/ChatBot'

const Home = () => {
  return (
    <div>
        <div className="bg-black flex-col flex-grow">
          <Hero/>
          <Benefits/>
          <ChatBot/>
        </div>
    </div>
  )
}

export default Home