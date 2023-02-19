import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
// import {
//   ContactsList,
//   ContactListItem,
//   DeleteButton
// } from './ContactList.styled';
import { fetchContacts, deleteContact } from 'redux/operations';
import { selectContacts, selectFilter } from 'redux/selectors';
import { RotatingLines } from 'react-loader-spinner';
import './ContactList.modyle.css';

export default function ContactList() {
  const dispatch = useDispatch();
  const { contacts, isLoading, error } = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const getFilteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };
  const filteredContacts = getFilteredContacts();

  return (
    <ul className="list">
      {isLoading && (
        <RotatingLines
          strokeColor="red"
          strokeWidth="5"
          animationDuration="0.75"
          width="36"
          visible={true}
        />
      )}
      {error && <p>{error}</p>}
      {contacts.length > 0 &&
        filteredContacts.map(({ id, name, phone }) => (
          <li className="list__item" key={id}>
            <p className="list__item--text">
              {name}: {phone}
            </p>
            <button
              className="list__btn"
              type="button"
              onClick={() => dispatch(deleteContact(id))}
            >
              Delete
            </button>
          </li>
        ))}
    </ul>
  );
}

//   return (
//     <ContactsList>
//       {isLoading && <b>Loading contacts...</b>}
//       {error && <b>{error}</b>}
//       {contacts.length > 0 &&
//         filteredContacts.map(({ id, name, phone }) => (
         
//             <ContactListItem  key={id}>
//             <p>
//               {name}: {phone}
//             </p>
//             <DeleteButton
//               type="button"
//               onClick={() => dispatch(deleteContacts(id))}
//             >
//               Delete
//             </ DeleteButton>
//           </ContactListItem>
//         ))}
//     </ContactsList>
//   );
// };



