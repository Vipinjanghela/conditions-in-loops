//Q4. Generate n9mbers between any 2 given n9mbers.
//Ex
//.>> onst num1 = 10
//.>. onst num2 = 25;
//ans:>>
function generateNumbers(num1, num2) {
    let numbers = [];
    for (let i = num1 + 1; i < num2; i++) {
      numbers.push(i);
    }
    return numbers;
  }
  
  const num1 = 10;
  const num2 = 25;
  const result = generateNumbers(num1, num2);
  console.log(result);
  