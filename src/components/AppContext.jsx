import deepmerge from "deepmerge"
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react"

const AppContext = createContext()
const initialState = {
  session: null,
}

export const useAppContext = () => useContext(AppContext)

export const AppContextProvider = (props) => {
  const [state, setState] = useState(initialState)
  const updateState = useCallback(
    (newState) =>
      setState((previousState) => deepmerge(previousState, newState)),
    []
  )
  const setSession = useCallback(
    (jwt) => {
      if (!jwt) {
        localStorage.removeItem("session_jwt")
        updateState({ session: null })

        return
      }

      const { session } = JSON.parse(atob(jwt.split(".")[1]))

      localStorage.setItem("session_jwt", jwt)

      updateState({ session })
    },
    [updateState]
  )

  useEffect(() => {
    setSession(localStorage.getItem("session_jwt"))
  }, [setSession])

  return (
    <AppContext.Provider
      {...props}
      value={{
        setSession,
        state,
      }}
    />
  )
}
