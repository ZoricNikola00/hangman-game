import React from 'react'
type Data={
    tries:number
}
const Hangman = ({tries}:Data) => {
  return (
    <div className='mx-auto w-[300px] h-[300px] relative'>
        <div className='bg-black w-[200px] left-0 h-1 absolute bottom-0'></div>
        <div className='bg-black h-[250px] left-[100px] w-1 absolute bottom-0'></div>
        <div className='bg-black w-[150px] left-[100px] h-1 absolute bottom-[250px]'></div>
        <div className='bg-black w-1 h-[40px] left-[246px] absolute bottom-[210px]'></div>
        {tries > 0 && <div className='bg-white w-[50px] h-[50px] border-4 border-black left-[223px] absolute rounded-full bottom-[160px]'></div>}
        {tries > 1 && <div className='bg-black w-1 h-[80px] left-[246px] absolute bottom-[80px]'></div>}
        {tries > 2 && <div className='bg-black w-1 h-[50px] left-[228px] absolute rotate-[-45deg] bottom-[120px]'></div>}
        {tries > 3 && <div className='bg-black w-1 h-[50px] left-[262px] absolute rotate-[45deg] bottom-[120px]'></div>}
        {tries > 4 && <div className='bg-black w-[50px] h-1 left-[242px] absolute rotate-[45deg] bottom-[61px]'></div>}
        {tries > 5 && <div className='bg-black w-[50px] h-1 left-[205px] absolute rotate-[-45deg] bottom-[61px]'></div>}
    </div>
  )
}

export default Hangman