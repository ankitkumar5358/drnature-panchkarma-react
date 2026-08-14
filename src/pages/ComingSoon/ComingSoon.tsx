import { Link } from "react-router-dom";
import { FiClock, FiArrowRight } from "react-icons/fi";
import { SEO } from "../../components/SEO/SEO";
import { PageHero } from "../../components/PageHero/PageHero";
import { siteConfig } from "../../data/site";
import styles from "./ComingSoon.module.css";

interface ComingSoonProps {
  title: string;
  subtitle: string;
  breadcrumb: string;
  hint?: string;
}

export function ComingSoon({ title, subtitle, breadcrumb, hint }: ComingSoonProps) {
  return (
    <>
      <SEO title={`${title} — ${siteConfig.name}`} description={subtitle} />

      <PageHero title={title} subtitle={subtitle} breadcrumb={breadcrumb} />

      <section className="section">
        <div className={`container ${styles.wrap}`}>
          <div className={styles.icon}>
            <FiClock size={28} />
          </div>
          <h2 className={styles.title}>Content coming soon</h2>
          <p className={styles.text}>
            {hint ?? "This page is being prepared. In the meantime, please get in touch and we'll help directly."}
          </p>
          <div className={styles.action}>
            <Link to="/contact" className="btn btn-primary">
              Contact Us <FiArrowRight />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
