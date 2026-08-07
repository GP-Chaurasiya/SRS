import { Student } from "./types";

export const STUDENT_DATABASE: Record<string, Student> = {
  "2424001": {
    scholarNo: "2424001",
    fullName: "Aarav Sharma",
    course: "B.Tech Computer Science",
    semester: "Semester 6",
    phone: "9876543210",
    email: "aarav.sharma@dsvv.ac.in",
    mandal: "Vashishta Mandal",
  },
  "2424002": {
    scholarNo: "2424002",
    fullName: "Ananya Verma",
    course: "B.Sc Computer Science",
    semester: "Semester 4",
    phone: "9876543211",
    email: "ananya.verma@dsvv.ac.in",
    mandal: "Vishwamitra Mandal",
  },
  "2424003": {
    scholarNo: "2424003",
    fullName: "Rohan Gupta",
    course: "MCA",
    semester: "Semester 2",
    phone: "9876543212",
    email: "rohan.gupta@dsvv.ac.in",
    mandal: "Atrey Mandal",
  },
  "2424004": {
    scholarNo: "2424004",
    fullName: "Priya Singh",
    course: "B.A. Yogic Science",
    semester: "Semester 6",
    phone: "9876543213",
    email: "priya.singh@dsvv.ac.in",
    mandal: "Bharadwaj Mandal",
  },
  "2424005": {
    scholarNo: "2424005",
    fullName: "Vikramaditya Patel",
    course: "B.Tech Computer Science",
    semester: "Semester 8",
    phone: "9876543214",
    email: "vikram.patel@dsvv.ac.in",
    mandal: "Gautam Mandal",
  },
  "2424006": {
    scholarNo: "2424006",
    fullName: "Sneha Kulkarni",
    course: "B.Sc Animation",
    semester: "Semester 4",
    phone: "9876543215",
    email: "sneha.kulkarni@dsvv.ac.in",
    mandal: "Jamdagni Mandal",
  },
  "2424007": {
    scholarNo: "2424007",
    fullName: "Harshwardhan Joshi",
    course: "M.Sc Data Science",
    semester: "Semester 2",
    phone: "9876543216",
    email: "harsh.joshi@dsvv.ac.in",
    mandal: "Kashyap Mandal",
  },
  "2424008": {
    scholarNo: "2424008",
    fullName: "Devendra Roy",
    course: "B.Tech Computer Science",
    semester: "Semester 6",
    phone: "9876543217",
    email: "devendra.roy@dsvv.ac.in",
    mandal: "Vashishta Mandal",
  },
  "2424009": {
    scholarNo: "2424009",
    fullName: "Ishita Tripathi",
    course: "B.A. Journalism",
    semester: "Semester 4",
    phone: "9876543218",
    email: "ishita.tripathi@dsvv.ac.in",
    mandal: "Vishwamitra Mandal",
  },
  "2424010": {
    scholarNo: "2424010",
    fullName: "Aditya Nair",
    course: "BBA",
    semester: "Semester 6",
    phone: "9876543219",
    email: "aditya.nair@dsvv.ac.in",
    mandal: "Atrey Mandal",
  },
  "2424011": {
    scholarNo: "2424011",
    fullName: "Kavya Reddy",
    course: "B.Sc Mathematics",
    semester: "Semester 4",
    phone: "9876543220",
    email: "kavya.reddy@dsvv.ac.in",
    mandal: "Bharadwaj Mandal",
  },
  "2424012": {
    scholarNo: "2424012",
    fullName: "Siddharth Mehra",
    course: "B.Tech IT",
    semester: "Semester 6",
    phone: "9876543221",
    email: "siddharth.mehra@dsvv.ac.in",
    mandal: "Gautam Mandal",
  },
  "2424013": {
    scholarNo: "2424013",
    fullName: "Pooja Bhatt",
    course: "M.A. Clinical Psychology",
    semester: "Semester 2",
    phone: "9876543222",
    email: "pooja.bhatt@dsvv.ac.in",
    mandal: "Jamdagni Mandal",
  },
  "2424014": {
    scholarNo: "2424014",
    fullName: "Utkarsh Tiwari",
    course: "B.Sc Physics",
    semester: "Semester 6",
    phone: "9876543223",
    email: "utkarsh.tiwari@dsvv.ac.in",
    mandal: "Kashyap Mandal",
  },
  "2424015": {
    scholarNo: "2424015",
    fullName: "Divya Saxena",
    course: "B.Tech Computer Science",
    semester: "Semester 4",
    phone: "9876543224",
    email: "divya.saxena@dsvv.ac.in",
    mandal: "Vashishta Mandal",
  },
};

export async function fetchStudentDetails(scholarNo: string): Promise<Student> {
  const cleanId = scholarNo.trim();

  // Simulate network latency (250ms) for visual loading indicator
  await new Promise((res) => setTimeout(res, 250));

  if (STUDENT_DATABASE[cleanId]) {
    return STUDENT_DATABASE[cleanId];
  }

  // Fallback smart generator for any scholar number
  const mandals = [
    "Vashishta Mandal",
    "Vishwamitra Mandal",
    "Atrey Mandal",
    "Bharadwaj Mandal",
    "Gautam Mandal",
    "Jamdagni Mandal",
    "Kashyap Mandal",
  ];
  const courses = ["B.Tech Computer Science", "B.Sc Computer Science", "MCA", "B.A. Yogic Science", "BCA", "BBA"];
  const semesters = ["Semester 2", "Semester 4", "Semester 6", "Semester 8"];

  const hash = [...cleanId].reduce((acc, char) => acc + char.charCodeAt(0), 0);
  const mandal = mandals[hash % mandals.length];
  const course = courses[hash % courses.length];
  const semester = semesters[hash % semesters.length];

  const generatedStudent: Student = {
    scholarNo: cleanId,
    fullName: `Student ${cleanId}`,
    course,
    semester,
    phone: `98${Math.floor(10000000 + Math.random() * 90000000)}`,
    email: `scholar${cleanId}@dsvv.ac.in`,
    mandal,
  };

  STUDENT_DATABASE[cleanId] = generatedStudent;
  return generatedStudent;
}
