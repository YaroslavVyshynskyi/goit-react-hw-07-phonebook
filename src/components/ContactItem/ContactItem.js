import { useDeleteContactMutation } from 'slice/contactsSlice';
import css from '../ContactList/ContactList.module.css';
import MoonLoader from 'react-spinners/MoonLoader';
import PropTypes from 'prop-types';

const ContactItem = ({ contact }) => {
  const { name, number, id } = contact;
  const [deleteContact, { isLoading }] = useDeleteContactMutation();
  return (
    <>
      <span className={css.item__name}>{name}:</span>
      <span className={css.item__number}>{number}</span>
      <button
        type="button"
        className={css.delete_btn}
        onClick={() => deleteContact(id)}
      >
        Delete
        {isLoading && <MoonLoader size={8} />}
      </button>
    </>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
};

export default ContactItem;
