import { useEffect, useState } from "react";

export default useDebounce = (value , time) => {

    const [debouncedValue , setdebouncedValue] = useState(value)

    useEffect ( () => {
        const timer = setTimeout(() => {
            setdebouncedValue(value)
        } , time)

        return () => {
            clearTimeout(timer);
        }
    },[value , time])

    return debouncedValue;
}

