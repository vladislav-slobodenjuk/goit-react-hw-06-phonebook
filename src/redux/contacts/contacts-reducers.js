import { createReducer, combineReducers } from '@reduxjs/toolkit';
import actions from './contacts-actions';

const initialItems = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  { id: 'id-5', name: 'Vladislav Sl', number: '555-77-58' },
];
const ItemsReducer = createReducer(initialItems, {
  [actions.addContact]: (state, { payload }) => {
    const isAdded = state.find(contact => contact.name === payload.name);
    if (!isAdded) return [...state, payload];
    alert('contact is added');
  },
  [actions.deleteContact]: (state, { payload }) => {
    return state.filter(contact => contact.name !== payload);
  },
});

const filterReducer = createReducer('', {
  [actions.setContactsFilter]: (_state, { payload }) => payload,
});

export const contactsReducer = combineReducers({
  items: ItemsReducer,
  filter: filterReducer,
});

export const rootReducer = combineReducers({
  contacts: contactsReducer,
});
