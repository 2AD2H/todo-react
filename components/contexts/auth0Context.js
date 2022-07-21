import { createContext, useContext } from 'react'

export const Auth0Context = createContext()

export function Auth0Provider({ children }) {
  const [auth, setAuth] = useState()


  
  return <Auth0Context.Provider value={() => {}}></Auth0Context.Provider>
}

export const useAuth0Context = () => useContext(Auth0Context)
