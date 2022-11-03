import React from 'react'
type Data={
    wordToGuess:string[]
}
const Words = ({wordToGuess}:Data) => {
  return (
    <div className='flex justify-center w-[300px] mx-auto'>
        {wordToGuess && wordToGuess.map((word,i)=>{
            return <div key={i} className={`text-black mx-1 w-[30px] sm:w-[60px] text-center text-4xl sm:text-6xl\ p-3 border-b-4 border-black`}><span className={`${word?'opacity-100':'opacity-0'}`}>{word?word.toUpperCase():'*'}</span></div>
        })}
    </div>
  )
}

export default Words