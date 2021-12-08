import styles from "./Phonebook.module.css";

const ContactList = ({ filter, del, data }) => {
  return (
    <ul className={styles.contacts} style={{ padding: 0 }}>
      {data.map(({ id, name, number }) => {
        return name.toLowerCase().includes(filter.toLowerCase()) ? (
          <li key={id} className={styles.contact}>
            {name} {number}
            <button className={styles.btn__delete} onClick={() => del(id)}>
              Delete
            </button>
          </li>
        ) : (
          <></>
        );
      })}
    </ul>
  );
};

export default ContactList;
