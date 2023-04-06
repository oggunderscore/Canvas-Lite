// export const courses = [
//   {
//     id: 0,
//     name: "CPSC 332",
//     prof: "Peiravi",
//     due_names:
//       ["Assignment 3",
//       "Quiz 2",
//       "Exam 1"
//       ],
//     due_dates_string:
//       ["March 4, 2023",
//       "March 11, 2023",
//       "March 18, 2023"],
//     due_dates:
//       [new Date(2023, 2, 4, 0, 0, 0, 0),
//       new Date(2023, 2, 11, 0, 0, 0, 0),
//       new Date(2023, 2, 18, 0, 0, 0, 0)],
//     announcements:
//       ["Exam 1 Study Guide"],
//     a_post_dates_str:
//       ["March 12, 2023"],
//     a_post_dates:
//       [new Date(2023, 2, 12, 0, 0, 0, 0)],
//   },
//   {
//     id: 1,
//     name: "MATH 170B",
//     prof: "Teacher",
//     due_names:
//       ["HW 4",
//       "HW 5",
//       "HW 6"],
//     due_dates_string:
//       ["March 8, 2023",
//       "March 15, 2023",
//       "March 22, 2023"],
//     due_dates:
//       [new Date(2023, 2, 8, 0, 0, 0, 0),
//       new Date(2023, 2, 15, 0, 0, 0, 0),
//       new Date(2023, 2, 22, 0, 0, 0, 0)],
//     q_dates:
//       ["March 13, 2023"],
//     announcements:
//       ["Exam coming up!"],
//     a_post_dates_str:
//       ["March 19, 2023"],
//     a_post_dates:
//       [new Date(2023, 2, 19, 0, 0, 0, 0)],
//   },
// ];

export const assignments = [
  {
    id: 0,
    parent_course: "CPSC 332",
    name: "Assignment 3",
    due_date: new Date(2023, 2, 4, 0, 0, 0, 0)
  },
  {
    id: 1,
    parent_course: "MATH 170B",
    name: "HW 4",
    due_date: new Date(2023, 2, 8, 0, 0, 0, 0)
  },
  {
    id: 2,
    parent_course: "CPSC 332",
    name: "Quiz 2",
    due_date: new Date(2023, 2, 11, 0, 0, 0, 0)
  },
  {
    id: 3,
    parent_course: "MATH 170B",
    name: "HW 5",
    due_date: new Date(2023, 2, 15, 0, 0, 0, 0)
  },
  {
    id: 4,
    parent_course: "CPSC 332",
    name: "Exam 1",
    due_date: new Date(2023, 2, 18, 0, 0, 0, 0)
  },
  {
    id: 5,
    parent_course: "MATH 170B",
    name: "HW 6",
    due_date: new Date(2023, 2, 22, 0, 0, 0, 0)
  },
]

export const announcements = [
  {
    id: 0,
    parent_course: "MATH 170B",
    name: "Exam coming up!",
    post_date: new Date(2023, 2, 19, 0, 0, 0, 0)
  },
  {
    id: 1,
    parent_course: "CPSC 332",
    name: "Exam 1 Study Guide",
    post_date: new Date(2023, 2, 12, 0, 0, 0, 0)
  }
]

export function toDateStringBetter(in_date) {
  let text = "";
  let month = "";
  text = in_date.toDateString();
  text = text.slice(4, 10) + "," + text.slice(10, 15);
  month = text.slice(0, 3);
  switch(month) {
    case "Jan":
      month = "January";
      break;
    case "Feb":
      month = "February";
      break;
    case "Mar":
      month = "March";
      break;
    case "Apr":
      month = "April";
      break;
    case "Jun":
      month = "June";
      break;
    case "Jul":
      month = "July";
      break;
    case "Aug":
      month = "August";
      break;
    case "Sep":
      month = "September";
      break;
    case "Oct":
      month = "October";
      break;
    case "Nov":
      month = "November";
      break;
    case "Dec":
      month = "December";
      break;
  }
  text = month + text.slice(3);
  return text;
}

export function is14DaysAgo(in_date) {
  // let month = "";

  // for(let i = 0; i < date.length, i++;)
  // {
  //   month.concat(date[i]);
  // }
  // switch (month) {
  //   case "January": 
  // }

  let today = new Date();
  let annDate = in_date;

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
