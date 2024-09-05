import { useState, useEffect } from "react"

function useDebounce(value, delay) {
  const [debounce, setDebounce] = useState(value)

  useEffect(() => {
    const res = setTimeout(() => {
        setDebounce(value)
    }, delay*1000)

    return () => {
        clearTimeout(res)
    }
  }, [value, delay])

  return debounce
}
export {useDebounce}