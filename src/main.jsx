import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { TodoWrapper } from './components/TodoWrapper.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TodoWrapper />
  </React.StrictMode>,
)
