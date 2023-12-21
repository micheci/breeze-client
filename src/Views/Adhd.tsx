import React from 'react'
import InfoBox from '../Components/InfoBox'
import Causes from '../Components/Causes'
import adhdHero from '../Constants/adhdPics/adhdHero.png'
import '../Styles/causes.css'

const Adhd = () => {
    const innatentiveData={
        name: 'Inattentive',
        description: 'A person with this type must have at least six of these nine symptoms, and very few of the symptoms of hyperactive-impulsive type:',
        bulletPoints: [
          'miss details and are distracted easily',
          'get bored quickly',
          'have trouble focusing on a single task',
          'have difficulty organizing thoughts and learning new information',
          'lose pencils, papers, or other items needed to complete a task',
          'don’t seem to listen',
          'move slowly and appear as if they’re daydreaming',
          'process information more slowly and less accurately than others'
  
        ],
    }
    const hyperactivityData={
        name: 'HyperActivity',
        description: 'Getting distracted, having poor concentration and organizational skills',
        bulletPoints: [
         'squirm, fidget, or feel restless',
          'have difficulty sitting still',
         'talk constantly',
         'touch and play with objects, even when inappropriate to the task at hand',
         'have trouble engaging in quiet activities',
         'are constantly “on the go”',
         'are impatient',
         'act out of turn and don’t think about consequences of actions'

        ],
    }

  return (
     <div className="flex bg-purple-200 flex-col justify-center ">
      {/* TItle/definition */}
      <h1 className='text-center text-6xl mt-6 '>ADHD</h1>
      <p className='text-center text-2xl mb-12'>constant distraction and restlessness</p>
        <div className="definition mx-auto w-64rem mb-6">
          <h3 className='text-center text-3xl mb-1'>What is ADHD?</h3>
          <p className=' text-center text-xl'> Attention Deficit Hyperactivity Disorder (ADHD) is a
              neurodevelopmental disorder that affects both children and adults. It is characterized by persistent patterns of inattention, hyperactivity, and impulsivity that can impact various aspects of daily life. The symptoms of ADHD can manifest in different ways and can be categorized into two main types: inattentive type
              ,hyperactive-impulsive type, or a combination of both.</p>
        </div>
      {/* IMAGE */}
        <div className="flex mb-6 items-center justify-center">
          <img className='w-36' src={adhdHero} alt="" />
        </div>    
      {/*Types  */}
        <div className="typeHeader  text-3xl mb-4 text-center">
        <h1>Types of ADHD</h1>

        </div>
        <div className="info  justify-center flex gap-4 mb-6 ">
            <InfoBox {...innatentiveData} />
            <InfoBox {...hyperactivityData} />
        </div>
        
        <div className="causes flex justify-center flex-col items-center ">
          <h1 className='text-3xl mb-2'>What Causes this?</h1>      
          <Causes/>
        </div>

    </div>
  )
}

export default Adhd