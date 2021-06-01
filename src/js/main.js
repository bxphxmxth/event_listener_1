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

let x = 0;
button2.innerText = (`J'ai été cliqué ${x} fois`)

let count = 0;

   button2.addEventListener("click", function() {
     count += 1;
     button2.innerText = (`J'ai été changé ${count} fois`)
   });