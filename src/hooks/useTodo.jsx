import { useState, useEffect} from "react";
import axios from "axios";

// function useTodo() {
//     const [todos, setTodos] = useState([])
//     const [loading, setLoading] = useState(true)
  
//     useEffect(() => {
//       async function handleFetch() {
//         await axios.get("https://dummyjson.com/todos")
//         .then(res => {
//             setLoading(false)
//           setTodos(res.data.todos);
//         })
//       }
//       handleFetch();
//     }, [])
//     return [todos, loading]
// }

//Every n seconds hit the backend again

function useTodo(n) {
    const [todos, setTodos] = useState([])
    const [loading, setLoading] = useState(true)
  
    async function handleFetch() {
        await axios.get("https://dummyjson.com/todos")
        .then(res => {
            setLoading(false)
            setTodos(res.data.todos);
        })
    }

    useEffect(() => {
        const value = setInterval(() => {
            handleFetch()
        }, n*1000)
        handleFetch()
    }, [n])
        
    return () => {
        clearInterval(value)
        [todos, loading]
    };
}

export {useTodo}