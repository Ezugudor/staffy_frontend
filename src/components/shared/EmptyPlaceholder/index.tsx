import { FC } from "react";
import styles from "./EmptyPlaceholder.module.css";

interface EmptyPlaceholderProps {
  title: string;
  desc: string;
  icon: JSX.Element;
}

export const EmptyPlaceholder: FC<EmptyPlaceholderProps> = ({
  title,
  desc,
  icon,
}) => {
  return (
    <section className={styles.EmptyPlaceholderWrapper}>
      <div className={styles.EPHIconWrapper}>{icon}</div>
      <h4 className={styles.EPHTitle}>{title}</h4>
      <p className={styles.EPHDesc}>{desc}</p>
    </section>
  );
};
