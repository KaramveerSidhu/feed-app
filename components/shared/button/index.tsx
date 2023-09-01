import { MouseEventHandler } from "react";
import styles from "./Button.module.scss";
import Link from "next/link";

type ButtonProps = {
  onClick?: MouseEventHandler<HTMLButtonElement>;
  children: any;
  variant?: string;
  href?: string;
  className?: string;
};

const Button = (props: ButtonProps) => {
  const {
    onClick = () => undefined,
    children,
    variant = "primary",
    href = "",
    className = "",
  } = props;

  return !!href ? (
    <Link
      href={href}
      className={`${styles.btn} ${styles[variant]} ${className}`}
    >
      {children}
    </Link>
  ) : (
    <button
      onClick={onClick}
      className={`${styles.btn} ${styles[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
