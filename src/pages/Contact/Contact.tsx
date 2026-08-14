import { useState, type FormEvent } from "react";
import { FiPhone, FiMail, FiMapPin, FiClock, FiSend, FiCheckCircle, FiMessageCircle } from "react-icons/fi";
import { SEO } from "../../components/SEO/SEO";
import { PageHero } from "../../components/PageHero/PageHero";
import { siteConfig } from "../../data/site";
import styles from "./Contact.module.css";

const PLACEHOLDER_ADDRESS = "Add your clinic address here";

export function Contact() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
    e.currentTarget.reset();
    setTimeout(() => setSent(false), 5000);
  };

  const phoneHref = `tel:${siteConfig.phone.replace(/\s/g, "")}`;
  const hasRealAddress = (siteConfig.address as string) !== PLACEHOLDER_ADDRESS;

  const cards = [
    { icon: FiPhone, label: "Call Us", value: siteConfig.phone, href: phoneHref },
    { icon: FiMail, label: "Email Us", value: siteConfig.email, href: `mailto:${siteConfig.email}` },
    {
      icon: FiMessageCircle,
      label: "WhatsApp",
      value: "Chat with us",
      href: `https://wa.me/${siteConfig.whatsapp}`,
    },
    { icon: FiMapPin, label: "Visit Us", value: siteConfig.address, href: hasRealAddress ? "#map" : undefined },
    { icon: FiClock, label: "Open Hours", value: `${siteConfig.hours.weekday} · ${siteConfig.hours.sunday}` },
  ];

  return (
    <>
      <SEO
        title={`Contact Us — ${siteConfig.name}`}
        description={`Get in touch with ${siteConfig.name}. Book an appointment, ask about treatments, or visit our Ayurvedic Panchkarma centre.`}
      />

      <PageHero
        title="Contact Us"
        subtitle="We'd love to hear from you. Reach out to book an appointment or ask any question."
        breadcrumb="Contact"
      />

      <section className="section">
        <div className="container">
          <div className={styles.cardsGrid}>
            {cards.map((c) => {
              const Comp = c.href ? "a" : "div";
              return (
                <Comp key={c.label} {...(c.href ? { href: c.href } : {})} className={`card ${styles.infoCard}`}>
                  <div className={styles.infoIcon}>
                    <c.icon size={22} />
                  </div>
                  <div className={styles.infoLabel}>{c.label}</div>
                  <div className={styles.infoValue}>{c.value}</div>
                </Comp>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className={`container ${styles.bottomGrid}`}>
          <div className={`card ${styles.formCard}`}>
            <h2 className={styles.formTitle}>Book an Appointment</h2>
            <p className={styles.formSubtitle}>Fill in the form and we&rsquo;ll get back to you within 24 hours.</p>

            {sent && (
              <div className={styles.successBanner}>
                <FiCheckCircle size={20} />
                <span>Thanks! We&rsquo;ve received your message and will be in touch soon.</span>
              </div>
            )}

            <form onSubmit={onSubmit} className={styles.form}>
              <Field label="Your Name" name="name" required />
              <Field label="Email" name="email" type="email" required />
              <Field label="Phone" name="phone" type="tel" required />
              <div>
                <label className={styles.fieldLabel} htmlFor="message">
                  Message
                </label>
                <textarea id="message" name="message" rows={4} required className={styles.textarea} />
              </div>
              <button type="submit" className={`btn btn-primary ${styles.submitBtn}`}>
                <FiSend size={16} /> Send Message
              </button>
            </form>
          </div>

          <div id="map" className={styles.mapWrap}>
            {hasRealAddress ? (
              <iframe
                title={`${siteConfig.name} location`}
                src={`https://www.google.com/maps?q=${encodeURIComponent(siteConfig.address)}&output=embed`}
                className={styles.mapFrame}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            ) : (
              <div className={styles.mapPlaceholder}>
                The clinic location map will appear here once the address is added.
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className={styles.fieldLabel} htmlFor={name}>
        {label}
      </label>
      <input id={name} type={type} name={name} required={required} className={styles.input} />
    </div>
  );
}
