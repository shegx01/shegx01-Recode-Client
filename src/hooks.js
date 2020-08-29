import { useState, useEffect } from 'react'
export default function usePersistedState (key, defaultValue) {
  const [state, setState] = useState(() => JSON.parse(window.localStorage.getItem(key)) || defaultValue)
  useEffect(() => {
    JSON.stringify(window.localStorage.setItem(key, state))
  }, [key, state])
  return [state, setState]
}
