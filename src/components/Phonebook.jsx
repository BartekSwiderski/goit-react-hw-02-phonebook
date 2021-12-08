import React, { Component } from "react";
import styles from "./Phonebook.module.css";
import ContactForm from "./ContactForm";
import Filter from "./Filter";
import ContactList from "./ContactList";
import { nanoid } from "nanoid";

export class Phonebook extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    name: "",
    number: "",
    filter: "",
  };

  contactExist = (i) => {
    return this.state.contacts.some(({ name }) => name === i);
  };

  changeForm = (event) => {
    this.contactExist(event.target.value)
      ? alert(`${event.target.value} is alredy in contacts.`)
      : this.setState({ [event.target.name]: event.target.value });
  };

  saveContact = (event) => {
    const form = event.target;
    event.preventDefault();
    this.contactExist(this.state.name)
      ? alert(`${event.target.value} is alredy in contacts.`)
      : this.setState(({ name, number, contacts }) => {
          return {
            contacts: [...contacts, { id: nanoid(), name, number }],
            name: "",
            number: "",
          };
        });
    form.reset();
  };

  handleSetFilter = (event) => {
    this.setState({ filter: event.target.value });
  };

  deleteContact = (index) => {
    this.setState(({ contacts }) => {
      return { contacts: contacts.filter(({ id }) => id !== index) };
    });
  };

  render() {
    const { contacts, filter } = this.state;
    return (
      <div>
        <h1 className={styles.title}>Phonebook</h1>
        <ContactForm save={this.saveContact} changeForm={this.changeForm} />

        <h2 className={styles.subtitle}>Contacts</h2>
        <Filter setFilter={this.handleSetFilter} />
        <ContactList filter={filter} data={contacts} del={this.deleteContact} />
      </div>
    );
  }
}

export default Phonebook;
