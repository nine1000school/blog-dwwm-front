import { AppContextProvider } from "@/components/AppContext.jsx"
import "@/styles/globals.css"

const App = ({ Component: PageComponent, pageProps, ...otherProps }) => {
  return (
    <AppContextProvider isPublicPage={PageComponent.isPublic}>
      <PageComponent {...pageProps} {...otherProps} />
    </AppContextProvider>
  )
}

export default App
