import { Link } from "react-router-dom";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import logo from "../../assets/logo.png";
import { siteConfig, navLinks } from "../../data/site";
import styles from "./SiteFooter.module.css";

export function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <div className={styles.grid}>
        <div className={styles.column}>
          <h3 className={styles.heading}>About</h3>
          <div className={styles.brandRow}>
            <img src={logo} alt="" width={40} height={40} className={styles.logo} />
            <span className={styles.brandName}>{siteConfig.name}</span>
          </div>
          <p className={styles.description}>
            Dr. Nature Holistic Panchkarma offers authentic Ayurvedic therapies and personalized wellness care to
            support balance, vitality, and lasting health in a calm, restorative setting.
          </p>
        </div>

        <div className={styles.column}>
          <h3 className={styles.heading}>Quick Links</h3>
          <ul className={styles.linkList}>
            {navLinks.map((l) => (
              <li key={l.to}>
                <Link to={l.to}>{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.column}>
          <h3 className={styles.heading}>Contact</h3>
          <ul className={styles.contactList}>
            <li className={styles.contactItem}>
              <FiMapPin size={16} />
              <span>{siteConfig.address}</span>
            </li>
            <li className={styles.contactItem}>
              <FiPhone size={16} />
              <a href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}>{siteConfig.phone}</a>
            </li>
            <li className={styles.contactItem}>
              <FiMail size={16} />
              <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
            </li>
          </ul>
        </div>

        <div className={styles.column}>
          <h3 className={styles.heading}>Follow Us</h3>
          <div className={styles.socialRow}>
            <a
              href={siteConfig.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className={styles.socialLink}
            >
              <FaFacebookF size={16} />
            </a>
            <a
              href={siteConfig.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className={styles.socialLink}
            >
              <FaInstagram size={16} />
            </a>
            <a
              href={siteConfig.social.youtube}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className={styles.socialLink}
            >
              <FaYoutube size={16} />
            </a>
          </div>
        </div>
      </div>
      <div className={styles.bottomBar}>
        <div className={styles.bottomBarInner}>
          © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
