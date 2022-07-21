import Layout from '../components/layout'
import '../styles/globals.css'
import { UserProvider } from '@auth0/nextjs-auth0'

function MyApp({ Component, pageProps }) {
  return (
    <UserProvider>
      <Component {...pageProps} />
    </UserProvider>
  )
}

export default MyApp
