import {
  FaUserGraduate,
  FaChalkboardTeacher,
  FaAward,
  FaBook
} from "react-icons/fa";

const statsData = [
  {
    id: 1,
    icon: FaUserGraduate,
    value: 1200,
    suffix: "+",
    label: "Students Enrolled"
  },
  {
    id: 2,
    icon: FaChalkboardTeacher,
    value: 85,
    suffix: "",
    label: "Qualified Teachers"
  },
  {
    id: 3,
    icon: FaAward,
    value: 25,
    suffix: "",
    label: "Years of Excellence"
  },
  {
    id: 4,
    icon: FaBook,
    value: 100,
    suffix: "%",
    label: "Graduation Rate"
  }
];

export default statsData;
