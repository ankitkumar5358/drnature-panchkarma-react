import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { FiMenu, FiX, FiPhone, FiMail, FiMessageCircle } from "react-icons/fi";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import logo from "../../assets/logo.png";
import { siteConfig, navLinks } from "../../data/site";
import styles from "./SiteHeader.module.css";

const socialIcons = [
  { Icon: FaFacebookF, href: siteConfig.social.facebook, label: "Facebook" },
  { Icon: FaInstagram, href: siteConfig.social.instagram, label: "Instagram" },
  { Icon: FaYoutube, href: siteConfig.social.youtube, label: "YouTube" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const phoneHref = `tel:${siteConfig.phone.replace(/\s/g, "")}`;

  return (
    <header className={styles.header}>
      <div className={styles.topBar}>
        <div className={`container ${styles.topBarInner}`}>
          <div className={styles.socials}>
            {socialIcons.map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className={styles.socialLink}
              >
                <Icon size={13} />
              </a>
            ))}
          </div>

          <div className={styles.marqueeViewport}>
            <div className={styles.marqueeTrack}>
              {Array.from({ length: 6 }).map((_, i) => (
                <span key={i} className={styles.marqueeItem}>
                  100% Ayurvedic Medicines • {siteConfig.name} • {siteConfig.offer}
                </span>
              ))}
            </div>
          </div>

          <a href={`mailto:${siteConfig.email}`} className={styles.emailLink}>
            <FiMail size={16} />
            <span className={styles.emailText}>{siteConfig.email}</span>
          </a>
        </div>
      </div>

      <div className={styles.mainNav}>
        <div className={`container ${styles.mainNavInner}`}>
          <Link to="/" className={styles.brand}>
            <img src={logo} alt={`${siteConfig.name} logo`} width={48} height={48} className={styles.logo} />
            <div className={styles.brandText}>
              <div className={styles.brandName}>{siteConfig.name}</div>
              <div className={styles.brandSub}>Ayurveda</div>
            </div>
          </Link>

          <nav className={styles.desktopNav} aria-label="Main navigation">
            {navLinks.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === "/"}
                className={({ isActive }) => `${styles.navLink} ${isActive ? styles.navLinkActive : ""}`}
              >
                {l.label}
              </NavLink>
            ))}
          </nav>

          <div className={styles.chatCta}>
            <a
              href={`https://wa.me/${siteConfig.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              <FiMessageCircle size={16} />
              Chat Now
            </a>
          </div>

          <button
            className={styles.menuButton}
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {open && (
          <nav className={styles.mobileNav} aria-label="Mobile navigation">
            <div className={`container ${styles.mobileNavInner}`}>
              {navLinks.map((l) => (
                <NavLink
                  key={l.to}
                  to={l.to}
                  end={l.to === "/"}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) => `${styles.mobileNavLink} ${isActive ? styles.mobileNavLinkActive : ""}`}
                >
                  {l.label}
                </NavLink>
              ))}
              <a href={phoneHref} className={styles.mobileCallCta}>
                <FiPhone size={16} /> {siteConfig.phone}
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
