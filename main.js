import "./index.css";

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
let joueurActuel = joueur1;
let tablueDeJeu = ["", "", "", "", "", "", "", "", ""];

//EventListener pour chaque case du tableu
cells.forEach((cell, index) => {
  cell.addEventListener("click", () => {
    inputJoueurActuel(index);
  });

// Function pour enregistrer l'input du joueur et du bot
function inputJoueurActuel(i) {
  // Checker si la case sélectionnée n'est pas occupée ou si le jeu n'est pas terminé. Si ces conditions sont remplies, placer le symbole du joueur actuel dans la case.
  if (tablueDeJeu[i] === "" && !isGameOver()) {
    tablueDeJeu[i] = joueurActuel;
    cells[i].innerHTML = joueurActuel;

    if (isGameOver()) {
      alert("Game Over"); // Si la function isGameOver est vrai une alerte aparait avec Game Over
      return;
    }
    // Changer de joueur (si joueurActuel est joueur1 change vers le bot, sinon l'invers)
    joueurActuel = joueurActuel === joueur1 ? bot : joueur1;

    // Si joueur est le bot peut-etre l'appeller comme ça?
    if (joueurActuel === bot) {

      // Apeller le bot?

    }
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

});
