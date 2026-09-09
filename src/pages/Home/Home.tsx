import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import { FaLeaf, FaHeartbeat, FaMagic, FaShieldAlt } from "react-icons/fa";
import { SEO } from "../../components/SEO/SEO";
import { FeatureCard } from "../../components/FeatureCard/FeatureCard";
import { TherapyCard } from "../../components/TherapyCard/TherapyCard";
import { SectionHeading } from "../../components/SectionHeading/SectionHeading";
import { CTASection } from "../../components/CTASection/CTASection";
import herbsImg from "../../assets/herbs.jpg";
import { siteConfig } from "../../data/site";
import styles from "./Home.module.css";
import HealingThroughAyurveda from "../../assets/healing-through-ayurveda.png";
import AboutPanchkarma from "../../assets/about-panchkarma.png";

const therapyPreview = [
  { name: "Nasya", desc: "Nasal therapeutic care for head, sinus and respiratory wellness." },
  { name: "Shirodhara", desc: "A flowing oil therapy for mental calm, stress relief and deep relaxation." },
  { name: "Matra Basti", desc: "A gentle medicated enema supporting balance and long-term wellbeing." },
  { name: "Abhyanga", desc: "A full-body Ayurvedic massage for rejuvenation and circulation." },
  { name: "Kati Basti", desc: "Targeted support for the lower back and spine with warm herbal care." },
  { name: "Udvartana", desc: "Herbal body massage for detoxification and skin refreshment." },
  { name: "Ksheera Dhara", desc: "Cooling milk therapy for relaxation and stress recovery." },
  { name: "Marma Chikitsa", desc: "Energy-based therapy focused on balance, vitality and recovery." },
];

const features = [
  { icon: FaLeaf, title: "Authentic Ayurveda", desc: "Traditional Ayurvedic techniques rooted in time-tested wellness principles." },
  { icon: FaHeartbeat, title: "Experienced Ayurvedic Professionals", desc: "Personalized guidance from skilled professionals focused on long-term health." },
  { icon: FaMagic, title: "Holistic Healing", desc: "Care for the body, mind and lifestyle through balanced natural therapies." },
  { icon: FaShieldAlt, title: "Safe & Hygienic", desc: "Care delivered in a calm, clean and supportive environment." },
];

export function Home() {
  return (
    <>
      <SEO
        title={`${siteConfig.name} — Authentic Ayurveda & Panchkarma Wellness in ${siteConfig.city}`}
        description={siteConfig.description}
      />

      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroInner}>
            <div className={styles.heroContent}>
              <span className={styles.badge}>{siteConfig.city} • Ayurvedic Wellness</span>
              <h1 className={styles.heroTitle}>
                Restore balance.
                <br />
                Rebuild vitality.
              </h1>
              <div className={styles.heroDivider} />
              <p className={styles.heroSubtitle}>
                Authentic Ayurvedic Panchkarma therapies and personalized wellness care designed to support natural
                detox, deeper healing, and long-term wellbeing from the inside out.
              </p>
              <div className={styles.heroActions}>
                <Link to="/contact" className="btn btn-primary">
                  Book a Consultation <FiArrowRight />
                </Link>
                <Link to="/therapies" className="btn btn-outline">
                  Explore Our Therapies
                </Link>
              </div>
              <div className={styles.heroMeta}>
                <span>Traditional care</span>
                <span>Personalized plans</span>
                <span>Natural healing</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className={styles.featureGrid}>
            {features.map((f) => (
              <FeatureCard key={f.title} icon={f.icon} title={f.title} description={f.desc} />
            ))}
          </div>
        </div>
      </section>

      <section className={`section ${styles.introSection}`}>
        <div className={styles.introGrid}>
          <img src={HealingThroughAyurveda} alt="Healing Through Ayurveda" className={styles.introImage} />
          <div className={`card ${styles.introContent}`}>
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

      <section className={`section ${styles.aboutPanchkarmaSection}`}>
        <div className={styles.aboutPanchkarmaGrid}>
          <div className={styles.aboutPanchkarmaContent}>
            <span className="eyebrow">ABOUT PANCHKARMA</span>
            <h2 className={styles.aboutPanchkarmaTitle}>Panchkarma Therapy</h2>
            <p className={styles.aboutPanchkarmaText}>
              Panchkarma is Ayurveda&rsquo;s classical detoxification and rejuvenation therapy designed to cleanse the
              body, balance the doshas, and support natural healing. Its five core therapies—Vamana, Virechana,
              Basti, Nasya, and Raktamokshana—help eliminate accumulated toxins, improve digestion, reduce stress, and promote physical and mental wellness.
            </p>
            <p className={styles.aboutPanchkarmaText}>
              Personalized according to individual Prakriti, Panchkarma may also support the management of
              lifestyle-related health concerns, chronic discomfort, and metabolic imbalances, helping the body regain
              balance, vitality, and lasting wellness naturally.
            </p>
          </div>

          <img src={AboutPanchkarma} alt="Panchkarma treatment setup" className={styles.aboutPanchkarmaImage} />
        </div>
      </section>

      <section className={`section ${styles.traditionalCareSection}`}>
        <div className={styles.traditionalCareContainer}>
          <div className={styles.traditionalCareHeader}>
            <span className="eyebrow">The Science of Detox</span>
            <h2 className={styles.traditionalCareTitle}>Traditional Ayurvedic care</h2>
          </div>
          <div className={styles.prose}>
            <p className={styles.traditionalCareText}>
              Panchakarma is a deeply restorative branch of Ayurveda focused on cleansing the body, restoring dosha
              balance and supporting vitality from the inside out. It is designed to help the body release accumulated
              toxins while preparing the mind and senses for better long-term wellbeing.
            </p>
            <p className={styles.traditionalCareText}>
              At Dr. Nature Holistic Panchkarma, each therapy is considered with care, intention and personalization,
              helping to support the body&rsquo;s natural healing patterns and encourage sustainable wellness for everyday life.
              This thoughtful, individualized approach supports digestion, balances the nervous system and helps maintain
              steady energy, resilience and clarity throughout the seasons and stages of life.
            </p>
            <p className={styles.traditionalCareText}>
              Ayurveda does not treat symptoms in isolation. It looks at the whole person—diet, routine, digestion,
              stress response and daily rhythm—so that healing feels natural, sustainable and deeply restorative. This
              is why our care is designed to support both immediate comfort and long-term wellbeing.
            </p>
          </div>
        </div>
      </section>

      <section className={`section ${styles.altSection}`}>
        <div className="container">
          <SectionHeading
            eyebrow="Our Specialities"
            title="Authentic Panchkarma Therapies"
            description="Traditional Panchkarma procedures performed under expert guidance in a calm, healing environment."
          />
          <div className={styles.therapyGrid}>
            {therapyPreview.map((t) => (
              <TherapyCard key={t.name} name={t.name} description={t.desc} />
            ))}
          </div>
          <div className={styles.viewAllWrap}>
            <Link to="/therapies" className="btn btn-primary">
              View All Therapies <FiArrowRight />
            </Link>
          </div>
        </div>
      </section>

      <CTASection
        image={herbsImg}
        title="Begin Your Healing Journey Today"
        description="Personalised Ayurvedic consultation with experienced professionals to understand your needs and guide you towards a balanced wellness journey."
      >
        <Link to="/contact" className="btn btn-primary">
          Book a Consultation <FiArrowRight />
        </Link>
      </CTASection>
    </>
  );
}
