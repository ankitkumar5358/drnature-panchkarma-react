export type WellnessPackageProgram = {
  duration: string;
  therapies: string;
};

export type WellnessPackageDetail = {
  eyebrow: string;
  context: string;
  highlights: string[];
  focus: string[];
  programs?: WellnessPackageProgram[];
  packageNote?: string;
  personalizationNote?: string;
};

export const wellnessPackageDetails: Record<string, WellnessPackageDetail> = {
  "Panchakarma Detox & Rejuvenation Program": {
    eyebrow: "Holistic Rejuvenation",
    context:
      "Modern lifestyle factors such as irregular eating habits, stress, lack of rest, and low physical activity can affect digestion, energy levels, and overall wellbeing.",
    highlights: ["Natural Cleansing", "Digestive Balance", "Vitality", "Rejuvenation"],
    focus: [
      "Digestive and metabolic balance",
      "Physical and mental fatigue",
      "Lifestyle-related heaviness",
      "Energy and vitality",
      "Overall rejuvenation",
    ],
    programs: [
      {
        duration: "7-Day Program",
        therapies:
          "Abhyangam Sarvangam • Vashpa Sweda Sarvanga • Udvartana • Detox Therapy • Shirodhara • Matra Basti • Sarvanga Tail Dhara • Ksheera Dhara / Takra Dhara",
      },
      {
        duration: "15-Day Program",
        therapies:
          "Abhyangam Sarvangam • Vashpa Sweda Sarvanga • Udvartana • Detox Therapy • Shirodhara • Anuvasan Basti • Asthapan Basti / Yog Basti • Sarvanga Tail Dhara • Ksheera Dhara • Relaxation Therapy",
      },
    ],
    packageNote: "These therapies are part of the Full Body Detox & Panchakarma Rejuvenation package.",
    personalizationNote:
      "Personalized after Ayurvedic consultation. Exact therapies may vary according to individual health requirements.",
  },
  "Weight & Metabolic Wellness Program": {
    eyebrow: "Metabolic Wellness",
    context:
      "Body weight and metabolic health may be influenced by nutrition, physical activity, sleep, stress, digestion, and other lifestyle factors.",
    highlights: ["Healthy Weight", "Metabolism", "Digestion", "Active Lifestyle"],
    focus: [
      "Healthy weight management",
      "Metabolic balance",
      "Digestive wellbeing",
      "Physical activity",
      "Sustainable lifestyle habits",
    ],
    programs: [
      {
        duration: "7-Day Program",
        therapies:
          "Udvartana • Vashpa Sweda Sarvanga • Abhyangam Sarvangam • Detox Therapy • Sarvanga Tail Dhara • Matra Basti • Nadi Sweda",
      },
      {
        duration: "15-Day Program",
        therapies:
          "Udvartana • Vashpa Sweda Sarvanga • Abhyangam Sarvangam • Detox Therapy • Sarvanga Tail Dhara • Anuvasan Basti • Asthapan Basti • Nadi Sweda • Rejuvenation Therapy",
      },
    ],
    packageNote: "These selections are part of the Weight Management & Body Detox package.",
    personalizationNote:
      "Personalized after Ayurvedic consultation. Exact therapies may vary according to individual health requirements.",
  },
  "Digestive & Gut Wellness Program": {
    eyebrow: "Digestive Wellness",
    context:
      "Digestive concerns such as bloating, heaviness, and irregular bowel habits may be influenced by diet, stress, hydration, sleep, and daily lifestyle patterns.",
    highlights: ["Gut Health", "Digestion", "Bowel Wellness", "Diet"],
    focus: [
      "Digestive comfort",
      "Bloating and heaviness",
      "Healthy appetite",
      "Bowel regularity",
      "Diet and lifestyle balance",
    ],
    programs: [
      {
        duration: "7-Day Program",
        therapies:
          "Abhyangam Sarvangam • Vashpa Sweda Sarvanga • Nabhi / Chakra Basti • Matra Basti • Detox Therapy • Nadi Sweda • Abhyangam Sthanika",
      },
      {
        duration: "15-Day Program",
        therapies:
          "Abhyangam Sarvangam • Vashpa Sweda Sarvanga • Nabhi / Chakra Basti • Matra Basti • Anuvasan Basti • Asthapan Basti • Yog Basti • Nadi Sweda • Detox Therapy • Udvartana",
      },
    ],
    packageNote: "These supportive therapies are part of the Digestive Wellness package.",
    personalizationNote:
      "Personalized after Ayurvedic consultation. Exact therapies may vary according to individual digestive and health requirements.",
  },
  "Stress, Sleep & Mind Wellness Program": {
    eyebrow: "Mind & Relaxation Wellness",
    context:
      "Ongoing stress, lack of sleep, and demanding routines may affect concentration, mood, energy levels, and overall physical and emotional wellbeing.",
    highlights: ["Stress Support", "Restful Sleep", "Relaxation", "Mind Wellness"],
    focus: [
      "Everyday stress management",
      "Restful sleep",
      "Mental relaxation",
      "Physical fatigue",
      "Balanced daily routine",
    ],
    programs: [
      {
        duration: "7-Day Program",
        therapies:
          "Shirodhara • Shiro Pichu • Abhyangam Sarvangam • Vashpa Sweda Sarvanga • Nasya • Marma Chikitsa • Netra Tarpan / Akshi Tarpan",
      },
      {
        duration: "15-Day Program",
        therapies:
          "Shirodhara • Shiro Pichu • Shiro Basti • Abhyangam Sarvangam • Vashpa Sweda Sarvanga • Nasya • Marma Chikitsa • Netra Tarpan • Netra Dhara • Ksheera Dhara / Takra Dhara",
      },
    ],
    packageNote: "These therapies are part of the Mental Wellness package.",
    personalizationNote:
      "Personalized after Ayurvedic consultation. This program is intended for wellness support and relaxation.",
  },
  "Women's Hormonal & Reproductive Wellness Program": {
    eyebrow: "Women's Wellness",
    context:
      "Women's hormonal health may be influenced by nutrition, body weight, metabolism, stress, sleep, age, and underlying health conditions. An individualized approach is therefore important.",
    highlights: ["Cycle Wellness", "Hormonal Balance", "Metabolism", "Reproductive Wellness"],
    focus: [
      "Menstrual wellbeing",
      "Hormonal wellness",
      "Metabolic balance",
      "Healthy weight management",
      "Reproductive wellbeing",
    ],
    programs: [
      {
        duration: "7-Day Program",
        therapies:
          "Abhyangam Sarvangam • Vashpa Sweda Sarvanga • Udvartana • Detox Therapy • Nabhi / Chakra Basti • Matra Basti • Nadi Sweda • Shirodhara",
      },
      {
        duration: "15-Day Program",
        therapies:
          "Abhyangam Sarvangam • Vashpa Sweda Sarvanga • Udvartana • Detox Therapy • Nabhi / Chakra Basti • Anuvasan Basti • Asthapan Basti • Shirodhara • Marma Chikitsa • Relaxation Therapy",
      },
    ],
    packageNote: "These therapies are based on the PCOS/PCOD & Female Fertility Wellness package.",
    personalizationNote:
      "Personalized after Ayurvedic consultation. Exact therapies depend on individual health history and wellness requirements.",
  },
  "Skin & Beauty Rejuvenation Program": {
    eyebrow: "Skin & Beauty Wellness",
    context:
      "Skin health and appearance may be influenced by nutrition, hydration, digestion, sleep, stress, hormonal factors, and environmental exposure.",
    highlights: ["Skin Vitality", "Natural Radiance", "Relaxation", "Rejuvenation"],
    focus: [
      "Skin vitality",
      "Natural radiance",
      "Relaxation and wellbeing",
      "Healthy lifestyle habits",
      "Overall rejuvenation",
    ],
    programs: [
      {
        duration: "7-Day Program",
        therapies:
          "Abhyangam Sarvangam • Vashpa Sweda Sarvanga • Ksheera Dhara • Takra Dhara • Detox Therapy • Matra Basti • Shirodhara • Skin Rejuvenation Care",
      },
      {
        duration: "15-Day Program",
        therapies:
          "Abhyangam Sarvangam • Vashpa Sweda Sarvanga • Ksheera Dhara • Takra Dhara • Detox Therapy • Anuvasan Basti • Asthapan Basti • Shirodhara • Rejuvenation Therapy",
      },
    ],
    packageNote: "These therapies are part of the Skin, Psoriasis & Beauty Rejuvenation package.",
    personalizationNote:
      "Personalized after Ayurvedic consultation. Exact therapies are selected according to individual skin and wellness requirements.",
  },
  "Diabetes & Metabolic Care Program": {
    eyebrow: "Metabolic Care",
    context:
      "Diabetes is a chronic metabolic condition in which blood glucose levels remain elevated. It requires regular medical monitoring, appropriate nutrition, physical activity, and long-term lifestyle management.",
    highlights: ["Blood Sugar Support", "Metabolic Balance", "Healthy Weight", "Lifestyle Management"],
    focus: [
      "Metabolic wellness",
      "Healthy weight management",
      "Digestive wellbeing",
      "Physical activity",
      "Sustainable lifestyle habits",
    ],
    programs: [
      {
        duration: "7-Day Program",
        therapies:
          "Abhyangam Sarvangam • Vashpa Sweda Sarvanga • Udvartana • Matra Basti • Detox Therapy • Sarvanga Tail Dhara • Nadi Sweda",
      },
      {
        duration: "15-Day Program",
        therapies:
          "Abhyangam Sarvangam • Vashpa Sweda Sarvanga • Udvartana • Anuvasan Basti • Asthapan Basti • Matra Basti • Detox Therapy • Sarvanga Tail Dhara • Nadi Sweda • Rejuvenation Therapy",
      },
    ],
    packageNote: "These therapies are listed in the Diabetes Management package.",
    personalizationNote:
      "Personalized after Ayurvedic consultation. Diabetes medicines, insulin, and glucose monitoring should continue according to the treating physician's advice.",
  },
  "Thyroid & Metabolic Wellness Program": {
    eyebrow: "Thyroid & Metabolic Wellness",
    context:
      "Thyroid disorders can affect metabolism and several body functions. They require appropriate diagnosis, laboratory monitoring, and ongoing medical management.",
    highlights: ["Thyroid Wellness", "Metabolism", "Energy", "Healthy Weight"],
    focus: [
      "Metabolic wellbeing",
      "Energy and vitality",
      "Healthy weight management",
      "Relaxation and stress support",
      "Lifestyle balance",
    ],
    programs: [
      {
        duration: "7-Day Program",
        therapies:
          "Shirodhara • Abhyangam Sarvangam • Mild Vashpa Sweda • Shiro Pichu • Nasya • Marma Chikitsa • Head & Neck Relaxation",
      },
      {
        duration: "15-Day Program",
        therapies:
          "Shirodhara • Abhyangam Sarvangam • Mild Vashpa Sweda • Shiro Pichu • Shiro Basti • Nasya • Marma Chikitsa • Ksheera Dhara / Takra Dhara • Relaxation Therapy",
      },
    ],
    packageNote: "These therapies are drawn from the Hypertension Management package.",
    personalizationNote:
      "Personalized after Ayurvedic consultation. Prescribed thyroid medicines should not be changed without medical advice.",
  },
  "Hypertension & Cardiovascular Wellness Program": {
    eyebrow: "Cardiovascular Wellness",
    context:
      "Hypertension is a condition in which blood pressure remains consistently high. It requires regular monitoring, appropriate medical care, balanced nutrition, and long-term lifestyle management.",
    highlights: ["Blood Pressure Wellness", "Relaxation", "Stress Support", "Healthy Lifestyle"],
    focus: [
      "Cardiovascular wellbeing",
      "Relaxation",
      "Stress management",
      "Healthy sleep routine",
      "Sustainable lifestyle habits",
    ],
    programs: [
      {
        duration: "7-Day Program",
        therapies:
          "Shirodhara • Abhyangam Sarvangam • Mild Vashpa Sweda • Shiro Pichu • Nasya • Marma Chikitsa • Head & Neck Relaxation",
      },
      {
        duration: "15-Day Program",
        therapies:
          "Shirodhara • Abhyangam Sarvangam • Mild Vashpa Sweda • Shiro Pichu • Shiro Basti • Nasya • Marma Chikitsa • Ksheera Dhara / Takra Dhara • Relaxation Therapy",
      },
    ],
    packageNote: "These therapies are part of the Hypertension Management package.",
    personalizationNote:
      "Personalized after Ayurvedic consultation. Prescribed blood-pressure medicines should not be changed without medical advice.",
  },
  "Liver & Metabolic Wellness Program": {
    eyebrow: "Liver & Metabolic Wellness",
    context:
      "Liver-related metabolic concerns, including fatty liver, may be linked to body weight, dietary habits, physical inactivity, and other metabolic factors. These concerns can benefit from structured lifestyle management.",
    highlights: ["Liver Wellness", "Metabolism", "Digestion", "Healthy Lifestyle"],
    focus: [
      "Liver wellness",
      "Metabolic health",
      "Digestive balance",
      "Healthy weight management",
      "Diet and lifestyle improvement",
    ],
    programs: [
      {
        duration: "7-Day Program",
        therapies:
          "Abhyangam Sarvangam • Vashpa Sweda Sarvanga • Udvartana • Detox Therapy • Nabhi / Chakra Basti • Matra Basti • Nadi Sweda • Sarvanga Tail Dhara",
      },
      {
        duration: "15-Day Program",
        therapies:
          "Abhyangam Sarvangam • Vashpa Sweda Sarvanga • Udvartana • Detox Therapy • Nabhi / Chakra Basti • Anuvasan Basti • Asthapan Basti • Nadi Sweda • Sarvanga Tail Dhara",
      },
    ],
    packageNote: "These therapies are part of the Liver Wellness & Fatty Liver Management package.",
    personalizationNote:
      "Personalized after Ayurvedic consultation. Appropriate medical evaluation and monitoring should continue where clinically required.",
  },
  "Ayurvedic Anorectal Care Program": {
    eyebrow: "Anorectal Wellness",
    context:
      "Common anorectal conditions such as piles and anal fissures may cause pain, itching, discomfort, or bleeding. They may also be linked with constipation, straining, and irregular bowel movements.",
    highlights: ["Bowel Wellness", "Local Comfort", "Digestive Support", "Healthy Routine"],
    focus: [
      "Piles-related concerns",
      "Fissure-related discomfort",
      "Bowel regularity",
      "Constipation management",
      "Digestive wellbeing",
    ],
    programs: [
      {
        duration: "7-Day Program",
        therapies:
          "Matra Basti • Anuvasan Basti • Abhyangam Sthanika • Vashpa Sweda Ekanga • Detox Therapy • Marma Chikitsa • Mild Swedana",
      },
      {
        duration: "15-Day Program",
        therapies:
          "Matra Basti • Anuvasan Basti • Asthapan Basti • Yog Basti • Abhyangam Sthanika • Vashpa Sweda Ekanga • Nadi Sweda • Detox Therapy • Marma Chikitsa",
      },
    ],
    packageNote: "These therapies are part of the Piles & Fissure Care package.",
    personalizationNote:
      "Personalized after Ayurvedic consultation. Persistent bleeding, severe pain, or significant changes in bowel habits require appropriate medical evaluation.",
  },
  "Joint, Back & Spine Care Program": {
    eyebrow: "Musculoskeletal Wellness",
    context:
      "Joint, back, and spine discomfort may result from muscular strain, poor posture, degenerative changes, inflammation, injury, or other musculoskeletal conditions. These concerns may affect everyday movement and quality of life.",
    highlights: ["Joint Mobility", "Back Care", "Spine Wellness", "Movement Support"],
    focus: [
      "Back and lower-spine comfort",
      "Neck and cervical wellness",
      "Knee and joint mobility",
      "Muscular stiffness",
      "Functional movement",
    ],
    programs: [
      {
        duration: "7-Day Program",
        therapies:
          "Kati Basti • Janu Basti • Greeva Basti • Prushtha Basti • Abhyangam Sarvangam • Vashpa Sweda • Nadi Sweda • Patra Pinda Sweda • Matra Basti • Marma Chikitsa",
      },
      {
        duration: "15-Day Program",
        therapies:
          "Kati Basti • Janu Basti • Greeva Basti • Prushtha Basti • Abhyangam Sarvangam • Vashpa Sweda • Nadi Sweda • Patra Pinda Sweda • Choorna Pinda Sweda • Valuka Sweda • Matra Basti • Anuvasan Basti • Asthapan Basti • Marma Chikitsa",
      },
    ],
    packageNote:
      "Your source material includes dedicated packages for back and knee pain, cervical and spine wellness, sciatica, and arthritis/joint wellness. These therapies bring those protocols together under the approved program name.",
    personalizationNote:
      "Personalized after Ayurvedic consultation. Therapy selection depends on the location, nature, and severity of the concern.",
  },
  "Respiratory & Allergy Wellness Program": {
    eyebrow: "Respiratory Wellness",
    context:
      "Respiratory and allergic conditions may cause nasal congestion, sneezing, throat irritation, cough, or breathing discomfort. The causes and triggers may vary from person to person.",
    highlights: ["Respiratory Wellness", "Allergy Support", "Upper-Airway Care", "Breathing Wellness"],
    focus: [
      "Nasal and upper-airway comfort",
      "Seasonal sensitivities",
      "Respiratory wellbeing",
      "Healthy breathing habits",
      "Lifestyle support",
    ],
    programs: [
      {
        duration: "7-Day Program",
        therapies:
          "Nasya • Nasya Dhoopana • Karna Dhoopana • Gandusha • Kavala • Nadi Sweda • Abhyangam Sarvangam • Vashpa Sweda • Shirodhara / Shiro Pichu",
      },
      {
        duration: "15-Day Program",
        therapies:
          "Nasya • Nasya Dhoopana • Karna Dhoopana • Gandusha • Kavala • Nadi Sweda • Vashpa Sweda Sarvanga • Abhyangam Sarvangam • Shirodhara • Shiro Pichu • Marma Chikitsa",
      },
    ],
    packageNote: "These therapies are part of the Respiratory Wellness package.",
    personalizationNote:
      "Personalized after Ayurvedic consultation. Severe breathlessness, chest pain, or serious allergic reactions require prompt medical attention.",
  },
  "Psoriasis & Chronic Skin Care Program": {
    eyebrow: "Chronic Skin Wellness",
    context:
      "Psoriasis is a chronic immune-mediated skin condition that may cause recurring areas of inflamed, thickened, or scaly skin. It requires appropriate diagnosis, ongoing monitoring, and individualized care.",
    highlights: ["Chronic Skin Wellness", "Skin Comfort", "Lifestyle Balance", "Long-Term Care"],
    focus: [
      "Psoriasis-related skin concerns",
      "Dryness and scaling",
      "Recurring skin discomfort",
      "Stress and lifestyle factors",
      "Long-term skin wellness",
    ],
    programs: [
      {
        duration: "7-Day Program",
        therapies:
          "Abhyangam Sarvangam • Vashpa Sweda Sarvanga • Ksheera Dhara • Takra Dhara • Detox Therapy • Matra Basti • Shirodhara • Skin Rejuvenation Care",
      },
      {
        duration: "15-Day Program",
        therapies:
          "Abhyangam Sarvangam • Vashpa Sweda Sarvanga • Ksheera Dhara • Takra Dhara • Detox Therapy • Anuvasan Basti • Asthapan Basti • Shirodhara • Rejuvenation Therapy",
      },
    ],
    packageNote: "These therapies are based on the Skin, Psoriasis & Beauty Rejuvenation package.",
    personalizationNote:
      "Personalized after Ayurvedic consultation. Chronic or worsening skin conditions should continue to receive appropriate medical or dermatological care.",
  },
};
