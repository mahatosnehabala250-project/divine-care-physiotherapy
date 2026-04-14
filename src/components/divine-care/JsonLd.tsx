export default function JsonLd() {
  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "Physician",
    name: "Divine Care Physiotherapy Acupuncture & Hijama Centre",
    description:
      "Jamshedpur ka unique clinic jahan Physiotherapy, Acupuncture aur Hijama teeno treatments ek saath available hain. Bina surgery ke, bina side effects ke — dard se azaadi. 500+ successful treatments by Dr. Vikas Kr. Sahu.",
    image: "/images/hero-clinic.png",
    url: "https://divinecarejsr.com",
    telephone: ["+919431757875", "+917903415819", "+9106572230781"],
    email: "divinecarejsr1@gmail.com",
    address: {
      "@type": "PostalAddress",
      streetAddress:
        "4th Floor, Sulata Mala Complex, Pennar Road, Near Laxmi Vilash Bank, Sakchi",
      addressLocality: "Jamshedpur",
      addressRegion: "Jharkhand",
      postalCode: "831001",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 22.8015,
      longitude: 86.2029,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "09:00",
      closes: "20:00",
    },
    priceRange: "₹₹",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "500",
      bestRating: "5",
    },
    medicalSpecialty: [
      "Physiotherapy",
      "Acupuncture",
      "HijamaCupping",
      "PainManagement",
      "OrthopedicRehabilitation",
      "NeurologicalRehabilitation",
    ],
    availableService: [
      {
        "@type": "MedicalProcedure",
        name: "Knee Pain Treatment",
        description:
          "Comprehensive knee pain treatment with Physiotherapy, Acupuncture, and Hijama — bina surgery ke.",
      },
      {
        "@type": "MedicalProcedure",
        name: "Back Pain Treatment",
        description:
          "Chronic back pain relief through Manual Therapy, Core Strengthening, and Sciatic Nerve Flossing.",
      },
      {
        "@type": "MedicalProcedure",
        name: "Neck Pain Treatment",
        description:
          "Cervical Manipulations, Chiropractic Care, and Deep Tissue Massage for neck pain relief.",
      },
      {
        "@type": "MedicalProcedure",
        name: "Shoulder Pain Treatment",
        description:
          "TENS Therapy, Laser Treatment, and Manual Therapy for frozen shoulder and rotator cuff injuries.",
      },
      {
        "@type": "MedicalProcedure",
        name: "Stroke Rehabilitation",
        description:
          "Neurological Rehabilitation, Motor Re-learning, Balance & Gait Training for stroke recovery.",
      },
      {
        "@type": "MedicalProcedure",
        name: "Disc Bulge Treatment",
        description:
          "Joint Mobilisation, Core Stabilisation, and McKenzie Therapy for disc bulge without surgery.",
      },
    ],
    employee: {
      "@type": "Person",
      name: "Dr. Vikas Kr. Sahu",
      jobTitle: "Chief Physiotherapist",
      description:
        "Founder of Divine Care with 8+ years of experience and 500+ successful treatments.",
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Kya treatment mein dard hota hai?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Nahi! Hamare treatments gentle aur pain-free hain. Acupuncture mein bahut patli needles hoti hain jo almost dard nahi deti. Physiotherapy aur Hijama bhi comfortable hain.",
        },
      },
      {
        "@type": "Question",
        name: "Kitne sessions mein fark dikhta hai?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Acute pain mein 2-3 sessions mein major relief milta hai. Chronic conditions mein 8-12 sessions chahiye. 90% patients ko 3 sessions mein fark lagta hai.",
        },
      },
      {
        "@type": "Question",
        name: "Kya surgery zaruri hai? Ya physiotherapy se theek ho sakta hai?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "90% cases mein surgery ki zarurat NAHI padti! Physiotherapy, Acupuncture aur Hijama se naturally heal hota hai. Dr. Vikas ka aim hai ki aapko surgery se bachaya jaaye.",
        },
      },
      {
        "@type": "Question",
        name: "Hijama (Cupping) kya hai? Kya yeh safe hai?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Hijama ek Sunnah aur scientifically proven therapy hai. Isme special cups se skin pe vacuum create kiya jaata hai, jo blood circulation improve karta hai aur pain relieve karta hai. 100% safe hai.",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusiness),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />
    </>
  );
}
