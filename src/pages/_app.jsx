import { AppContextProvider } from "@/components/AppContext.jsx"
import "@/styles/globals.css"

const App = ({ Component, pageProps, ...otherProps }) => {
  return (
    <AppContextProvider>
      <Component {...pageProps} {...otherProps} />
    </AppContextProvider>
  )
}

export default App
