import '@/styles/globals.css'
import Nav from './nav'
// import "../styles/style.css" //global css aise use kr skte hai


export default function App({ Component, pageProps }) {
  return <> <Nav/> <Component {...pageProps} /></> 
}
