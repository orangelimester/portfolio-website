import { BrowserRouter} from "react-router-dom"
import { Intro } from "./pages/Intro"
import './index.css'
import AppComponentContextProvider from "./context/context"
export function App() {
  return (
    <AppComponentContextProvider>
    <Intro />
    </AppComponentContextProvider>
  )
}
function WrapperApp() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  )
}
export default WrapperApp
