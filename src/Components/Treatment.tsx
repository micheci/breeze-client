import React from 'react'

interface InfoBoxProps{
    treatment:string;
    
    bulletPoints:string[];
}


const Treatment :React.FC<InfoBoxProps>= ({treatment,bulletPoints}) => {
  return (
    <div className='text-xl'>
         <p className='mb-4'>{treatment}</p>
        <ul className='list-disc list-inside'>
        {bulletPoints.map((point, index) => (
        <li key={index}>{point}</li>
      ))}
        </ul>
       
    </div>
  )
}

export default Treatment