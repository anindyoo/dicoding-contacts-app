import PropTypes from 'prop-types';
import React from 'react';

class ContactInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      tag: '',
    };
    this.onInputChangeEventHandler = this.onInputChangeEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  onInputChangeEventHandler(event) {
    const { name, value } = event.target;
    this.setState((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  onSubmitEventHandler(event) {
    event.preventDefault();
    this.props.addContact(this.state);
  }

  render() {
    return (
      <form className="contact-input" onSubmit={this.onSubmitEventHandler}>
        <input          
          type="text"          
          name="name"          
          placeholder="Name"
          value={this.state.name}
          onChange={this.onInputChangeEventHandler}
        />
        <input          
          type="text"          
          name="tag"          
          placeholder="Tag"
          value={this.state.tag}
          onChange={this.onInputChangeEventHandler}
        />
        <button type="submit" title="Add contact button.">Add</button>
      </form>
    );
  }
}

ContactInput.propTypes = {
  addContact: PropTypes.func.isRequired,
};

export default ContactInput;
