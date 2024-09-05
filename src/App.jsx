import { useEffect, useState } from 'react'
import axios from 'axios'
import {useTodo} from "./hooks/useTodo"
import {useIsOnline} from './hooks/useIsOnline'
import { useMousePointer } from './hooks/useMousePointer'
import {useInterval} from './hooks/useInterval'
import { useDebounce } from './hooks/useDebounce'

// useTodo hook 

// function App() {

//   const [todos, loading] = useTodo(5);
  
//   return (
//     <>
//       {loading ? <div>loading...</div> : todos.map(todo => <Track key={todo.id} todo={todo} />)}
//     </>
//   )
// }

//useIsOnline hook

// function App() {
//   const isOnline = useIsOnline();  
//   if(isOnline){
//     console.log("you are online")
//   }
//   else{
//     console.log("you are offline")
//   }
//   return (
//     <>
//       {isOnline ? <div>user is online</div> : <div>user is offline</div>}
//     </>
//   )
// }

// useMousePointer
// function App () {
//   const position = useMousePointer();
//   return (
//     <>
//       <h1>{position.x}</h1>
//       <h1>{position.y}</h1>
//     </>
    
//   );
// }

// useInterval

// function App() {
//   const time = useInterval()
//   return <div>time: {time}</div>
// }

// useDebounce

function App() {
  const [inputValue, setInputValue] = useState('');
  const debouncedValue = useDebounce(inputValue, 500);

  return (
    <input
      type="text"
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
      placeholder="Search..."
    />
  ); 
}

function Track({ todo }) {
  return <div>
    {todo.todo}
    <br />
    {todo.userId}
  </div>
}

export default App