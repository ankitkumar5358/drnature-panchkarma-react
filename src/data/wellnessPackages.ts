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
        description: "A personalized Ayurvedic wellness program designed to support natural cleansing, digestive balance, renewed energy, and overall physical and mental rejuvenation.",
        image: heroPanchkarmaImage,
      },
      {
        name: "Weight & Metabolic Wellness Program",
        description: "A personalized Ayurvedic wellness program designed to support healthy metabolism, sustainable weight management, digestive wellbeing, and balanced lifestyle habits.",
        image: herbsImage,
      },
      {
        name: "Digestive & Gut Wellness Program",
        description: "A personalized Ayurvedic wellness program designed to support digestive comfort, healthy appetite, bowel regularity, and balanced gastrointestinal function.",
        image: digestiveWellnessImage,
      },
      {
        name: "Stress, Sleep & Mind Wellness Program",
        description: "A personalized Ayurvedic wellness program designed to support relaxation, restful sleep, mental wellbeing, and a healthier daily routine.",
        image: shirodharaImage,
      },
      {
        name: "Women's Hormonal & Reproductive Wellness Program",
        description: "A personalized Ayurvedic wellness program designed to support menstrual wellbeing, hormonal balance, metabolic health, and overall reproductive wellness.",
        image: womenWellnessImage,
      },
      {
        name: "Skin & Beauty Rejuvenation Program",
        description: "A personalized Ayurvedic rejuvenation program designed to support skin vitality, natural radiance, relaxation, and overall wellbeing from within.",
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
        description: "A personalized Ayurvedic wellness program designed to complement conventional diabetes care by supporting metabolic health, digestive wellbeing, healthy weight management, and sustainable lifestyle habits.",
        image: clinicImage,
      },
      {
        name: "Thyroid & Metabolic Wellness Program",
        description: "A personalized Ayurvedic wellness program designed to complement conventional thyroid care by supporting metabolic balance, energy levels, healthy weight management, and sustainable lifestyle habits.",
        image: shirodharaImage,
      },
      {
        name: "Hypertension & Cardiovascular Wellness Program",
        description: "A personalized Ayurvedic wellness program designed to complement cardiovascular care by supporting relaxation, stress management, healthy lifestyle habits, and overall cardiovascular wellbeing.",
        image: clinicImage,
      },
      {
        name: "Liver & Metabolic Wellness Program",
        description: "A personalized Ayurvedic wellness program designed to support digestive health, metabolic balance, healthy weight management, and overall liver wellness.",
        image: herbsImage,
      },
      {
        name: "Ayurvedic Anorectal Care Program",
        description: "A personalized Ayurvedic supportive-care program designed to support regular bowel movements, digestive wellbeing, local comfort, and healthier bowel habits.",
        image: herbsImage,
      },
      {
        name: "Joint, Back & Spine Care Program",
        description: "A personalized Ayurvedic care program designed to support joint mobility, muscle relaxation, spinal comfort, and functional movement.",
        image: heroPanchkarmaImage,
      },
      {
        name: "Respiratory & Allergy Wellness Program",
        description: "A personalized Ayurvedic wellness program designed to support respiratory comfort, upper-airway wellbeing, healthy breathing patterns, and balanced lifestyle practices.",
        image: shirodharaImage,
      },
      {
        name: "Psoriasis & Chronic Skin Care Program",
        description: "A personalized Ayurvedic supportive-care program designed to support skin comfort, lifestyle balance, relaxation, and long-term overall wellbeing.",
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
