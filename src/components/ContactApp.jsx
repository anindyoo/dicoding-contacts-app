import React from 'react';
import ContacList from './ContactList';
import { getData } from '../utils/data';
import ContactInput from './ContactInput';

class ContactApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: getData(),
    };
    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onAddContactHandler = this.onAddContactHandler.bind(this);
  }

  onDeleteHandler(id) {
    const contacts = this.state.contacts.filter((contact) => contact.id !== id);
    this.setState({ contacts });
  }

  onAddContactHandler({ name, tag }) {
    this.setState((prevState) => ({
      contacts: [
        ...prevState.contacts,
        {
          id: +new Date(),
          name,
          tag,
          imageUrl: '/images/default.jpg',
        }
      ],
    }))
  }

  render() {
    return (
      <div className="contact-app">
        <h1>Contact App</h1>
        <h2>Add Contact</h2>
        <ContactInput addContact={this.onAddContactHandler} />
        <h2>Contact List</h2>
        <ContacList
          contacts={this.state.contacts}
          onDelete={this.onDeleteHandler}
        />
      </div>
    );
  }
}

export default ContactApp;
