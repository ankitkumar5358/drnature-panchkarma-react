import heroPanchkarmaImage from "../assets/panchkarmadetoxandregutiationtherapy.png";
import shirodharaImage from "../assets/minandrelaxtherapy.png";
import herbsImage from "../assets/weight.png";
import clinicImage from "../assets/clinic.jpg";
import digestiveWellnessImage from "../assets/digestionandgutwellnessprograme.png";
import womenWellnessImage from "../assets/womenwellnessprograme.png";
import skinBeautyImage from "../assets/skinandbeauty.png";

export type WellnessProgram = {
  name: string;
  description: string;
  image: string;
};

export type WellnessProgramGroup = {
  key: "wellness" | "conditionCare";
  title: string;
  items: WellnessProgram[];
};

export const wellnessPackagesIntro =
  "Care designed around you. Our wellness programs combine traditional Ayurvedic techniques, Panchakarma care and lifestyle guidance to support sustainable health, detoxification and inner balance.";

export const wellnessPackagesDisclaimer =
  "All wellness programs are personalized after consultation with our Ayurvedic professionals. Therapies and recommendations may vary according to individual health conditions, body constitution, age, lifestyle and medical history. These programs are designed to support wellness and are not a substitute for emergency medical treatment.";

export const wellnessProgramGroups: WellnessProgramGroup[] = [
  {
    key: "wellness",
    title: "Wellness",
    items: [
      {
        name: "Panchakarma Detox & Rejuvenation Program",
        description: "A cleansing and rejuvenating program focused on restoring vitality, balance and inner freshness.",
        image: heroPanchkarmaImage,
      },
      {
        name: "Weight & Metabolic Wellness Program",
        description: "A supportive approach for metabolic wellness, digestion and sustainable healthy body balance.",
        image: herbsImage,
      },
      {
        name: "Digestive & Gut Wellness Program",
        description: "Personalized care that supports gut comfort, digestion and regular rhythm through Ayurvedic guidance.",
        image: digestiveWellnessImage,
      },
      {
        name: "Stress, Sleep & Mind Wellness Program",
        description: "Gentle therapies and lifestyle care designed to calm the mind, improve rest and restore ease.",
        image: shirodharaImage,
      },
      {
        name: "Women's Hormonal & Reproductive Wellness Program",
        description: "A holistic wellness path that supports hormonal balance, cycle health and long-term wellbeing.",
        image: womenWellnessImage,
      },
      {
        name: "Skin & Beauty Rejuvenation Program",
        description: "Traditional care aimed at supporting skin clarity, vitality and healthy radiance from within.",
        image: skinBeautyImage,
      },
    ],
  },
  {
    key: "conditionCare",
    title: "Condition Care",
    items: [
      {
        name: "Diabetes & Metabolic Care Program",
        description: "Supportive care for metabolic rhythm, energy balance and long-term lifestyle wellness.",
        image: clinicImage,
      },
      {
        name: "Thyroid & Metabolic Wellness Program",
        description: "An integrative approach designed to support hormonal balance, energy and daily resilience.",
        image: shirodharaImage,
      },
      {
        name: "Hypertension & Cardiovascular Wellness Program",
        description: "Holistic support for circulation, stress response and heart-healthy lifestyle balance.",
        image: clinicImage,
      },
      {
        name: "Liver & Metabolic Wellness Program",
        description: "Traditional support for digestion, detoxification and body balance through personalized care.",
        image: herbsImage,
      },
      {
        name: "Ayurvedic Anorectal Care Program",
        description: "A supportive wellness protocol focused on comfort, tissue balance and digestive wellbeing.",
        image: herbsImage,
      },
      {
        name: "Joint, Back & Spine Care Program",
        description: "Targeted Ayurvedic support for mobility, comfort and structural balance in the body.",
        image: heroPanchkarmaImage,
      },
      {
        name: "Respiratory & Allergy Wellness Program",
        description: "Support for respiratory ease, seasonal balance and daily breathing comfort.",
        image: shirodharaImage,
      },
      {
        name: "Psoriasis & Chronic Skin Care Program",
        description: "Gentle regenerative care focused on skin comfort, recovery and long-term balance.",
        image: herbsImage,
      },
    ],
  },
];

export const wellnessPackages: WellnessProgram[] = wellnessProgramGroups.flatMap((group) => group.items);

export function slugifyWellnessPackageName(name: string): string {
  return name
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .replace(/--+/g, "-");
}

export function getWellnessPackageBySlug(slug: string): WellnessProgram | undefined {
  return wellnessPackages.find((program) => slugifyWellnessPackageName(program.name) === slug);
}
