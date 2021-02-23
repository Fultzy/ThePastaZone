
// dont do it...

let userscore = 0;
let computerscore = 0;
const userscore_span = document.getElementById("user-score");
const computerscore_span = document.getElementById("computer-score");
const scoreboard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result" > p);
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const sissors_div = document.getElementById("s");

function getcomputerchoice() {
  const choices = ['r', 'p', 's'];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

function win(user, computer) {
  userscore ++
  userscore_span.innerHTML = userscore;
  computerscore_span.innerHTML = computerscore;
  result_p.innerHTML = userchoice + " beats " + computerchoice + ", you win!";
}
function lose() {
  computerscore ++
  computerscore_span.innerHTML = computerscore;
  result_p.innerHTML = userchoice + " loses to " + computerchoice + ", You lose!";
}

function draw() {
result_p.innerHTML = userchoice + " verse " + computerchoice + ", It's a Draw!";
}

function game(userchoice) {
  const computerchoice = getcomputerchoice();
  switch (userchoice + computerchoice) {
    case "rs":
    case "pr":
    case "sp":
      win(userchoice + computerchoice);

      break;
    case "rp":
    case "ps":
    case "sr":
      lose(userchoice + computerchoice);
      break;
    case "rr":
    case "pp":
    case "ss":
      draw(userchoice + computerchoice);
      break;
    default:
  }
}

function main() {
  rock_div.addEventListener('click', function() {
    game("r");
  })
  paper_div.addEventListener('click', function() {
    game("p");
  })

  sissors_div.addEventListener('click', function() {
    game("s");
  })
}

main();
