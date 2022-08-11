export const Sort = () => (
  <div className="sort__container">
    <hr className="sort__line" />
    <label htmlFor="sort">Sort By</label>
    <select name="sort" id="sort" className="sort__input">
      <option value="name-a">Name (A-Z)</option>
      <option value="name-z">Name (Z-A)</option>
      <option value="year-oldest">Year (Oldest)</option>
      <option value="year-newest">Year (Newest)</option>
    </select>
  </div>
);
