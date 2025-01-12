import React from 'react';
import ContactItem from './ContactItem';
import PropTypes from 'prop-types';

const ContactList = ({ contacts, onDelete }) => (
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

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ContactList;
