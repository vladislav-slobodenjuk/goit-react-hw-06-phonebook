import { configureStore } from '@reduxjs/toolkit';
import { contactReducer } from './contacts/contacts-reducer';

export const store = configureStore({
  reducer: contactReducer,
});
