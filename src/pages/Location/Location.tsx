import { FiMapPin, FiPhone, FiClock, FiMessageCircle, FiExternalLink } from "react-icons/fi";
import { SEO } from "../../components/SEO/SEO";
import { PageHero } from "../../components/PageHero/PageHero";
import { siteConfig } from "../../data/site";
import styles from "./Location.module.css";

export function Location() {
  const phoneHref = `tel:${siteConfig.phone.replace(/\s/g, "")}`;
  const directionsHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(siteConfig.address)}`;

  return (
    <>
      <SEO
        title={`Locate Our Clinic — ${siteConfig.name}`}
        description={`Find ${siteConfig.name} in ${siteConfig.city}. Address, directions and clinic timings.`}
      />

      <PageHero
        title="Locate Our Clinic"
        subtitle="Find directions and clinic timings."
        breadcrumb="Location"
      />

      <section className="section">
        <div className={`container ${styles.grid}`}>
          <div className={`card ${styles.infoCard}`}>
            <div className={styles.infoRow}>
              <div className={styles.infoIcon}>
                <FiMapPin size={20} />
              </div>
              <div>
                <div className={styles.infoLabel}>Address</div>
                <div className={styles.infoValue}>{siteConfig.address}</div>
              </div>
            </div>

            <div className={styles.infoRow}>
              <div className={styles.infoIcon}>
                <FiClock size={20} />
              </div>
              <div>
                <div className={styles.infoLabel}>Clinic Timings</div>
                <div className={styles.infoValue}>
                  {siteConfig.hours.weekday}
                  <br />
                  {siteConfig.hours.sunday}
                </div>
              </div>
            </div>

            <div className={styles.infoRow}>
              <div className={styles.infoIcon}>
                <FiPhone size={20} />
              </div>
              <div>
                <div className={styles.infoLabel}>Call Us</div>
                <div className={styles.infoValue}>
                  <a href={phoneHref}>{siteConfig.phone}</a>
                </div>
              </div>
            </div>

            <div className={styles.actions}>
              <a href={directionsHref} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                Get Directions <FiExternalLink />
              </a>
              <a
                href={`https://wa.me/${siteConfig.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
              >
                <FiMessageCircle /> Chat on WhatsApp
              </a>
            </div>
          </div>

          <div className={styles.mapWrap}>
            <iframe
              title={`${siteConfig.name} location`}
              src={`https://www.google.com/maps?q=${encodeURIComponent(siteConfig.address)}&output=embed`}
              className={styles.mapFrame}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </>
  );
}
