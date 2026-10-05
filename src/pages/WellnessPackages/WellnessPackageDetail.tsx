import { FiArrowRight, FiCheck } from "react-icons/fi";
import { Link, Navigate, useParams } from "react-router-dom";
import { SEO } from "../../components/SEO/SEO";
import { wellnessPackageDetails } from "../../data/wellnessPackageDetails";
import {
  getWellnessPackageBySlug,
  slugifyWellnessPackageName,
  wellnessPackagesDisclaimer,
  wellnessProgramGroups,
} from "../../data/wellnessPackages";
import { siteConfig } from "../../data/site";
import styles from "./WellnessPackageDetail.module.css";

export function WellnessPackageDetailPage() {
  const { slug = "" } = useParams();
  const program = getWellnessPackageBySlug(slug);

  if (!program) {
    return <Navigate to="/wellness-packages" replace />;
  }

  const details = wellnessPackageDetails[program.name];
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
                <span className="eyebrow">{details.eyebrow}</span>
                <h1 className={styles.pageTitle}>{program.name}</h1>
              </div>

              <section className={styles.contentSection}>
                <span className="eyebrow">Program Overview</span>
                <p className={styles.bodyText}>
                  {program.description} {details.context}
                </p>
                <p className={styles.bodyText}>{details.highlights.join(" | ")}</p>
              </section>

              <section className={styles.contentSection}>
                <span className="eyebrow">Key Wellness Focus</span>
                <ul className={styles.list}>
                  {details.focus.map((item) => (
                    <li key={item} className={styles.listItem}>
                      <span className={styles.checkmark} aria-hidden="true">
                        <FiCheck size={16} />
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </section>

              {details.programs?.map((plan) => (
                <section key={plan.duration} className={styles.contentSection}>
                  <span className="eyebrow">{plan.duration}</span>
                  <p className={styles.bodyText}>May include: {plan.therapies}</p>
                </section>
              ))}

              {details.packageNote && (
                <section className={styles.contentSection}>
                  <span className="eyebrow">Package Details</span>
                  <p className={styles.bodyText}>{details.packageNote}</p>
                </section>
              )}

              <section className={styles.contentSection}>
                <span className="eyebrow">Safety</span>
                <p className={styles.bodyText}>
                  {details.personalizationNote && `${details.personalizationNote} `}
                  {wellnessPackagesDisclaimer}
                </p>
              </section>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
