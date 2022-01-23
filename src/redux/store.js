import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

import { contactsReducer } from './contacts/contacts-reducer';

// const rootReducer = combineReducers({
//   contacts: contactsReducer,
// });

// export const store = configureStore({
//   reducer: rootReducer,
// });

export const store = configureStore({
  reducer: contactsReducer,
  devTools: process.env.NODE_ENV === 'development',
});
