"use strict";

// Variables Globales

let dicoMots = ["sorcière", "tennis", "tennis", "tennis", "tennis", "tennis", "tennis"];

let motRandom = generateRandomWord().toUpperCase();


/**
 * Execute all functions.
 */
function game() {
    startGame();
    buttonsActive();
}

/**
 * Start the Game
 */
function startGame() {
    let tirets = "?";
    let recupContainerMain = document.getElementById("container-main");
    let newSpan = document.getElementById("mettreMot");
    for (let i in motRandom) {
        recupContainerMain.innerHTML += "<div id=\"" + i + "\">" + "</div>";
        recupContainerMain.style.display = "flex";
        recupContainerMain.style.justifyContent = "center";
        recupContainerMain.style.alignItems = "center";
        document.getElementById(i).innerHTML += "<img id=grid src='src/images/empty.jpg'/>" + "</img>";
        newSpan.innerHTML += "<span id=\"" + i + "\">" + tirets + "</span>";
    }
}

/**
 * Active buttons change colors
 */
function buttonsActive() {
    $(document).on('click', '.buttons', function () {
        $(this).addClass('active').siblings().removeClass('active');
    })

    $(document).on('click', '.buttons-vitesse', function () {
        $(this).addClass('second-active').siblings().removeClass('second-active');
    })
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