import React from 'react'

import '../Styles/causes.css'

interface Cause {
    name: string;
    images: string[]; // Array of image paths
    description: string[];
  }

interface causesProps{
    title: string;
    causes: Cause[];
}

const Causes :React.FC<causesProps>= ({title,causes}) => {
  return (
<div className="causesContainer border opacity-90 bg-purple-400 rounded-lg w-2/3 mx-auto border-black p-8">
  <div className="causesList text-center">
    {causes.map((cause, causeIndex) => (
      <div key={causeIndex} className="flex flex-col items-center mb-4">
        <h3 className='text-2xl'>{cause.name}</h3>
        <div className="flex flex-wrap justify-center gap-4">
          {cause.images.map((image, imageIndex) => (
            <div key={imageIndex} className="imageContainer">
              <img className='w-72 h-64' src={image} alt="" />
              <p className='text-xl'>{cause.description[imageIndex]}</p>
            </div>
          ))}
        </div>
      </div>
    ))}
  </div>
</div>

  
  
  
  )
}

export default Causes