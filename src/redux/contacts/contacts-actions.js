import { createAction } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const addContact = createAction('phonebook/addContact', contact => {
  return { payload: { id: nanoid(8), ...contact } };
});
const deleteContact = createAction('phonebook/deleteContact');
const setContacts = createAction('phonebook/setContacts');
const setContactsFilter = createAction('phonebook/setContactsFilter');

// eslint-disable-next-line import/no-anonymous-default-export
export default { addContact, deleteContact, setContacts, setContactsFilter };
