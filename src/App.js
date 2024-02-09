
import './App.css';
import Home from './components/pages/home/Home'
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './components/redux/store';

function App() {
  return (
    <div>
      <Provider store= {store} >
      <PersistGate loading={null} persistor={persistor}>
      <Home/>
      </PersistGate>
      </Provider>
    </div>
  );
}

export default App;
