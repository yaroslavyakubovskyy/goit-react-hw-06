import Contact from '../Contact/Contact';
import s from './ContactList.module.css';
import { useSelector } from 'react-redux';

const ContactList = ({ handleDelete }) => {
  const contacts = useSelector(state => state.contacts.items);
  const searchValue = useSelector(state => state.filters.name);
  const filteredUserData = contacts.filter(
    contact =>
      contact.name.toLowerCase().includes(searchValue.toLowerCase()) ||
      contact.number.toLowerCase().includes(searchValue.toLowerCase())
  );
  return (
    <ul className={s.list}>
      {filteredUserData.map(user => (
        <Contact key={user.id} user={user} handleDelete={handleDelete} />
      ))}
    </ul>
  );
};

export default ContactList;
