export type SportType = "individual" | "doubles" | "team";

export interface SportConfig {
  id: string;
  name: string;
  type: SportType;
  mainPlayers: number;
  substitutes: number;
  minSubstitutes: number;
  category: "Indoor" | "Outdoor" | "Racket" | "Track" | "Court";
  iconName: string;
  emoji: string;
}

export interface PlayerSlot {
  index: number;          // 0-based absolute index across all slots
  role: string;           // "Player 1", "Sub 1", etc.
  isCaptain: boolean;
  isSubstitute: boolean;
  isOptional: boolean;
  // Fields filled manually by the user
  fullName: string;
  scholarNo: string;
  course: string;
  semester: string;
  phone: string;
  email: string;
  mandal: string;
  gender: string;
  // Validation
  errors: Record<string, string>;
  isComplete: boolean;
  isCollapsed: boolean;
}

export interface TeamRegistration {
  id: string;
  sportId: string;
  sportName: string;
  sportType: SportType;
  teamName: string;
  captainScholarNo: string;
  mandal: string;
  members: PlayerSlot[];
  timestamp: string;
}

export type FormStep = 1 | 2 | 3 | 4 | 5;

export const COURSES = [
  "BA English", "BA Hindi", "BA History", "BA Music",
  "BA Psychology", "BA Sanskrit", "BAJMC", "BBA", "BCA",
  "B.Ed", "BRS", "B.Sc IT", "B.Sc Maths", "B.Sc Yogic Science",
  "B.Voc", "MA English", "MA Hindi", "MA History", "MA Music",
  "MA Psychology", "MA Yoga Therapy (MA YT)", "MAJMC", "MBA",
  "MCA", "M.Sc HCYS", "PhD",
];

export const SEMESTERS = ["1", "2", "3", "4", "5", "6", "7", "8"];

export const MANDALS = [
  "Bharadwaj Mandal", "Vashishta Mandal", "Atrey Mandal",
  "Gautam Mandal", "Jamdagni Mandal", "Kashyap Mandal", "Vishwamitra Mandal",
];
