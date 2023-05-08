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

function dateToNum(date, ascending) {
  let dateNum = 0;
  if(date != "null"){
    dateNum = dateNum + Number(date.slice(8, 10));
    dateNum = dateNum + Number(date.slice(5, 7)) * 100;
    dateNum = dateNum + Number(date.slice(0, 4)) * 10000;
  }
  else{
    if(ascending){
      dateNum = 99999999;
    }
    else{
      dateNum = 0;
    }
  }
  return dateNum;
}

function merge(left, right, ascending) {
  let list = [];
  //Break out of the loop if either list is empty
  while(left.length && right.length){
    if(ascending){
      // Pick the smaller among the smallest element of left and right sub arrays
      if(dateToNum(left[0].assn_date, ascending) < dateToNum(right[0].assn_date, ascending)){
        list.push(left.shift());
      }
      else{
        list.push(right.shift());
      }
    }
    else{
      // Pick the larger among the smallest element of left and right sub arrays
      if(dateToNum(left[0].assn_date, ascending) > dateToNum(right[0].assn_date, ascending)){
        list.push(left.shift());
      }
      else{
        list.push(right.shift());
      }
    }
  }
  // Make sure to drop in any elements in left or right we didn't get to
  return([ ...list, ...left, ...right])
}

export function sortByDate(list, ascending) {
  const half = list.length/2;

  // Terminate if assnList is too small
  if(list.length < 2)return list;

  const left = list.splice(0, half);
  return merge(sortByDate(left, ascending), sortByDate(list, ascending), ascending);
}

export function makeCanvasDateReadable(in_date) {
  if(in_date != "null") {
    let text = "";
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
  else{
    return("No due date")
  }
}

export function is14DaysAgo(in_date) {
  
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
