import styles from './reset.module.scss';

export const Reset = () => (

    <div className={styles.container}>
      <button
        className={styles.button}
      >
        Reset Filters
      </button>
      <button
        className={styles.button}
      >
        Reset Settings
      </button>
    </div>
);