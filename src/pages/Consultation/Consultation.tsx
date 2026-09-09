import { Link } from "react-router-dom";
import { FiArrowRight, FiAward, FiHeart, FiMail, FiMessageCircle, FiPhone, FiShield, FiSun } from "react-icons/fi";
import { SEO } from "../../components/SEO/SEO";
import { siteConfig } from "../../data/site";
import styles from "./Consultation.module.css";

const whyConsult = [
  {
    icon: FiHeart,
    title: "Personalised Assessment",
    text: "A focused consultation helps us understand your health, lifestyle and goals before suggesting the right path forward.",
  },
  {
    icon: FiShield,
    title: "Experienced Ayurvedic Professionals",
    text: "Receive guidance from a team trained in Ayurvedic principles, wellness planning and restorative care.",
  },
  {
    icon: FiSun,
    title: "Individualised Wellness Guidance",
    text: "Every recommendation is adapted to your needs so your plan feels clear, realistic and supportive.",
  },
  {
    icon: FiAward,
    title: "Traditional Ayurvedic Approach",
    text: "We blend time-tested herbal and therapeutic practices with a gentle, whole-person perspective for sustainable wellbeing.",
  },
];

const contactOptions = [
  {
    icon: FiPhone,
    title: "Call Us",
    text: "Speak directly with our clinic to discuss your health concerns and schedule a visit.",
    action: (
      <a href={`tel:${siteConfig.phone.replace(/\s/g, "")}`} className="btn btn-primary">
        {siteConfig.phone}
      </a>
    ),
  },
  {
    icon: FiMessageCircle,
    title: "WhatsApp",
    text: "Message us on WhatsApp for quick appointment enquiries and follow-up support.",
    action: (
      <a href={`https://wa.me/${siteConfig.whatsapp}`} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
        Chat on WhatsApp
      </a>
    ),
  },
  {
    icon: FiMail,
    title: "Contact Form",
    text: "Send us your details through our contact form and we’ll get back to you with next steps.",
    action: (
      <Link to="/contact" className="btn btn-primary">
        Go to Contact
      </Link>
    ),
  },
];

export function Consultation() {
  return (
    <>
      <SEO
        title={`Consultation — ${siteConfig.name}`}
        description={`Book a personalised Ayurvedic consultation with ${siteConfig.name} to discuss your health, lifestyle and wellness goals.`}
      />

      {/* <PageHero
        title="Personalised Ayurvedic Consultation"
        subtitle="Discuss your health and wellness goals with our Ayurvedic team and receive personalised guidance for your unique needs."
        breadcrumb="Consultation"
      /> */}

      <section className="section">
        <div className="container">
          <div className={styles.heroLayout}>
            <div className={styles.heroContent}>
              <span className="eyebrow">Your first step to balance</span>
              <h2 className={styles.heroTitle}>A consultation designed around your wellbeing</h2>
              <p className={styles.heroText}>
                Whether you are seeking support for digestion, stress, sleep, immunity, lifestyle balance or long-term wellness,
                our Ayurvedic professionals will listen carefully and guide you with a personalised, whole-person approach.
              </p>

              <div className={styles.keyPoints}>
                <div className={styles.keyPoint}>
                  <span className={styles.keyIcon}><FiSun size={18} /></span>
                  <span>Whole-person wellness guidance</span>
                </div>
                <div className={styles.keyPoint}>
                  <span className={styles.keyIcon}><FiShield size={18} /></span>
                  <span>Thoughtful, natural care plans</span>
                </div>
                <div className={styles.keyPoint}>
                  <span className={styles.keyIcon}><FiHeart size={18} /></span>
                  <span>Support that fits your lifestyle</span>
                </div>
              </div>
            </div>

            <div className={`card ${styles.infoCard}`}>
              <div className={styles.formHeader}>
                <span className="eyebrow">Begin with a conversation</span>
                <h3 className={styles.formTitle}>Let’s find the right path for you</h3>
              </div>

              <p className={styles.infoText}>
                Share your concerns by phone or WhatsApp, or visit our contact page to reach out directly. We’ll guide you to the most suitable consultation option.
              </p>

              <div className={styles.infoActions}>
                <a href={`tel:${siteConfig.phone.replace(/\s/g, "")}`} className="btn btn-primary">
                  Call Us
                </a>
                <a href={`https://wa.me/${siteConfig.whatsapp}`} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                  WhatsApp Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: "linear-gradient(180deg, rgba(237, 244, 237, 0.7), rgba(249, 245, 238, 0.5))" }}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className="eyebrow">Why consult</span>
            <h2 className={styles.sectionTitle}>Support that begins with understanding</h2>
          </div>

          <div className={styles.benefitGrid}>
            {whyConsult.map(({ icon: Icon, title, text }) => (
              <div key={title} className={`card ${styles.benefitCard}`}>
                <div className={styles.benefitIcon}><Icon size={20} /></div>
                <h3 className={styles.benefitTitle}>{title}</h3>
                <p className={styles.benefitText}>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className={styles.secondaryHeader}>
            <span className="eyebrow">Contact options</span>
            <h2 className={styles.secondaryTitle}>We’re happy to help in the way that suits you best</h2>
          </div>

          <div className={styles.optionGrid}>
            {contactOptions.map(({ icon: Icon, title, text, action }) => (
              <div key={title} className={`card ${styles.optionCard}`}>
                <div className={styles.optionIcon}><Icon size={22} /></div>
                <h3 className={styles.optionTitle}>{title}</h3>
                <p className={styles.optionText}>{text}</p>
                <div className={styles.optionAction}>{action}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className={styles.finalCta}>
            <div>
              <span className="eyebrow">Start your wellness journey</span>
              <h2 className={styles.finalTitle}>Ready to Begin Your Wellness Journey?</h2>
            </div>

            <div className={styles.finalActions}>
              <Link to="/contact" className="btn btn-primary">
                Book a Consultation <FiArrowRight size={16} />
              </Link>
              <a href={`https://wa.me/${siteConfig.whatsapp}`} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
