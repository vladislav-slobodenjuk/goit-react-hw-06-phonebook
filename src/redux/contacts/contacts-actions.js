import { createAction } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const addContact = createAction('contacts/add', payload => ({
  payload: {
    id: nanoid(8),
    ...payload,
  },
}));
const deleteContact = createAction('contacts/delete');
// const setContacts = createAction('phonebook/setContacts');
const setContactsFilter = createAction('filter/set');

// export default { addContact, deleteContact, setContacts, setContactsFilter };
export default { addContact, deleteContact, setContactsFilter };
