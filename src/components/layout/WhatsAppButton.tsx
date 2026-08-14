import { useState } from "react";
import { FiMessageCircle, FiX, FiPhone } from "react-icons/fi";
import { siteConfig } from "../../data/site";
import styles from "./WhatsAppButton.module.css";

const quickActions = ["Book an Appointment", "Ask about Treatments", "Request a Call Back", "Locate the Clinic"];

export function WhatsAppButton() {
  const [open, setOpen] = useState(false);
  const phoneHref = `tel:${siteConfig.phone.replace(/\s/g, "")}`;

  const send = (msg: string) => {
    const url = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(msg)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <>
      {open && (
        <div className={styles.panel}>
          <div className={styles.panelHeader}>
            <div>
              <div className={styles.panelTitle}>{siteConfig.name} Help Desk</div>
              <div className={styles.panelStatus}>
                <span className={styles.statusDot} />
                We are online to assist you
              </div>
            </div>
            <button onClick={() => setOpen(false)} aria-label="Close chat" className={styles.closeBtn}>
              <FiX size={20} />
            </button>
          </div>
          <div className={styles.panelBody}>
            <div className={styles.greeting}>
              Hi! Welcome to <strong>{siteConfig.name}</strong>. How may we help you today? Tap an option below or
              call us at <a href={phoneHref}>{siteConfig.phone}</a>.
            </div>
            <div className={styles.quickActions}>
              {quickActions.map((q) => (
                <button key={q} onClick={() => send(`Hello, I would like help with: ${q}`)} className={styles.quickAction}>
                  {q}
                </button>
              ))}
            </div>
            <a href={phoneHref} className={styles.callCta}>
              <FiPhone size={16} /> Call {siteConfig.phone}
            </a>
          </div>
        </div>
      )}

      <button onClick={() => setOpen((v) => !v)} aria-label="Chat on WhatsApp" className={styles.launcher}>
        {open ? <FiX size={24} /> : <FiMessageCircle size={26} />}
      </button>
    </>
  );
}
