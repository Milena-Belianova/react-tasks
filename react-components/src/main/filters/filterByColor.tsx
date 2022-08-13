import React, { useState, useCallback } from "react";
import classNames from "classnames";
import styles from "./filterByColor.module.scss";

const colors = ["white", "green", "yellow", "blue", "red", "black"];

export const FilterByColor = () => {
  const [checkedColors, setCheckedColors] = useState<string[]>([]);
  const toggleColor = useCallback(
    (color: string) => () =>
      setCheckedColors(
        checkedColors.includes(color)
          ? checkedColors.filter((c: string) => c !== color)
          : [...checkedColors, color]
      ),
    [checkedColors]
  );

  return (
    <div className={styles.container}>
      <p className={styles.text}>Color</p>
      {colors.map((color) => (
        <button
          className={classNames(styles[`button_${color}`], {
            [styles["button_checked"]]:
              checkedColors.includes(color),
          })}
          onClick={toggleColor(color)}
        ></button>
      ))}
    </div>
  );
};

// export class FilterByColorClass extends React.Component {
//   state: {checkedColors: Array<string>} = { checkedColors: [] };

//   toggleColor = (color: string) => () =>{
//     const {checkedColors} = this.state;
//     this.setState({
//       checkedColors: checkedColors.includes(color)
//         ? checkedColors.filter((c: string) => c !== color)
//         : [...checkedColors, color],
//     });
//   }

//   render() {
//     return (
//       <div className={styles.container}>
//         <p className={styles.text}>Color</p>
//         {colors.map((color) => (
//           <button
//             className={classNames(styles[`button_${color}`], {
//               [styles["filter-by-color__button_checked"]]:
//                 this.state.checkedColors.includes(color),
//             })}
//             data-color={color}
//             onClick={this.toggleColor(color)}
//           ></button>
//         ))}
//       </div>
//     );
//   }
// }
