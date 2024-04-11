import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import React from "react";
import axios from "axios";
import useOnline from "./useOnline";
import useInterval from "./useInterval";

function App() {

  const [count, setCount] = useState(0);

  useInterval(() => {
    setCount(c => c + 1);
  }, 1000)

  return (
    <>
      Timer is at {count}
    </>
  )
}

  const onlineStatus = useOnline();
  if(onlineStatus){
    return "You are Online"
  }
  return "Please check your internet connection"


  const useTodos = () => {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
      axios.get("https://sum-server.100xdevs.com/todos").then((res) => {
        setTodos(res.data.todos);
      });
    }, []);

    return todos;
  };

  const todos = useTodos();

  return (
    <>
      <MyComponent />
    </>
  );


class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  incrementCount = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <p>{this.state.count}</p>
        <button onClick={this.incrementCount}>Increment</button>
      </div>
    );
  }
}

export default App;
