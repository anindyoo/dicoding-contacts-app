import React from 'react';
import ContactInput from "../components/ContactInput";
import { addContact } from '../utils/api';
import { useNavigate } from 'react-router-dom';

const AddPage = () => {
  const navigate = useNavigate();

  async function onAddContactHandler(contact) {
    await addContact(contact);
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
