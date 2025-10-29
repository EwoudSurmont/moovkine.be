import type { TeamMember } from "../types/team";

const teamData: TeamMember[] = [
  {
    firstName: "Sanne",
    lastName: "Surmont",
    img: "/img/profo-sanne.jpg",
    courses: [
      "Master in de Revalidatiewetenschappen en kinesitherapie (KU Leuven)",
      "Postgraduaat Manuele Therapie (UGent)",
    ],
    specialisations: [
      "Manuele therapie",
      "Dry Needling",
      "Sport en revalidatie",
      "Zwangerschapsbegeleiding (pre-/postnataal)",
      "Kinecoach Obesitas ©",
    ],
    appointmentURL:
      "https://bookings.crossuite.app/b522025b-0eea-409a-8b54-35a1693aa252",
  },
  {
    firstName: "Tracey",
    lastName: "Cuylle",
    img: "/img/profo-tracey.jpg",
    courses: [
      "Bachelor in de Toegepaste Psychologie; afstudeerrichting klinische psychologie",
    ],
    specialisations: ["Psychologische begeleiding"],
    appointmentURL: "https://bookings.crossuite.app/a9035375-6275-4ddf-ac8c-44bcb3af53cd",
  },
];

export default teamData;
