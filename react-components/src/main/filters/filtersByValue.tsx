import { FilterByColor } from "./filterByColor";
import { FilterByCompany } from "./filterByCompany";
import { FilterByWeight } from "./filterByWeight";
import { FilterPopular } from "./filterPopular";

export const FiltersByValue = () => (
  <div className="filters-by-value__container">
    <FilterByCompany />
    <FilterByWeight />
    <FilterByColor />
    <FilterPopular />
  </div>
);
