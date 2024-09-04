import { useEffect, useState } from 'react'
import axios from 'axios'
import {useTodo} from "./hooks/useTodo"



function App() {

  const [todos, loading] = useTodo(5);
  
  return (
    <>
      {loading ? <div>loading...</div> : todos.map(todo => <Track key={todo.id} todo={todo} />)}
    </>
  )
}

function Track({ todo }) {
  return <div>
    {todo.todo}
    <br />
    {todo.userId}
  </div>
}

export default App