"use strict";

// Variables Globales

let dicoMots = ["accidentelle", "accidentelle", "accidentelle", "accidentelle", "accidentelle", "accidentelle", "accidentelle"];

let motRandom = generateRandomWord().toUpperCase();
let recupContainerMain = document.getElementById("container-main");

/**
 * Execute all functions.
 */
function game() {
    startGame();
    buttonsActive();
    buttonPlay();
    scorePlayer();
    randomCards();
}

/**
 * Start the Game
 */
function startGame() {
    let tirets = "?";
    let newSpan = document.getElementById("mettreMot");
    for (let i in motRandom) {
        recupContainerMain.innerHTML += "<div id=\"" + i + "\" class=grid-item>" + "</div>";
        recupContainerMain.style.display = "flex";
        recupContainerMain.style.justifyContent = "center";
        recupContainerMain.style.alignItems = "center";
        document.getElementById(i).innerHTML += "<img class=grid src='src/images/empty.jpg'/> " + "</img > ";
        newSpan.innerHTML += "<span id=\"" + i + "\">" + tirets + "</span>";
    }
}

/**
 * Active buttons change colors
 */
function buttonsActive() {
    $(document).on('click', '.buttons', function () {
        $(this).addClass('active').siblings().removeClass('active');
        if (document.getElementsByClassName('active')[0].innerHTML == "ORDINATEUR") {
            document.getElementsByClassName("ordinateur")[0].style.display = "block";
            document.getElementsByClassName("row")[1].style.width = "99%";
        } else {
            document.getElementsByClassName("ordinateur")[0].style.display = "none";
            document.getElementsByClassName("row")[1].style.width = "45%";
        }
    })

    if (document.getElementsByClassName('active')[0].innerHTML == "SOLO") {
        document.getElementsByClassName("ordinateur")[0].style.display = "none";
        document.getElementsByClassName("row")[1].style.width = "45%";
    }

    $(document).on('click', '.buttons-vitesse', function () {
        $(this).addClass('second-active').siblings().removeClass('second-active');
    })
}

/**
 * Button Play for the game.
 */
function buttonPlay() {
    recupContainerMain.style.opacity = "50%";
    $(document).on('click', '#start', function () {
        $(this).attr("hidden", true);
        $('.grid').css('cursor', 'pointer');
        recupContainerMain.style.opacity = "1";
    })
}

/**
 * Generate a random card game and display.
 */
function randomCards() {
    let recupGridItem = document.getElementsByClassName('grid');
    let result = Math.floor(Math.random() * recupGridItem.length);
    $(document).on('click', '.grid-item', function () {
        for (let i = 0; i < recupGridItem.length; i++) {
            recupGridItem[i].src = "src/images/cartes/image" + i + ".jpg";
        }
    })
}

/**
 * Display the score for current Player.
 */
function scorePlayer() {
    let scorePlayer = 0;
    document.getElementById("scorePlayer").innerHTML = scorePlayer;
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