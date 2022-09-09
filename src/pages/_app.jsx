import "@/styles/globals.css"

const App = ({ Component, pageProps, ...otherProps }) => {
  return <Component {...pageProps} {...otherProps} />
}

export default App
