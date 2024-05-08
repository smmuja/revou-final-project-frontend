import { ReactNode } from "react";
import styles from "./Card.module.css";

interface Props {
  children: ReactNode;
  className?: string;
}

const Card = ({ children, ...props }: Props) => {
  return (
    <div {...props} className={`${styles.container} ${props.className}`}>
      {children}
    </div>
  );
};

export default Card;
