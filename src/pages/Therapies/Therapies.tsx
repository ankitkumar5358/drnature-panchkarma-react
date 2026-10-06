import { Link, useParams } from "react-router-dom";
import { FiArrowRight, FiPhone } from "react-icons/fi";
import { SEO } from "../../components/SEO/SEO";
import { getTherapyCategoryBySlug, therapyCategories } from "../../data/therapies";
import { siteConfig } from "../../data/site";
import styles from "./Therapies.module.css";

export function Therapies() {
  return (
    <>
      <SEO
        title={`Panchkarma Therapies — ${siteConfig.name}`}
        description={`A comprehensive range of authentic Panchakarma and Ayurvedic therapies for detoxification, relaxation, rejuvenation and wellness support at ${siteConfig.name}.`}
      />
{/* 
      <PageHero
        title="Our Therapies"
        subtitle="Traditional Ayurvedic therapies designed to support balance, detoxification, healing and rejuvenation."
        breadcrumb="Therapies"
      /> */}

      <section className="section">
        <div className="container">
          <div className={styles.headerWrap}>
            <div className={styles.titleRow}>
              <span aria-hidden="true" />
              <span className={styles.eyebrow}>OUR THERAPIES</span>
              <span aria-hidden="true" />
            </div>
            <h2 className={styles.title}>Authentic Ayurveda Personalized for You</h2>
            <p className={styles.subtitle}>
              Explore traditional Panchkarma, rejuvenation and specialized Ayurvedic therapies thoughtfully selected according to individual health needs and wellness goals.
            </p>
          </div>

          <div className={styles.categoryGrid}>
            {therapyCategories.map((category, index) => {
              const count = category.detailed.length + category.namesOnly.length;

              return (
                <article key={category.slug} className={`card ${styles.categoryCard}`}>
                  <img src={category.image} alt={category.name} className={styles.categoryImage} />

                  <div className={styles.cardBody}>
                    <div className={styles.cardTop}>
                      <span className={styles.cardNumber}>{String(index + 1).padStart(2, "0")}</span>
                      <div>
                        <h3 className={styles.categoryTitle}>{category.name}</h3>
                      </div>
                    </div>

                    <p className={styles.categorySummary}>{category.summary}</p>

                    <div className={styles.metaRow}>
                      <span>{count} Therapies</span>
                    </div>

                    <Link to={`/therapies/${category.slug}`} className={styles.exploreButton}>
                      Explore Therapies <FiArrowRight />
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export function TherapyCategoryDetailPage() {
  const { slug = "classical-panchakarma" } = useParams();
  const category = getTherapyCategoryBySlug(slug);

  const therapies =
    category.detailed.length > 0
      ? category.detailed.map((item) => ({
          ...item,
          image: category.image,
        }))
      : category.namesOnly.map((name) => ({
          name,
          description: "Targeted Ayurvedic care designed to support balance, comfort and long-term wellness.",
          tags: ["Traditional Care"],
          image: category.image,
        }));

  return (
    <>
      <SEO
        title={`${category.name} — ${siteConfig.name}`}
        description={`Explore ${category.name} therapies and personalized Ayurvedic care at ${siteConfig.name}.`}
      />

      <section className="section">
        <div className="container">
          <div className={styles.breadcrumbRow}>
            <Link to="/">Home</Link>
            <span>›</span>
            <Link to="/therapies">Therapies</Link>
            <span>›</span>
            <span>{category.name}</span>
          </div>

          <div className={styles.heroDetailWrap}>
            <div className={styles.heroCopy}>
              <span className="eyebrow">Therapy Category</span>
              <h2 className={styles.detailTitle}>{category.name}</h2>
              <p className={styles.detailSummary}>{category.summary}</p>
            </div>
            <img src={category.image} alt={category.name} className={styles.detailHeroImage} />
          </div>
        </div>
      </section>

      <section className={`section ${styles.detailSection}`}>
        <div className="container">
          <div className={styles.detailHeader}>
            <span className="eyebrow">Therapies in This Category</span>
            <h2 className={styles.sectionTitle}>Individual therapies</h2>
          </div>

          <div className={styles.therapyListGrid}>
            {therapies.map((therapy, index) => (
              <article
                key={therapy.name}
                className={`card ${styles.therapyCard} ${index % 2 === 1 ? styles.therapyCardReverse : ""}`}
              >
                <div className={styles.therapyImageWrap}>
                  <img src={therapy.image} alt={therapy.name} className={styles.therapyImage} />
                </div>
                <div className={styles.therapyBody}>
                  <h3 className={styles.therapyName}>{therapy.name}</h3>
                  <p className={styles.therapyDescription}>{therapy.description}</p>
                  <div className={styles.tagRow}>
                    {therapy.tags.map((tag) => (
                      <span key={`${therapy.name}-${tag}`} className={styles.tag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className={styles.therapyActions}>
                    {/* <button type="button" className="btn btn-outline">
                      View Details
                    </butto>
                    <Link to="/contact" className="btn btn-primary">
                      Book a Consultation
                    </Link> */}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className={styles.ctaCard}>
            <div>
              <span className="eyebrow">Need guidance?</span>
              <h2 className={styles.ctaTitle}>Not Sure Which Therapy Is Right for You?</h2>
            </div>
            <div className={styles.ctaActions}>
              <Link to="/contact" className="btn btn-primary">
                Book a Consultation
              </Link>
              <a href={`tel:${siteConfig.phone.replace(/\s/g, "")}`} className="btn btn-outline">
                <FiPhone size={16} /> Call Our Wellness Team
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
