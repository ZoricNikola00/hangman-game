import {useState,useEffect} from 'react'

type Data={
    guess:(l:string)=>void,
    start:boolean,
    k:string
  }

const Key = ({guess,start,k}:Data) => {
    const [clicked,setClicked]=useState(false)

    useEffect(()=>{
        setClicked(false)
    },[start])
  return (
    <div onClick={_=>{guess(k);setClicked(true)}} className={`${clicked?'bg-gray-700':'bg-gray-400'} ${clicked && 'pointer-events-none'}  m-1 w-14 h-14 rounded flex justify-center cursor-pointer transition duration-300 active:scale-95 hover:bg-gray-700 hover:text-white items-center font-bold`}>{k.toUpperCase()}</div>
  )
}

export default Key