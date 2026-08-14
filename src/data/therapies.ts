// Therapy content sourced from the Dr. Nature Holistic Panchkarma business content brief.
export interface TherapyDetail {
  name: string;
  description: string;
}

export interface TherapyCategory {
  slug: string;
  name: string;
  summary: string;
  /** Therapies named in this category with a full description available. */
  detailed: TherapyDetail[];
  /** Therapies named in this category with no individual description supplied yet. */
  namesOnly: string[];
}

export const therapyCategories: TherapyCategory[] = [
  {
    slug: "head-mind-relaxation",
    name: "Head & Mind Relaxation Therapies",
    summary:
      "Experience deep relaxation and mental rejuvenation through specialized therapies such as Shirodhara, Shiro Basti, Takra Dhara, Ksheera Dhara, Shiro Pichu, and Sirolepa. These therapies help reduce stress, calm the mind, improve sleep quality, and promote nervous system relaxation.",
    detailed: [
      {
        name: "Shirodhara",
        description:
          "A deeply soothing Ayurvedic therapy designed to relax the mind, ease nervous tension, and restore a sense of inner calm. Warm medicated oil is poured in a gentle, continuous stream over the forehead, creating a rhythmic effect that helps the body and mind enter a peaceful state of relaxation. Especially beneficial for people dealing with stress, anxiety, disturbed sleep, mental fatigue, headaches, migraine-related discomfort, and emotional imbalance.",
      },
      {
        name: "Shiro Basti",
        description:
          "A specialized Ayurvedic head therapy that focuses on nourishing the scalp, calming the mind, and supporting nervous system relaxation. Warm medicated oil is gently retained over the head for a specific duration using a traditional cap-like arrangement. Commonly recommended for stress, disturbed sleep, headaches, scalp dryness, hair nourishment, and Vata-related nervous system imbalance.",
      },
      {
        name: "Sirolepa",
        description:
          "A traditional Ayurvedic head therapy in which a carefully prepared herbal paste is applied over the scalp and head region. Known for its cooling and soothing effect, this therapy helps calm the mind, reduce heat-related discomfort, and support overall head and scalp wellness — especially useful for headaches, scalp irritation, excess body heat, and restlessness.",
      },
      {
        name: "Ksheera Dhara",
        description:
          "A gentle Ayurvedic therapy in which warm medicated milk is poured in a steady, controlled stream over the body or a specific treatment area. Valued for its cooling, soothing, and rejuvenating qualities. Commonly recommended for excess body heat, burning sensation, skin dryness, fatigue, stress, and Pitta-related imbalance.",
      },
      {
        name: "Takra Dhara",
        description:
          "A traditional Panchakarma therapy in which medicated buttermilk is poured in a continuous, rhythmic stream over the forehead or body. Known for its naturally cooling and calming effect, helping relax the mind, soothe the head region, and support a balanced nervous system. Recommended for stress, mental restlessness, disturbed sleep, and headaches.",
      },
      {
        name: "Siro Pichu",
        description:
          "A gentle Ayurvedic head therapy in which a soft cotton pad soaked in warm medicated oil is carefully placed on the crown of the head, allowing the oil to work gradually through the scalp. Commonly recommended for stress, sleep disturbance, mental fatigue, headache-related discomfort, and scalp dryness.",
      },
    ],
    namesOnly: [],
  },
  {
    slug: "detox-panchakarma",
    name: "Detoxification & Panchakarma Therapies",
    summary:
      "Our Panchakarma treatments, including Nasya, Matra Basti, Anuvasan Basti, Asthapan Basti, Yog Basti, and Detox Therapies, are designed to eliminate toxins, restore internal balance, strengthen immunity, and naturally support overall health and wellness.",
    detailed: [
      {
        name: "Nasya & Nasya Dhoopana",
        description:
          "Traditional Ayurvedic therapies focused on supporting nasal, sinus, respiratory, and head wellness. Nasya is an important Panchakarma therapy in which medicated oil or herbal drops are gently administered through the nostrils — beneficial for sinus discomfort, nasal congestion, headaches, and migraine-related discomfort. Nasya Dhoopana uses gently inhaled medicated herbal fumes to help cleanse the nasal passages and support easier breathing.",
      },
    ],
    namesOnly: ["Matra Basti", "Anuvasan Basti", "Asthapan Basti", "Yog Basti", "Detox Therapies"],
  },
  {
    slug: "pain-joint-care",
    name: "Pain Management & Joint Care",
    summary:
      "We provide effective Ayurvedic therapies for joint pain, muscular stiffness, cervical problems, and spinal discomfort through treatments such as Kati Basti, Janu Basti, Greeva Basti, Uro Basti, Nabhi (Chakra) Basti, and Prushtha Basti. These therapies help improve mobility, reduce pain, and support musculoskeletal health.",
    detailed: [],
    namesOnly: ["Kati Basti", "Janu Basti", "Greeva Basti", "Uro Basti", "Nabhi (Chakra) Basti", "Prushtha Basti"],
  },
  {
    slug: "swedana-heat",
    name: "Swedana & Herbal Heat Therapies",
    summary:
      "Traditional sweating and herbal fomentation therapies including Patra Pinda Sweda, Choorna Pinda Sweda, Jambeera Pinda Sweda, Valuka Sweda, Nadi Sweda, and Vashpa Sweda assist in detoxification, muscle relaxation, pain relief, and improved blood circulation.",
    detailed: [],
    namesOnly: [
      "Patra Pinda Sweda",
      "Choorna Pinda Sweda",
      "Jambeera Pinda Sweda",
      "Valuka Sweda",
      "Nadi Sweda",
      "Vashpa Sweda",
    ],
  },
  {
    slug: "rejuvenation-wellness",
    name: "Rejuvenation & Wellness Therapies",
    summary:
      "Revitalize your body and mind with therapies such as Abhyangam, Udvartana, Kashaya Dhara, Sarvanga Tail Dhara, Shashtik Shali Pinda Sweda, and Marma Chikitsa. These treatments help nourish the skin, rejuvenate the body, relieve stress, and promote overall wellness.",
    detailed: [],
    namesOnly: [
      "Abhyangam",
      "Udvartana",
      "Kashaya Dhara",
      "Sarvanga Tail Dhara",
      "Shashtik Shali Pinda Sweda",
      "Marma Chikitsa",
    ],
  },
  {
    slug: "specialized-ayurvedic",
    name: "Specialized Ayurvedic Therapies",
    summary:
      "We also provide specialized therapies including Akshi Tarpan, Netra Dhara, Netra Pindi, Karna Purana, Gandusha, Kavala, Jalaukavcharan, Agnikarma, and Cupping Therapy, along with other traditional Ayurvedic procedures focused on preventive healthcare and natural healing.",
    detailed: [
      {
        name: "Gandoosha",
        description:
          "A classical Ayurvedic oral care therapy that supports natural mouth cleansing, gum strength, and overall oral wellness. Medicated oil or a specially prepared herbal liquid is held in the mouth for a specific duration. Traditionally recommended for gum care, bad breath, mouth dryness, and jaw stiffness.",
      },
      {
        name: "Kavala",
        description:
          "A traditional Ayurvedic oral care therapy performed with medicated oil or a herbal decoction to support mouth, gum, and throat wellness. Unlike Gandoosha, Kavala involves gentle movement or gargling, cleansing and nourishing the oral cavity more actively. Commonly recommended for bad breath, gum weakness, and throat irritation.",
      },
      {
        name: "Karna Purna & Karna Dhoopana",
        description:
          "Traditional Ayurvedic ear care therapies focused on supporting ear comfort, hygiene, and overall sensory wellness. Karna Purna involves gently applying warm medicated oil into the ears, nourishing the ear canal and calming the head and jaw region. Karna Dhoopana uses medicated herbal fumes to support ear hygiene and cleanliness.",
      },
    ],
    namesOnly: ["Akshi Tarpan", "Netra Dhara", "Netra Pindi", "Jalaukavcharan", "Agnikarma", "Cupping Therapy"],
  },
];
