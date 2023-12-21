import React from 'react'
import dnaPic from '../Constants/adhdPics/dna.png'
import neuro from '../Constants/adhdPics/neuro.png'
import tree from '../Constants/adhdPics/tree.png'
import brainInjury from '../Constants/adhdPics/brainInjury.png'
import preg from '../Constants/adhdPics/preg.png'

const Causes = () => {
  return (
    <div className="causesContainer border  w-128 border-black flex  justify-center items-center p-8  ">
       

        <div className="causesList text-center   ">
            <ul>
                <div className="causesContainer  flex flex-col items-center ">
                    <img className='w-72 h-64' src={dnaPic} alt="" />
                   <li>Genetics</li> 
                </div>
                <div className="causesContainer  flex flex-col items-center ">
                <img className='w-72 h-64' src={neuro} alt="" />
                    <li>Neurological Factors</li>
                </div>
                <div className="causesContainer  flex flex-col items-center ">
                <img className='w-72 h-64'  src={tree} alt="" />
                    <li>Environmental Factors</li>
                </div>
                <div className="causesContainer  flex flex-col items-center ">
                <img className='w-72 h-64' src={brainInjury} alt="" />
                    <li>Brain injury/trauma</li>
                </div>
                <div className="causesContainer  flex flex-col items-center ">
                <img className='w-72 h-64' src={preg} alt="" />
                    <li>Complications during Pregancay/birth</li>
                </div>


                
            </ul>
        </div>

    </div>
  )
}

export default Causes