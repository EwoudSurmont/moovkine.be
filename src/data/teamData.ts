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
      "https://book.crossuite.app/4d7f3eca-f38e-4bc5-87c8-ee1b7281f17c",
  },
  {
    firstName: "Tracey",
    lastName: "Cuylle",
    img: "/img/profo-tracey.jpg",
    courses: [
      "Bachelor in de Toegepaste Psychologie; afstudeerrichting klinische psychologie",
    ],
    specialisations: ["Psychologische begeleiding"],
    appointmentURL:
      "https://book.crossuite.app/27fb2fa1-d82b-4ab5-aa71-f6f8a39a5161",
  },
];

export default teamData;
