import { useEffect, useState } from "react";

function useIsOnline() {
    const [online, setOnline] = useState(true);
    let interval = null;

    const InternetErrMessagenger = () => setOnline(navigator.onLine===true);


    useEffect(() => {
        interval = setInterval(InternetErrMessagenger, 6000)
        return () => {
            clearInterval(interval)
        }
    }, [])

    return online;
}

export {useIsOnline}