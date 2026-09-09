import { useState } from "react";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import { SEO } from "../../components/SEO/SEO";
import { wellnessProgramGroups, wellnessPackagesIntro, wellnessPackagesDisclaimer } from "../../data/wellnessPackages";
import { siteConfig } from "../../data/site";
import styles from "./WellnessPackages.module.css";

export function WellnessPackages() {
  const [activeTab, setActiveTab] = useState<"wellness" | "conditionCare">("wellness");

  const activeGroup = wellnessProgramGroups.find((group) => group.key === activeTab) ?? wellnessProgramGroups[0];

  return (
    <>
      <SEO
        title={`Wellness Programs — ${siteConfig.name}`}
        description="Personalized Ayurvedic and Panchakarma wellness programs for detoxification, rejuvenation and natural health support."
      />

      {/* <PageHero
        title="Wellness Programs"
        subtitle="Personalized Ayurvedic wellness programs designed to support balance, vitality and long-term wellbeing."
        breadcrumb="Wellness Programs"
      /> */}

      <section className="section">
        <div className="container">
          <h2 className={styles.heroTitle}>Choose Your Wellness Program</h2>
          <p className={styles.intro}>{wellnessPackagesIntro}</p>

          <div className={styles.tabBar}>
            {wellnessProgramGroups.map((group) => (
              <button
                key={group.key}
                type="button"
                className={`${styles.tabButton} ${activeTab === group.key ? styles.tabButtonActive : ""}`}
                onClick={() => setActiveTab(group.key)}
              >
                {group.title}
              </button>
            ))}
          </div>

          <div className={styles.group}>
            <div className={styles.groupHeader}>
              <span className="eyebrow">{activeGroup.title}</span>
              <h2 className={styles.groupTitle}>{activeGroup.title}</h2>
            </div>

            <div className={styles.grid}>
              {activeGroup.items.map((program) => (
                <article key={program.name} className={`card ${styles.packageCard}`}>
                  <img src={program.image} alt={program.name} className={styles.packageImage} />

                  <div className={styles.packageBody}>
                    <span className={styles.packageTag}>{activeGroup.title}</span>
                    <h3 className={styles.packageTitle}>{program.name}</h3>
                    <p className={styles.packageDescription}>{program.description}</p>
                  </div>
                </article>
              ))}
            </div>
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
