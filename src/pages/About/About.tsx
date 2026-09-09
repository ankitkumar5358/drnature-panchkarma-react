import { FiEye, FiTarget, FiCheckCircle } from "react-icons/fi";
import { FaLeaf } from "react-icons/fa";
import { SEO } from "../../components/SEO/SEO";
import clinicImg from "../../assets/clinic.jpg";
import herbsImg from "../../assets/herbs.jpg";
import { siteConfig } from "../../data/site";
import styles from "./About.module.css";

const keyFeatures = [
  "Personalized treatment plans based on individual constitution and wellness goals",
  "Traditional Ayurvedic therapies delivered with thoughtful clinical care",
  "Support for digestion, detoxification, stress relief and daily balance",
  "Gentle, natural care focused on root-cause wellness and sustainable healing",
  "Clean, calming and supportive care environment",
];

export function About() {
  return (
    <>
      <SEO
        title={`About Us — ${siteConfig.name}`}
        description={`Learn about ${siteConfig.name}, an Ayurvedic Panchkarma centre delivering authentic healthcare and holistic wellness solutions.`}
      />

      {/* <PageHero
        title="About Us"
        subtitle={`Welcome to ${siteConfig.name} — your trusted Ayurvedic wellness centre.`}
        breadcrumb="About Us"
      /> */}

      <section className="section">
        <div className={`container ${styles.introGrid}`}>
          <img src={clinicImg} alt={`${siteConfig.name} clinic`} className={styles.introImage} />
          <div>
            <span className="eyebrow">Our Philosophy</span>
            <h2 className={styles.introTitle}>Healing Through Ayurveda</h2>
            <p className={styles.introText}>
              Ayurveda is a holistic approach to wellness that restores balance and supports long-term health. It
              recognizes that every individual is unique and offers personalized care based on their Vata, Pitta and
              Kapha balance.
            </p>
            <p className={styles.introText}>
              Through personalized nutrition, Panchakarma and daily wellness practices, Ayurveda supports healthy
              digestion, helps eliminate toxins and addresses the root causes of imbalance for lasting well-being.
            </p>
          </div>
        </div>
      </section>

      <section className={`section ${styles.warmSection}`}>
        <div className="container">
          <div style={{ textAlign: "center", maxWidth: "42rem", marginInline: "auto" }}>
            <h2 className={styles.introTitle}>Key Features</h2>
            <p className={styles.introText}>What makes {siteConfig.name} different in a calm and trusted wellness setting.</p>
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
              Our vision is to promote the <strong>timeless science of Ayurveda</strong> as a trusted, natural path to
              modern wellness. We are committed to offering authentic care that nurtures the body, supports the mind
              and restores inner balance through compassionate, individualized attention.
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
              Our mission is to support <strong>long-term wellness</strong> through authentic Ayurveda, personalised
              therapies and lifestyle guidance that address the root cause of imbalance rather than just symptoms.
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
            Our Panchkarma centre is a sanctuary of natural healing rooted in traditional Ayurvedic techniques and
            gentle care focused on detoxification, rejuvenation and restoring harmony between body and mind.
          </p>
        </div>
      </section>
    </>
  );
}
