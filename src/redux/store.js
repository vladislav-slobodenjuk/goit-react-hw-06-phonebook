import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';

import { contactsReducer } from './contacts/contacts-reducer';

// const rootReducer = combineReducers({
//   contacts: contactsReducer,
// });

//  в редюсер можно прямо передать объект из combineReducers
// вида reducer: {contacts: contactsReducer}
//  но копозиция внутри contacts-reducer делается руками
export const store = configureStore({
  reducer: contactsReducer,
  devTools: process.env.NODE_ENV === 'development',
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger),
});
