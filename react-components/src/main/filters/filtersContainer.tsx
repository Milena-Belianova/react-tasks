import { FiltersByValue } from "./filtersByValue";
import { SearchReset } from "./searchReset";

export const FiltersContainer = () => (
  <div className="filters__container">
    <FiltersByValue />
    <SearchReset />
  </div>
);
