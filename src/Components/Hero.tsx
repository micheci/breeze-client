import React from 'react'
import wave from '../Constants/wave.png'
import '../Styles/hero.css'

const Hero = () => {
  return (
    <div>
      
        <div id='hero' className='flex justify-between items-center'>
          <div className="left">
            <h1>Welcoem to Breezy</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
               dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
          <div className="right">
            <img src="" alt="" />
          </div>
        </div>
        <img className="w-full" src={wave} alt="bottom wave " />
        
    </div>
  )
}

export default Hero