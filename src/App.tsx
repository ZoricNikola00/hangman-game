import { useState } from "react";


function App() {
  const [start,setStart]=useState(false);
  const [tries,setTries]=useState(0);
  const [wordToGuess,setWordToGuess]=useState('')
  const [finalWord,setFinalWord]=useState('')
  const [count,setCount]=useState(0)
  return (
    <div className="text-center">
            
    </div>
  );
}

export default App;
