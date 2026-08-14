import { FaLeaf } from "react-icons/fa";
import styles from "./TherapyCard.module.css";

interface TherapyCardProps {
  name: string;
  description: string;
}

export function TherapyCard({ name, description }: TherapyCardProps) {
  return (
    <div className={`card ${styles.card}`}>
      <div className={styles.header}>
        <FaLeaf size={18} />
        <h3 className={styles.name}>{name}</h3>
      </div>
      <p className={styles.description}>{description}</p>
    </div>
  );
}
