// Asking user their name for input

function writeMessage() {
  let username = prompt("Hello there! What is your name?");

  if (isNaN(username) == false) {
    username = prompt("Sorry, that is not a valid name, please try again.");
  }

  userMessage = "Hey " + username + "! Welcome to my favourite films page";

  document.write(userMessage);
}

// Confirm function to say whether they prefer watching movies at home or at cinema

function viewQuestion() {
  let text;

  if (
    confirm(
      "Press Ok if you prefer watching movies at Home or Cancel if you're a Cinema-goer!"
    ) == true
  ) {
    text = "Nice one, you prefer being cozy at home watching movies!";
  } else {
    text =
      "Awesome! You prefer going to the big screen cinema. Where's the popcorn?";
  }
  return text;
}

// Doc write the outcome of viewQuestion function

function questionOutcome() {
  document.write(text);
}

// Change background function

function chgBgd() {
  let color = prompt("Let's change the background! Give me a color!");
  document.body.style.backgroundColor = color;
}

// Popcorn Img generation question

function givePopcorn() {
  let howMany = prompt(
    "How many tubs of Popcorn would you like? I have 5 avaliable.",
    5
  );

  while (!(howMany > 0 && howMany <= 5)) {
    howMany = prompt("I only have 5 tubs. Please choose between 1 - 5.");
  }

  for (let i = 0; i < howMany; i++) {
    document.write("<img src='./images/popcorn.png'/>");
  }
}

function inputNumber() {
  let numBer = prompt("Please input a number between 1 and 5.");

  while (numBer >= 6 && number < 0) {
    numBer = prompt("That is incorrect. Please input a number between 1 - 5.");
  }
}
