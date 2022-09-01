import ContactItem from "../ContactItem/ContactItem";
import React from "react";
import { useSelector } from "react-redux";
import { useFetchContactsQuery } from "slice/contactsSlice";
import css from "./ContactList.module.css";

const ContactList = () => {
    const filter = useSelector(store => { return store.filter.value });
    const { data: contacts = [] } = useFetchContactsQuery();

    const getVisibleContacts = () => {
        const normalizedFilter = filter.toLowerCase();

        return contacts.filter(contact =>
            contact.name.toLowerCase().includes(normalizedFilter));
    };

    const visibleContacts = getVisibleContacts();

    return (
        <ul className={css.contacts__list}>
            {visibleContacts.map((contact) => {
                return (
                    <li key={contact.id} className={css.contacts__item}>
                        <ContactItem contact={contact} />
                    </li>
                )
            })}
        </ul>
    )
};

export default ContactList;