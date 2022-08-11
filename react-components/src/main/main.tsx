import { FiltersContainer } from "./filters/filtersContainer";
import { ProductsContainer } from "./products/productsContainer";
import { Sort } from "./sort/sort";

export const Main = () => (
  <main id="main" className="main">
    <FiltersContainer />
    <Sort />
    <ProductsContainer />
  </main>
);
