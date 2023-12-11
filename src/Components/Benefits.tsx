import React from 'react'
import spaceView from '../Constants/spaceView.mp4';
import '../Styles/benifits.css'


const Benefits = () => {
  return (
    <div className="benefitsContainer">
    <div className='py-12 h-screen text-white flex justify-between'>
        <div className="text-5xl font-bold text-center left w-1/2 flex flex-col justify-center space-y-20 items-between">
            <h1>Whats bothering you?</h1>
            <p>Take a deep breath, life is so short, dont take it so seriously</p>
        </div>
        <div className="right w-1/2 flex justify-center items-center">
        <video autoPlay loop muted className=" video object-cover  border border-black-500 rounded-full">
          <source src={spaceView} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        </div>
        
    </div>

    </div>
  )
}

export default Benefits