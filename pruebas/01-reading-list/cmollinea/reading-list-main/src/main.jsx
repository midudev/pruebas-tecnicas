import {} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'animate.css';
import App from './App.jsx';
import { ReadingListProvider } from './Context/ReadingListProvider';
ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <ReadingListProvider>
      <App />
    </ReadingListProvider>
  </>
);
