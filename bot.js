//Fichier d'execution du scripte du bot

//Création des Constantes utilisées par le bot

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

//Fonction de choix aléatoir du positionnement de l'element
export default function drop_Element_alea(tableauJeux){
    let tableauIndiceCaseVide = []
    for(let i=0; i<tableauJeux.length;i++){
        if(tableauJeux[i]==''){
            tableauIndiceCaseVide.push(i)
        }
    }
    let indiceChoisie = Math.floor(Math.random() * tableauIndiceCaseVide.length)
    return tableauIndiceCaseVide[indiceChoisie]
}


export default function drop_Element(tableauJeux){
    let tableauIndiceO = []
    let tableauIndiceX = []

    for (let i=0; i<tableauJeux; i++){
        if(tableauJeux[i] == 'X'){
            tableauIndiceX.push(tableauJeux[i])
        }
        else if(tableauJeux[i] == 'O'){
            tableauIndiceO.push(tableauJeux[i])
        }
    }

    
}
