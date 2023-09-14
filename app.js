function writeMessage() {
  let username = prompt("Hello there! What is your name?");

  if (isNaN(username) == false) {
    username = prompt("Sorry, that is not a valid name, please try again.");
  }

  userMessage = "Hey " + username + "! Welcome to my favourite films page";

  document.write(userMessage);
}

function buttonOutcome() {
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

  document.write(text);
}

function chgBgd() {
  let color = prompt("Let's change the background! Give me a color!");
  document.body.style.backgroundColor = color;
}
