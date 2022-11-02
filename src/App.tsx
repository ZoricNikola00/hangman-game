import { useState } from "react";
import Hangman from "./components/Hangman";
import {words} from './wordList'

function App() {
  const [start,setStart]=useState(false);
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
    const newArr=Array(newWord.length).join('.').split('.')
    setWordToGuess(newArr)
    setStatus('')
  }
  return (
    <div className="text-center">
        
        <Hangman tries={tries}/>  
    </div>
  );
}

export default App;
