import { useEffect, useState } from "react";

export default useOnline = () => {

    const [onlineStatus , setonlineStatus] = useState(window.navigator.onLine)

    useEffect( () => {
        window.addEventListener('online' ,() => {
            setonlineStatus(true);
        })
    
        window.addEventListener('offline', () => {
            setonlineStatus(false);
        })
    }, [])

    return onlineStatus;
}