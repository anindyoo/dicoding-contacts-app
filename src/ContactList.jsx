import React from 'react';
import ContactItem from './ContactItem';

const ContacList = ({ contacts }) => (
  <div className="contact-list">
    {contacts.map((contact) => (
      <ContactItem key={contact.id} {...contact} />
    ))}
  </div>
);

export default ContacList;
