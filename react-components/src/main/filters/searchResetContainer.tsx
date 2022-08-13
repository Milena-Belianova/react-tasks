import { Reset } from './reset';
import { Search } from './search';
import styles from './searchResetContainer.module.scss';

export const SearchReset = () => (
<div className={styles.container}>
    <Search />
    <Reset />
  </div>
);