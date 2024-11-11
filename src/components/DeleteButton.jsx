import React from 'react';

const DeleteButton = ({ id, onDelete }) => (
  <button
    className="contact-item__delete"
    onClick={() => onDelete(id)}
    title="Delete contact button."
  >X</button>
);

export default DeleteButton;
