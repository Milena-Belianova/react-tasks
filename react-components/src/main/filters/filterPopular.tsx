import styles from './filterPopular.module.scss';

export const FilterPopular = () => (
  <div className={styles.container}>
    <label htmlFor="popular" className={styles["checkbox-label"]}>
      Popular
    </label>
    <input type= "checkbox" name="popular" id="popular" />
  </div>
);
