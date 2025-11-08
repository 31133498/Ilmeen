import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './style.css'

const container = document.getElementById('app')!
const root = createRoot(container)
// Use React.createElement so this file can remain .ts (no JSX parsing required)
root.render(React.createElement(App))
