import { FiltersContainer } from "./filters/filtersContainer";
import { ProductsContainer } from "./products/productsContainer";
import { Sort } from "./sort/sort";
import styles from './main.module.scss';

export const Main = () => (
  <main id="main" className={styles.main}>
    <FiltersContainer />
    <Sort />
    <ProductsContainer />
  </main>
);
