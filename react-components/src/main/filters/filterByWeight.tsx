import classNames from "classnames";
import { useCallback, useState } from "react";
import styles from "./filterByWeight.module.scss";

const weight = ["60", "80"];

export const FilterByWeight = () => {
  const [checkedWeight, setCheckedWeight] = useState<string[]>([]);

  const toggleWeight = useCallback(
    (weight: string) => () =>
      setCheckedWeight(
        checkedWeight.includes(weight)
          ? checkedWeight.filter((w: string) => w !== weight)
          : [...checkedWeight, weight]
      ),
      [checkedWeight]
  );

  return (
    <div className={styles.container}>
    <p className={styles.text}>Weight(kg)</p>
    {weight.map((weight) => (
          <button 
          className={classNames(styles.button, {
            [styles["button_checked"]] : 
            checkedWeight.includes(weight),
          })}
          onClick={toggleWeight(weight)}
          >{weight}</button>
    ))}
  </div>
  );
};

