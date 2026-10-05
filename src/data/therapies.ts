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

function therapy(
  name: string,
  introduction: string,
  features: string[],
  suitableFor: string[],
  tags: string[],
): TherapyDetail {
  return {
    name,
    description: `Introduction: ${introduction} Key Features: ${features.join("; ")} Best Suited For: ${suitableFor.join("; ")}.`,
    tags,
  };
}

const bastiFeatures = [
  "Supports Vata Dosha balance",
  "Provides nourishment and lubrication to the body tissues",
  "Supports joint and muscle comfort",
  "Helps reduce dryness and stiffness",
  "Supports flexibility and comfortable movement",
  "Can provide nourishing or cleansing effects depending on the type of Basti",
  "Treatment is customized according to Prakriti, condition, strength, and therapeutic needs",
];

const bastiSuitableFor = [
  "Lower-back discomfort",
  "Sciatica-related discomfort",
  "Joint stiffness",
  "Muscular weakness",
  "Vata-related dryness",
  "Reduced flexibility and mobility",
  "Selected degenerative musculoskeletal concerns",
  "Selected Vata-related neuromuscular complaints",
];

const dharaFeatures = [
  "Provides continuous therapeutic application over the selected area",
  "Supports physical and mental relaxation",
  "Helps reduce muscular stiffness and tension",
  "May provide cooling, nourishing, or warming effects depending on the type",
  "Supports joint and muscle comfort",
  "Helps promote flexibility and comfortable movement",
  "Therapy is selected according to Dosha, condition, and individual therapeutic needs",
];

const dharaSuitableFor = [
  "Muscular stiffness",
  "Joint discomfort",
  "Physical fatigue",
  "Stress and mental fatigue",
  "Heat-related discomfort",
  "Body heaviness",
  "Vata- and Pitta-related imbalance",
  "Selected Vata-Kapha musculoskeletal concerns",
];

const pindaFeatures = [
  "Provides controlled therapeutic warmth",
  "Helps relax tense muscles",
  "Supports joint flexibility and mobility",
  "Helps reduce stiffness and heaviness",
  "Supports local circulation",
  "May be performed as dry or oil-based fomentation depending on the type",
  "Therapy is selected according to Dosha, condition, and individual therapeutic needs",
];

const pindaSuitableFor = [
  "Joint stiffness",
  "Muscular discomfort",
  "Backache",
  "Restricted movement",
  "Localized heaviness",
  "Musculoskeletal tension",
  "Selected Vata-related conditions",
  "Selected Vata-Kapha musculoskeletal concerns",
];

export const therapyCategories: TherapyCategory[] = [
  {
    slug: "classical-panchakarma",
    name: "Classical Panchakarma Therapies",
    summary:
      "Classical Panchakarma procedures selected after individual assessment and performed under qualified Ayurvedic medical supervision.",
    image: classicalPanchkarmaImage,
    detailed: [
      therapy(
        "Vamana",
        "Vamana is a classical Panchakarma purification therapy used to help remove aggravated Kapha under the supervision of a qualified Ayurvedic physician. It is performed only after proper assessment and the required preparatory procedures.",
        [
          "Classical Shodhana therapy for Kapha balance",
          "Supports overall body purification",
          "Planned according to Prakriti and individual health condition",
          "Performed after appropriate preparatory therapies",
          "Requires professional medical supervision",
        ],
        [
          "Kapha-dominant conditions",
          "Recurrent respiratory congestion",
          "Excessive heaviness and sluggishness",
          "Selected allergic respiratory concerns",
          "Certain chronic skin-related conditions",
          "Metabolic imbalance associated with aggravated Kapha",
        ],
        ["Panchakarma", "Kapha Balance", "Medical Supervision"],
      ),
      therapy(
        "Virechana",
        "Virechana is a classical Panchakarma cleansing therapy mainly used to help remove aggravated Pitta through a carefully supervised therapeutic purgation process.",
        [
          "Classical purification therapy for Pitta balance",
          "Supports digestive and metabolic balance",
          "Helps cleanse the gastrointestinal system",
          "Planned according to individual Ayurvedic assessment",
          "Includes appropriate preparation and post-therapy dietary guidelines",
        ],
        [
          "Pitta-dominant digestive concerns",
          "Excessive body heat",
          "Acid-related digestive discomfort",
          "Selected skin concerns",
          "Sluggish digestion",
          "Certain liver and metabolic wellness concerns",
        ],
        ["Panchakarma", "Pitta Balance", "Digestive Care"],
      ),
      therapy(
        "Basti",
        "Basti is one of the main therapies of classical Panchakarma and is traditionally used to support Vata Dosha balance. Depending on the individual’s condition and therapeutic needs, Basti may use medicated oils, herbal decoctions, or a combination of both.",
        bastiFeatures,
        bastiSuitableFor,
        ["Panchakarma", "Vata Balance", "Therapeutic Care"],
      ),
      therapy(
        "Anuvasana Basti",
        "Anuvasana Basti is an oil-based Basti mainly used for nourishment, lubrication, and Vata balance.",
        bastiFeatures,
        bastiSuitableFor,
        ["Oil-Based Basti", "Nourishment", "Vata Balance"],
      ),
      therapy(
        "Asthapana Basti / Niruha Basti",
        "Asthapana / Niruha Basti is a decoction-based cleansing Basti prepared using selected herbal formulations.",
        bastiFeatures,
        bastiSuitableFor,
        ["Decoction-Based Basti", "Cleansing", "Vata Balance"],
      ),
      therapy(
        "Matra Basti",
        "Matra Basti is a gentle oil-based Basti using a smaller prescribed quantity of medicated oil.",
        bastiFeatures,
        bastiSuitableFor,
        ["Oil-Based Basti", "Gentle Care", "Vata Balance"],
      ),
      therapy(
        "Yoga Basti",
        "Yoga Basti is a planned therapeutic sequence that combines oil-based and decoction-based Basti procedures.",
        bastiFeatures,
        bastiSuitableFor,
        ["Basti Protocol", "Personalized Care", "Vata Balance"],
      ),
    ],
    namesOnly: [],
  },
  {
    slug: "head-shiro",
    name: "Shiro (Head) Therapies",
    summary:
      "Traditional head and scalp therapies selected to support relaxation, comfort, sleep, and individualized Ayurvedic care.",
    image: HeadandDharaTherapies,
    detailed: [
      therapy(
        "Shirodhara",
        "Shirodhara is a deeply relaxing Ayurvedic therapy in which a continuous stream of warm medicated oil or another prescribed liquid is gently poured over the forehead.",
        [
          "Promotes deep relaxation",
          "Helps calm mental restlessness",
          "Supports healthy sleep",
          "Soothes the head and nervous system",
          "Provides a relaxing mind-body experience",
        ],
        [
          "Stress",
          "Mental fatigue",
          "Disturbed sleep",
          "Nervous restlessness",
          "Headache-related discomfort",
          "Migraine-related discomfort",
        ],
        ["Relaxation", "Sleep Support", "Head Care"],
      ),
      therapy(
        "Shiro Basti",
        "Shiro Basti is a specialized Ayurvedic head therapy in which warm medicated oil is retained over the scalp using a specially designed cap for a prescribed duration.",
        [
          "Nourishes the scalp and head area",
          "Supports Vata balance",
          "Promotes relaxation",
          "Helps reduce scalp dryness",
          "Provides prolonged contact with therapeutic oil",
        ],
        [
          "Headache-related discomfort",
          "Sleep disturbances",
          "Scalp dryness",
          "Selected facial weakness",
          "Vata-related head concerns",
          "Selected neuromuscular concerns",
        ],
        ["Head Care", "Oil Therapy", "Relaxation"],
      ),
      therapy(
        "Shiro Lepa",
        "Shiro Lepa is a traditional Ayurvedic therapy in which a specially selected herbal paste is applied over the scalp or head area for a prescribed period.",
        [
          "Uses customized herbal preparations",
          "Provides localized scalp care",
          "May provide a soothing or cooling effect",
          "Supports scalp wellness",
          "Selected according to Dosha and individual condition",
        ],
        [
          "Scalp discomfort",
          "Excessive heat sensation in the head",
          "Head heaviness",
          "Stress-related head tension",
          "Selected scalp concerns",
        ],
        ["Herbal Care", "Scalp Wellness", "Cooling"],
      ),
      therapy(
        "Shiro Pichu",
        "Shiro Pichu is a gentle external therapy in which a cotton pad soaked in warm medicated oil is placed over a selected area of the scalp for a prescribed duration.",
        [
          "Gentle and non-invasive therapy",
          "Provides prolonged oil contact",
          "Nourishes the scalp",
          "Helps reduce dryness",
          "Promotes relaxation",
        ],
        [
          "Scalp dryness",
          "Headache-related discomfort",
          "Stress",
          "Mental fatigue",
          "Disturbed sleep",
          "Vata-related head discomfort",
        ],
        ["Scalp Care", "Oil Therapy", "Relaxation"],
      ),
      therapy(
        "Shiro Abhyanga",
        "Shiro Abhyanga is a traditional Ayurvedic head massage performed using medicated herbal oil selected according to the individual’s constitution and therapeutic needs.",
        [
          "Relaxing head and scalp massage",
          "Nourishes the scalp",
          "Supports local circulation",
          "Helps release muscular tension",
          "Promotes mental relaxation",
        ],
        [
          "Stress",
          "Mental fatigue",
          "Scalp dryness",
          "Head and neck tension",
          "Disturbed sleep",
          "General relaxation and scalp wellness",
        ],
        ["Head Massage", "Scalp Care", "Relaxation"],
      ),
    ],
    namesOnly: [],
  },
  {
    slug: "eye-ear-oral-care",
    name: "Netra Kriya Kalpa & ENT Therapies",
    summary:
      "Traditional eye, nasal, ear, and oral care procedures performed with preparations selected for individual needs and professional guidance.",
    image: EyeandENTTherapies,
    detailed: [
      therapy(
        "Netra Tarpana",
        "Netra Tarpana is a traditional Ayurvedic eye-care therapy in which medicated ghee or another prescribed preparation is gently retained around the eyes for a specific duration.",
        [
          "Nourishes and lubricates the eye area",
          "Supports eye comfort",
          "Helps reduce dryness and tiredness",
          "Promotes relaxation around the eyes",
          "Can be used as part of screen-fatigue wellness care",
        ],
        [
          "Dry eyes",
          "Eye strain",
          "Tired eyes",
          "Screen-related fatigue",
          "Mild burning sensations",
          "Heaviness around the eyes",
        ],
        ["Eye Care", "Comfort", "Screen-Fatigue Care"],
      ),
      therapy(
        "Netra Parisheka / Netra Dhara",
        "Netra Parisheka, also known as Netra Dhara, is a traditional eye-care procedure in which a prescribed medicated liquid is gently poured over the closed eye area in a controlled manner.",
        [
          "Gentle external eye therapy",
          "Provides a soothing effect",
          "Supports comfort around the eyes",
          "Helps refresh tired eyes",
          "Medication is selected according to individual needs",
        ],
        [
          "Eye fatigue",
          "Mild burning sensations",
          "Eye heaviness",
          "Screen-related strain",
          "Selected Pitta-related eye discomfort",
          "General eye-care support",
        ],
        ["Eye Care", "Soothing", "Personalized Care"],
      ),
      therapy(
        "Pindi",
        "Pindi is a traditional Ayurvedic eye-care procedure in which a specially prepared herbal paste or medicated material is placed externally over the closed eye area.",
        [
          "External eye-care therapy",
          "Uses prescribed herbal preparations",
          "Provides localized soothing support",
          "Selected according to the individual eye condition",
          "Performed under professional guidance",
        ],
        [
          "Eye-area fatigue",
          "Mild eye-area discomfort",
          "Burning sensations",
          "Puffiness around the eyes",
          "Selected inflammatory-type eye discomfort after assessment",
        ],
        ["Eye Care", "Herbal Care", "Professional Guidance"],
      ),
      therapy(
        "Nasya",
        "Nasya is a classical Ayurvedic therapy focused on the head, neck, nasal passages, and upper respiratory area. Prescribed Ayurvedic preparations are administered through the nasal route under professional supervision.",
        [
          "Supports nasal and sinus comfort",
          "Helps reduce heaviness in the head",
          "Supports head and neck relaxation",
          "Traditionally supports Vata-Kapha balance",
          "Promotes overall upper-respiratory comfort",
        ],
        [
          "Sinus congestion",
          "Nasal blockage",
          "Allergic rhinitis-related symptoms",
          "Headache-related discomfort",
          "Neck stiffness",
          "Heaviness in the head",
        ],
        ["Nasal Care", "Sinus Comfort", "Professional Supervision"],
      ),
      therapy(
        "Dhoopana / Dhoomapana",
        "Dhoopana and Dhoomapana are traditional Ayurvedic procedures that use carefully selected herbal preparations for therapeutic fumigation or prescribed inhalation under appropriate supervision.",
        [
          "Traditional Ayurvedic ENT-support procedure",
          "Uses selected herbal formulations",
          "Supports upper-respiratory hygiene",
          "May support nasal and throat comfort",
          "Requires appropriate professional guidance",
        ],
        [
          "Selected nasal concerns",
          "Throat discomfort",
          "Upper-respiratory congestion",
          "Kapha-related heaviness",
          "Selected ENT wellness requirements",
        ],
        ["ENT Care", "Herbal Care", "Professional Guidance"],
      ),
      therapy(
        "Karna Purana",
        "Karna Purana is a traditional Ayurvedic ear therapy in which warm medicated oil is gently introduced into the external ear canal for a prescribed duration.",
        [
          "Lubricates the external ear area",
          "Helps reduce dryness",
          "Supports Vata balance",
          "Relaxes surrounding tissues",
          "Provides gentle supportive ear care",
        ],
        [
          "Ear dryness",
          "Mild ear discomfort",
          "Jaw-area stiffness",
          "Neck-area tension",
          "Selected Vata-related ear concerns",
        ],
        ["Ear Care", "Oil Therapy", "Supportive Care"],
      ),
      therapy(
        "Gandusha & Kavala",
        "Gandusha and Kavala are traditional Ayurvedic oral-care procedures that use medicated oils, herbal decoctions, or other prescribed liquids.",
        [
          "Supports oral hygiene",
          "Promotes gum health",
          "Helps maintain oral moisture",
          "Supports fresh breath",
          "Helps relax the jaw and oral tissues",
        ],
        [
          "Oral dryness",
          "Bad breath",
          "Gum-care support",
          "Mild oral sensitivity",
          "Jaw stiffness",
          "General oral wellness",
        ],
        ["Oral Care", "Gum Health", "Traditional Care"],
      ),
    ],
    namesOnly: [],
  },
  {
    slug: "targeted-basti",
    name: "Localized Basti Therapies",
    summary:
      "Localized oil-retention therapies focused on selected body areas, with preparation and application tailored to individual needs.",
    image: LocalizedBastiTherapies,
    detailed: [
      therapy(
        "Kati Basti",
        "Kati Basti is a localized Ayurvedic therapy in which warm medicated oil is retained over the lower-back area within a specially prepared herbal-dough boundary.",
        [
          "Focused lower-back therapy",
          "Provides sustained therapeutic warmth",
          "Helps relax tight muscles",
          "Supports flexibility",
          "Promotes comfortable movement",
        ],
        [
          "Lower-back pain",
          "Lumbar stiffness",
          "Muscle spasm",
          "Sciatica-related discomfort",
          "Restricted back movement",
        ],
        ["Lower-Back Care", "Localized Basti", "Mobility"],
      ),
      therapy(
        "Janu Basti",
        "Janu Basti is a localized Ayurvedic therapy focused on the knee joint. Warm medicated oil is retained around the knee within a specially prepared boundary.",
        [
          "Targeted knee therapy",
          "Supports joint lubrication",
          "Helps reduce stiffness",
          "Provides therapeutic warmth",
          "Supports knee mobility",
        ],
        [
          "Knee discomfort",
          "Joint stiffness",
          "Osteoarthritis-related discomfort",
          "Reduced knee flexibility",
          "Age-related degenerative knee concerns",
        ],
        ["Knee Care", "Localized Basti", "Joint Mobility"],
      ),
      therapy(
        "Greeva Basti",
        "Greeva Basti is a localized therapy in which warm medicated oil is retained over the neck and cervical area for a prescribed duration.",
        [
          "Focused neck and cervical therapy",
          "Helps relax tight muscles",
          "Supports flexibility",
          "Helps reduce localized stiffness",
          "Provides sustained warmth",
        ],
        [
          "Neck pain",
          "Cervical stiffness",
          "Muscle tension",
          "Restricted neck movement",
          "Upper-back discomfort",
          "Cervical spondylosis-related discomfort",
        ],
        ["Neck Care", "Localized Basti", "Mobility"],
      ),
      therapy(
        "Prishtha Basti",
        "Prishtha Basti is a localized Ayurvedic oil-retention therapy performed over a selected area of the back using warm medicated oil.",
        [
          "Targeted back therapy",
          "Provides sustained therapeutic warmth",
          "Helps relax tense muscles",
          "Supports spinal-area comfort",
          "Promotes flexibility and movement",
        ],
        [
          "Back stiffness",
          "Muscular back pain",
          "Paraspinal muscle tension",
          "Restricted back movement",
          "Selected Vata-related back discomfort",
        ],
        ["Back Care", "Localized Basti", "Spinal Comfort"],
      ),
      therapy(
        "Uro Basti / Hrid Basti",
        "Uro Basti, also referred to as Hrid Basti in selected therapeutic contexts, is a localized oil-retention therapy performed over the chest area using warm medicated oil. Unexplained, severe, or persistent chest pain requires medical evaluation before any supportive Ayurvedic procedure.",
        [
          "Localized chest-area therapy",
          "Promotes muscular relaxation",
          "Provides gentle therapeutic warmth",
          "Supports local comfort",
          "Traditionally used as part of individualized Ayurvedic care",
        ],
        [
          "Chest-wall muscular tightness",
          "Localized muscular stiffness",
          "Sternum-area discomfort",
          "Stress-related chest-area tension",
        ],
        ["Chest-Area Care", "Localized Basti", "Personalized Care"],
      ),
      therapy(
        "Nabhi Basti / Chakra Basti",
        "Nabhi Basti, also known as Chakra Basti, is a localized therapy in which warm medicated oil is retained around the navel area for a prescribed duration.",
        [
          "Focused abdominal therapy",
          "Provides gentle therapeutic warmth",
          "Supports abdominal relaxation",
          "Traditionally associated with digestive wellness",
          "Uses individually selected medicated oils",
        ],
        [
          "Abdominal muscular tension",
          "Digestive discomfort",
          "Abdominal dryness",
          "Vata-related digestive imbalance",
          "General abdominal wellness support",
        ],
        ["Abdominal Care", "Localized Basti", "Digestive Wellness"],
      ),
    ],
    namesOnly: [],
  },
  {
    slug: "abhyanga-body",
    name: "Body Rejuvenation & Oleation Therapies",
    summary:
      "Body therapies using massage, herbal preparations, and selected liquids to support relaxation, nourishment, and comfortable movement.",
    image: BodyRejuvenationTherapies,
    detailed: [
      therapy(
        "Abhyanga",
        "Abhyanga is a traditional Ayurvedic therapeutic massage performed using warm medicated herbal oils. The oil is selected according to the individual’s constitution and health needs.",
        [
          "Nourishes the skin and body tissues",
          "Helps relax the muscles",
          "Supports healthy circulation",
          "Helps improve flexibility",
          "Promotes physical and mental relaxation",
        ],
        [
          "Body stiffness",
          "Physical fatigue",
          "Muscular tension",
          "Joint discomfort",
          "Dry skin",
          "Stress and general wellness",
        ],
        ["Oil Massage", "Relaxation", "Rejuvenation"],
      ),
      therapy(
        "Udvartana",
        "Udvartana is a traditional Ayurvedic massage that uses herbal powders applied to the body with rhythmic upward strokes.",
        [
          "Provides a stimulating herbal massage",
          "Supports body-toning programs",
          "Helps exfoliate the skin",
          "Promotes local circulation",
          "Helps reduce feelings of heaviness",
        ],
        [
          "Kapha-related heaviness",
          "Sluggishness",
          "Weight-management programs",
          "Excess body-fat management",
          "Cellulite-like skin appearance",
          "Body-toning support",
        ],
        ["Herbal Massage", "Body Toning", "Skin Support"],
      ),
      therapy(
        "Therapeutic Dhara / Parisheka",
        "Therapeutic Dhara / Parisheka is an Ayurvedic therapy in which a prescribed liquid is poured continuously or rhythmically over the body, head, or a selected area, depending on the individual’s condition. Different preparations may be used according to the purpose of the therapy, including Ksheera Dhara, Takra Dhara, Taila Dhara, and Dhanyamla Dhara.",
        dharaFeatures,
        dharaSuitableFor,
        ["Therapeutic Dhara", "Personalized Care", "Relaxation"],
      ),
      therapy(
        "Ksheera Dhara",
        "Ksheera Dhara uses medicated milk and is traditionally selected for its cooling, soothing, and nourishing effects.",
        dharaFeatures,
        dharaSuitableFor,
        ["Dhara Therapy", "Cooling", "Nourishment"],
      ),
      therapy(
        "Takra Dhara",
        "Takra Dhara uses specially prepared medicated buttermilk and is commonly used for cooling and calming therapy.",
        dharaFeatures,
        dharaSuitableFor,
        ["Dhara Therapy", "Cooling", "Calming"],
      ),
      therapy(
        "Taila Dhara",
        "Taila Dhara uses warm medicated oil to support nourishment, relaxation, and flexibility.",
        dharaFeatures,
        dharaSuitableFor,
        ["Dhara Therapy", "Oil Therapy", "Nourishment"],
      ),
      therapy(
        "Dhanyamla Dhara",
        "Dhanyamla Dhara uses a warm fermented herbal liquid and is traditionally selected for stiffness, heaviness, and selected Vata-Kapha conditions.",
        dharaFeatures,
        dharaSuitableFor,
        ["Dhara Therapy", "Herbal Care", "Warmth"],
      ),
    ],
    namesOnly: [],
  },
  {
    slug: "swedana-pinda-sweda",
    name: "Swedana Therapies",
    summary:
      "Traditional steam, fomentation, and poultice therapies selected to support warmth, muscle relaxation, and comfortable movement.",
    image: SwedanaandPotliTherapies,
    detailed: [
      therapy(
        "Bashpa Swedana",
        "Bashpa Swedana is a traditional Ayurvedic steam therapy in which the body is exposed to controlled herbal steam to promote therapeutic sweating.",
        [
          "Full-body steam therapy",
          "Promotes controlled sweating",
          "Helps relax the muscles",
          "Supports circulation",
          "Commonly used as a preparatory Ayurvedic procedure",
        ],
        [
          "Body stiffness",
          "Muscular aches",
          "Heaviness",
          "Fatigue",
          "Kapha-related sluggishness",
          "Selected joint discomfort",
        ],
        ["Steam Therapy", "Full-Body Care", "Muscle Relaxation"],
      ),
      therapy(
        "Nadi Swedana",
        "Nadi Swedana is a localized steam therapy in which warm medicated herbal steam is directed towards a selected area through a controlled tube.",
        [
          "Provides focused, localized steam therapy",
          "Provides therapeutic warmth",
          "Helps relax tense muscles",
          "Supports local circulation",
          "Helps improve comfortable movement",
        ],
        [
          "Back stiffness",
          "Muscle spasm",
          "Neck tension",
          "Shoulder stiffness",
          "Localized joint discomfort",
          "Vata-Kapha musculoskeletal concerns",
        ],
        ["Localized Steam", "Warmth", "Mobility"],
      ),
      therapy(
        "Shashtika Shali Pinda Sweda (Navarakizhi)",
        "Shashtika Shali Pinda Sweda, also known as Navarakizhi, is a nourishing Ayurvedic therapy that uses warm boluses prepared with specially processed rice, milk, and herbal decoctions.",
        [
          "Provides nourishment and support",
          "Supports muscle tone",
          "Promotes flexibility",
          "Helps improve physical strength",
          "Supports rejuvenation",
        ],
        [
          "Muscular weakness",
          "Physical fatigue",
          "Reduced strength",
          "Joint stiffness",
          "Degenerative musculoskeletal concerns",
          "Selected neuromuscular conditions",
        ],
        ["Pinda Sweda", "Nourishment", "Rejuvenation"],
      ),
      therapy(
        "Upanaha Swedana",
        "Upanaha Swedana is a traditional Ayurvedic fomentation therapy in which a warm herbal preparation is applied over a selected painful or stiff area for a prescribed duration.",
        [
          "Provides localized fomentation therapy",
          "Provides sustained therapeutic warmth",
          "Helps relax stiff tissues",
          "Supports joint comfort",
          "Uses herbal preparations selected for the individual",
        ],
        [
          "Joint stiffness",
          "Localized muscular pain",
          "Swelling associated with selected conditions",
          "Back discomfort",
          "Vata-related musculoskeletal stiffness",
        ],
        ["Localized Fomentation", "Herbal Care", "Joint Comfort"],
      ),
      therapy(
        "Pinda Swedana",
        "Pinda Swedana is a traditional Ayurvedic fomentation therapy in which specially prepared warm herbal poultices are applied rhythmically over the body or a selected area. Different ingredients and techniques are used according to the individual’s condition and therapeutic needs.",
        pindaFeatures,
        pindaSuitableFor,
        ["Pinda Sweda", "Fomentation", "Personalized Care"],
      ),
      therapy(
        "Patra Pinda Sweda",
        "Patra Pinda Sweda uses warm herbal poultices prepared with selected medicinal leaves and medicated oils to support muscle and joint comfort.",
        pindaFeatures,
        pindaSuitableFor,
        ["Pinda Sweda", "Herbal Leaves", "Joint Comfort"],
      ),
      therapy(
        "Churna Pinda Sweda",
        "Churna Pinda Sweda uses selected herbal powders wrapped in cloth and applied with controlled warmth over the affected area.",
        pindaFeatures,
        pindaSuitableFor,
        ["Pinda Sweda", "Herbal Powders", "Warmth"],
      ),
      therapy(
        "Valuka Sweda",
        "Valuka Sweda is a dry fomentation technique that uses heated sand wrapped in cloth, especially when dry therapeutic heat is preferred.",
        pindaFeatures,
        pindaSuitableFor,
        ["Dry Fomentation", "Therapeutic Heat", "Stiffness"],
      ),
      therapy(
        "Jambira Pinda Sweda",
        "Jambira Pinda Sweda uses warm herbal poultices commonly prepared with lemon and selected herbal ingredients for localized stiffness and heaviness.",
        pindaFeatures,
        pindaSuitableFor,
        ["Pinda Sweda", "Herbal Poultice", "Localized Care"],
      ),
    ],
    namesOnly: [],
  },
  {
    slug: "specialized-integrative",
    name: "Specialized & Integrative Ayurvedic Therapies",
    summary:
      "Specialized Ayurvedic and integrative procedures selected after clinical assessment and performed by appropriately trained practitioners.",
    image: SpecializedTherapies,
    detailed: [
      therapy(
        "Jalaukavacharana",
        "Jalaukavacharana is a traditional Ayurvedic Raktamokshana procedure that involves the controlled application of medicinal leeches under professional supervision.",
        [
          "Classical Raktamokshana technique",
          "Supports local circulation",
          "Helps reduce localized congestion",
          "Used only in carefully selected cases",
          "Requires strict professional supervision",
        ],
        [
          "Selected skin conditions",
          "Localized inflammation",
          "Non-healing wounds",
          "Localized swelling",
          "Vascular congestion",
          "Selected painful conditions",
        ],
        ["Traditional Procedure", "Localized Care", "Professional Supervision"],
      ),
      therapy(
        "Agnikarma",
        "Agnikarma is a specialized Ayurvedic para-surgical procedure in which controlled therapeutic heat is applied to carefully selected points using appropriate instruments.",
        [
          "Provides targeted heat application",
          "Supports pain-management approaches",
          "Uses a focused treatment technique",
          "May support comfortable movement",
          "Performed by a trained practitioner",
        ],
        [
          "Knee discomfort",
          "Heel pain",
          "Joint stiffness",
          "Localized muscular pain",
          "Osteoarthritis-related discomfort",
          "Selected tendon-related pain",
        ],
        ["Targeted Care", "Therapeutic Heat", "Trained Practitioner"],
      ),
      therapy(
        "Viddha Karma",
        "Viddha Karma is a traditional Ayurvedic procedure that involves careful stimulation of selected therapeutic points using sterile needles by a trained practitioner.",
        [
          "Provides targeted stimulation of therapeutic points",
          "Supports pain-management approaches",
          "Helps release localized muscular tension",
          "Supports comfortable movement",
          "Performed after appropriate clinical assessment",
        ],
        [
          "Sciatica-related discomfort",
          "Lower-back pain",
          "Neck pain",
          "Muscular pain",
          "Frozen shoulder",
          "Joint stiffness",
        ],
        ["Targeted Stimulation", "Pain Management", "Clinical Assessment"],
      ),
      therapy(
        "Marma Chikitsa / Marma Therapy",
        "Marma Chikitsa is a traditional Ayurvedic therapy based on the gentle stimulation of specific vital points of the body using controlled touch, pressure, and appropriate techniques.",
        [
          "Provides gentle stimulation of Marma points",
          "Promotes muscular relaxation",
          "Helps release body tension",
          "Supports comfortable movement",
          "Provides a non-invasive therapeutic approach",
        ],
        [
          "Musculoskeletal discomfort",
          "Lower-back tension",
          "Muscular stiffness",
          "Joint-related discomfort",
          "Reduced mobility",
          "Stress-related physical tension",
        ],
        ["Marma Therapy", "Non-Invasive", "Relaxation"],
      ),
      therapy(
        "Cupping Therapy",
        "Cupping Therapy is an integrative supportive technique in which specially designed cups create controlled suction over selected areas of the body.",
        [
          "Uses controlled suction",
          "Helps relax tight muscles",
          "May provide short-term pain relief",
          "Supports localized muscular relaxation",
          "Performed after assessing individual suitability",
        ],
        [
          "Muscular pain",
          "Lower-back discomfort",
          "Neck tension",
          "Shoulder tension",
          "Localized stiffness",
          "Post-exercise muscle soreness",
        ],
        ["Integrative Care", "Muscle Relaxation", "Suitability Assessment"],
      ),
    ],
    namesOnly: [],
  },
];

export function getTherapyCategoryBySlug(slug: string) {
  return therapyCategories.find((category) => category.slug === slug) ?? therapyCategories[0];
}
