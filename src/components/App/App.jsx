import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import actions from 'redux/contacts/contacts-actions';
import { selectContacts } from 'redux/contacts/contacts-selectors';

import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';

import s from './App.module.scss';

export default function App() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const localStorageKey = 'contacts';

  useEffect(() => {
    const isStorageContacts = localStorage.getItem(localStorageKey);
    const storageContacts = JSON.parse(isStorageContacts);

    if (isStorageContacts) {
      dispatch(actions.setContacts(storageContacts));
    }
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem(localStorageKey, JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div className={s.app}>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
}
