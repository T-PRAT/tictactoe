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
function drop_Element_alea(tableauJeux){
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
    let indiceChoisie = drop_Element_alea(tableauJeux)
    let occurenceJoueur = []
    let occurenceBot = []
    for (let i=0; i<tableauJeux.length; i++){
        if(tableauJeux[i] =="X"){
            occurenceJoueur.push(i)
        }
        else if(tableauJeux[i] == "O"){
            occurenceBot.push(i)
        }
    }

    merciGoogle.forEach(possibilite => {
        if(possibilite.includes(occurenceJoueur[0]) && possibilite.includes(occurenceJoueur[1])){
            for(let i=0; i<possibilite.length; i++){
                if(tableauJeux[possibilite[i]] == ''){
                    indiceChoisie = possibilite[i]
                    console.log(possibilite)
                }
            }
        }
        else if (possibilite.includes(occurenceBot[0]) && possibilite.includes(occurenceBot[1])){
            for(let i=0; i<possibilite.length; i++){
                if(tableauJeux[possibilite[i]] == ''){
                    indiceChoisie = possibilite[i]
                    console.log(possibilite)
                }
            }
        }
    })
    return indiceChoisie
}
