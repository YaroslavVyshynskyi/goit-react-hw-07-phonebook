import { useFetchContactsQuery } from "slice/contactsSlice";
import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import Filter from "./Filter/Filter";
import MoonLoader from 'react-spinners/MoonLoader';

const containerStyles = {
  display: "block",
  margin: "0 auto",
  width: "400px",
};

const App = () => {
  const { data: contacts = [], isLoading } = useFetchContactsQuery();
  
  return (
    <div style={containerStyles}>
      <h1>Phonebook</h1>
      <ContactForm />


      <h2>Contacts</h2>
      {isLoading && <MoonLoader size={15} />}
      {!isLoading && !contacts.length && "no contacts"}
      {!isLoading && !!contacts.length &&
        <>
          <Filter />
          <ContactList />
        </>}
    </div>
  )
};

export default App;

