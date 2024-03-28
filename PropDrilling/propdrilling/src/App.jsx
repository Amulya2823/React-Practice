import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { countContext } from './Context.'
import { useContext } from 'react'


function App() {
  const [count, setCount] = useState(0);
return (
  <div>
  <countContext.Provider value={count}>
    <Count setCount={setCount} />
  </countContext.Provider>
  </div>
)}

function Count({count, setCount}) {
return <div>
  <CountRenderer count={count} />
  <Buttons count={count} setCount={setCount} />
</div>
}

function CountRenderer() {
  const count = useContext(countContext)
  return <div>
    {count}
  </div>
}

function Buttons({ setCount}) {
  const count = useContext(countContext)
return <div>
  <button onClick={() => {
  setCount(count + 1)
  }}>Increase</button>
  <button onClick={() => {
  setCount(count - 1)
  }}>Decrease</button>
</div>
}
export default App