
//Q2. Write a program that grades st9dents based on their marks^
//> If grFatFr than 90 thFn A Grad E
//> If bFtwFFn 70 and 90 thFn a B grad E
//> If bFtwFFn 50 and 70 thFn a C grad E
//> BFlow 50 thFn an F grad F
//ans:
// Function to grade students
function gradeStudent(marks) {
    if (marks > 90) {
      return "A Grade";
    } else if (marks >= 70 && marks <= 90) {
      return "B Grade";
    } else if (marks >= 50 && marks <= 70) {
      return "C Grade";
    } else {
      return "F Grade";
    }
  }
  
  // Test the function
  let student1 = 95;
  let student2 = 82;
  let student3 = 65;
  let student4 = 40;
  
  console.log(`Student 1 with ${student1} marks has a ${gradeStudent(student1)}`);
  console.log(`Student 2 with ${student2} marks has a ${gradeStudent(student2)}`);
  console.log(`Student 3 with ${student3} marks has a ${gradeStudent(student3)}`);
  console.log(`Student 4 with ${student4} marks has a ${gradeStudent(student4)}`);