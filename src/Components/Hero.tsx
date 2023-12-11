import React from 'react'
import wave from '../Constants/wave.png'
import smileCloud from '../Constants/smileCloud.png'
import '../Styles/hero.css'

const Hero = () => {
  return (
    <div>
      
        <div id='hero' className='flex justify-between py-20 '>

          {/* Left side of the Hero aka the Hero text */}
          <div className="left w-1/2 flex justify-center items-center">
            <div className="heroTextContainer">
              <h1 className='text-5xl font-bold text-center'>Welcome to Breezy</h1>
              <h3 className='text-2xl text-center'>Its time to be happy</h3>
              <p className='py-3 textWidth text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
          </div>

          {/* Right side of hero aka the 3 cloud images */}
          <div className="right w-1/2 flex-column ">
            <div className="top flex items-center justify-center p-3 h-1/2">
            <img className='w-64' src={smileCloud} alt="" />

            </div>
            <div className="bot flex items-center justify-center  h-1/2">
            <img className='w-64 px-3' src={smileCloud} alt="" />
            <img className='w-64 px-3' src={smileCloud} alt="" />

            </div>
          </div>
        </div>

<div className=" ">
        <img className="w-full bottomBGBanner " src={wave} alt="bottom wave " />
        </div>
    </div>
  )
}

export default Hero