import React from 'react'
import InfoBox from '../Components/InfoBox'
import Causes from '../Components/Causes'
import adhdHero from '../Constants/anxietyPics/anxietyHer.jpg'
import '../Styles/causes.css'
import Treatment from '../Components/Treatment'
import trauma from '../Constants/anxietyPics/trauma.png'

import neuro from '../Constants/adhdPics/neuro.png'
import tree from '../Constants/adhdPics/tree.png'
import brainInjury from '../Constants/adhdPics/brainInjury.png'
import preg from '../Constants/adhdPics/preg.png'

const generalizedAnxiety={
  name:'Generalized Anxiety Disorder',
  description:"Characterized by excessive worry and fear about everyday events or activities. Individuals with GAD often have trouble controlling their worry and may experience physical symptoms such as muscle tension, restlessness, and difficulty concentrating.",
  bulletPoints:[
    'Excessive Worry: Constant, uncontrollable worry about various aspects of life.',
    'Restlessness: Feeling on edge or restless.',
    'Fatigue: Tiredness and lack of energy.',
    'Muscle Tension: Physical tension or aches, especially in the neck, shoulders, and back.',
    'Irritability: Easily becoming agitated or annoyed.'
  ],
}
const socialAnxiety={
  name:'Social Anxiety Disorder',
  description:"characterized by an intense and persistent fear of social or performance situations. Individuals with social anxiety fear negative evaluation by others and may go to great lengths to avoid social interactions or situations where they feel they could be scrutinized or embarrassed.",
  bulletPoints:[
    'Intense Fear: Overwhelming fear of social situations or performance activities.',
    'Avoidance: Actively avoiding social gatherings, parties, or public speaking engagements',
    'Negative Self-Evaluation: Excessive worry about being judged or humiliated in social settings.',
    'Difficulty Making Eye Contact: Avoiding eye contact due to fear of judgment or criticism.',
    'Isolation: Social withdrawal and a preference for solitary activities to avoid social interactions.',
    'Rumination: Excessive self-consciousness and post-event analysis of social interactions.',
    'Impaired Daily Functioning: Interference with daily activities, work, or relationships due to anxiety.',
    'Performance Anxiety: Fear of being scrutinized or negatively evaluated during tasks like public speaking or eating in public.'
  ],
}
const panicAnxiety={
  name:'Panic Disorder',
  description:"Panic Disorder is a type of anxiety disorder characterized by recurrent and unexpected panic attacks—intense episodes of fear or discomfort that reach a peak within minutes. Individuals with panic disorder often live in fear of experiencing another panic attack and may make significant changes to their lifestyle to avoid potential triggers.",
  bulletPoints:[
    'Panic Attacks: Sudden and overwhelming surges of intense fear or discomfort.',
    'Physical Symptoms: Accompanied by physical sensations such as heart palpitations, sweating, trembling, shortness of breath, chest pain, and dizziness.',
    'Fear of Losing Control: Feeling as if one is losing control or going crazy during a panic attack.',
    'Avoidance Behavior: Making significant changes to daily activities or environments to avoid situations that may trigger panic attacks.',
    'Anticipatory Anxiety: Persistent worry and fear of the next panic attack.',
    'Cognitive Symptoms: Racing thoughts, difficulty concentrating, and a sense of impending doom.',
    'Sleep Disturbances: Disrupted sleep patterns due to anxiety about nighttime panic attacks.',
    'Isolation: Social withdrawal to avoid potential triggers or embarrassment during a panic attack.'
  ],
}
const phobiasAnxiety={
  name:'Phobias',
  description:"Specific Phobias are a type of anxiety disorder characterized by intense and irrational fears of specific objects, situations, or activities. Individuals with specific phobias experience overwhelming anxiety and often go to great lengths to avoid the source of their fear.",
  bulletPoints:[
    'Intense Fear: Immediate and intense fear triggered by a specific stimulus (object or situation).',
    'Avoidance Behavior: Actively avoiding the phobic stimulus or enduring it with extreme distress.',
    'Physical Symptoms: Experiencing physical reactions such as trembling, sweating, rapid heartbeat, and nausea when confronted with the phobia.',
    'Recognition of Irrationality: Individuals often recognize that their fear is excessive or unreasonable.',
    'Impact on Daily Life: Interference with daily activities, work, or social relationships due to the need to avoid the phobic stimulus.',
    'Immediate Anxiety Response: Anxiety or panic attacks can occur rapidly upon exposure to the specific phobia.',
    'Subtypes: Common specific phobias include fear of heights (acrophobia), flying (aviophobia), animals (zoophobia), needles (trypanophobia), and more.',
    'Triggered Reaction: The fear response is consistently triggered by the specific stimulus, even if it poses little or no actual danger.'
  ],
}
const anxietyCausesData=[{
  name: 'Anxiety Causes ',
  images: [trauma, neuro, tree, brainInjury, preg],
  description: ['Trauma and Stressful Life Events','Nuero','Environmental','Brain Injury','Pregnancy'],
}]

const Anxiety = () => {
  return (
    <div className="flex bg-purple-200 flex-col justify-center ">
    {/* TItle/definition */}
    <h1 className='text-center text-6xl mt-6 '>Anxiety</h1>
    <p className='text-center text-2xl mb-12'>Persistent, Excessive Worry and Tension.</p>
      <div className="definition mx-auto sm:w-full md:w-3/4 lg:w-1/2 xl:w-64rem mb-6">
        <h3 className='text-center text-3xl mb-1'>Understanding Anxiety</h3>
        <p className=' text-center text-xl'> Anxiety is a common mental
         health condition that can affect people of all ages. It goes
          beyond normal stress and can interfere with daily life. Individuals with 
          anxiety may experience persistent worry, fear, and heightened stress responses.
           It can manifest in various forms, such as Generalized Anxiety Disorder (GAD), Social Anxiety, or Panic Disorder. Recognizing and addressing anxiety is crucial for promoting mental well-being and improving overall quality of life.</p>
      </div>
    {/* IMAGE */}
      <div className="flex mb-6 items-center justify-center">
        <img className='w-48' src={adhdHero} alt="" />
      </div>    
    {/*Types  */}
      <div className="typeHeader  text-3xl mb-4 text-center">
      <h1>Types of ADHD</h1>

      </div>
      <div className="info flex flex-col items-center justify-center mx-auto mb-6">
        <div className="flex gap-4 justify-center mb-4">
          <InfoBox {...generalizedAnxiety} />
          <InfoBox {...socialAnxiety} />
        </div>
        <div className="flex justify-center gap-4">
          <InfoBox {...panicAnxiety} />
          <InfoBox {...phobiasAnxiety} />
        </div>
      </div>

      
      <div className="causes flex justify-center flex-col mb-6 items-center ">
        <h1 className='text-3xl mb-2'>What Causes this?</h1>      
        <div className="cloud1"></div>
        <div className="cloud2"></div>
        <div className="cloud3"></div>
        <div className="cloud4"></div>
        <Causes  title="Causes Title" causes={anxietyCausesData}/>
      </div>

      {/* Treatment */}
      <div className="treatment flex justify-center mx-auto sm:w-full md:w-3/4 lg:w-1/2 xl:w-64rem  text-center flex-col mb-6 items-center ">
          <h1 className='text-3xl mb-4'>Treatments</h1>
          {/* <Treatment {...treatmentData}/> */}
      </div>
    


  </div>
  )
}

export default Anxiety