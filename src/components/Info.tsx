import {FaTimes} from 'react-icons/fa'
type definit={
    partOfSpeech:string,
    definitions:any[]
}
type Data={
    showInfo:boolean,
    setShowInfo:(p:boolean)=>void,
    data:definit[]
}
const Info = ({showInfo,setShowInfo,data}:Data) => {
    window.addEventListener('click',(e:any)=>{
        if(e.target.dataset.close==='close'){
            setShowInfo(false)
        }
    })
  return (
    <div data-close='close' className={`${showInfo?'z-20 opacity-100':'-z-20 opacity-0'} bg-black/30 transition-opacity duration-500 ease-linear flex justify-center items-center fixed w-full h-full left-0 top-0 `}>
        <div className={`${showInfo?'z-30 pacity-100':'-z-20 opacity-0'} p-2 rounded bg-white border-2 border-black  w-[300px]`}>
            <div className='cursor-pointer' onClick={_=>setShowInfo(false)}><FaTimes/></div>
            <h1 className='font-bold text-lg'>HINTS</h1>
            {data?.map((x,i)=>{
            const {partOfSpeech,definitions}=x

            return <div key={i} className='border-2 border-black m-2 rounded p-2'>
                        <h1 className='uppercase'>{partOfSpeech}</h1>
                        <p className='text'>{definitions[0]?.definition}</p>
                    </div>
            })}</div>
    </div>
  )
}

export default Info