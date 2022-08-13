import { FiltersByValue } from "./filtersByValue";
import { SearchReset } from "./searchResetContainer";
import styles from './filtersContainer.module.scss';

export const FiltersContainer = () => (
  <div className={styles.container}>
    <FiltersByValue />
    <SearchReset />
  </div>
);
