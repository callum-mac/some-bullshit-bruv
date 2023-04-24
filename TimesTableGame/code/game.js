const problem = document.getElementById("problem");
const answer = document.getElementById("answer");
const checkButton = document.getElementById("check-button");
const result = document.getElementById("result");

function generateProblem() {
  const x = Math.floor(Math.random() * 12 + 1);
  const y = Math.floor(Math.random() * 12 + 1);
  problem.textContent = `${x} x ${y} =`;
  return x * y;
}

let correctAnswer = generateProblem();

function checkAnswer() {
    var scoreLabel = document.getElementById("scoreLabel");

    var score = isNaN(scoreLabel?.innerText) ? 0 : scoreLabel.innerText;

    if (parseInt(answer.value) === correctAnswer) {
        result.textContent = "Correct!";
        score = +score + 1;
        correctAnswer = generateProblem();
    } else {
        result.textContent = "Wrong!";
        score = 0;
    }

    answer.value = "";
    scoreLabel.innerHTML=`${score}`;

    if (score < 10){
        document.getElementById("frog").classList.add("hide");
        document.getElementById("dyl").classList.add("hide");
    }
    if (score >= 10){
        document.getElementById("frog").classList.remove("hide");
    }
    if (score >= 20){
        document.getElementById("dyl").classList.remove("hide");
    }

}

answer.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        checkAnswer();
    }
});

checkButton.addEventListener("click", () => {
    checkAnswer();
});

