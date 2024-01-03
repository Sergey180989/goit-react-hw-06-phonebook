import { configureStore } from '@reduxjs/toolkit';
import { contactsSlice } from './slice'; 
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

import storage from 'redux-persist/lib/storage';


const initialState = {
  contacts: [],
  filter: '',
};

const persistedContactsReducer = persistReducer(
  { key: 'contacts', storage, whitelist: ['items'] },
  contactsSlice.reducer
);

export const store = configureStore({
  reducer: {
    contacts: persistedContactsReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  preloadedState: { contacts: initialState }, 
});

export const persistor = persistStore(store);