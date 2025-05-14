import { Dispatch, SetStateAction, createContext, useState } from 'react'
export interface IAppContext {
  navBarOn: boolean
  setnavBarOn: Dispatch<SetStateAction<boolean>>
}
const initialState = {
  navBarOn: false,
} as IAppContext
export const AppComponentContext = createContext(initialState)
type ChildProps = {
  children: React.ReactNode
}
export default function AppComponentContextProvider({ children }: ChildProps) {
  const [navBarOn, setnavBarOn] = useState<boolean>(false)
  return (
    <AppComponentContext.Provider value={{ navBarOn, setnavBarOn }}>
      {children}
    </AppComponentContext.Provider>
  )
}
