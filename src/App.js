
import { useEffect, useState } from 'react';
import './App.css';
import alaram from './alarm.wav';

function App() {
  const [time,setTime]  = useState(10)
  const [isActive,setIsActive] = useState(false)

  const alaramSound = new Audio(alaram)
  const extractMinutes = ()=>{
    const currentTime = time

   const  currentMinutes = Math.floor(currentTime/60)
    return currentMinutes
  }


  const extractSeconds =  ()=>{
    const currentTime = time

    const  currentSeconds = currentTime%60
     return currentSeconds
  }


  const updateTime = ()=>{

    if(time>0 && isActive){
      setTime((prev)=>prev-1)
    }
    else if(time===0){
      alaramSound.play()
    }

  }

  useEffect(()=>{
    const intervalId = setInterval(updateTime,1000)
    return ()=>{
      clearInterval(intervalId)
    }
  },[isActive,time])

  return (
    <div className="App">
        <h1>{
          `${extractMinutes()} : ${extractSeconds()}`
          }</h1>
        <button className='btn1' onClick={()=>setIsActive(true)}><b>start</b></button>
        <button className='btn2' onClick={()=>setIsActive(false)}><b>pause</b></button>
        <button className='btn3' onClick={()=>(false)}><b>Customise timer</b></button>
    </div>
  );
}


export default App;
