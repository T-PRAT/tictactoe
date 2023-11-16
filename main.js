import "./index.css";
import bot_function from './bot'

// Detecter et enregistrer les clicks du joueur
// Savoir si c'est joueur ou bot qui a joué
// Savoir le bon symbole a mettre dans le tableau
// Checker si victoire
// Faire alerte si Victoire



// Selectionner cases
const cells = document.querySelectorAll(".cell");

// Joueurs
const joueur1 = "X";
const bot = "O";

// Bon symbole sur la case
function writeSVG(isPlayer, i) {
  //supprimer la classe hidden du svg
  if (isPlayer) {
    cells[i].children[0]?.classList.remove("hidden");
  } else {
    cells[i].children[1]?.classList.remove("hidden");
  }
}

// Combinaisons possibles pour gagner
const merciGoogle = [
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
let tablueDeJeu = ["", "", "", "", "", "", "", "", ""];

//EventListener pour chaque case du tableu
cells.forEach((cell, index) => {
  cell.addEventListener("click", () => {
    play(index);
  });
});

// Function pour enregistrer l'input du joueur et du bot
function play(i) {
  // Checker si la case sélectionnée n'est pas occupée ou si le jeu n'est pas terminé. Si ces conditions sont remplies, placer le symbole du joueur actuel dans la case.
  if (tablueDeJeu[i] === "" && !isGameOver()) {
    tablueDeJeu[i] = "X";
    writeSVG(true, i);

    if (isGameOver()) {
      alert("Game Over"); // Si la function isGameOver est vrai une alerte aparait avec Game Over
      return;
    }
    // Si joueur est le bot peut-etre l'appeller comme ça?
    writeSVG(false, bot_function(tablueDeJeu));
  }
};

// Function pour checker si le jeu est fini
function isGameOver() {
  // Ici le for loop check si une des combinaisons est presente dans le tableau
  for (let i = 0; i < merciGoogle.length; i++) {
    const [a, b, c] = merciGoogle[i];
    if (
      tablueDeJeu[a] !== "" &&
      tablueDeJeu[a] === tablueDeJeu[b] &&
      tablueDeJeu[a] === tablueDeJeu[c]
    ) {
      return true; // Si une combinaison est présente le loop va se terminer et donc le jeu est terminé
    }
  }
  return !tablueDeJeu.includes(""); // Si toutes les cases du tableau sont remplies le jeu se termine, sinon le jeu continue
};
