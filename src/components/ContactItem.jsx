import React from 'react';
import ContactItemImage from './ContactItemImage';
import ContactItemBody from './ContactItemBody';
import DeleteButton from './DeleteButton';

const ContactItem = ({ imageUrl, name, tag, id, onDelete }) => (
  <div className="contact-item">
    <ContactItemImage imageUrl={imageUrl} name={name} />
    <ContactItemBody name={name} tag={tag} />
    <DeleteButton id={id} onDelete={onDelete} />
  </div>
);

export default ContactItem;
