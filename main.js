import "./index.css";
import bot_function from "./bot";

// Selectionner cases
const cells = document.querySelectorAll(".cell");
const instruction = document.getElementById("instruction");
const tabIcon = document.getElementById("tabIcon");
const myScore = document.getElementById("myScore");
const botScore = document.getElementById("botScore");
const drawScore = document.getElementById("drawScore");
const resetScore = document.getElementById("reset")


let isPlayerTurn = true;

// Combinaisons possibles pour gagner
const winnerLine = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

// Initialiser le jeu
let board = ["", "", "", "", "", "", "", "", ""];

let score = {
  Player: 0,
  Bot: 0,
  Draw: 0,
};

// Recuperer le score dans le local storage
if (localStorage.getItem("score")) {
  score = JSON.parse(localStorage.getItem("score"));
  myScore.textContent = score.Player;
  botScore.textContent = score.Bot;
  drawScore.textContent = score.Draw;
}

//EventListener pour chaque case du tableau
cells.forEach((cell, index) => {
  cell.addEventListener("click", () => {
    if (isPlayerTurn) {
      isPlayerTurn = false;
      play(index);
    }
  });
});

resetScore.addEventListener("click", () => {
  resetScores();
});

// Function pour reset les scores
function resetScores() {
  score.Player = 0;
  score.Bot = 0;
  score.Draw = 0;
  myScore.textContent = score.Player;
  botScore.textContent = score.Bot;
  drawScore.textContent = score.Draw;
  localStorage.setItem("score", JSON.stringify(score));
}

// Bon symbole sur la case
function writeSVG(isPlayer, i) {
  //supprimer la classe hidden du svg
  if (isPlayer) {
    cells[i].children[1]?.classList.remove("hidden");
  } else {
    cells[i].children[0]?.classList.remove("hidden");
    setTimeout(() => {
      isPlayerTurn = true;
    }, 200);
  }
}

// Changer couleur de bordure et message d'instruction et icone de la page et titre onglet
function gameStatus(isPlayer) {
  isPlayerTurn = isPlayer;
  if (isPlayer) {
    document.getElementById("board").style.borderColor = "rgba(210, 224, 56, 0.7)";
    instruction.textContent = "C'est à ton tour !";
    tabIcon.setAttribute("href", "./croix.svg");
    document.title = "Tic Tac Toe - A toi !";
  } else {
    document.getElementById("board").style.borderColor = "rgba(242, 69, 141, 0.7)";
    instruction.textContent = "C'est au tour du bot !";
    tabIcon.setAttribute("href", "./rond.svg");
    document.title = "Tic Tac Toe - Au bot !";
  }
}

// Function pour enregistrer l'input du joueur et du bot
function play(i) {
  // Checker si la case sélectionnée n'est pas occupée ou si le jeu n'est pas terminé. Si ces conditions sont remplies, placer le symbole du joueur actuel dans la case.
  if (board[i] === "") {
    gameStatus(false);
    board[i] = "X";
    writeSVG(true, i);
    if (isGameOver()) {
      displayWinner("Player");
      return;
    }
    setTimeout(() => {
      let botCase = bot_function(board);
      if (board[botCase] === "") {
        writeSVG(false, botCase);
        board[botCase] = "O";
        gameStatus(true);
        if (isGameOver()) {
          displayWinner("Bot");
          return;
        }
      }
    }, 1000);
  }
}

// Function pour checker si le jeu est fini
function isGameOver() {
  // Ici le for loop check si une des combinaisons est presente dans le tableau
  for (let i = 0; i < winnerLine.length; i++) {
    const [a, b, c] = winnerLine[i];
    if (board[a] !== "" && board[a] === board[b] && board[a] === board[c]) {
      return true; // Si une combinaison est présente le loop va se terminer et donc le jeu est terminé
    }
  }
  if (!board.includes(""))
    displayWinner("Draw");
}

// Function pour reset le jeu
function resetGame() {
  board = ["", "", "", "", "", "", "", "", ""];
  cells.forEach((cell) => {
    cell.children[0]?.classList.add("hidden");
    cell.children[1]?.classList.add("hidden");
  });
  gameStatus(true);
}

// Function pour montrer gagnant dans le popup
function displayWinner(winner) {
  // Definir constantes pour le popup
  const popup = document.getElementById("popup");
  const message = document.getElementById("message");
  const playAgainButton = document.getElementById("playagain");

  // Message dans le popup
  if (winner === "Player") {
    score.Player += 1;
    myScore.textContent = score.Player;
    message.textContent = "Bien joué, tu as gagné !";
  } else if (winner === "Bot") {
    score.Bot += 1;
    botScore.textContent = score.Bot;
    message.textContent = "Dommage, le bot a gagné !";
  } else if (winner === "Draw") {
    score.Draw += 1;
    drawScore.textContent = score.Draw;
    message.textContent = "C'est un match nul !";
  }
  // Enregistrer le score dans le local storage
  localStorage.setItem("score", JSON.stringify(score));
  document.title = "Tic Tac Toe";
  // Faire aparaitre le popup
  setTimeout(() => {
    popup.classList.remove("hidden");
  }, 500);
  // Button de reset
  playAgainButton.addEventListener("click", () => {
    resetGame();
    popup.classList.add("hidden");
  });
}

