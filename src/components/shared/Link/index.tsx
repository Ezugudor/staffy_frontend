import { FC, MouseEvent, ReactNode } from "react";
import styles from "./Link.module.css";

interface LinkBase {
  children: ReactNode;
  className?: string;
}

interface LinkWithHref extends LinkBase {
  href: string;
  onClick?: never;
}

interface LinkWithOnClick<T> extends LinkBase {
  href?: never;
  onClick: (e: MouseEvent<HTMLAnchorElement>) => void;
}

type LinkProps<T = any> = LinkWithHref | LinkWithOnClick<T>;

export const Link: FC<LinkProps> = ({
  children,
  href = "#",
  onClick,
  className,
}) => {
  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    !href ? e.preventDefault() : null;
    onClick?.(e);
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      className={`${styles.Link} ${className}`}
    >
      {children}
    </a>
  );
};
