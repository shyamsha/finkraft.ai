import {useEffect} from 'react'

function useCounter(counter) {
 useEffect(() => {
   document.title=`count ${counter}`
 }, [counter])
}

export default useCounter
