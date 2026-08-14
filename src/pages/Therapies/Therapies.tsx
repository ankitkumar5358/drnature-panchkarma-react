import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import { SEO } from "../../components/SEO/SEO";
import { PageHero } from "../../components/PageHero/PageHero";
import { TherapyCard } from "../../components/TherapyCard/TherapyCard";
import { therapyCategories } from "../../data/therapies";
import { siteConfig } from "../../data/site";
import styles from "./Therapies.module.css";

export function Therapies() {
  const [openSlug, setOpenSlug] = useState<string | null>(therapyCategories[0]?.slug ?? null);

  return (
    <>
      <SEO
        title={`Panchkarma Therapies — ${siteConfig.name}`}
        description={`A comprehensive range of authentic Panchakarma and Ayurvedic therapies for detoxification, relaxation, rejuvenation and pain management at ${siteConfig.name}.`}
      />

      <PageHero
        title="Therapies"
        subtitle="A comprehensive range of authentic Panchakarma and Ayurvedic therapies performed under professional supervision."
        breadcrumb="Therapies"
      />

      <section className="section">
        <div className="container">
          <p className={styles.intro}>
            At {siteConfig.name}, we offer a comprehensive range of authentic Panchakarma and Ayurvedic therapies
            designed to promote detoxification, relaxation, rejuvenation, pain management, and holistic wellness. All
            treatments are provided under professional Ayurvedic supervision using traditional healing techniques
            and natural herbal formulations.
          </p>

          <div className={styles.categoryList}>
            {therapyCategories.map((category) => {
              const isOpen = openSlug === category.slug;
              return (
                <div key={category.slug} className={styles.category}>
                  <button
                    className={styles.categoryButton}
                    onClick={() => setOpenSlug(isOpen ? null : category.slug)}
                    aria-expanded={isOpen}
                  >
                    <div>
                      <div className={styles.categoryTitle}>{category.name}</div>
                      <p className={styles.categorySummary}>{category.summary}</p>
                    </div>
                    <FiChevronDown size={22} className={`${styles.chevron} ${isOpen ? styles.chevronOpen : ""}`} />
                  </button>

                  {isOpen && (
                    <div className={styles.categoryBody}>
                      {category.detailed.length > 0 && (
                        <div className={styles.detailGrid}>
                          {category.detailed.map((t) => (
                            <TherapyCard key={t.name} name={t.name} description={t.description} />
                          ))}
                        </div>
                      )}

                      {category.namesOnly.length > 0 && (
                        <>
                          <div className={styles.subheading}>Also included in this category</div>
                          <div className={styles.nameChips}>
                            {category.namesOnly.map((name) => (
                              <span key={name} className={styles.nameChip}>
                                {name}
                              </span>
                            ))}
                          </div>
                        </>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
