import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import filterReducer from './filter/FilterSlice';
import contactsReducer from './contacts/ContactsSlice';
import authReduser from './auth/AuthSlice';

const persistConfig = {
  key: 'token',
  whitelist: ['token'],
  storage,
};

const persistedAuthReducer = persistReducer(persistConfig, authReduser);

const rootReducer = combineReducers({
  auth: persistedAuthReducer,
  contacts: contactsReducer,
  filter: filterReducer,
});

export default rootReducer;
