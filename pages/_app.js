import '../styles/globals.css'
import { FoodtruckProvider } from '../context/FoodtruckProvider'

function MyApp({ Component, pageProps }) {
  return (
    <FoodtruckProvider>
      <Component {...pageProps}/>
    </FoodtruckProvider>
  )
}

export default MyApp
