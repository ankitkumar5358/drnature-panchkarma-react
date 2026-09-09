import type { ReactNode } from "react";
import styles from "./CTASection.module.css";

interface CTASectionProps {
  image: string;
  title: string;
  description: string;
  children: ReactNode;
}

export function CTASection({ image, title, description, children }: CTASectionProps) {
  return (
    <section className={`section ${styles.cta}`}>
      <img src={image} alt="" className={styles.bgImage} />
      <div className={styles.overlay} />
      <div className={`container ${styles.content}`}>
        <div className={styles.textBlock}>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.description}>{description}</p>
        </div>
        <div className={styles.actions}>{children}</div>
      </div>
    </section>
  );
}
