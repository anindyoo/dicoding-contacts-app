import React from 'react';
import ContactItemImage from './ContactItemImage';
import ContactItemBody from './ContactItemBody';

const ContactItem = ({ imageUrl, name, tag }) => (
  <div className="contact-item">
    <ContactItemImage imageUrl={imageUrl} name={name} />
    <ContactItemBody name={name} tag={tag} />
  </div>
);

export default ContactItem;
