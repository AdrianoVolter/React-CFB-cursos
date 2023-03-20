import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

//function tick(){
    ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  )

//}

//setInterval(tick, 1000)