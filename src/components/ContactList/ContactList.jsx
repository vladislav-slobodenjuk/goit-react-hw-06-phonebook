import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { deleteContact } from 'redux/contacts/contacts-actions';

import { FiltredContacts } from 'redux/contacts/contacts-selectors';

import PropTypes from 'prop-types';
import s from './ContactList.module.scss';

export default function ContactList() {
  const dispatch = useDispatch();

  const FiltredArray = useSelector(FiltredContacts);
  console.log(FiltredArray);

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
            // onClick={() => onDelete(name)}
            onClick={() => dispatch(deleteContact(name))}
          >
            delete
          </button>
        </li>
      ))}
    </ul>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
  onDelete: PropTypes.func,
};
