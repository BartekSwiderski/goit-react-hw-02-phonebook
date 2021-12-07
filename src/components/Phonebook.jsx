import React, { Component } from "react";
import styles from "./Phonebook.module.css";
import ContactForm from "./ContactForm";
import Filter from "./Filter";
import ContactList from "./ContactList";

export class Phonebook extends Component {
  state = {
    contacts: [],
    filter: "",
  };

  render() {
    return (
      <div>
        <h1 className={styles.title}>Phonebook</h1>
        <ContactForm />

        <h2 className={styles.subtitle}>Contacts</h2>
        <Filter />
        <ContactList />
      </div>
    );
  }
}

export default Phonebook;
