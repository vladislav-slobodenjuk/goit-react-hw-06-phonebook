import { configureStore } from '@reduxjs/toolkit';
// import { combineReducers } from 'redux';
//  не нужен здесь, его заменяте синтаксис внутри configureStore
import logger from 'redux-logger';

import { contactsReducer } from './contacts/contacts-reducer';

// const rootReducer = combineReducers({
//   contacts: contactsReducer,
// });

// export const store = configureStore({
//   reducer: rootReducer,
// });

//  в редюсер можно прямо передать объект из combineReducers
// вида {contacts: contactsReducer}
//  но копозиция внутри contacts-reducer делается руками
export const store = configureStore({
  reducer: contactsReducer,
  devTools: process.env.NODE_ENV === 'development',
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger),
});
