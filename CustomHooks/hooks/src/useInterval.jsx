import { useEffect } from "react"

export default useInterval = (callback , delay) => {

    useEffect(() => {

        const interval = setInterval(callback , delay)
        return () => {
            clearInterval(interval);
        }

    } , [callback , delay])
}