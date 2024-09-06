import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Signup from './component/Signup'
import Login from './component/Login'
import Nabar from './component/Nabar'
import { Route, Routes } from 'react-router-dom'
import Statebasics from './component/Statebasics'
import  Counter  from './component/Counter'
import Name from './component/Name'
import Api from './component/Api'
import Pockemon from './component/Pockemon'

function App() 
{
  const [count, setCount] = useState(0)

  return (
    <>
    <Nabar/>
    <Routes>
      <Route path='/' element={<Signup/>}/>
      <Route path='/Login' element={<Login/>}/>
      <Route path='/s' element={<Statebasics/>}/>
      <Route path='/C' element={<Counter/>}/>
      <Route path='/n' element={<Name/>}/>
      <Route path='/f' element={<Api/>}/>
      <Route path='/p' element={<Pockemon/>}/>
      </Routes>
      
</>
  )
}


export default App
