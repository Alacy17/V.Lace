function button() {
  let age = prompt("How old are you?");
  let name = prompt("What is your name?");
  let email = prompt("What is your email?");

  if (age >= 18) {
    alert("Hi, " + name + "! I hope you enjoy the album! 🎶🎵");
  } else {
    alert(
      "Sorry, " + name + "! Mature content intended for mature audiences only."
    );
  }
}
let supportButton = document.querySelector("button");

supportButton.addEventListener("click", button);
