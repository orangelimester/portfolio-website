import { createRoot } from "react-dom/client"
import WrapperApp from "./App"
import React from "react"

const rootElement = document.getElementById('root')
if (!rootElement) throw new Error("Root Element needs to be loaded")
const root = createRoot(rootElement)
root.render(<React.StrictMode>
    <WrapperApp />
</React.StrictMode>)