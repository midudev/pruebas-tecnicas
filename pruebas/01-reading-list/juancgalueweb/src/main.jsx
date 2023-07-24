import { ConfigProvider, theme } from 'antd'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

const { darkAlgorithm } = theme

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ConfigProvider theme={{ algorithm: darkAlgorithm }}>
      <App />
    </ConfigProvider>
  </React.StrictMode>
)
