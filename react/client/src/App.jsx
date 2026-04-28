import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import axios from 'axios'

function App() {
  const [count, setCount] = useState(0)

    const fecthData = async()=>{
      const res = await axios.get('http://localhost:3000/')
      console.log(res);
    }

    useEffect(()=>{
      fecthData();
    },[]);

  return (
    <>
      <div className='text-red-500'>
        hello
        </div>  
    </>
  )
}

export default App
