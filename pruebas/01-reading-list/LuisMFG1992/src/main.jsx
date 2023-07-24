import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './redux/store'
import { Toaster } from 'react-hot-toast'
import { setSharedData } from './redux/booksSlice.js'

window.addEventListener('storage', (event) => {
  if (event.key === 'readingList' && event.newValue) {
    const newState = JSON.parse(event.newValue)
    store.dispatch(setSharedData(newState))
  }
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <Toaster
      position="top-center"
      reverseOrder={false}
      toastOptions={{
        success: {
          iconTheme: {
            primary: '#6c2bd9',
            secondary: 'white',
          },
        },
      }}
    />
    <App />
  </Provider>
)
