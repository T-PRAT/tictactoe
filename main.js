import "./index.css";
import bot_function from './bot'

// Detecter et enregistrer les clicks du joueur
// Savoir si c'est joueur ou bot qui a joué
// Savoir le bon symbole a mettre dans le tableau
// Checker si victoire
// Faire alerte si Victoire

// Selectionner cases
const cells = document.querySelectorAll(".cell");

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

// Changer couleur de bordure
function changeBorder(isPlayer) {
  if (isPlayer) {
    document.getElementById("board").style.borderColor = "rgba(210, 224, 56, 0.7)";
  } else {
    document.getElementById("board").style.borderColor = "rgba(242, 69, 141, 0.7)";
  }
}


// Function pour enregistrer l'input du joueur et du bot
function play(i) {
  // Checker si la case sélectionnée n'est pas occupée ou si le jeu n'est pas terminé. Si ces conditions sont remplies, placer le symbole du joueur actuel dans la case.
  if (board[i] === "" && !isGameOver()) {
    board[i] = "X";
    writeSVG(true, i);
    if (isGameOver()) {
      alert("Player Won !"); // Si la function isGameOver est vrai une alerte aparait avec Player Won
      return;
    }
    // delai random entre 1s et 3s pour que le bot joue
    setTimeout(() => {
      let botCase = bot_function(board);
      if (board[botCase] === "") {
        writeSVG(false, botCase);
        board[botCase] = "O";
        if (isGameOver()) {
          alert("Bot Won !"); // Si la function isGameOver est vrai une alerte aparait avec Bot Won
          return;
        }
      }
      changeBorder(true);
    }, 1000);
    changeBorder(false); 
  } else {
    isPlayerTurn = true; // Retourner au tour du joueur le placement est invalide
  }
};

// Function pour checker si le jeu est fini
function isGameOver() {
  // Ici le for loop check si une des combinaisons est presente dans le tableau
  for (let i = 0; i < winnerLine.length; i++) {
    const [a, b, c] = winnerLine[i];
      if (
        board[a] !== "" &&
        board[a] === board[b] &&
        board[a] === board[c]
      ) {
      return true; // Si une combinaison est présente le loop va se terminer et donc le jeu est terminé
    }
  }
  return !board.includes(""); // Si toutes les cases du tableau sont remplies le jeu se termine, sinon le jeu continue
};

// Function pour reset le jeu
function resetGame() {
  board = ["", "", "", "", "", "", "", "", ""];
  cells.forEach((cell) => {
    cell.children[0]?.classList.add("hidden");
    cell.children[1]?.classList.add("hidden");
  });
};

//EventListener pour chaque case du tableau
cells.forEach((cell, index) => {
  cell.addEventListener("click", () => {
    if (isPlayerTurn) {
      isPlayerTurn = false;
      play(index);
    }
  });
});
