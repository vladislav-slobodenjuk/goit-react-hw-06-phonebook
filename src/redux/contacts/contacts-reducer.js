import { createReducer } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
import {
  addContact,
  deleteContact,
  setContactsFilter,
  // filterContacts,
  setContacts,
} from './contacts-actions';

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

export const contactsReducer = createReducer(initialState, {
  [addContact]: (state, action) => {
    const { items } = state.contacts;

    const isAdded = items.find(contact => contact.name === action.payload.name);

    if (isAdded) {
      alert('contact is added');
      return;
    }

    const contactWithId = { id: nanoid(8), ...action.payload };

    state.contacts.items = [...items, contactWithId];
    // setContacts(contacts => [...contacts, data]);
  },
  [deleteContact]: (state, action) => {
    const restContacts = state.contacts.items.filter(
      contact => contact.name !== action.payload,
    );

    state.contacts.items = restContacts;
    // setContacts(restContacts);
  },
  [setContacts]: (state, action) => {
    state.contacts.items = action.payload;
  },
  [setContactsFilter]: (state, action) => {
    state.contacts.filter = action.payload;
    // state.contacts.filter = action.payload.target.value;
    // console.log(action);
  },
  // это filterContacts здесь не нужен
  // он уходин из экшенов в вычисляемый селектор FiltredContacts

  // [filterContacts]: (state, action) => {
  //   const { filter, items } = state.contacts;

  //   const lowFilter = filter.toLowerCase();
  //   console.log(items);

  //   return items.filter(contact =>
  //     contact.name.toLocaleLowerCase().includes(lowFilter),
  //   );
  // },
  // [filterContact]: (state, action) => state + action.payload,
});
