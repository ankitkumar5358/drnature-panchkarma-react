import { FiArrowRight, FiEye, FiTarget, FiCheckCircle } from "react-icons/fi";
import { FaLeaf } from "react-icons/fa";
import { Link } from "react-router-dom";
import { SEO } from "../../components/SEO/SEO";
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

const founderProfile = {
  image:
    "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=1200&q=80",
  alt: "Dr. Nature Holistic Panchkarma founder",
};

const coFounderProfile = {
  image:
    "https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&w=1200&q=80",
  alt: "Co-founder and consultation head",
};

const doctors = [
  {
    image:
      "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=900&q=80",
    name: "Dr. Ananya Sharma",
    designation: "Ayurvedic Consultant",
    description:
      "Focused on personalised Ayurvedic consultations, wellness planning and traditional therapies tailored to individual needs.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=900&q=80",
    name: "Dr. Rahul Mehta",
    designation: "Ayurvedic Physician",
    description:
      "Experienced in holistic Ayurvedic care with an emphasis on lifestyle, nutrition and long-term wellness.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=900&q=80",
    name: "Dr. Priya Verma",
    designation: "Ayurvedic Wellness Specialist",
    description:
      "Provides personalised guidance combining traditional Ayurvedic principles with practical wellness routines.",
  },
];

function DoctorCard({ doctor }: { doctor: (typeof doctors)[number] }) {
  return (
    <article className={styles.doctorRow}>
      <div className={styles.doctorImageWrap}>
        <img src={doctor.image} alt={doctor.name} className={styles.doctorImage} loading="lazy" />
      </div>
      <div className={styles.doctorBody}>
        <div className={styles.doctorMeta}>
          <p className={styles.doctorDesignation}>{doctor.designation}</p>
          <h3 className={styles.doctorName}>{doctor.name}</h3>
        </div>
        <p className={styles.doctorDescription}>{doctor.description}</p>
      </div>
    </article>
  );
}

export function About() {
  return (
    <div className={styles.aboutPage}>
      <SEO
        title={`About Us — ${siteConfig.name}`}
        description={`Learn about ${siteConfig.name}, an Ayurvedic Panchkarma centre delivering authentic healthcare and holistic wellness solutions.`}
      />

      <section className={styles.heroSection}>
        <div className="container">
          <div className={styles.heroInner}>
            <div className={styles.heroContent}>
              <span className={styles.heroBadge}>Jaipur • Ayurvedic Wellness</span>
              <h1 className={styles.heroTitle}>Healing Through Ayurveda</h1>
              <p className={styles.heroText}>
                Ayurveda is a holistic approach to wellness that restores balance and supports long-term health. It
                recognizes that every individual is unique and offers personalized care based on their Vata, Pitta and
                Kapha balance.
              </p>
              <div className={styles.heroActions}>
                <Link to="/consultation" className="btn btn-primary">
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

      <section className={`section ${styles.storySection}`}>
        <div className={`container ${styles.storyGrid}`}>
          <div className={styles.storyContent}>
            <span className="eyebrow">OUR FOUNDER</span>
            <h2 className={styles.storyTitle}>Our Founder</h2>
            <p className={styles.storyText}>
              Dr. Nature Holistic Panchkarma was founded with a vision to bring authentic Ayurvedic wisdom into modern
              wellness. Our founder believes in personalised care that understands the individual, focuses on balance,
              and supports long-term well-being through traditional Ayurvedic principles.
            </p>
            <p className={styles.storySupport}>Rooted in Ayurveda. Guided by personalised care.</p>
          </div>
          <div className={styles.storyImageWrap}>
            <img src={founderProfile.image} alt={founderProfile.alt} className={styles.storyImage} loading="lazy" />
          </div>
        </div>
      </section>

      <section className={`section ${styles.storySection}`}>
        <div className={`container ${styles.storyGrid} ${styles.storyGridReverse}`}>
          <div className={styles.storyImageWrap}>
            <img src={coFounderProfile.image} alt={coFounderProfile.alt} className={styles.storyImage} loading="lazy" />
          </div>
          <div className={styles.storyContent}>
            <span className="eyebrow">CO-FOUNDER &amp; CONSULTATION HEAD</span>
            <h2 className={styles.storyTitle}>Co-founder &amp; Consultation Head</h2>
            <p className={styles.storyText}>
              Our consultation approach focuses on understanding each individual's health concerns, lifestyle and
              wellness goals before recommending a personalised Ayurvedic approach. Every consultation is designed to
              make traditional Ayurveda practical, thoughtful and relevant to modern life.
            </p>
            <p className={styles.storySupport}>Personalised guidance for a balanced and healthier life.</p>
          </div>
        </div>
      </section>

      <section className={`section ${styles.doctorsSection}`}>
        <div className="container">
          <div className={styles.doctorsHeadingWrap}>
            <span className="eyebrow">DOCTORS PANEL</span>
            <h2 className={styles.doctorsTitle}>Our Doctors Panel</h2>
            <p className={styles.doctorsIntro}>
              Our experienced Ayurvedic professionals bring together traditional knowledge and a personalised approach
              to support every individual's wellness journey.
            </p>
          </div>

          <div className={styles.doctorsStack}>
            {doctors.map((doctor) => (
              <DoctorCard key={doctor.name} doctor={doctor} />
            ))}
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
    </div>
  );
}
