import { useState, useEffect } from "react"

function useInterval() {
    // timing display variable
    const [time, setTime] = useState(1);
    // setInterval -> setTime should be called after every 1 second

    function handleTime() {
        setTime(time => time+1)
    }
    useEffect(() => {
        const res = setInterval(handleTime, 1000);

        return () => {
            clearInterval(res)
        }
    }, [])
  
    return time
}
export {useInterval}