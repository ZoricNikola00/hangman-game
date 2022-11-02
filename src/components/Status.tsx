
type Data={
    status:string,
    count:number,
    start:boolean,
    Start:()=>void
}
const Status = ({start,status,Start,count}:Data) => {
  return (
    <div className={`fixed flex justify-center top-0 left-0 h-full w-full z-20 transition duration-300 ${start?'z-20 opacity-100':'-z-20 opacity-0'}`}>
        <div className="fixed top-60 rounded-lg bg-white p-4 z-30">
            <h1 className={`${status.split(' ').includes('WON!')?'opacity-100 bg-green-600':status.split(' ').includes('LOST!')?'opacity-100 bg-red-600':'opacity-0'} transition duration-300 w-[300px] rounded font-bold text-3xl p-4 px-8`}>{status}</h1>
            <p className='text-2xl'>Points:<span className='text-3xl font-bold ml-2'>{count}</span></p>
            <button className="bg-blue-600 text-lg font-bold rounded my-2 p-4" onClick={Start}>Start</button>
        </div>
    </div>
  )
}

export default Status