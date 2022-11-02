import { useEffect, useState } from "react";
import Hangman from "./components/Hangman";
import Keyboard from "./components/Keyboard";
import Status from "./components/Status";
import Words from "./components/Words";
import {words} from './wordList'

function App() {
  const [start,setStart]=useState(true);
  const [tries,setTries]=useState(0);
  const [wordToGuess,setWordToGuess]=useState<string[]>([])
  const [finalWord,setFinalWord]=useState('')
  const [count,setCount]=useState(0)
  const [status,setStatus]=useState('')
  const Start=()=>{
    setTries(0)
    setStart(false)
    const newWord=words[Math.floor(Math.random()*words.length)]
    setFinalWord(newWord)
    setCount(0)
    const newArr=Array(newWord.length).join('.').split('.')
    setWordToGuess(newArr)
    setStatus('')
  }

  const guess=(letter:string)=>{
    if(finalWord.split('').includes(letter)){
      setWordToGuess((p:string[])=>{
        let index:number[]=[]
        finalWord.split('').map((x,i)=>x===letter?index.push(i):x)
        return p.map((x,i)=>index.includes(i)?x=letter:x)
      })
    }else{
      setTries(p=>p+1)
      if(tries>4){
        setStatus(`You LOST! Word was '${finalWord.toUpperCase()}'`)
        setStart(true)
        
      }
    }
  }

  useEffect(()=>{
    if(wordToGuess.every(x=>x!=='') && !start){
      setStatus('You WON!')
      setStart(true)
      setCount(p=>p+1)
    }
  },[wordToGuess])
  return (
    <div className="text-center relative">
        <div className="absolute top-2 left-2 text-xl font-bold">{count}</div>
        <Status status={status} count={count} Start={Start} start={start}/>
        <Hangman tries={tries}/> 
        <Words wordToGuess={wordToGuess}/>
        <Keyboard guess={guess} start={start}/>
    </div>
  );
}

export default App;
