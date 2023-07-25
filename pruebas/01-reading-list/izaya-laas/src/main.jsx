import { render } from 'preact';
import { App } from './app.jsx';
import './index.css';
import { myReadingListISBN } from './signals/store.js';

render(<App />, document.getElementById('app'));

//Mantenemos sincronización de datos entre diferentes pestañas
window.addEventListener('storage', (e) => {
  if (e.key === 'readingList') {
    const newValue = e.newValue;
    myReadingListISBN.value = JSON.parse(newValue);
  }
});
