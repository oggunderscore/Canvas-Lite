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

export function makeCanvasDateReadable(in_date) {
  if(in_date) {
    let text = "";
    
    in_date = in_date.slice(0, 10);

    let month = in_date.slice(5, 7);
    let day = in_date.slice(8, 10);
    let year = in_date.slice(0, 4);

    switch(month) {
      case "01":
        month = "January";
        break;
      case "02":
        month = "February";
        break;
      case "03":
        month = "March";
        break;
      case "04":
        month = "April";
        break;
      case "05":
        month = "May";
        break;
      case "06":
        month = "June";
        break;
      case "07":
        month = "July";
        break;
      case "08":
        month = "August";
        break;
      case "09":
        month = "September";
        break;
      case "10":
        month = "October";
        break;
      case "11":
        month = "November";
        break;
      case "12":
        month = "December";
        break;
    }

    text = month + " " + day + ", " + year;
    
    return text;
  }
  else {
    return("No due date")
  }
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
