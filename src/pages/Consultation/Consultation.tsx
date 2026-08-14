import { Link } from "react-router-dom";
import { FiPhone, FiMessageCircle, FiMail } from "react-icons/fi";
import { SEO } from "../../components/SEO/SEO";
import { PageHero } from "../../components/PageHero/PageHero";
import { siteConfig } from "../../data/site";
import styles from "./Consultation.module.css";

export function Consultation() {
  const phoneHref = `tel:${siteConfig.phone.replace(/\s/g, "")}`;

  const options = [
    {
      icon: FiPhone,
      title: "Call Us",
      text: "Speak directly with our clinic to discuss your health concerns and schedule a visit.",
      action: (
        <a href={phoneHref} className="btn btn-primary">
          {siteConfig.phone}
        </a>
      ),
    },
    {
      icon: FiMessageCircle,
      title: "WhatsApp",
      text: "Message us on WhatsApp for appointments and consultation enquiries.",
      action: (
        <a href={`https://wa.me/${siteConfig.whatsapp}`} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
          Chat on WhatsApp
        </a>
      ),
    },
    {
      icon: FiMail,
      title: "Contact Form",
      text: "Send us your details through our contact form and we'll get back to you.",
      action: (
        <Link to="/contact" className="btn btn-primary">
          Go to Contact
        </Link>
      ),
    },
  ];

  return (
    <>
      <SEO
        title={`Consultation — ${siteConfig.name}`}
        description={`Book a personal consultation with our Ayurvedic doctors at ${siteConfig.name}.`}
      />

      <PageHero
        title="Consultation"
        subtitle="Book a personal consultation with our Ayurvedic doctors, by phone, WhatsApp, or our contact form."
        breadcrumb="Consultation"
      />

      <section className="section">
        <div className="container">
          <div className={styles.grid}>
            {options.map((o) => (
              <div key={o.title} className={`card ${styles.optionCard}`}>
                <div className={styles.icon}>
                  <o.icon size={24} />
                </div>
                <h3 className={styles.optionTitle}>{o.title}</h3>
                <p className={styles.optionText}>{o.text}</p>
                <div className={styles.optionAction}>{o.action}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
