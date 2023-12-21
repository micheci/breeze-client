import React from 'react'
import dnaPic from '../Constants/adhdPics/dna.png'
import neuro from '../Constants/adhdPics/neuro.png'
import tree from '../Constants/adhdPics/tree.png'
import brainInjury from '../Constants/adhdPics/brainInjury.png'
import preg from '../Constants/adhdPics/preg.png'
import '../Styles/causes.css'

const Causes = () => {
  return (
    <div className="causesContainer border opacity-90 bg-purple-400 rounded-lg w-128 border-black flex  justify-center items-center p-8  ">
       

        <div className="causesList text-center   ">
            <ul>
                <div className="causesContainer mb-4 flex flex-col items-center ">
                    <img className='w-72 h-64' src={dnaPic} alt="" />
                   <li className='text-2xl'>Genetics</li> 
                </div>
                <div className="causesContainer mb-4  flex flex-col items-center ">
                <img className='w-72 h-64' src={neuro} alt="" />
                    <li className='text-2xl'>Neurological Factors</li>
                </div>
                <div className="causesContainer mb-4 flex flex-col items-center ">
                <img className='w-72 h-64'  src={tree} alt="" />
                    <li className='text-2xl'>Environmental Factors</li>
                </div>
                <div className="causesContainer mb-4 flex flex-col items-center ">
                <img className='w-72 h-64' src={brainInjury} alt="" />
                    <li className='text-2xl'>Brain injury/trauma</li>
                </div>
                <div className="causesContainer mb-4 flex flex-col items-center ">
                <img className='w-72 h-64' src={preg} alt="" />
                    <li className='text-2xl'>Complications during Pregancay/birth</li>
                </div>   
            </ul>
        </div>

    </div>
  )
}

export default Causes