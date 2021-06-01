// ## Exo 01 
// > Créez un bouton en JS avec une valeur "Je suis un bouton"
// > Au clique la valeur du bouton devient "j'ai été cliqué"

let newButton = document.createElement("button");
newButton.innerText = ("Je suis un bouton")
console.log(newButton);

let myBody = document.querySelector("body");
console.log(myBody);

myBody.appendChild(newButton)


let changeText = () => {
     newButton.innerText = ("J'ai été cliqué");
}

newButton.addEventListener("click", changeText);

// ## Exo 02
// > Créer un 2eme button
// > Au clique la valeur du button devient "j'ai été cliqué x fois" le x est le nombre de clique effectué

let button2 = document.createElement("button");
myBody.appendChild(button2);
let count = 0;
button2.innerText = (`J'ai été cliqué ${count} fois`)



   button2.addEventListener("click", function() {
     count += 1;
     button2.innerText = (`J'ai été changé ${count} fois`)
   });

//    03
// > Créer un button a qui vous assignerez l'écouteur d'évenement click qui rajoutera un titre dans votre page web

let button3 = document.createElement("button");

myBody.appendChild(button3);

let h3Button3 = document.createElement("h3");
h3Button3.innerText = "Titre H3"

console.log(h3Button3);

let addText = () =>{
     button3.appendChild(h3Button3)
}

button3.addEventListener("click",addText)


// ## Exo 04
// > Créer un buttton, assigner l'écouteur d'évenement click. Ce bouton rajoutera un button dans votre page web avec comme valeur Exo 04


let button4 = document.createElement("button");
myBody.appendChild(button4);



let addButton = () =>{
     newButton4 = document.createElement("button");
     newButton4.innerText = "exo 4 "
     myBody.appendChild(newButton4);
}

button4.addEventListener("click",addButton)


// ## Exo 05
// > Créez un paragraphe avec du texte
// > Créez un button "modifier la couleur du paragraphe"
// > Au clique ça changera la couleur du paragraphe


let p = document.createElement("p");
p.innerText = "wesh la zone";
myBody.appendChild(p);

let button5 = document.createElement("button");
button5.innerText = "modifier la couleur du paragraphe";
myBody.appendChild(button5)


let changeColorP = () =>{
     p.style.color = "red";
}

button5.addEventListener("click",changeColorP)

// ## Exo 6
// > Etape 1 :
// > Créer un button qui crée un h2 avec une valeur "Je lance une function"
// > Rajouter le titre sur la page web
// > Etape 2 :
// > Cette function doit également rajouter un boutton avec comme valeur "Modifier le titre Exo 06"

// > Etape 3 :
// > le bouton "Modifier le titre" lance une function qui modifie le texte en lui mettant sa couleur en rouge.

let button6 = document.createElement("button");
button6.innerText = "Créer un H2";
myBody.appendChild(button6);

let h26 = document.createElement("h2");

h26.innerText = "Je lance une fonction";



let button7 = document.createElement("button");
button7.innerText = "Modifier le titre exo 06";


let ajouterH2Button6 = () =>{
     myBody.appendChild(h26);
     myBody.appendChild(button7)
}

button6.addEventListener("click",ajouterH2Button6);


let changerCoulModifierTitre = () =>{
     button7.style.color = "red"
}

button7.addEventListener("click",changerCoulModifierTitre);


// Random Color BONUS


let buttonTest = document.createElement("button");
buttonTest.innerText = "Random Color";

myBody.appendChild(buttonTest);


let tabColor = ["blue", "red", "green", "yellow", "grey", "white","purple","orange"];


let changeColor = () =>{
     let randomColor = tabColor[Math.floor(Math.random()*tabColor.length)];
     buttonTest.style.color = randomColor;

}

buttonTest.addEventListener("click", changeColor)