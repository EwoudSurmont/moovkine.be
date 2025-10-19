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
    firstName: "Jara",
    lastName: "Gouwy",
    img: "/img/profo-jara.jpg",
    courses: [
      "Master in de Revalidatiewetenschappen en kinesitherapie (UGent)",
    ],
    specialisations: ["Sport en revalidatie"],
    appointmentURL:
      "https://bookings.crossuite.app/b7c13b4c-1432-4158-b573-aefedf864609",
  },
  {
    firstName: "Tracey",
    lastName: "Cuylle",
    img: "/img/profo-tracey.jpg",
    courses: [
      "Bachelor in de Toegepaste Psychologie; afstudeerrichting klinische psychologie",
    ],
    specialisations: ["Psychologische begeleiding"],
    appointmentURL: "#",
  },
];

export default teamData;
