import { FilterByColor } from "./filterByColor";
import { FilterByCompany } from "./filterByCompany";
import { FilterByWeight } from "./filterByWeight";
import { FilterPopular } from "./filterPopular";
import styles from './filtersByValue.module.scss';

export const FiltersByValue = () => (
  <div className={styles.container}>
    <FilterByCompany />
    <FilterByWeight />
    <FilterByColor />
    <FilterPopular />
  </div>
);
