import styles from './footer.module.scss';

export const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.footer__data}>
      <p>©</p>
      <p>2022</p>
      <a href="https://github.com/Milena-Belianova" className={styles.github}>
        {" "}
        github
      </a>
    </div>
    <a href="https://rs.school/js-stage0/" className={styles['rss-logo']}> </a>
  </footer>
);
