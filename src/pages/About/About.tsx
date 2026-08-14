import { FiEye, FiTarget, FiCheckCircle } from "react-icons/fi";
import { FaLeaf } from "react-icons/fa";
import { SEO } from "../../components/SEO/SEO";
import { PageHero } from "../../components/PageHero/PageHero";
import clinicImg from "../../assets/clinic.jpg";
import herbsImg from "../../assets/herbs.jpg";
import { siteConfig } from "../../data/site";
import styles from "./About.module.css";

const keyFeatures = [
  "Completely herbal treatment with minimal side effects",
  "Dietary and lifestyle modifications to boost overall health",
  "Use of herbal therapies to heal you from within",
  "Thorough follow-up after every treatment",
  "Personalised diet charts and exercise plans",
  "Verified at-home remedies recommended by experts",
];

export function About() {
  return (
    <>
      <SEO
        title={`About Us — ${siteConfig.name}`}
        description={`Learn about ${siteConfig.name}, an Ayurvedic Panchkarma centre delivering authentic healthcare and holistic wellness solutions.`}
      />

      <PageHero
        title="About Us"
        subtitle={`Welcome to ${siteConfig.name} — your trusted Ayurvedic wellness centre.`}
        breadcrumb="About Us"
      />

      <section className="section">
        <div className={`container ${styles.introGrid}`}>
          <img src={clinicImg} alt={`${siteConfig.name} clinic`} className={styles.introImage} />
          <div>
            <span className="eyebrow">Our Story</span>
            <h2 className={styles.introTitle}>Authentic Ayurvedic Healthcare & Holistic Wellness</h2>
            <p className={styles.introText}>
              {siteConfig.name} is dedicated to delivering authentic Ayurvedic healthcare and holistic wellness
              solutions through traditional Ayurvedic principles and personalized patient care. Our centre
              specializes in Panchakarma therapies, Ayurvedic consultations, detoxification programs, stress
              management, lifestyle counselling, and natural healing therapies designed to support overall health
              and well-being.
            </p>
            <p className={styles.introText}>
              Our team of qualified and experienced Ayurvedic doctors is committed to providing professional
              consultations, customized treatment plans, and compassionate care tailored to individual health needs.
              With a calm healing environment and a patient-focused approach, we strive to promote balanced living,
              preventive healthcare, and long-term wellness through the timeless wisdom of Ayurveda.
            </p>
          </div>
        </div>
      </section>

      <section className={`section ${styles.warmSection}`}>
        <div className="container">
          <div style={{ textAlign: "center", maxWidth: "42rem", marginInline: "auto" }}>
            <h2 className={styles.introTitle}>Our Treatment: Key Features</h2>
            <p className={styles.introText}>What makes {siteConfig.name} different from any other wellness centre.</p>
          </div>
          <div className={styles.featureGrid}>
            {keyFeatures.map((f) => (
              <div key={f} className={`card ${styles.featureCard}`}>
                <FiCheckCircle size={22} />
                <span>{f}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className={`container ${styles.visionGrid}`}>
          <div>
            <div className={styles.visionHeader}>
              <div className={styles.visionIcon}>
                <FiEye size={22} />
              </div>
              <h2 className={styles.visionHeading}>Our Vision</h2>
            </div>
            <p className={styles.visionText}>
              Our vision is to revive and elevate the timeless science of Ayurveda as a trusted and effective path to
              modern wellness. We are committed to delivering authentic, result-oriented healing that nurtures the
              body, mind and spirit. By combining traditional Ayurvedic wisdom with professional excellence, we
              strive to create a space where every individual receives personalized care focused on root-cause
              healing rather than symptom management.
            </p>
            <p className={styles.visionText}>
              Through Panchkarma, holistic therapies, and lifestyle guidance, our mission is to empower individuals
              to achieve lasting health, inner balance and natural vitality. We aspire to become a center of
              excellence in Ayurvedic healing — transforming lives and inspiring healthier communities through the
              power of nature.
            </p>
          </div>
          <div>
            <div className={styles.visionHeader}>
              <div className={styles.visionIcon}>
                <FiTarget size={22} />
              </div>
              <h2 className={styles.visionHeading}>Our Mission</h2>
            </div>
            <p className={styles.visionText}>
              To help you live a healthier, happier and more balanced life through authentic Ayurveda. We focus on
              deep detoxification and natural healing by offering personalised Panchkarma therapies that cleanse the
              body, restore balance and rejuvenate you from within.
            </p>
            <p className={styles.visionText}>
              We believe true wellness comes from treating the root cause — not just the symptoms — so you can heal
              naturally, feel lighter and enjoy lasting well-being.
            </p>
          </div>
        </div>
      </section>

      <section className={`section ${styles.sanctuary}`}>
        <img src={herbsImg} alt="" className={styles.sanctuaryImage} />
        <div className={styles.sanctuaryOverlay} />
        <div className={`container ${styles.sanctuaryContent}`}>
          <FaLeaf size={36} className={styles.sanctuaryIcon} />
          <h2 className={styles.sanctuaryTitle}>A Sanctuary of Natural Healing</h2>
          <p className={styles.sanctuaryText}>
            Our Panchkarma centre is a sanctuary of natural healing rooted in authentic Ayurveda. We offer
            personalised Panchkarma therapies focused on deep detoxification, rejuvenation and restoring harmony
            between body and mind for lasting wellness.
          </p>
        </div>
      </section>
    </>
  );
}
