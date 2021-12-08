import styles from "./Phonebook.module.css";

const ContactList = ({ filter, del, data }) => {
  if (data.length !== 0) {
    return (
      <ul className={styles.contactsList} style={{ padding: 0 }}>
        {data.map(({ id, name, number }) => {
          return name.toLowerCase().includes(filter.toLowerCase()) ? (
            <li key={id} className={styles.contactItem}>
              {name} {number}
              <button className={styles.contactDel} onClick={() => del(id)}>
                Delete
              </button>
            </li>
          ) : (
            <></>
          );
        })}
      </ul>
    );
  } else
    return <p className={styles.contactEmpty}>You have no saved contacts</p>;
};

export default ContactList;
