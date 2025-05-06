"use strict"
//Exercices pour Débutants en JavaScript

/*Exercice 1 : Variables et Types de Données

Déclare une variable nommée age et assigne-lui ton âge.
Déclare une constante nommée VILLE et assigne-lui le nom de ta ville.
Déclare une variable nommée estMajeur qui sera un booléen indiquant si l'âge est supérieur ou égal à 18.
Déclare une variable nommée nomComplet et assigne-lui ton prénom et ton nom sous forme de chaîne de caractères.
Déclare une variable nommée rien et assigne-lui la valeur appropriée pour représenter l'absence intentionnelle de valeur. 
let age = 22;
const VILLE = "Lille";
let estMajeur = age >= 18;
let nomComplet = "Sara " + "Jourdan"
let rien = null;*/

/*Exercice 2 : Interactions Utilisateur

Utilise prompt pour demander à l'utilisateur son prénom et stocke la réponse dans une variable.
Utilise alert pour afficher un message de bienvenue personnalisé à l'utilisateur en utilisant le prénom qu'il a entré.
Utilise confirm pour poser une question à l'utilisateur (par exemple : "Aimez-vous JavaScript ?"). 
Stocke la réponse (true ou false) dans une variable et affiche-la dans la console.
let prenom = prompt("Quel est votre prénom?", "reponse");

if (prenom) {
  alert("Bonjour, " + prenom + "!");
} else {
  alert("Salut inconnu au bataillon !");
}

let confirmJs = confirm("Aimez-vous JavaScript?");
console.log("L'utilisateur aime JavaScript: " + confirmJs);*/


/*Exercice 3 : Opérateurs

Déclare deux variables numériques, nombre1 et nombre2, avec des valeurs de ton choix.
Calcule et affiche dans la console la somme, la différence, le produit et le quotient de ces deux nombres.
Déclare une variable rayon et assigne-lui une valeur. Calcule et affiche la circonférence d'un cercle en utilisant la formule 2 * PI * rayon (utilise Math.PI pour la valeur de PI).
Déclare une variable score initialisée à 0. 
Incrémente-la de 1 en utilisant l'opérateur d'incrémentation. Puis, décrémente-la de 1 en utilisant l'opérateur de décrémentation. 
Affiche la valeur de score après chaque opération.
let nombre1 = 9;
let nombre2 = 4;
console.log(nombre1 + nombre2, nombre1 - nombre2, nombre1 * nombre2, nombre1 / nombre2);

let rayon = 10;
console.log(2 * Math.PI * rayon);

let score = 0;
score++;
console.log(score);
score--;
console.log(score);*/



/*Exercice 4 : Structures de Contrôle (if / else)

Demande à l'utilisateur d'entrer un nombre à l'aide de prompt.
Convertis l'entrée de l'utilisateur en un nombre.
Utilise une instruction if...else pour vérifier si le nombre est positif, négatif ou nul. Affiche le résultat dans la console.*/
/*// 1. Demande à l'utilisateur d'entrer un nombre à l'aide de prompt.
let inputNombre = prompt("Veuillez entrer un nombre :");

// Explication :
// - `prompt("Veuillez entrer un nombre :")` : La fonction `prompt()` affiche une boîte de dialogue demandant à l'utilisateur d'entrer un texte. Le message "Veuillez entrer un nombre :" guide l'utilisateur.
// - `let inputNombre = ...` : La valeur entrée par l'utilisateur (qui est toujours une chaîne de caractères) est stockée dans la variable `inputNombre`.

// 2. Convertis l'entrée de l'utilisateur en un nombre.
let nombre = Number(inputNombre);

// Explication :
// - `Number(inputNombre)` : La fonction `Number()` essaie de convertir la chaîne de caractères stockée dans `inputNombre` en une valeur numérique.
// - `let nombre = ...` : Le résultat de cette conversion est stocké dans la variable `nombre`. Si l'utilisateur entre quelque chose qui ne peut pas être interprété comme un nombre (par exemple, du texte), la valeur de `nombre` sera `NaN` (Not a Number).

// 3. Utilise une instruction if...else pour vérifier si le nombre est positif, négatif ou nul. Affiche le résultat dans la console.
if (nombre > 0) {
  console.log("Le nombre " + nombre + " est positif.");
} else if (nombre < 0) {
  console.log("Le nombre " + nombre + " est négatif.");
} else if (nombre === 0) {
  console.log("Le nombre est zéro.");
} else {
  console.log("L'entrée n'est pas un nombre valide."); // Cas pour NaN ou d'autres entrées non numériques
}*/



/*Exercice 5 : Structures de Contrôle (for / while)

Utilise une boucle for pour afficher les nombres de 1 à 5 dans la console.
Utilise une boucle while pour afficher les nombres de 5 à 1 dans la console.*/


/*Exercice 6 : Fonctions

Déclare une fonction nommée afficherMessage qui prend un paramètre message et affiche ce message dans la console. Appelle cette fonction en lui passant une chaîne de caractères de ton choix.
Déclare une fonction nommée calculerCarre qui prend un nombre en paramètre et retourne le carré de ce nombre. Appelle cette fonction avec un nombre de ton choix et affiche le résultat dans la console.
Écris une fonction fléchée qui prend deux nombres en paramètres et retourne leur somme. Appelle cette fonction avec deux nombres et affiche le résultat.*/
