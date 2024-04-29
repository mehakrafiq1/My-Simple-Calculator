

import inquirer from "inquirer";

const answer = await inquirer.prompt([
  { message: "Enter first  number", type: "number", name: "firstNumber" },
  { message: "Enter second number", type: "number", name: "secondnumber" },
  {
    message: "Select one of the operator to perform action",
    type: "list ",
    name: "operator",
    choices: ["Addition","Subtraction","Multiplication","division"],
  },
]);

//  conditional statement
if (answer.operator === "Addition") {
  console.log(answer.firstnumber + answer.secondnumber);
}
else if (answer.operator === "Subtraction") {
  console.log(answer.firstnumber - answer.secondnumber);
}
else if (answer.operator === "Multiplication") {
  console.log(answer.firstnumber * answer.secondnumber);
}

else if (answer.operator === "Division") {
  console.log(answer.firstnumber / answer.secondnumber);
}
else {
  console.log("please select valid operator");
}

