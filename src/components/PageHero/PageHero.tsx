import { Link } from "react-router-dom";
import { FiChevronRight } from "react-icons/fi";
import leaves from "../../assets/leaves-decoration.svg";
import styles from "./PageHero.module.css";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  breadcrumb?: string;
}

export function PageHero({ title, subtitle, breadcrumb }: PageHeroProps) {
  return (
    <section className={styles.hero}>
      <img src={leaves} alt="" aria-hidden="true" className={`${styles.leaf} ${styles.leafLeft}`} />
      <img src={leaves} alt="" aria-hidden="true" className={`${styles.leaf} ${styles.leafRight}`} />

      <div className={`container ${styles.content}`}>
        <h1 className={styles.title}>{title}</h1>
        {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
        {breadcrumb && (
          <nav className={styles.breadcrumb} aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <FiChevronRight size={14} />
            <span className={styles.breadcrumbCurrent}>{breadcrumb}</span>
          </nav>
        )}
      </div>
    </section>
  );
}
