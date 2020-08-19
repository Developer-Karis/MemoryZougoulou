"use strict";

// Variables Globales

let dicoMots = ["tennis", "tennis", "tennis", "tennis", "tennis", "tennis", "tennis"];

let motRandom = generateRandomWord().toUpperCase();
console.log(motRandom);

/**
 * Start the Game
 */
function startGame() {
    let recupContainerMain = document.getElementById("container-main");
    for (let i in motRandom) {
        recupContainerMain.innerHTML += "<div id=\"" + i + "\">" + "</div>";
        recupContainerMain.style.display = "flex";
        recupContainerMain.style.justifyContent = "center";
        recupContainerMain.style.alignItems = "center";
        document.getElementById(i).innerHTML += "<img id=grid>" + "</img>";
        document.getElementById("grid").src = "src/images/empty.jpg";
        document.getElementById("grid").style.borderRadius = "5px";
    }
}

/**
 * Generate a random word.
 */
function generateRandomWord() {
    let premierMot = 0;
    let dernierMot = dicoMots.length;
    let resultat = Math.floor(Math.random() * (dernierMot - premierMot));
    let afficheMot = dicoMots[resultat];
    return afficheMot;
}