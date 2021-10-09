let numRight = 4;
let answer = confirm("Wanna play a game?");
let numUser = +prompt("Enter any number");
if (!isNaN(numUser)) {
  if (numUser === 4) {
    alert("YOU WIN!");
  } else {
    alert("YOU LOSE!");
  }
} else {
  alert("Go away! or write a NUMBER!");
}
