

/**
 * Exercice 1
 */
 console.log("--------- Exercice 1 -------------------");
// ok

// Partie 1
console.log("--------- Partie 1 -------------------");

// 1- Créez un fichier JS et liez-le au fichier index.html .
// ok

// 2- Jetez un oeil à votre fichier html, vous devriez avoir un bouton avec un événement "onclick"
// ok

// 3- Dans le fichier JS, créez une fonction appelée playTheGame() qui ne prend aucun paramètre.
function playTheGame(){
}

// 3-1- Dans la fonction, commencez par demander à l'utilisateur s'il souhaite jouer au jeu
function playTheGame(){
    let confirmJeux = confirm("souhaitez-vous jouer au ?");
    console.log(confirmJeux);
}

// 3-1-1- Si la réponse est fausse, alertez « Pas de problème, au revoir ».
function infoAboutMe(){
    let confirmJeux = confirm("souhaitez-vous jouer au ?");
    if (!confirmJeux) {
        alert("Pas de problème, au revoir ");
    }
}
infoAboutMe();

// 3-1-2- Si sa réponse est vraie, suivez ces étapes 
function infoAboutMe(){
    let confirmJeux = confirm("souhaitez-vous jouer au ?");
    if (confirmJeux) {
        alert("Super");
    }else{
        alert("Pas de problème, au revoir ");
    }
}
infoAboutMe();

// 3-1-2-1 Si sa réponse est vraie, suivez ces étapes 
function infoAboutMe(){
    let confirmJeux = confirm("souhaitez-vous jouer au ?");
    if (confirmJeux) {
        alert("Super");
        let userNombre = prompt("veillez entrer un nombre entre 0 et 10");
        if (isNaN(userNombre)) {
            alert("Désolé, vous n'vez pas entré un numéro, au revoir");
        } else if (userNombre < 0 || userNombre > 10) {
            alert("Désolé, ce n'est pas un bon chiffre, au revoir");
        }else{
            let computerNumber = parseInt(Math.random() * 10);
            return computerNumber;
        }
    }else{
        alert("Pas de problème, au revoir ");
    }
}
infoAboutMe();


// Partie 2
console.log("--------- Partie 2 -------------------");

// 1- créez une nouvelle fonction nommée compareNumbers(userNumber,computerNumber) 
function compareNumbers(userNumber,computerNumber){
}

// 2- Le but de cette fonction est de vérifier si le userNumber est le même que le computerNumber 

// 2-1- Si userNumber est égal à computerNumber, alertez "WINNER" et arrêtez le jeu.
function compareNumbers(userNumber, computerNumber) {
    let nombreChances = 3;
    while (nombreChances > 0) {
      if (userNumber === computerNumber) {
        alert("WINNER");
        return;
      } else if (userNumber > computerNumber) {
        alert("Votre numéro est plus grand que celui de l'ordinateur, veillez essayer encore");
        userNombre = prompt("Entré un nouveau numéro");
      } else {
        alert("Votre numéro est plus petit que celui de l'ordinateur,veillez essayer encore");
        userNombre = prompt("Entré un nouveau numéro");   
      }
      nombreChances--;
    }
    alert("Vous avez epuisé toute vos chances");
}
compareNumbers(2, 3);



// 1- créez une nouvelle fonction nommée compareNumbers(userNumber,computerNumber)


// Prime
console.log("---------  Prime -------------------");

// 1- Dans la première partie , au lieu d'arrêter le processus si l'utilisateur n'a pas entré de numéro valide. Continuez à demander un numéro jusqu'à ce que l'utilisateur entre un numéro valide.
function infoAboutMe(){
    let confirmJeux = confirm("souhaitez-vous jouer au ?");
    if (confirmJeux) {
        alert("Super");
        let userNombre ;
        do {
            userNombre = prompt("veillez entrer un nombre entre 0 et 10");    
        } while (isNaN(userNombre) || userNombre < 0 || userNombre > 10);
        let computerNumber = parseInt(Math.random() * 10);
        return computerNumber;
    }else{
        alert("Pas de problème, au revoir ");
    }
}
infoAboutMe();