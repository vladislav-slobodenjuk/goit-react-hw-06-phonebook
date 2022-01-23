import { configureStore } from '@reduxjs/toolkit';
import { contactsReducerOld } from './reducer';
import { rootReduser } from './reducer';

// export const store = configureStore({
//   reducer: contactsReducerOld,
// });

export const store = configureStore({
  reducer: rootReduser,
});
