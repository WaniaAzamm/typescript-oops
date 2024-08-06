#! /usr/bin/env node
import inquirer from "inquirer";

class Person {
  private personality: string = "mystery";

  input(input: string) {
    this.personality = input === "Talking more frankly!!" ? "extrovert" : "introvert";
  }

  personalityInput() {
    return this.personality;
  }
}

class Mainclass {
  public async main() {
    const  {userchoice} = await inquirer.prompt({
      name: "userchoice",
      type: "list",
      message: "What is your mood now",
      choices: ["Talking more frankly!!", "Talking very less"]
    });

    let myPerson = new Person();
    myPerson.input(userchoice);

    console.log(`You are ${myPerson.personalityInput()}`);
  }
}

const myobj = new Mainclass();
myobj.main();
