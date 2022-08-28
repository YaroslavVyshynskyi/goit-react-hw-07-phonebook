import React from "react";
import { useSelector, useDispatch } from "react-redux";
import css from "./ContactList.module.css"
import { deleteContact as deleteContactAction } from "slice/contactsSlice";

const ContactList = () => {
    const { items: contacts, filter } = useSelector(store => { return store.contacts });
    
    const dispatch = useDispatch();
    
    const deleteContact = (deleteId) => {
        dispatch(deleteContactAction(deleteId));
    };

    const getVisibleContacts = () => {
        const normalizedFilter = filter.toLowerCase();

        return contacts.filter(contact =>
            contact.name.toLowerCase().includes(normalizedFilter));
    };

    const visibleContacts = getVisibleContacts();

    return (
        <ul className={css.contacts__list}>
            {visibleContacts.map(({ name, number, id }) => {
                return (
                    <li key={id} className={css.contacts__item}>
                        <span className={css.item__name}>{name}:</span>
                        <span className={css.item__number}>{number}</span>
                        <button type="button" className={css.delete_btn} onClick={() => deleteContact(id)}>Delete</button>
                    </li>
                )
            })}
        </ul>
    )
};

export default ContactList;