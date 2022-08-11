import styles from './header.scss';

console.log({styles});
export type HeaderProps = {cartCount: number, showCartCount: boolean};

export const Header = ({cartCount, showCartCount}: HeaderProps) => (
  <header className={styles.header}>
    <h1>Online Store</h1>
    <div className={styles.cart}>
      <div
        id="cart-products-number"
        className={styles['cart-products-number']}
        style={!showCartCount ? { display: "none" } : {}}
      >
        {cartCount}
      </div>
      <div className={styles.cart__svg}></div>
    </div>
  </header>
);
