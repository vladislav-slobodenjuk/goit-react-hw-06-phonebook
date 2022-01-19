import { createAction } from '@reduxjs/toolkit';

export const addContact = createAction('addContact');
export const deleteContact = createAction('deleteContact');
export const setContactsFilter = createAction('setContactsFilter');
export const filterContacts = createAction('filterContact');
export const setContacts = createAction('setContacts');
