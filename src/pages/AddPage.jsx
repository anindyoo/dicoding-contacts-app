import React from 'react';
import ContactInput from "../components/ContactInput";
import { addContact } from "../utils/data";
import { useNavigate } from 'react-router-dom';

const AddPage = () => {
  const navigate = useNavigate();

  const onAddContactHandler = (contact) => {
    addContact(contact);
    navigate('/');
  }

  return (
    <section>
      <h2>Add Contact</h2>
      <ContactInput addContact={onAddContactHandler} />
    </section>
  );
};

export default AddPage;
