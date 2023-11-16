//Fichier d'execution du scripte du bot

//Création des Constantes utilisées par le bot
const cell  = document.querySelectorAll('.cell')

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
const formeBot = "O";

//Fonction de vérification si la case est disponible
function is_Dispo(emplacementTableJeux, tableauJeux){
    if(tableauJeux[emplacementTableJeux] == ''){
        return true
    }
    else{
        return false
    }
}


//Fonction de choix aléatoir du positionnement de l'element
export default function drop_Element_alea(tableauJeux){
    let choixBon = true
    let caseJouee
    while(choixBon){
        console.log(tableauJeux)
        caseJouee = Math.floor(Math.random() * tableauJeux.length)
        if(is_Dispo(caseJouee,tableauJeux)){
            choixBon = false
            return caseJouee
        }
    }
    
}
