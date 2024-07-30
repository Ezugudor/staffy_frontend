import styles from "./Chip.module.css";
import { FC, MouseEventHandler, ReactNode } from "react";
import classNames from "classnames";
import { ClickEvent } from "@/types/ClickEvent";

// type ChipClassNames = Record<
//   "base" | "header" | "mainContent" | "endContent",
//   string
// >;

interface ChipClassNames {
  base?: string;
  header?: string;
  startContent?: string;
  mainContent?: string;
  endContent?: string;
}

interface ChipProps {
  mainContent?: ReactNode;
  startContent?: ReactNode;
  endContent?: ReactNode;
  header?: ReactNode;
  classNames?: ChipClassNames;
  onClick?: () => void;
}

export const Chip: FC<ChipProps> = ({
  header,
  startContent,
  mainContent,
  endContent,
  classNames: className,
  onClick,
}) => {
  const handleClick = () => {
    onClick?.();
  };
  const getBaseWrapperClasses = () => {
    return classNames(styles.Wrapper, {
      [className?.base || ""]: className?.base,
    });
  };

  const getHeaderClasses = () => {
    return classNames(styles.Header, {
      [className?.header || ""]: className?.header,
    });
  };

  const getstartContentClasses = () => {
    return classNames(styles.StartContent, {
      [className?.startContent || ""]: className?.startContent,
    });
  };

  const getMainContentClasses = () => {
    return classNames(styles.MainContent, {
      [className?.mainContent || ""]: className?.mainContent,
    });
  };

  const getEndContentClasses = () => {
    return classNames(styles.EndContent, {
      [className?.endContent || ""]: className?.endContent,
    });
  };

  return (
    <div className={getBaseWrapperClasses()} onClick={handleClick}>
      {header ? <header className={getHeaderClasses()}>{header}</header> : null}
      <div className={styles.Body}>
        {startContent ? (
          <span className={getstartContentClasses()}>{startContent}</span>
        ) : null}
        <span className={getMainContentClasses()}>{mainContent}</span>
        {endContent ? (
          <span className={getEndContentClasses()}>{endContent}</span>
        ) : null}
      </div>
    </div>
  );
};
