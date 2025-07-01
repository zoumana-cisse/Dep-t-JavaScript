//Mon petit c'est ton président
//Le devoir t'as bien bossé 
/*//Calcule de la somme de deux nombres entiers
a = Number (prompt("Entrer le premier nombre : "))
b = Number (prompt("Entrer le deuxieme nombre : "))
console.log ("La somme de" , a, "+", b, "=", a+b)*/

/*// 1. Variable avec mon prénom
let prenom = "Abdoul Malick";

// 2. Constante avec mon âge
const age = 23; // change à ton vrai âge

// 3. Variable booléenne étudiant
let estEtudiant = true;

// 4. Tableau de 3 fruits
let fruits = ["pomme", "banane", "mangue"];

// 5. Affichage dans la console
console.log("Prénom :", prenom);
console.log("Âge :", age);
console.log("Est étudiant :", estEtudiant);
console.log("Fruits :", fruits);
// 6. Affichage dans une alerte
alert("Prénom : " + prenom + "\nÂge : " + age + "ans" + "\nEst étudiant : " + estEtudiant + "\nFruits : " +fruits.join(", "));*/

//*****Traité de l'exercice N°2/E-mail*****//
// 1. Créer un tableau de 4 fruits
let fruits = ["mangue", "banane", "orange", "ananas"];
alert ("Voici les 4 fruits crées : " + fruits.join(" , "));
// 2. Afficher le premier fruit
alert("Premier fruit : " + fruits[0]);

// 3. Ajouter un fruit à la fin du tableau
fruits.push("papaye");
alert("Après ajout : " + fruits.join(" , "));

// 4. Supprimer le deuxième fruit (indice 1)
fruits.splice(1, 1); // supprime 1 élément à partir de l'index 1 (banane)
alert("Après suppression du 2e fruit : " + fruits.join(" , "));

// 5. Afficher la taille du tableau
alert("Taille du tableau : " + fruits.length);

// 6. Afficher le dernier fruit
alert("Dernier fruit : " + fruits[fruits.length - 1]);
