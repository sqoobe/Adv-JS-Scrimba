///import buggg har bare array her....
const studentsArr = [
  {
    name: "Mike",
    grade: 75,
  },
  {
    name: "Emma",
    grade: 83,
  },
  {
    name: "Seth",
    grade: 66,
  },
];

function calculateClassAverage(studentsArr) {
  const totalGrades = studentsArr.reduce(function (total, currentStudent) {
    return total + currentStudent.grade;
  }, 0); //added 0 as second parameter in the function - makes the first value in the studentsArr to 0
  return totalGrades / studentsArr.length;
}

console.log(calculateClassAverage(studentsArr));
