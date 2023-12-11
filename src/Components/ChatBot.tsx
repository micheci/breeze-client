import React from 'react'
import '../Styles/chatBot.css'
import spaceView from '../Constants/spaceView.mp4';



const ChatBot = () => {
  return (
    <div className='chatBotContainer flex '>
        <div className="left w-1/2 flex justify-center items-center">
        {/* <video autoPlay loop muted className=" video object-cover  border border-black-500 rounded-full">
          <source src={spaceView} type="video/mp4" />
          Your browser does not support the video tag.
        </video> */}
        </div>
        <div className=" w-1/2 right flex justify-center items-center">
            <h1>Chat with your own AI therapist </h1>
            <p>Be judgement free</p>
            <p>How do you really feel</p>
        </div>
      
    </div>
  )
}

export default ChatBot