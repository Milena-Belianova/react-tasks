import styles from './product.module.scss';

export const Product = ({url, title, year, company, weight, speed, color, popularity, amount}: any) => (
  <div className={styles.product}>
    <div
      className={styles.img}
      style={{
        backgroundImage:
          `url(${url})`,
      }}
    ></div>
    <div className={styles.info}>
      <h3 className={styles.title}>{title}</h3>
      <p>Year: {year}</p>
      <p>Company: {company}</p>
      <p>Weight: {weight}, Top speed: {speed}</p>
      <p>Color: {color}, Popular: {popularity}</p>
      <p>Amount left: {amount}</p>
    </div>
    <div className={styles.btns}>
      <div className={styles["btn-group"]}>
        <button className={styles.remove_btn}>
          -
        </button>
        <button className={styles["amount-in-cart_btn"]}>
          0
        </button>
        <button className={styles.add_btn}>+</button>
      </div>
      <button className={styles["add-to-cart_btn"]}>Add to cart</button>
    </div>
  </div>
);
