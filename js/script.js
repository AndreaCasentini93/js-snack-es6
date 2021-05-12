/*
Snack 1
Creare un array di oggetti: Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso. Stampare a schermo la bici con peso minore utilizzando destructuring e template literal.
*/

//======================SNACK 1==============================
//-----------------------ARRAY-------------------------------
var bicycles = [
    {
        name: "Cargo",
        weight: 6.8
    },
    {
        name: "Tandem",
        weight: 5.9
    },
    {
        name: "BMX",
        weight: 6.9
    },
    {
        name: "Downhill",
        weight: 6.3
    },
    {
        name: "Gravel",
        weight: 6.5
    },
    {
        name: "Fat",
        weight: 7.1
    }
]; 
//----------------------/ARRAY-------------------------------

//----------------------CONST-LET-VAR------------------------
var lightBike;
var lightBikeWeight = bicycles[0].weight;
var lessWeightBike = document.getElementById("less-weight-bike");
//---------------------/CONST-LET-VAR------------------------

// Scorri tutti gli oggetti presenti nell'array "bicycles" e seleziona la bicicletta con il peso minore
for (var i = 0; i < bicycles.length; i++) {

    if (bicycles[i].weight <= lightBikeWeight) {
        lightBikeWeight = bicycles[i].weight;
        lightBike = bicycles[i];
    }

}

// Stampa su HTML la bicicletta con il peso minore
lessWeightBike.innerHTML = "La bici dal nome " + lightBike.name + " pesa " + lightBike.weight + " Kg ed è la più leggera.";
//=====================/SNACK 1==============================


/*
Snack2
Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti. Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0. Generare numeri random al posto degli 0 nelle proprietà: Punti fatti e falli subiti. Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
*/

//======================SNACK 2==============================
//-----------------------FUNZIONI----------------------------
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
//-----------------------/FUNZIONI---------------------------

//-----------------------ARRAY-------------------------------
var footballTeams = [
    {
       name: "Inter",
       points: 0,
       fouls: 0
    },
    {
       name: "Milan",
       points: 0,
       fouls: 0
    },
    {
       name: "Juventus",
       points: 0,
       fouls: 0
    },
    {
       name: "Lazio",
       points: 0,
       fouls: 0
    },
    {
       name: "Roma",
       points: 0,
       fouls: 0
    },
    {
       name: "Napoli",
       points: 0,
       fouls: 0
    },
];
var statisticsFootballTeams = [];
//----------------------/ARRAY-------------------------------

//----------------------CONST-LET-VAR------------------------
var footballTeamsList = document.getElementById("football-teams-list");
//---------------------/CONST-LET-VAR------------------------

for (i = 0; i < footballTeams.length; i++) {

    // Genera numeri random al posto degli 0 nelle proprietà: punti fatti e falli subiti
    footballTeams[i].points = randomNumber(0, 100);
    footballTeams[i].fouls = randomNumber(0, 100);

    // Genera un nuovo array i cui elementi contengono solo nomi e falli subiti
    var statistics = {};
    statistics.name = footballTeams[i].name;
    statistics.fouls = footballTeams[i].fouls;
    statisticsFootballTeams.push(statistics)

    // Stampa il nuovo array i cui elementi contengono solo nomi e falli subiti
    footballTeamsList.innerHTML += "<li>Squadra = <span id=\"value\">" + statisticsFootballTeams[i].name + "</span><br>Falli commessi = <span id=\"value\">" + statisticsFootballTeams[i].fouls + "</span></li>";
}
//=====================/SNACK 2==============================