export const SearchReset = () => (
<div className="filters-search-reset__container">
    <div className="search__container">
      <input
        id="search-input"
        type="search"
        className="search__input"
        placeholder="Search..."
        autoFocus
      />
      <button id="search-btn" className="search__btn">
        <i id="search-icon" className="search__icon"></i>
      </button>
    </div>

    <div className="reset__container">
      <button
        id="reset-filters__button"
        className="reset-filters__button reset__button"
      >
        Reset Filters
      </button>
      <button
        id="reset-settings__button"
        className="reset-settings__button reset__button"
      >
        Reset Settings
      </button>
    </div>
  </div>
);