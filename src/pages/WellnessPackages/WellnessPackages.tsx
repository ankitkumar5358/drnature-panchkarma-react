import { Link } from "react-router-dom";
import { FaLeaf } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";
import { SEO } from "../../components/SEO/SEO";
import { PageHero } from "../../components/PageHero/PageHero";
import { wellnessPackages, wellnessPackagesIntro, wellnessPackagesDisclaimer } from "../../data/wellnessPackages";
import { siteConfig } from "../../data/site";
import styles from "./WellnessPackages.module.css";

export function WellnessPackages() {
  return (
    <>
      <SEO
        title={`Wellness Packages — ${siteConfig.name}`}
        description="Personalized Ayurvedic and Panchakarma wellness programs for detoxification, lifestyle balance and long-term wellness support."
      />

      <PageHero
        title="Wellness Packages"
        subtitle="Personalized Ayurvedic and Panchakarma wellness programs, tailored after expert consultation."
        breadcrumb="Wellness Packages"
      />

      <section className="section">
        <div className="container">
          <p className={styles.intro}>{wellnessPackagesIntro}</p>

          <div className={styles.grid}>
            {wellnessPackages.map((name) => (
              <div key={name} className={`card ${styles.packageCard}`}>
                <FaLeaf size={18} />
                <span>{name}</span>
              </div>
            ))}
          </div>

          <div className={styles.disclaimer}>
            <span className={styles.disclaimerLabel}>Please note</span>
            {wellnessPackagesDisclaimer}
          </div>

          <div className={styles.ctaWrap}>
            <Link to="/contact" className="btn btn-primary">
              Book a Consultation <FiArrowRight />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
