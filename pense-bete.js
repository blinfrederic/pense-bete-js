
//!RECEPERE UNE DONNER DANS UN OBJET QUI NE CONTIENT PAS DE TABLEAU

const country = {
    name: 'France',
    capital: 'Paris',
    inEU: true,
    population: 67000000,
};
// pour cibler et lire une propriété je peux utiliser un point
console.log(country.name); // France
// mais aussi une string entre crochet
console.log(country['name']); // France
// pratique si j'avais le nom de la propriété qui m'intéresse dans une variable
const key = 'name';
console.log(country[key]); // France

//?--------------------------------------------------------------
//!INJECTER UN OBJET DANS UNE CHAINE DE CARACTERE
//AVANT
document.getElementById('focus-img').src = imgs.game1.big.href;

//APRES
document.getElementById('focus-img').src = imgs[gameRandom["img"]].big.href;

// game1 et [gameRandom["img"]] sont la meme chose sauf que
// [gameRandom["img"]] represente plusieur données a savoir (game1 game2 game3 tec..)
//les 1er crochet pour injecter la donnée le 2eme crocher pour aller chercher un element dans la donnée

//?-------------------------------------------------------------------------------------

//! RAJOUTER UN DELAIS D APPARAISSION A DES OBJET

let delai = 2000; //? on commence à afficher les panel 2 secondes après le chargement de la page

for (let div = 0; div < 9; div++) {
    //? La première div s'affiche après 2 secondes
    showPanel(div, delai);

    //? la deuxième div s'affiche après 2.5 secondes, la troisième après 3 secondes, etc.
    delai += 500;
}

//?-------------------------------------------------------------------------------------

//!FAIRE UNE ADDITION D UNE DONNER DANS UNE BOUCLE
//*games etant un objet contenant un tableau
let totalDownload = 0
for (let index = 0; index < games.length; index += 1) {
    //je veut ajouter le nombre de telechargement a chaque tour de boucle//
    totalDownload += games[index].downloads;
};
//? OU
//
let TOTALDOWNLOAD = 0;
for (const index of games) {
    TOTALDOWNLOAD = TOTALDOWNLOAD + index;
}

//?-------------------------------------------------------------------------------------

//! METTRE 2 DONNER ALEATOIRE DANS UNE CONST SANS AVOIR DE CHOIX IDENTIQUE
//je met un 1er jeux aleatoire dans mon tableaux
const homeGames = [getRandomId(),];
//je tire un 2eme jeux aleatoirement 
let gameTwo = getRandomId();
//je compare au 1er tans qu il sont identique je refait un random
while (homeGames[0] === gameTwo) {
    gameTwo = getRandomId();
};
homeGames.push(gameTwo)//injecte le 2eme objet aleatoire dans notre constante qui est un tableau
displayGames(homeGames);//sert a afficher les image 

//?-----------------------------------------------------------------------------------

//!ON RAJOUTE UN OBJET A UNE LISTE SI IL N EST PAS DEDANS

const starWarsMovies = [
    "Un nouvel espoir",
    "L'empire contre attaque",
    "Le retour du Jedi",
    "La menace fantôme",
    "L'attaque des clones",
    "La revanche des Sith",
    "Le réveil de la force",
    "Les derniers Jedi",
    "L'ascension de Skywalker"
];

for (let numeroFilm = 0; numeroFilm < starWarsMovies.length; numeroFilm++) {
    //? le modulo (%) retourne le reste de al division par deux
    //? le reste d'une division par deux ne peut être que 0 ou 1
    //? si le reste est 0 alors le nombre est pair
    //? si le reste est 1 alors le nombre est impair
    if (numeroFilm % 2 === 0) {
        //? si le numéro du film est pair alors on ajoute le film avec un fond gris
        addMovie(starWarsMovies[numeroFilm], true);
    } else {
        //? si le numéro du film est impair alors on ajoute le film avec un fond noir
        addMovie(starWarsMovies[numeroFilm], false);
    }
}

//?------------------------------------------------------------------------------

//!RAJOUTER UN OBJET AVEC 2 DONNEES 5(nom prenom)DANS UN FORMULAIRE APRES VALIDATION SANS QU IL Y SOI DEJA
// On mémorise le formulaire
const form = document.getElementById('form');
// Quand on le valide
form.addEventListener('submit', (event) => {
    // On empêche la page de s'actualiser
    event.preventDefault();
    // On récupère le prénom saisi dans le formulaire
    const inputFirstnameValue = document.getElementById('firstname').value;
    // Ainsi que le nom
    const inputLastnameValue = document.getElementById('lastname').value;

    // On décrit objet contenant les informations saisie
    const newUser = {
        firstname: inputFirstnameValue,
        lastname: inputLastnameValue,
    };
    // On l'affiche en console (essaye le formulaire pour voir)
    console.log(newUser);

    // On prépare un booléen pour indiquer si oui ou non on a 
    // déjà un utilisateur avec le même nom/prénom
    let sameName = false;

    // todo il faudra comparer le nouvel utilisateur avec tous les autres
    for (const user of users) {
        console.log(user);
        //! if(user === newUser){ ne fonctionne pas car ce sont des objets.
        //! Même si ils ont les même propriété et le s mêmes valeurs, ce sont
        //! deux objets différents. On est obligé de comparer les propriétés une par une

        if (user.firstname.toUpperCase() === newUser.firstname.toUpperCase() &&
            user.lastname.toUpperCase() === newUser.lastname.toUpperCase()) {

            sameName = true;
            console.log('même nom')
        }
    }
    // si on a trouvé des personnes de même nom
    if (sameName) {
        // on affiche un message
        displaySameName();
    }
    // sinon
    else {
        // on affiche un autre message
        displayNoSame();
    }
});

//?--------------------------------------------------------------------------------------------------------