"use strict";

// Variables Globales

let dicoMots = ["ACCELERATEUR", "ACCELERATEUR", "ACCELERATEUR"];

let motRandom = generateRandomWord().toUpperCase();
let recupContainerMain = document.getElementById("container-main");

let scorePlayer = 0;        // Score Player
let scoreOrdinateur = 0;    // Score Ordinateur

let minutesLabel = document.getElementById("minutes");
let secondsLabel = document.getElementById("seconds");
let totalSeconds = 0;
setInterval(setTime, 1000);

/**
 * Execute all functions.
 */
function game() {
    startGame();
    buttonsActive();
    buttonPlay();
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
        document.getElementById(i).innerHTML += "<img class=\"grid\"" + "\ src='src/images/empty.jpg'/>" + "</img>";
        document.getElementById(i).innerHTML += "<img id=\"card-" + i + "\" class=grid-item>" + "</img>";
        newSpan.innerHTML += "<span id=\"" + i + "\">" + tirets + "</span>";
    }
    document.getElementById("scorePlayer").innerHTML = scorePlayer;
    document.getElementById("scoreOrdinateur").innerHTML = scoreOrdinateur;
}

/**
 * Active buttons change colors
 */
function buttonsActive() {
    $(document).on('click', '.buttons', function () {
        $(this).addClass('active').siblings().removeClass('active');
        if (document.getElementsByClassName('active')[0].innerHTML == "ORDINATEUR") {
            document.getElementsByClassName("ordinateur")[0].style.display = "block";
            document.getElementsByClassName("player")[0].style.display = "block";
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

    // Disabled click grid item
    $('.grid').click(function () {
        this.disabled = true;
    });

    $(document).on('click', '#start', function () {
        $(this).attr("hidden", true);
        $('.grid').css('cursor', 'pointer');
        recupContainerMain.style.opacity = "1";
        // Enabled click grid item
        $('.grid').click(function () {
            this.disabled = false;
        });
    })
}

/**
 * Update Timer
 */
function setTime() {
    if (document.getElementById("start").hasAttribute("hidden")) {
        ++totalSeconds;
        secondsLabel.innerHTML = pad(totalSeconds % 60);
        minutesLabel.innerHTML = pad(parseInt(totalSeconds / 60));
    }
}

function pad(val) {
    var valString = val + "";
    if (valString.length < 2) {
        return "0" + valString;
    }
    else {
        return valString;
    }
}

/**
 * Generate a random card game and display.
 */
function randomCards() {
    let recupGridItem = document.getElementsByClassName('grid');
    let result = Math.floor(Math.random() * recupGridItem.length);
    $(document).on('click', '.grid', function () {
        $(this).attr("src", "src/images/cartes/image" + result + ".jpg");
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