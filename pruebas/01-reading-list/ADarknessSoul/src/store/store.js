import { configureStore } from '@reduxjs/toolkit';
import { WhatABookSlice } from './slices/WhatABook';

export const store = configureStore({
  reducer: {

    WhatABook: WhatABookSlice.reducer,

  },
});