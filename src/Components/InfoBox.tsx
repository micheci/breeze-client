import React from 'react'

interface InfoBoxProps{
    name:string;
    description:string;
    bulletPoints:string[];
}

const InfoBox : React.FC<InfoBoxProps>= ({name,description,bulletPoints}) => {
  return (
    <div className="info-box border-solid border-2 border-black rounded-lg p-4 w-full bg-purple-400  md:w-1/2 lg:w-1/3 xl:w-1/4">
    <h2 className="text-center">{name}</h2>
    <p>{description}</p>
    <ul className="list-disc pl-4">
      {bulletPoints.map((point, index) => (
        <li key={index}>{point}</li>
      ))}
    </ul>
  </div>
  )
}

export default InfoBox