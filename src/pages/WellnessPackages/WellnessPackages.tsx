import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import { SEO } from "../../components/SEO/SEO";
import {
  slugifyWellnessPackageName,
  wellnessProgramGroups,
  wellnessPackagesIntro,
  wellnessPackagesDisclaimer,
} from "../../data/wellnessPackages";
import { siteConfig } from "../../data/site";
import styles from "./WellnessPackages.module.css";

export function WellnessPackages() {
  const [activeTab, setActiveTab] = useState<"wellness" | "conditionCare">("wellness");
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);

  const activeGroup = wellnessProgramGroups.find((group) => group.key === activeTab) ?? wellnessProgramGroups[0];

  const handleTabKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>, index: number) => {
    const tabCount = wellnessProgramGroups.length;

    if (event.key === "ArrowRight" || event.key === "ArrowLeft") {
      event.preventDefault();
      const direction = event.key === "ArrowRight" ? 1 : -1;
      const nextIndex = (index + direction + tabCount) % tabCount;
      const nextTab = wellnessProgramGroups[nextIndex];
      setActiveTab(nextTab.key);
      tabRefs.current[nextIndex]?.focus();
    }
  };

  return (
    <>
      <SEO
        title={`Wellness Programs — ${siteConfig.name}`}
        description="Personalized Ayurvedic and Panchakarma wellness programs for detoxification, rejuvenation and natural health support."
      />

      <section className="section">
        <div className="container">
          <h2 className={styles.heroTitle}>Choose Your Wellness Program</h2>
          <p className={styles.intro}>{wellnessPackagesIntro}</p>

          <div className={styles.tabBar} role="tablist" aria-label="Wellness package categories">
            {wellnessProgramGroups.map((group, index) => {
              const isActive = activeTab === group.key;
              const tabId = `${group.key}-tab`;
              const panelId = `${group.key}-tabpanel`;

              return (
                <button
                  key={group.key}
                  ref={(element) => {
                    tabRefs.current[index] = element;
                  }}
                  id={tabId}
                  type="button"
                  className={`${styles.tabButton} ${isActive ? styles.tabButtonActive : ""}`}
                  role="tab"
                  aria-selected={isActive}
                  aria-controls={panelId}
                  tabIndex={isActive ? 0 : -1}
                  onClick={() => setActiveTab(group.key)}
                  onKeyDown={(event) => handleTabKeyDown(event, index)}
                >
                  <span>{group.title}</span>
                  <span className={styles.tabCount}>{String(group.items.length).padStart(2, "0")}</span>
                </button>
              );
            })}
          </div>

          <div
            className={styles.group}
            role="tabpanel"
            id={`${activeGroup.key}-tabpanel`}
            aria-labelledby={`${activeGroup.key}-tab`}
            tabIndex={0}
          >
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

                    <div className={styles.packageActions}>
                      <Link
                        to={`/wellness-packages/${slugifyWellnessPackageName(program.name)}`}
                        className={styles.packageActionLink}
                      >
                        View Details <FiArrowRight />
                      </Link>
                    </div>
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
