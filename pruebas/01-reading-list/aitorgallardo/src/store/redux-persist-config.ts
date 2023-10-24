// redux-persist-config.js
import { Reducer } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

const persistConfig = {
  key: 'root', // key to use in local storage
  storage,
};

export const persistedReducer = (rootReducer: Reducer) => persistReducer(persistConfig, rootReducer);
