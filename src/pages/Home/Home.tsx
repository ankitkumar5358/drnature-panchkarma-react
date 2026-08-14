import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import { FaLeaf, FaHeartbeat, FaMagic, FaShieldAlt } from "react-icons/fa";
import { SEO } from "../../components/SEO/SEO";
import { FeatureCard } from "../../components/FeatureCard/FeatureCard";
import { TherapyCard } from "../../components/TherapyCard/TherapyCard";
import { SectionHeading } from "../../components/SectionHeading/SectionHeading";
import { CTASection } from "../../components/CTASection/CTASection";
import heroImg from "../../assets/hero-panchkarma.jpg";
import shirodharaImg from "../../assets/shirodhara.jpg";
import herbsImg from "../../assets/herbs.jpg";
import { siteConfig } from "../../data/site";
import styles from "./Home.module.css";

const therapyPreview = [
  { name: "Vaman", desc: "Therapeutic emesis to cleanse Kapha toxins." },
  { name: "Virechana", desc: "Purgation therapy to eliminate Pitta toxins." },
  { name: "Basti", desc: "Medicated enema — the king of Vata treatments." },
  { name: "Nasya", desc: "Nasal medication for head & sinus health." },
  { name: "Raktamokshana", desc: "Blood purification for skin & vascular issues." },
  { name: "Abhyanga", desc: "Full-body warm herbal oil massage." },
  { name: "Shirodhara", desc: "Continuous oil stream on the forehead." },
  { name: "Swedan", desc: "Herbal steam therapy for deep detox." },
];

const features = [
  { icon: FaLeaf, title: "100% Herbal", desc: "Completely natural treatments with minimal side effects." },
  { icon: FaHeartbeat, title: "Expert Doctors", desc: "Best Ayurvedic doctors with decades of experience." },
  { icon: FaMagic, title: "Personalised Care", desc: "Custom diet, lifestyle and therapy plan for you." },
  { icon: FaShieldAlt, title: "Authentic Panchkarma", desc: "Traditional therapies done under expert supervision." },
];

export function Home() {
  return (
    <>
      <SEO
        title={`${siteConfig.name} — Authentic Ayurveda & Panchkarma Wellness in ${siteConfig.city}`}
        description={siteConfig.description}
      />

      <section className={styles.hero}>
        <img src={heroImg} alt="Ayurvedic panchkarma therapy room" className={styles.heroImage} />
        <div className={styles.heroOverlay} />
        <div className={`container ${styles.heroContent}`}>
          <span className={styles.badge}>{siteConfig.city} • Authentic Ayurveda</span>
          <h1 className={styles.heroTitle}>Ayurvedic Detox & Healing for a Naturally Balanced Life</h1>
          <p className={styles.heroSubtitle}>
            Experience the power of traditional Panchkarma therapies that detoxify your body, balance your doshas and
            help you live a healthy, disease-free life — naturally and safely.
          </p>
          <div className={styles.heroActions}>
            <Link to="/contact" className="btn btn-accent">
              Book Appointment <FiArrowRight />
            </Link>
            <Link to="/therapies" className="btn btn-outline-light">
              Explore Therapies
            </Link>
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
        <div className={`container ${styles.introGrid}`}>
          <img src={shirodharaImg} alt="Shirodhara therapy" className={styles.introImage} />
          <div>
            <span className="eyebrow">Welcome to {siteConfig.name}</span>
            <h2 className={styles.introTitle}>Ayurvedic Detox &amp; Healing</h2>
            <p className={styles.introText}>
              Step into a sanctuary of natural, calming, and transformative healing. Rooted in the timeless wisdom of
              Ayurveda, our Panchkarma therapies gently eliminate accumulated toxins (Ama), restore balance among the
              doshas — Vata, Pitta, and Kapha — and awaken the body&rsquo;s innate healing intelligence. Each
              treatment is carefully personalized to address your unique constitution, guiding you beyond temporary
              relief toward true and lasting wellness.
            </p>
            <p className={styles.introText}>
              Whether you seek relief from chronic pain, support for lifestyle disorders such as diabetes,
              hypertension, or a complete mind-body detox, our holistic approach revitalizes energy, strengthens
              immunity, and restores inner harmony. Through a blend of authentic therapies, mindful nutrition, and
              lifestyle guidance, we help you reconnect with your healthiest self.
            </p>
            <Link to="/about" className={styles.readMore}>
              Read more about us <FiArrowRight />
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="The Science of Detox" title="About Panchkarma" />
          <div className={styles.prose}>
            <p>
              Experience the profound depth of healing with Panchkarma, Ayurveda&rsquo;s most powerful
              detoxification and rejuvenation therapy designed to purify the body and restore internal balance.
              Panchkarma comprises five core therapies: Vamana (therapeutic emesis) to eliminate excess Kapha,
              Virechana (purgation) to remove Pitta-related toxins, Basti (medicated enema) to balance Vata and
              nourish the body, Nasya (nasal therapy) to cleanse the head region and enhance mental clarity, and
              Raktamokshana (blood purification) to detoxify and support overall health.
            </p>
            <p>
              These therapies work synergistically to remove deep-rooted toxins (Ama), restore doshic balance and
              activate the body&rsquo;s natural healing processes. Beyond detoxification, Panchkarma offers extensive
              benefits — including relief from chronic pain, improved digestion, enhanced immunity, reduced stress,
              better skin health, and effective management of lifestyle disorders such as diabetes and hypertension.
              At our center, every therapy is customized according to your individual constitution (Prakriti),
              ensuring safe, effective and long-lasting results.
            </p>
          </div>
        </div>
      </section>

      <section className={`section ${styles.altSection}`}>
        <div className="container">
          <SectionHeading eyebrow="Our Philosophy" title="Healing Through Ayurveda" />
          <div className={styles.prose}>
            <p>
              Ayurveda offers a refined and holistic approach to wellness that focuses on restoring internal balance
              rather than merely managing symptoms. Rooted in ancient wisdom, it recognizes each individual&rsquo;s
              unique constitution (Prakriti), governed by the three fundamental energies — Vata, Pitta and Kapha —
              and tailors treatments accordingly. By integrating personalized nutrition (Ahara), therapeutic
              detoxification through Panchkarma and balanced daily routines (Dinacharya), Ayurveda strengthens the
              body&rsquo;s digestive fire (Agni), ensuring optimal metabolism, absorption and elimination of toxins
              (Ama).
            </p>
            <p>
              This comprehensive approach addresses the root cause of disease while harmonizing the connection
              between body, mind and spirit. The result is a stronger, more resilient system that supports long-term
              health, enhances vitality and helps prevent future imbalances — offering a sustainable path to
              complete well-being.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Our Specialities"
            title="Authentic Panchkarma Therapies"
            description="All traditional Panchkarma procedures, performed under expert supervision in a calm, healing environment."
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
        description="Personalised consultation with our expert Ayurvedic doctors. Take the first step toward a healthier, balanced life."
      >
        <Link to="/contact" className="btn btn-accent">
          Book Your Consultation <FiArrowRight />
        </Link>
      </CTASection>
    </>
  );
}
