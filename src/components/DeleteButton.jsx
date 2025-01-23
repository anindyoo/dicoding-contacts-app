import PropTypes from 'prop-types';
import React from 'react';
import { FiDelete } from 'react-icons/fi';

const DeleteButton = ({ id, onDelete }) => (
  <button
    className="contact-item__delete"
    onClick={() => onDelete(id)}
    title="Delete contact button."
  >
    <FiDelete />
  </button>
);

DeleteButton.propTypes = {
  id: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
}

export default DeleteButton;
