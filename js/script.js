//======================SNACK 1==============================
//-----------------------ARRAY-------------------------------
const bicycles = [
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
const lightBikeParagraph = document.getElementById("light-bike-paragraph");
let lightBike = bicycles[0];
//---------------------/CONST-LET-VAR------------------------

// Scorri tutti gli oggetti presenti nell'array "bicycles" e seleziona la bicicletta con il peso minore
for (let i = 0; i < bicycles.length; i++){

    let {weight} = bicycles[i];

    if (weight < lightBike.weight) {
        lightBike = bicycles[i];
    }

}

// Assegna delle variabili al nome e al peso della bici leggera
let {name, weight} = lightBike;

// Stampa su HTML la bicicletta con il peso minore
lightBikeParagraph.innerHTML = `La bici ${name} pesa ${weight} Kg ed è la più leggera`;
//=====================/SNACK 1==============================


/*
Snack2
Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti. Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0. Generare numeri random al posto degli 0 nelle proprietà: Punti fatti e falli subiti. Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
*/

//======================SNACK 2==============================
//-----------------------FUNZIONI----------------------------
const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
//-----------------------/FUNZIONI---------------------------

//-----------------------ARRAY-------------------------------
const footballTeams = [
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
let statisticsFootballTeams = [];
//----------------------/ARRAY-------------------------------

//----------------------CONST-LET-VAR------------------------
const footballTeamsList = document.getElementById("football-teams-list");
//---------------------/CONST-LET-VAR------------------------

for (let i = 0; i < footballTeams.length; i++) {

    // Genera numeri random al posto degli 0 nelle proprietà: punti fatti e falli subiti
    footballTeams[i].points = getRandomNumber(0, 100);
    footballTeams[i].fouls = getRandomNumber(0, 100);

    // Genera un nuovo array i cui elementi contengono solo nomi e falli subiti
    let statistics = {};
    statistics.name = footballTeams[i].name;
    statistics.fouls = footballTeams[i].fouls;
    statisticsFootballTeams.push(statistics)

    // Assegna delle variabili al nome e i falli fatti dalle squadre
    let {name, fouls} = statisticsFootballTeams[i];

    // Stampa il nuovo array i cui elementi contengono solo nomi e falli subiti
    footballTeamsList.innerHTML += `<li>Squadra =<span id=\"value\"> ${name} </span><br>Falli commessi =<span id=\"value\"> ${fouls} </span></li>`
}
//=====================/SNACK 2==============================