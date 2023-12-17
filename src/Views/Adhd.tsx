import React from 'react'
import InfoBox from '../Components/InfoBox'

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
        name: 'Example Box',
        description: 'This is a sample box with a name, description, and bullet points.',
        bulletPoints: [
          'Bullet point 1',
          'Bullet point 2',
          'Bullet point 3',
        ],
    }

  return (
     <div className="flex  flex-col justify-center ">
        <div className="definition">
        <p>Attention Deficit Hyperactivity Disorder (ADHD) is a
            neurodevelopmental disorder that affects both children and adults. It is characterized by persistent patterns of inattention, hyperactivity, and impulsivity that can impact various aspects of daily life. The symptoms of ADHD can manifest in different ways and can be categorized into two main types: inattentive type
        , hyperactive-impulsive type, or a combination of both.</p>

        </div>
        <div className="typeHeader text-center">
        <h1>Types of ADHD</h1>

        </div>
        <div className="info  justify-center flex gap-4 ">
            <InfoBox {...innatentiveData} />
            <InfoBox {...hyperactivityData} />
        </div>
    </div>
  )
}

export default Adhd