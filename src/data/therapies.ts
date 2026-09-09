import classicalPanchkarmaImage from "../assets/ClassicalPanchkarma.png";
import HeadandDharaTherapies from "../assets/HeadandDharaTherapies.png";
import EyeandENTTherapies from "../assets/EyeandENTTherapies.png";
import LocalizedBastiTherapies from "../assets/LocalizedBastiTherapies.png";
import BodyRejuvenationTherapies from "../assets/BodyRejuvenationTherapies.png";
import SwedanaandPotliTherapies from "../assets/SwedanaandPotliTherapies.png";
import SpecializedTherapies from "../assets/SpecializedTherapies.png";
export interface TherapyDetail {
  name: string;
  description: string;
  tags: string[];
}

export interface TherapyCategory {
  slug: string;
  name: string;
  summary: string;
  image: string;
  detailed: TherapyDetail[];
  namesOnly: string[];
}

export const therapyCategories: TherapyCategory[] = [
  {
    slug: "classical-panchakarma",
    name: "Classical Panchakarma",
    summary: "Foundational detoxification therapies that support purification, balance and rejuvenation through time-tested Ayurvedic methods.",
    image: classicalPanchkarmaImage,
    detailed: [
      { name: "Nasya", description: "A nasal cleansing therapy designed to support head, sinus and respiratory comfort.", tags: ["Detox", "Nasal Care"] },
      { name: "Matra Basti", description: "A gentle medicated enema that supports Vata balance and overall internal wellness.", tags: ["Basti", "Balance"] },
      { name: "Anuvasan Basti", description: "A nourishing oil-based therapy that supports lubrication, comfort and deep nourishment.", tags: ["Oil Therapy", "Rejuvenation"] },
      { name: "Asthapan Basti", description: "A decoction-based purification therapy used to support deeper cleansing and balance.", tags: ["Cleansing", "Ayurvedic Care"] },
      { name: "Yog Basti", description: "A combined restorative approach used to support holistic balance and cleansing.", tags: ["Protocol", "Supportive Care"] },
      { name: "Jalaukavacharana", description: "A traditional therapy used to support localized inflammation and circulation-related concerns.", tags: ["Localized Care", "Traditional"] },
    ],
    namesOnly: [],
  },
  {
    slug: "head-shiro",
    name: "Head & Shiro Therapies",
    summary: "Calming therapies that help clear mental stress, restore relaxation and support overall nervous-system balance.",
    image: HeadandDharaTherapies,
    detailed: [
      { name: "Shirodhara", description: "A flowing oil therapy for mental calm, stress relief and deep relaxation.", tags: ["Stress Relief", "Mind & Body"] },
      { name: "Shiro Basti", description: "A soothing head therapy designed to support comfort, sleep and scalp wellness.", tags: ["Head Care", "Restorative"] },
      { name: "Takra Dhara", description: "A cooling buttermilk therapy known for its calming effect on the mind and senses.", tags: ["Cooling", "Calming"] },
      { name: "Ksheera Dhara", description: "A therapeutic milk rhythm that supports relaxation, cooling and restoration.", tags: ["Rebalancing", "Comfort"] },
      { name: "Shiro Pichu", description: "A scalp-based therapy that supports relaxation, mental ease and soothing care.", tags: ["Scalp Care", "Clarity"] },
      { name: "Sirolepa", description: "A soothing herbal paste therapy applied to the head to support calmness and grounding.", tags: ["Herbal Care", "Supportive"] },
    ],
    namesOnly: [],
  },
  {
    slug: "eye-ear-oral-care",
    name: "Eye & ENT Therapies",
    summary: "Gentle sensory care therapies designed to support the eyes, ears, mouth and overall comfort.",
    image: EyeandENTTherapies,
    detailed: [
      { name: "Netra Tarpana", description: "A nourishing eye therapy that supports visual comfort and soothing care.", tags: ["Eyes", "Comfort"] },
      { name: "Karna Purna", description: "A therapeutic ear care treatment designed to support balance and sensory comfort.", tags: ["Ear Care", "Supportive"] },
      { name: "Gandusha / Kavala", description: "Traditional oral care practices that help support gum, mouth and throat wellness.", tags: ["Oral Care", "Traditional"] },
    ],
    namesOnly: [],
  },
  {
    slug: "targeted-basti",
    name: "Localized Basti Therapies",
    summary: "Localized therapeutic care designed for the lower back, spine, joints and specific body regions.",
    image: LocalizedBastiTherapies,
    detailed: [],
    namesOnly: ["Kati Basti", "Janu Basti", "Greeva Basti", "Uro Basti"],
  },
  {
    slug: "abhyanga-body",
    name: "Body Rejuvenation Therapies",
    summary: "Full-body therapies that nourish the tissues, improve circulation and encourage deep relaxation.",
    image: BodyRejuvenationTherapies,
    detailed: [
      { name: "Sarvanga Abhyanga", description: "A full-body oil massage designed to support circulation, comfort and rejuvenation.", tags: ["Massage", "Vitality"] },
      { name: "Udvartana", description: "A dry herbal massage that supports circulation, skin freshness and detoxification.", tags: ["Detox", "Skin Support"] },
      { name: "Sarvanga Taila Dhara", description: "A full-body oil pouring therapy for deep relaxation and relief from bodily heaviness.", tags: ["Body Care", "Relaxation"] },
      { name: "Dhanyamla Dhara", description: "A therapeutic pouring technique used to support comfort and localized relief.", tags: ["Localized Support", "Comfort"] },
    ],
    namesOnly: [],
  },
  {
    slug: "swedana-pinda-sweda",
    name: "Swedana & Pinda Sweda Therapies",
    summary: "Heat-based therapies that help open channels, ease stiffness and support muscular relaxation.",
    image: SwedanaandPotliTherapies,
    detailed: [],
    namesOnly: ["Vashpa Sweda", "Nadi Sweda", "Patra Pinda Sweda", "Shashtika Shali Pinda Sweda"],
  },
  {
    slug: "specialized-integrative",
    name: "Specialized & Integrative Therapies",
    summary: "Advanced therapeutic procedures that support targeted rejuvenation, pain care and holistic recovery.",
    image: SpecializedTherapies,
    detailed: [
      { name: "Agnikarma", description: "A focused therapeutic procedure used for localized stress and supportive healing care.", tags: ["Targeted Care", "Traditional"] },
      { name: "Viddha Karma", description: "A careful intervention used to support stimulation and comfort in selected areas.", tags: ["Precision", "Therapeutic"] },
      { name: "Marma Chikitsa", description: "A gentle energy-point therapy supporting balance, vitality and recovery.", tags: ["Marma", "Balance"] },
      { name: "Cupping Therapy", description: "A traditional technique that supports circulation, comfort and relief in select concerns.", tags: ["Circulation", "Supportive Care"] },
    ],
    namesOnly: [],
  },
];

export function getTherapyCategoryBySlug(slug: string) {
  return therapyCategories.find((category) => category.slug === slug) ?? therapyCategories[0];
}
