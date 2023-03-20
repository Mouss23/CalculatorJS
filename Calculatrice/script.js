const calculatrice = document.querySelector('.calculatrice'); // Séléction de l'élément HTML par sa class CSS

// Création de l'élément div class = ecran pour afficher les résultats des calculs
const ecran = document.createElement('div');
ecran.classList.add('ecran');                   // Ajout de la class
calculatrice.appendChild(ecran);                // Ajout de la div class = ecran à la div class = calculatrice

// Création de l'élément div class = touches qui contient les boutons
const touches = document.createElement('div');
touches.classList.add('touches');
calculatrice.appendChild(touches);


// Row 1

const clear = document.createElement('button'); // Création de l'élément bouton
clear.classList.add('bouton');                  // Ajout d'une classe à l'élément HTML
clear.id = 'clear';                             // Ajout d'un id à l'élément HTML
clear.innerText = 'C';                          // Ajout du texte à l'élément HTML
clear.setAttribute("data-key", "8");            // Propriété utilisée pour associer chaque bouton à une touche du clavier
touches.appendChild(clear);                     // Ajout du bouton à l'élément touches

const parentheseG = document.createElement('button')
parentheseG.classList.add('bouton')
parentheseG.id = 'parentheseD';
parentheseG.innerText = '(';
parentheseG.setAttribute("data-key", "53");
touches.appendChild(parentheseG);

const parentheseD = document.createElement('button')
parentheseD.classList.add('bouton')
parentheseD.id = 'parentheseG';
parentheseD.innerText = ')';
parentheseD.setAttribute("data-key", "219");
touches.appendChild(parentheseD);

const diviser = document.createElement('button')
diviser.classList.add('bouton')
diviser.id = 'diviser';
diviser.innerText = '/';
diviser.setAttribute("data-key", "111");
touches.appendChild(diviser);


// Row 2

const sept = document.createElement('button')
sept.classList.add('bouton')
sept.id = 'sept';
sept.innerText = '7';
sept.setAttribute("data-key", "103");
touches.appendChild(sept);

const huit = document.createElement('button')
huit.classList.add('bouton')
huit.id = 'huit';
huit.innerText = '8';
huit.setAttribute("data-key", "104");
touches.appendChild(huit);

const neuf = document.createElement('button')
neuf.classList.add('bouton')
neuf.id = 'neuf';
neuf.innerText = '9';
neuf.setAttribute("data-key", "105");
touches.appendChild(neuf);

const multip = document.createElement('button')
multip.classList.add('bouton')
multip.id = 'multip';
multip.innerText = '*';
multip.setAttribute("data-key", "106");
touches.appendChild(multip);


// Row 3

const quatre = document.createElement('button')
quatre.classList.add('bouton')
quatre.id = 'quatre';
quatre.innerText = '4';
quatre.setAttribute("data-key", "100");
touches.appendChild(quatre);

const cinq = document.createElement('button')
cinq.classList.add('bouton')
cinq.id = 'cinq';
cinq.innerText = '5';
cinq.setAttribute("data-key", "101");
touches.appendChild(cinq);

const six = document.createElement('button')
six.classList.add('bouton')
six.id = 'six';
six.innerText = '6';
six.setAttribute("data-key", "102");
touches.appendChild(six);

const moins = document.createElement('button')
moins.classList.add('bouton')
moins.id = 'moins';
moins.innerText = '-';
moins.setAttribute("data-key", "109");
touches.appendChild(moins);


// Row 4

const un = document.createElement('button')
un.classList.add('bouton')
un.id = 'un';
un.innerText = '1';
un.setAttribute("data-key", "97");
touches.appendChild(un);

const deux = document.createElement('button')
deux.classList.add('bouton')
deux.id = 'deux';
deux.innerText = '2';
deux.setAttribute("data-key", "98");
touches.appendChild(deux);

const trois = document.createElement('button')
trois.classList.add('bouton')
trois.id = 'trois';
trois.innerText = '3';
trois.setAttribute("data-key", "99");
touches.appendChild(trois);

const plus = document.createElement('button')
plus.classList.add('bouton')
plus.id = 'plus';
plus.innerText = '+';
plus.setAttribute("data-key", "107");
touches.appendChild(plus);


// Row 5

const zero = document.createElement('button')
zero.classList.add('bouton')
zero.id = 'zero';
zero.innerText = '0';
zero.setAttribute("data-key", "96");
touches.appendChild(zero);

const dot = document.createElement('button')
dot.classList.add('bouton')
dot.id = 'dot';
dot.innerText = '.';
dot.setAttribute("data-key", "110");
touches.appendChild(dot);

const egal = document.createElement('button')
egal.classList.add('bouton')
egal.id = 'egal';
egal.innerText = '=';
egal.setAttribute("data-key", "13");
touches.appendChild(egal);



// DOM
const touch = [...document.querySelectorAll(".bouton")]; // Création d'un tableau contenant les valeurs de 'data-key'
const listeKeycode = touch.map((touche) => touche.dataset.key); 

// Ecouteur d'évènement des touches clavier
document.addEventListener("keydown", (e) => {
    const valeur = e.keyCode.toString();    // Stockage de la touche pressée
    calculer(valeur);                       // Appel de la fonction
});

// Ecouteur d'évènement sur les clicks
document.addEventListener("click", (e) => {
    const valeur = e.target.dataset.key;    // Stockage de la valeur des data-key des touches cliquées
    calculer(valeur);                       // Appel de la fonction
});


const calculer = (valeur) => {
    if (listeKeycode.includes(valeur)) {    // Si la valeur en argument est dans le tableu c'est qu'une touche a été pressée ou cliquée
        switch (valeur) {
            case "8":                       // Si la valeur correspond à la touche "8", cela signifie que l'utilisateur souhaite effacer le contenu de l'écran, 
                ecran.textContent = "";     // et la fonction affecte une chaîne vide à la propriété textContent de l'élément ecran
                break;
            case "13":                      // Si la valeur correspond à la touche "13", cela signifie que l'utilisateur a appuyé sur la touche "Entrée" pour effectuer un calcul
                const calcul = eval(ecran.textContent); // Fonction qui évalue le calcul dans l'écran et, 
                ecran.textContent = calcul;             // affecte le résultat obtenu à la propriété textContent de l'élément ecran
                break;
            default:
                const indexKeycode = listeKeycode.indexOf(valeur); // Cherche l'index de la valeur dans le tableau listeKeycode, 
                const touche = touch[indexKeycode];                // puis elle utilise cet index pour trouver l'élément correspondant dans le tableau touch
                ecran.textContent += touche.innerHTML; // Ajoute la valeur de la touche ou du bouton pressé à l'écran
        }
    }
};

// Lorsqu'une erreur se produit sur la page, cet événement est déclenché
window.addEventListener("error", (e) => {
    alert("Une erreur est survenue dans votre calcul : " + e.error.message);
});

