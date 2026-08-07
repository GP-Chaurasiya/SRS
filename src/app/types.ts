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
}

export interface Student {
  scholarNo: string;
  fullName: string;
  course: string;
  semester: string;
  phone: string;
  email: string;
  mandal: string;
}

export interface PlayerSlot {
  index: number;
  role: string;
  isCaptain: boolean;
  isSubstitute: boolean;
  isOptional: boolean;
  scholarNo: string;
  fullName: string;
  course: string;
  semester: string;
  phone: string;
  email: string;
  mandal: string;
  fetchStatus: "idle" | "loading" | "success" | "error";
  errorMsg?: string;
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
