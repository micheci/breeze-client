import React,{useState} from 'react'

const Chat = () => {

  const [text,setText]=useState('');

  const handleClick=(e:React.MouseEvent<HTMLFormElement>)=>{
    e.preventDefault();
    console.log(text)
    
  }

  return (
    <div className='flex flex-col justify-center  items-center'>
      <div className="chatResponse border w-3/4 h-screen bg-gray-400 border-black p-2 rounded-md  ">
        
        <h1>test</h1>
        <h1>test</h1>
        <h1>test</h1>

      </div>

      <form onSubmit={handleClick} className='w-full flex justify-center '>
      <label htmlFor="text"></label>
      <input placeholder='Whats on your mind?' className=' border border-gray-300 p-2 rounded-md focus:outline-none focus:border-blue-500' type="text" value={text} onChange={(e)=>setText(e.target.value)} />
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Submit</button>
      </form>
    </div>
  )
}

export default Chat