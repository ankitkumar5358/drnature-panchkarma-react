import { FiArrowRight, FiCheck } from "react-icons/fi";
import { Link, Navigate, useParams } from "react-router-dom";
import { SEO } from "../../components/SEO/SEO";
import {
  getWellnessPackageBySlug,
  slugifyWellnessPackageName,
  wellnessPackagesDisclaimer,
  wellnessProgramGroups,
} from "../../data/wellnessPackages";
import { siteConfig } from "../../data/site";
import styles from "./WellnessPackageDetail.module.css";

const defaultWhoItIsFor = [
  "Individuals seeking a structured, personalized approach to daily wellness",
  "People looking to support digestion, balance, stress management and recovery through mindful care",
  "Those who prefer a holistic program that complements their current lifestyle and healthcare routine",
];

const defaultIncludedItems = [
  "Professional consultation and personalized guidance",
  "Lifestyle and routine recommendations",
  "Supportive care aligned with individual needs",
  "Follow-up guidance for sustained wellbeing",
];

export function WellnessPackageDetailPage() {
  const { slug = "" } = useParams();
  const program = getWellnessPackageBySlug(slug);

  if (!program) {
    return <Navigate to="/wellness-packages" replace />;
  }

  const category = wellnessProgramGroups.find((group) => group.items.some((item) => slugifyWellnessPackageName(item.name) === slug))?.title ?? "Wellness";

  const breadcrumb = [
    { label: "Wellness Packages", to: "/wellness-packages" },
    { label: category, to: "#" },
    { label: program.name, to: "" },
  ];

  return (
    <>
      <SEO title={`${program.name} — ${siteConfig.name}`} description={program.description} />

      <section className={`section ${styles.detailSection}`}>
        <div className="container">
          <nav aria-label="Breadcrumb" className={styles.breadcrumb}>
            {breadcrumb.map((item, index) => (
              <span key={`${item.label}-${index}`} className={styles.breadcrumbItem}>
                {item.to ? (
                  <Link to={item.to} className={styles.breadcrumbLink}>
                    {item.label}
                  </Link>
                ) : (
                  <span aria-current="page">{item.label}</span>
                )}
                {index < breadcrumb.length - 1 && <span className={styles.breadcrumbSeparator}>/</span>}
              </span>
            ))}
          </nav>

          <div className={styles.detailLayout}>
            <aside className={styles.mediaColumn}>
              <div className={styles.imageFrame}>
                <img src={program.image} alt={program.name} className={styles.detailImage} loading="eager" />
              </div>

              <div className={styles.consultationPanel}>
                <h2 className={styles.panelTitle}>Personalized Consultation</h2>
                <p className={styles.panelText}>
                  The program is finalized after a professional assessment to ensure it supports your individual
                  constitution, health history and current needs.
                </p>
                <Link to="/consultation" className="btn btn-primary" aria-label="Book a consultation">
                  Book a Consultation <FiArrowRight />
                </Link>
              </div>
            </aside>

            <div className={styles.mainColumn}>
              <div className={styles.metaBlock}>
                <span className="eyebrow">{category}</span>
                <h1 className={styles.pageTitle}>{program.name}</h1>
              </div>

              <section className={styles.contentSection}>
                <span className="eyebrow">Program Overview</span>
                <p className={styles.bodyText}>{program.description}</p>
              </section>

              <section className={styles.contentSection}>
                <span className="eyebrow">Who It Is For</span>
                <ul className={styles.list}>
                  {defaultWhoItIsFor.map((item) => (
                    <li key={item} className={styles.listItem}>
                      <span className={styles.checkmark} aria-hidden="true">
                        <FiCheck size={16} />
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </section>

              <section className={styles.contentSection}>
                <span className="eyebrow">What’s Included</span>
                <ul className={styles.checkGrid}>
                  {defaultIncludedItems.map((item) => (
                    <li key={item} className={styles.checkItem}>
                      <span className={styles.checkmark} aria-hidden="true">
                        <FiCheck size={16} />
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </section>

              <section className={styles.contentSection}>
                <span className="eyebrow">Therapeutic Journey</span>
                <ol className={styles.timeline}>
                  <li className={styles.timelineItem}>
                    <span className={styles.timelineNumber}>01</span>
                    <div>
                      <h3 className={styles.timelineTitle}>Consultation and assessment</h3>
                      <p className={styles.timelineText}>
                        A detailed review of your current health goals, lifestyle and constitution helps shape a care
                        plan that feels appropriate and sustainable.
                      </p>
                    </div>
                  </li>
                  <li className={styles.timelineItem}>
                    <span className={styles.timelineNumber}>02</span>
                    <div>
                      <h3 className={styles.timelineTitle}>Personalized care</h3>
                      <p className={styles.timelineText}>
                        Your plan is guided by a thoughtful, individualized Ayurvedic approach focused on balance,
                        comfort and long-term support.
                      </p>
                    </div>
                  </li>
                  <li className={styles.timelineItem}>
                    <span className={styles.timelineNumber}>03</span>
                    <div>
                      <h3 className={styles.timelineTitle}>Follow-up and lifestyle guidance</h3>
                      <p className={styles.timelineText}>
                        Ongoing reflection and daily support help reinforce positive routines and help you maintain
                        progress after treatment.
                      </p>
                    </div>
                  </li>
                </ol>
              </section>

              <section className={styles.contentSection}>
                <span className="eyebrow">Safety</span>
                <p className={styles.bodyText}>{wellnessPackagesDisclaimer}</p>
              </section>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
