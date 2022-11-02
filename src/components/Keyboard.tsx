import Key from "./Key"

const keys = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ]
  type Data={
    guess:(l:string)=>void,
    start:boolean
  }
const Keyboard = ({guess,start}:Data) => {

  return (
    <div className="flex mx-auto flex-wrap items-start justify-center mt-2 max-w-[750px]">
        {keys.map((k,i)=>{
            return <Key key={i} start={start} k={k} guess={guess}/>
        })}
    </div>
  )
}

export default Keyboard