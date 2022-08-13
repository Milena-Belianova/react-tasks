import classNames from "classnames";
import { useCallback, useState } from "react";
import styles from "./filterByCompany.module.scss";

const companies = ["CAKE", "SEGWAY", "SUR-RON", "TALARIA"];

export const FilterByCompany = () => {
  const [checkedCompanies, setCheckedCompanies] = useState<string[]>([]);

  const toggleCompany = useCallback(
    (company: string) => () =>
      setCheckedCompanies(
        checkedCompanies.includes(company)
          ? checkedCompanies.filter((c: string) => c !== company)
          : [...checkedCompanies, company]
      ),
      [checkedCompanies]
  );

  return (
    <div className={styles.container}>
      <p className={styles.text}>Company</p>

      {companies.map((company) => (
        <button
          className={classNames(styles.button, {
            [styles.button_checked]: checkedCompanies.includes(company),
          })}
          onClick={toggleCompany(company)}
        >{company}</button>
      ))}
    </div>
  );
};
