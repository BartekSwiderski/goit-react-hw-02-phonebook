import styles from "./Phonebook.module.css";

const Filter = ({ setFilter }) => {
  return (
    <div className={styles.column}>
      <label className={styles.label} htmlFor="filter">
        Find contacts by name{" "}
      </label>
      <input
        className={styles.input}
        required
        type="text"
        name="filter"
        onChange={setFilter}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Please give me a name."
      />
    </div>
  );
};

export default Filter;
