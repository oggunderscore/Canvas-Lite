export const courses = [
  {
    id: 0,
    name: "CPSC 332",
    prof: "Peiravi",
    due_names:
      ["Assignment 3",
      "Quiz 2",
      "Exam 1"
      ],
    due_dates:
      ["March 4, 2023",
      "March 11, 2023",
      "March 18, 2023"],
    announcements:
      ["Exam 1 Study Guide"],
    a_post_dates:
      ["March 12, 2023"],
  },
  {
    id: 1,
    name: "MATH 170B",
    prof: "Teacher",
    due_names:
      ["HW 4",
      "HW 5",
      "HW 6"],
    due_dates:
      ["March 8, 2023",
      "March 15, 2023",
      "March 22, 2023"],
    q_dates:
      ["March 13, 2023"],
    announcements:
      ["Exam coming up!"],
    a_post_dates:
      ["March 19, 2023"],
  },
];

export default function is14DaysAgo(date) {
  // let month = "";

  // for(let i = 0; i < date.length, i++;)
  // {
  //   month.concat(date[i]);
  // }
  // switch (month) {
  //   case "January": 
  // }

  let today = new Date();
  let annDate = new Date(date);

  return annDate;
}

export const experience = [
  {
    id: 0,
    quote:
      ["Validated silicon through various factors such as voltage, temperature, and workload in order to optimize power, reliability, and performance",
      "Interacted with EEPROM, UFS, QSPI, UART, PCB Board Design, Power Management", 
      "Debugged hardware, software, and kernel-level issues",
      "Developed automated internal tools in Python to build efficient workflows",
      "Presented detailed analysis reports with deep understanding of Hardware and Firmware interactions",],
    name: "Vehicle Hardware Engineering Intern - Tesla Autopilot Team",
    term: "August 2022 - December 2022",
  },
  {
    id: 1,
    quote:
      ["Resolved technical problems within hardware, software, and network configurations", 
      "Demonstrated excellent communicative skills with clients to troubleshoot issues on-site", 
      "Professionally documented tickets in a detailed and organized manner",
      "Interfaced with correcting errors within MySQL and SQLite databases",],
    name: "Information Systems Service Desk L1 Analyst",
    term: "September 2021 - August 2022",
  },
];

export const skills = [
  "Python",
  "C++",
  "JavaScript",
  "Node & React",
  "Linux",
  "Git & Bash",
];
