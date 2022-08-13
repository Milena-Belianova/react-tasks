import styles from './search.module.scss';

export const Search = () => (

    <div className={styles.container}>
      <input
        type="search"
        className={styles.input}
        placeholder="Search..."
        autoFocus
      />
      <button className={styles.button}>
        <i className={styles.icon}></i>
      </button>
    </div>

);