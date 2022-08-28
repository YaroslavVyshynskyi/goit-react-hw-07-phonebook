import { createContact, getContacts } from "api";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "slice/contactsSlice";
import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import Filter from "./Filter/Filter";

const containerStyles = {
  display: "block",
  margin: "0 auto",
  width: "400px",
};

const App = () => {
  const {items: contacts, status} = useSelector(store => { return store.contacts });
  const dispatch = useDispatch();
  
  useEffect(() => {
    // if (contacts.length)
    //   return
    
    // const getContacts = async () => {
    //   await dispatch(fetchContacts());
    // }
    // getContacts();
    if (status === "idle") {
      dispatch(fetchContacts());
    }
    
  }, [dispatch, status]);
  


  const contactsLength = contacts.length;
  // getContacts();
  // createContact();
    return (
      <div style={containerStyles}>
        <h1>Phonebook</h1>
        <ContactForm />

        <h2>Contacts</h2>
        {contactsLength > 0
          ? <>
            <Filter />
            <ContactList />
          </>
          : "no contacts"}
      </div>  
    )
  };

export default App;

