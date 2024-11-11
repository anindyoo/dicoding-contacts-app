import React from 'react';
import ContactItem from './ContactItem';

const ContacList = ({ contacts, onDelete }) => (
  <div className="contact-list">
    {contacts.map((contact) => (
      <ContactItem
        key={contact.id}
        {...contact}
        onDelete={onDelete}
      />
    ))}
  </div>
);

export default ContacList;
