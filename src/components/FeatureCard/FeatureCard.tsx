import type { IconType } from "react-icons";
import styles from "./FeatureCard.module.css";

interface FeatureCardProps {
  icon: IconType;
  title: string;
  description: string;
}

export function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
  return (
    <div className={`card ${styles.card}`}>
      <div className={styles.iconWrap}>
        <Icon size={28} />
      </div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
    </div>
  );
}
