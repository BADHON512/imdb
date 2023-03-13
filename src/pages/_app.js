import Header from '@/Component/Header'
import '@/styles/globals.css'
import '../styles/header.scss'

export default function App({ Component, pageProps }) {
  return(
    <>
  <Header/>
  <Component {...pageProps}/>
  
  </>
  )
  
  
  
  
}
