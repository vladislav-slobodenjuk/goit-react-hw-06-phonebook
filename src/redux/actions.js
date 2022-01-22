import { createAction } from '@reduxjs/toolkit';

export const addContact = createAction('phonebook/addContact');
export const deleteContact = createAction('phonebook/deleteContact');
export const setContactsFilter = createAction('phonebook/setContactsFilter');
// export const filterContacts = createAction('filterContact');
export const setContacts = createAction('phonebook/setContacts');
