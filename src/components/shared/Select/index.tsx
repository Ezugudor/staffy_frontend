import { MouseEvent } from "react";
import styles from "./Select.module.css";
import { ChangeEvent, FC, MouseEventHandler } from "react";
import classNames from "classnames";

interface OptionProps<T> {
  id: number;
  name: string;
  value: T;
}

interface SelectProps<T> {
  defaultValue: T;
  options: OptionProps<T>[];
  onSelect: (selected: T) => void;
  className?: string;
}

export const Select: FC<SelectProps<number>> = ({
  defaultValue,
  onSelect,
  options,
  className,
}) => {
  const handleSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    onSelect(parseInt(e.target.value, 10));
  };

  const handleClick = (e: MouseEvent<HTMLSelectElement>) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const getWrapperClass = () => {
    return classNames(styles.Select, {
      [className || ""]: className,
    });
  };
  return (
    <select
      className={getWrapperClass()}
      onChange={handleSelect}
      onClick={handleClick}
      defaultValue={defaultValue}
    >
      {options.map((winner) => (
        <option key={winner.id} value={winner.value} className={styles.Option}>
          {winner.name}
        </option>
      ))}
    </select>
  );
};
