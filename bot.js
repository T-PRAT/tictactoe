//Fichier d'execution du scripte du bot

//Création des Constantes utilisées par le bot
const cell  = document.querySelectorAll('.cell')
is_Dispo()

//Fonction de vérification si la case est disponible
function is_Dispo(){
    cell.forEach(cellules => {
        var cellActive = cellules.childNodes
        cellActive.forEach(element=>{
            console.log(element.firstChild)//.parentNode.childNodes
        })
    })
}


//Fonction de choix aléatoir du positionnement de l'element
function drop_Element_alea(){

}


//Fonction Positionnement de l'élément
function placement_Element(){

}