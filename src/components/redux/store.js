

// Importamos las librerías necesarias
import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { reducer } from './reducer';
import thunk from 'redux-thunk';

// Configuración de persistencia para almacenar el estado en el almacenamiento local
const persistConfig = {
  key: 'root',
  storage,
};

// Creamos un reducer persistente con la configuración definida
const persistedReducer = persistReducer(persistConfig, reducer);

// Creamos el store de Redux, aplicando el middleware "thunk" para permitir acciones asíncronas
export const store = createStore(persistedReducer, applyMiddleware(thunk));

// Creamos un persistor para mantener el estado persistente a través de sesiones
export const persistor = persistStore(store);
