//let view = prompt("Do you prefer watching films at home or in the cinema?");

//let answer = "Nice! I like both for different occassions. Read more below!"

//document.write(answer);

let text;

  if (confirm("Press Ok if you prefer watching movies at Home or Cancel if you're a Cinema-goer!") == true) {
    text = "Nice one, you prefer being cozy at home watching movies!";
  } else {
    text = "Awesome! You prefer going to the big screen cinema. Where's the popcorn?";
  }

  document.write(text);