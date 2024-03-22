import React, { useState } from 'react'
import './App.css'

let counter = 3;

function App() {
  const [todos , settodos] = useState([
    {
        id : 1,
        title : "Go to gym",
        description : "Go at 6:00 AM"
    },
    {
        id : 2,
        title : "Go to Temple",
        description : "Go at 9:00 AM"
    },
    {
        id : 3,
        title : "Go to Office",
        description : "Go at 10:00 AM"
    }])

    const addTodo = () => {
      settodos([...todos, {
        id:counter++,
        title : Math.random(),
        description : Math.random()
      }])
    }

return <div>
    <button onClick={addTodo}>Add a Todo</button>
    {todos.map( e => <Todo key= {e.id} title={e.title} description={e.description}/>)}
</div>

}

const Todo = ({title , description}) => {
  return <>
      <h1>{title} </h1>
      <h1>{description}</h1>
  </>
}

export default App
