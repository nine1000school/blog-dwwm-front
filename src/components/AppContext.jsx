import Loading from "@/components/Loading.jsx"
import deepmerge from "deepmerge"
import { useRouter } from "next/router.js"
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react"

const LOADING_SESSION = Symbol("loading session")
const AppContext = createContext()
const initialState = {
  session: LOADING_SESSION,
}

export const useAppContext = () => useContext(AppContext)

export const AppContextProvider = (props) => {
  const router = useRouter()
  const { isPublicPage, ...otherProps } = props
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

      localStorage.setItem("session_jwt", jwt)

      const { session } = JSON.parse(atob(jwt.split(".")[1]))

      updateState({ session })
    },
    [updateState]
  )

  useEffect(() => {
    setSession(localStorage.getItem("session_jwt"))
  }, [setSession])

  useEffect(() => {
    if (!isPublicPage && !state.session) {
      router.push(`/sign-in?returnTo=${encodeURIComponent(location.pathname)}`)

      return
    }
  }, [router, state.session, isPublicPage])

  if (!isPublicPage && (!state.session || state.session === LOADING_SESSION)) {
    return <Loading />
  }

  return (
    <AppContext.Provider
      {...otherProps}
      value={{
        setSession,
        state,
      }}
    />
  )
}
