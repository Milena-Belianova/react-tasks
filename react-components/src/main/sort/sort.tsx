import styles from './sort.module.scss';

export const Sort = () => (
  <div className={styles.container}>
    <hr className={styles.line} />
    <label htmlFor="sort">Sort By</label>
    <select name="sort" id="sort" className={styles.input}>
      <option value="name-a">Name (A-Z)</option>
      <option value="name-z">Name (Z-A)</option>
      <option value="year-oldest">Year (Oldest)</option>
      <option value="year-newest">Year (Newest)</option>
    </select>
  </div>
);
