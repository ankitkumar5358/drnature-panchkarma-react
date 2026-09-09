import { useEffect, useRef } from "react";
import { SEO } from "../../components/SEO/SEO";
import { siteConfig } from "../../data/site";
import styles from "./Testimonials.module.css";

const reelUrls = [
  "https://www.instagram.com/reel/DcV43H3JjxE/?stkn=MW9rYnQ5ejRmbWRkcg==",
  "https://www.instagram.com/reel/DcI9G81p6SH/?stkn=OHJidHUzMTFxdzJq",
  "https://www.instagram.com/reel/DbxxOVMJHvY/?stkn=MWxscHRyOTQ5Zmt4ZA==",
  "https://www.instagram.com/reel/DbfkUR-JiDg/?stkn=aHViOTJxcnl5ZTU1",
];

const demoTestimonials = [
  {
    name: "R. Sharma",
    label: "Sample testimonial",
    quote:
      "The calming atmosphere and thoughtfully guided therapies helped me feel more balanced, lighter, and mentally at ease after just a few sessions.",
    treatment: "Panchakarma wellness journey",
  },
  {
    name: "P. Mehta",
    label: "Sample testimonial",
    quote:
      "The personalized care and attention to my health needs stood out. Every step felt supportive, restorative, and aligned with a natural Ayurvedic approach.",
    treatment: "Detox & rejuvenation care",
  },
  {
    name: "A. Verma",
    label: "Sample testimonial",
    quote:
      "I appreciated the gentle but effective approach to wellness. The experience felt deeply grounded, peaceful, and truly tailored to my body’s needs.",
    treatment: "Stress and vitality support",
  },
  {
    name: "S. Gupta",
    label: "Sample testimonial",
    quote:
      "From the first consultation to the therapy sessions, the experience felt professional, warm, and deeply nourishing. It gave me a stronger sense of balance.",
    treatment: "Holistic wellness consultation",
  },
];

export function Testimonials() {
  const reelTrackRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const loadInstagramEmbed = () => {
      const instagramWindow = window as typeof window & {
        instgrm?: { Embeds?: { process: () => void } };
      };

      if (instagramWindow.instgrm?.Embeds) {
        instagramWindow.instgrm.Embeds.process();
        return;
      }

      const script = document.createElement("script");
      script.src = "https://www.instagram.com/embed.js";
      script.async = true;
      script.onload = () => {
        (window as typeof window & { instgrm?: { Embeds?: { process: () => void } } }).instgrm?.Embeds?.process();
      };
      document.body.appendChild(script);
    };

    loadInstagramEmbed();
  }, []);

  const scrollReels = (direction: "prev" | "next") => {
    if (!reelTrackRef.current) return;

    const card = reelTrackRef.current.querySelector(`.${styles.reelCard}`) as HTMLElement | null;
    const scrollAmount = card ? card.getBoundingClientRect().width + 20 : 320;
    reelTrackRef.current.scrollBy({
      left: direction === "next" ? scrollAmount : -scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <>
      <SEO
        title={`Testimonials — ${siteConfig.name}`}
        description="Sample patient stories and wellness experiences from Dr. Nature Holistic Panchkarma. These demo testimonials can be replaced with real patient feedback later."
      />

      {/* <PageHero
        title="Testimonials"
        subtitle="A few sample experiences that reflect the calming, restorative and personalized care we offer."
        breadcrumb="Testimonials"
      /> */}

      <section className="section">
        <div className="container">
          <div className={styles.introWrap}>
            <span className="eyebrow">feedback</span>
            <h2 className={styles.title}>Sample testimonials for future patient stories</h2>
            <p className={styles.subtitle}>
              These are clearly marked demo testimonials and can be replaced with genuine patient experiences when available.
            </p>
          </div>

          <div className={styles.grid}>
            {demoTestimonials.map((item) => (
              <article key={item.name} className={`card ${styles.testimonialCard}`}>
                <div className={styles.badge}>{item.label}</div>
                <div className={styles.quoteMark}>“</div>
                <p className={styles.quote}>{item.quote}</p>
                <div className={styles.footer}>
                  <div>
                    <div className={styles.name}>{item.name}</div>
                    <div className={styles.treatment}>{item.treatment}</div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.onlineSeriesSection}>
        <div className="container">
          <div className={styles.onlineSeriesHeader}>
            <span className="eyebrow">Online series</span>
            <h2 className={styles.onlineSeriesTitle}>Online Series</h2>
            <p className={styles.onlineSeriesSubtitle}>
              Watch our latest Ayurvedic wellness insights and educational reels.
            </p>
          </div>

          <div className={styles.carouselShell}>
            <button type="button" className={styles.carouselButton} onClick={() => scrollReels("prev")} aria-label="Previous reels">
              ←
            </button>

            <div className={styles.carouselTrack} ref={reelTrackRef}>
              {reelUrls.map((url) => (
                <div key={url} className={styles.reelCard}>
                  <div className={styles.reelEmbedWrap}>
                    <blockquote
                      className="instagram-media"
                      data-instgrm-permalink={url}
                      data-instgrm-version="12"
                      style={{ width: "100%", maxWidth: "100%" }}
                    />
                    <div className={styles.reelOverlay} aria-hidden="true" />
                  </div>
                  <a href={url} target="_blank" rel="noopener noreferrer" className={styles.reelFallback}>
                    Open Reel on Instagram
                  </a>
                </div>
              ))}
            </div>

            <button type="button" className={styles.carouselButton} onClick={() => scrollReels("next")} aria-label="Next reels">
              →
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
