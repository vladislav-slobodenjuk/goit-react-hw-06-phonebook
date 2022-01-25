import { createReducer, combineReducers } from '@reduxjs/toolkit';
import actions from './contacts-actions';

const initialState = {
  contacts: {
    items: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
      { id: 'id-5', name: 'Vladislav Sl', number: '555-77-58' },
    ],
    filter: '',
  },
};

export const contactsReducerOld = createReducer(initialState, {
  [actions.addContact]: (state, action) => {
    const { items } = state.contacts;
    const isAdded = items.find(contact => contact.name === action.payload.name);

    if (isAdded) {
      alert('contact is added');
      return;
    }

    state.contacts.items = [...items, action.payload];
  },
  [actions.deleteContact]: (state, action) => {
    const restContacts = state.contacts.items.filter(
      contact => contact.name !== action.payload,
    );
    state.contacts.items = restContacts;
  },
  [actions.setContacts]: (state, action) => {
    state.contacts.items = action.payload;
  },
  [actions.setContactsFilter]: (state, action) => {
    state.contacts.filter = action.payload;
  },
});

const initialContacts = {
  items: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    { id: 'id-5', name: 'Vladislav Sl', number: '555-77-58' },
  ],
  filter: '',
};

const newcontactsReducer = createReducer(initialContacts, {
  [actions.addContact]: (state, action) => {
    const { items } = state;
    const isAdded = items.find(contact => contact.name === action.payload.name);

    if (isAdded) {
      alert('contact is added');
      return;
    }

    state.items = [...items, action.payload];
  },
  [actions.deleteContact]: (state, action) => {
    const restContacts = state.items.filter(
      contact => contact.name !== action.payload,
    );
    state.items = restContacts;
  },
  [actions.setContacts]: (state, action) => {
    state.items = action.payload;
  },
  [actions.setContactsFilter]: (state, action) => {
    state.filter = action.payload;
  },
});

// export const rootReducer = combineReducers({
//   contacts: newcontactsReducer,
// });

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
  [actions.setContacts]: (_state, { payload }) => payload,
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