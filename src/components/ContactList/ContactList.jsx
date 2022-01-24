import { useDispatch, useSelector } from 'react-redux';
import actions from 'redux/contacts/contacts-actions';
import { selectFiltredContacts } from 'redux/contacts/contacts-selectors';

import s from './ContactList.module.scss';

export default function ContactList() {
  const dispatch = useDispatch();
  const FiltredArray = useSelector(selectFiltredContacts);
  // console.log(FiltredArray);

  return (
    <ul className={s.contactList}>
      {FiltredArray.map(({ name, number, id }) => (
        <li className={s.contactItem} key={id}>
          <p className={s.contactName}>
            {name}: {number}
          </p>
          <button
            className={s.contactButton}
            type="button"
            onClick={() => dispatch(actions.deleteContact(name))}
          >
            delete
          </button>
        </li>
      ))}
    </ul>
  );
}
