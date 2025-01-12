import PropTypes from 'prop-types';
import React from 'react';

const ContactItemImage = ({ imageUrl, name }) => (
  <div className="contact-item__image">
    <img src={imageUrl} alt={`contact avatar for ${name}`} />
  </div>
);

ContactItemImage.propTypes = {
  imageUrl: PropTypes.string.isRequired,
};

export default ContactItemImage;
