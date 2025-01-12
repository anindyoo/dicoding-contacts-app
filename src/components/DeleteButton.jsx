import PropTypes from 'prop-types';
import React from 'react';

const DeleteButton = ({ id, onDelete }) => (
  <button
    className="contact-item__delete"
    onClick={() => onDelete(id)}
    title="Delete contact button."
  >X</button>
);

DeleteButton.propTypes = {
  id: PropTypes.number.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default DeleteButton;
