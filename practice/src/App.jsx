import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { lazy, Suspense} from 'react'
import {BrowserRouter, Route, Routes, useNavigate} from "react-router-dom"
const Dashboard = lazy(() => import('./Components/Dashboard'))
const Landing = lazy(() => import('./Components/Landing'))

function App() {
  return (
    <div>
      <BrowserRouter>
        <Appbar/>
        <Routes>
          <Route path='/' element={<Suspense fallback={"loading"}><Landing/></Suspense>}></Route>
          <Route path='/dashboard' element={<Suspense fallback={"loading"}><Dashboard/></Suspense>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )    
}

const Appbar = () => {
  const navigate = useNavigate();
  return <div>
    <div>
        <button onClick={ () => {
          navigate("/")
        }}>
          Landing
        </button>
        <button onClick={ () => {
          navigate("/dashboard")
        }}>
          Dashboard
        </button>
      </div>
  </div>
}

export default App
