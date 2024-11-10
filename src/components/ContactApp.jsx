import React from 'react';
import ContacList from './ContactList';
import { getData } from '../utils/data';

const ContactApp = () => {
  const contacts = getData();

  return (
    <div className="contact-app">
      <h1>Contact List</h1>
      <ContacList contacts={contacts} />
    </div>
  );
};

export default ContactApp;
