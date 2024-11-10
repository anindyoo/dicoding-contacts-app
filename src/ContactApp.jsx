import React from 'react';
import { getData } from './data';
import ContacList from './ContactList';

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
