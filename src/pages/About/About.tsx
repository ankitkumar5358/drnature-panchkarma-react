import { FiArrowRight, FiEye, FiTarget, FiCheckCircle } from "react-icons/fi";
import { FaLeaf } from "react-icons/fa";
import { Link } from "react-router-dom";
import { SEO } from "../../components/SEO/SEO";
import herbsImg from "../../assets/herbs.jpg";
import founderImage from "../../assets/TP.png";
import coFounderImage from "../../assets/drpankaj.png";
import ankitImage from "../../assets/drankit.png";
import pragyaImage from "../../assets/drpragya.png";
import yashImage from "../../assets/dryash.png";
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
  image: founderImage,
  alt: "Tara Prakash Tiwari",
};

const coFounderProfile = {
  image: coFounderImage,
  alt: "Dr. Pankaj Singh",
};

const doctors = [
  {
    image: yashImage,
    name: "Dr. Yash Raj Kumawat",
    designation: "Ayurvedic Consultant | Panchakarma Specialist | Emergency & Preventive Cardiac Care",
    description:
      "Dr. Yash Raj Kumawat is a BAMS-qualified Ayurvedic physician with over 3 years of clinical experience in Ayurveda, Panchakarma, pain management, and preventive healthcare. He has additional training in Yoga (BHU), Preventive Cardiology (NIA), PGDEMS, and AIPR (NIA). He has gained clinical experience at Govt. MCD Hospital, Delhi, Govt. PHC Gandhinagar, Jaipur, and the National Institute of Ayurveda, Jaipur, with exposure to Ayurvedic diagnosis, Panchakarma, and patient care. At Dr. Nature Wellness, he provides personalized Ayurvedic consultations and Panchakarma guidance, focusing on pain management, chronic health concerns, preventive care, and holistic wellness. He is also involved in patient education, professional training, and Ayurveda awareness programs.",
  },
  {
    image: pragyaImage,
    name: "Dr. Pragya Tripathi",
    designation: "Ayurvedic Consultant | Women’s Health, Infertility & Skin Wellness",
    description:
      "Dr. Pragya Tripathi is a BAMS-qualified Ayurvedic physician with over 5 years of clinical experience in Ayurveda and women’s healthcare. Her expertise includes gynecological and menstrual concerns, hormonal health, infertility support, skin and beauty care, and preventive wellness. Her approach combines Ayurvedic principles, personalized treatment, lifestyle and dietary guidance, and holistic care to support women’s health at every stage of life. She also focuses on patient education and long-term wellness, with an emphasis on reproductive health, skin health, and overall wellbeing.",
  },
  {
    image: ankitImage,
    name: "Dr. Ankit Yadav",
    designation: "Ayurvedic Consultant | Panchakarma & Holistic Wellness",
    description:
      "Dr. Ankit Yadav is a BAMS-qualified Ayurvedic physician with over 7 years of clinical experience. His areas of expertise include OPD and IPD management, emergency care, Panchakarma therapies, Ayurvedic consultations, and patient counseling. At Dr. Nature Wellness, he provides personalized Ayurvedic consultations and Panchakarma care, along with lifestyle, dietary, and preventive health guidance. He also contributes to patient education and Ayurvedic certificate-course training, with a focus on personalized care and long-term wellness.",
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
            <h2 className={styles.storyTitle}>Tara Prakash Tiwari</h2>
            <p className={styles.storyText}>
              <strong>Managing Director</strong>
              <br />
              Dr. Nature Wellness Pvt. Ltd.
              <br />
              Vritika Herbotech Pvt. Ltd.
              <br />
              Dr. Nature Holistic Panchkarma
            </p>
            <p className={styles.storyText}>
              Dr. Tara Prakash Tiwari holds a Post Graduate in Agriculture Science, a PG Diploma in Plant Protection,
              and a PG Diploma in Naturopathy and Yoga Sciences. He pursued his career as a research scholar for the
              Indian Council of Agriculture (Govt. of India) at a National Research Centre. For his tireless efforts
              and contributions to the industry, Dr. T.P. Tiwari has received multiple important honours, including
              the Udhyog Ratna Award, Healthcare Excellence Award, and Business Leader of the Year Award.
            </p>
          </div>
          <div className={styles.storyImageWrap}>
            <img src={founderProfile.image} alt={founderProfile.alt} className={styles.storyImage} loading="lazy" />
          </div>
        </div>
      </section>

      <section className={`section ${styles.storySection}`}>
        <div className={`container ${styles.storyGrid} ${styles.storyGridReverse}`}>
          <div className={styles.storyImageWrap}>
            <img
              src={coFounderProfile.image}
              alt={coFounderProfile.alt}
              className={`${styles.storyImage} ${styles.coFounderImage}`}
              loading="lazy"
            />
          </div>
          <div className={styles.storyContent}>
            <span className="eyebrow">CO-FOUNDER</span>
            <h2 className={styles.storyTitle}>Dr. Pankaj Singh</h2>
            <p className={styles.storyText}>
              <strong>Co-founder, Research &amp; Development | Lead Consultant Physician</strong>
            </p>
            <p className={styles.storyText}>
              Dr. Pankaj Singh is a BAMS-qualified Ayurvedic physician and clinical researcher with nearly 15 years of
              experience in the research sector of global pharmaceutical companies. He has also completed a Master
              Diploma in Clinical Research and Development through an advanced online course by Cranfield University, UK.
            </p>
            <p className={styles.storyText}>
              Since joining Dr. Nature Wellness Pvt. Ltd. in August 2021, Dr. Singh has played a key role in its
              Research &amp; Development initiatives and serves as the Lead Consultant Physician. His professional
              journey includes participation in over 150 national and international research conferences across the US,
              UK, Europe, and Asia, along with numerous research certifications and honors.
            </p>
            <p className={styles.storyText}>
              His current research focuses on body detoxification, oxidative stress, rejuvenation, anti-aging, and
              Panchakarma therapy. He also provides consultations at the Panchakarma Centre, recommending therapies
              based on individual wellness needs. A seasoned corporate trainer, Dr. Singh also conducts training on
              diseases, health and wellness, company products, and relevant medical and research topics.
            </p>
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
