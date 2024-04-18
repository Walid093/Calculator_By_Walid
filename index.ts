import inquirer from "inquirer";
let Calculator_Flag = true;

while (Calculator_Flag)
{
  const Cal = await inquirer.prompt([
    {
        type: "number",
        name: "Op1",
        message: "Enter the First number : "
      },
    {
      type: "list",
      name: "Operator",
      message: "Select the operator to perform Mathematical Operation",
      choices: ["+", "-", "*", "/"]
    },
    
    {
      type: "number",
      name: "Op2",
      message: "Enter the second number:"
    }
  ]);

  let Ans;
  if(Cal.Operator == '+')
  {
    Ans = Cal.Op1 + Cal.Op2;
    console.log(Ans);
  }
  else if(Cal.Operator == '-')
  {
    Ans = Cal.Op1 - Cal.Op2;
    console.log(Ans);
  }
  else if(Cal.Operator == '*')
  {
    Ans = Cal.Op1 * Cal.Op2;
    console.log(Ans);
  }
  else if(Cal.Operator == '/')
  {
    Ans = Cal.Op1 / Cal.Op2;
    console.log(Ans);
  }
  else 
  {
    console.log("Enter an operator from given choices");
  }
  const { Calculator_Loop } = await inquirer.prompt([
    {
      type: "confirm",
      name: "Calculator_Loop",
      message: "Continue further?",
      default: true
    }
  ]);

  Calculator_Flag = Calculator_Loop;
 }