import { isAliveKing } from "./statusHandler.js";
import { startGame } from "./buttonController.js";
import { playClick, playLoopTheme, stopLoopTheme } from "./soundManager.js";
import { clickSound, theme } from "./soundManager.js";
import { addDay } from "./buttonController.js";
const restartBtn = document.getElementById('restart-btn')
const situation = document.getElementById('situation');
const descriptor = document.getElementById('descriptor');
const logo = document.getElementById('icon');
const leftBtn = document.getElementById('btn-left');
const rightBtn = document.getElementById('btn-right');
const gameOverOverlay = document.getElementById('game-over-screen');
const deathReason = document.getElementById('death-reason');

/* = = = = METRICS = = = = */
const metricSocial = document.getElementById('social-bar');
const metricDefense = document.getElementById('defense-bar');
const metricReligion = document.getElementById('religion-bar');
const metricEconomy = document.getElementById('economy-bar');
const daysMetric = document.getElementById('days');

const metrics = [
    {
    "metric": "social",
    "value": metricSocial.value
    },
    {
    "metric": "defense",
    "value": metricDefense.value
    },
    {
    "metric": "economy",
    "value": metricEconomy.value},
    {
    "metric": "religion",
    "value": metricReligion.value
    }]

const uris = {
    "economy": "./assets/economy-icon.png",
    "social": "./assets/social-icon.png",
    "defense": "./assets/defense-icon.png",
    "religion": "./assets/religion-icon.png",
};

const values = {
    "social_up": [0.1, "social"],
    "social_down": [-0.1, "social"],
    "defense_up": [0.1, "defense"],
    "defense_down": [-0.1, "defense"],
    "economy_up": [0.1, "economy"],
    "economy_down": [-0.1, "economy"],
    "religion_up": [0.1, "religion"],
    "religion_down": [-0.1, "religion"]                              
};
    

/* on start */

const data = await getData();

let cardText = getPrompt(data);
prepareUI(cardText);

leftBtn.addEventListener('click', () => leftStage(cardText));
rightBtn.addEventListener('click', () => rightStage(cardText));
restartBtn.addEventListener('click', () => startGame())



/* == dev maintenance == 

    this file serves as the card handler.
    fetches up and renders data in the screen.
    handles the visualization.

*/


async function leftStage(choiceData){
    /* updates the global score, 
    updates the UI, 
    calls up for a new card
    */
    clickSound.play();
    addDay();
    const dataset = choiceData["quirks_left"];
    const q1 = choiceData["quirks_left"][0];
    const q2 = choiceData["quirks_left"][1];
    resolveSituation(q1, q2);
    const currentMetrics = [
        { "metric": "social", "value": metricSocial.value },
        { "metric": "defense", "value": metricDefense.value },
        { "metric": "economy", "value": metricEconomy.value },
        { "metric": "religion", "value": metricReligion.value }
    ];
    const situation = isAliveKing(currentMetrics);
    console.log(situation);
    if (typeof situation === 'boolean'){
        const data = await getData();
        cardText = getPrompt(data);
        prepareUI(cardText);
    }
    else{
        gameOverScreen(situation[1]);
    }
}

async function rightStage(choiceData){
    /* updates the global score, 
    updates the UI, 
    calls up for a new card
    */
    playClick(clickSound)
    addDay();
    const dataset = choiceData["quirks_right"];
    const q1 = choiceData["quirks_right"][0];
    const q2 = choiceData["quirks_right"][1];
    resolveSituation(q1, q2);
    
    const currentMetrics = [
        { "metric": "social", "value": metricSocial.value },
        { "metric": "defense", "value": metricDefense.value },
        { "metric": "economy", "value": metricEconomy.value },
        { "metric": "religion", "value": metricReligion.value }
    ];
    
    const situation = isAliveKing(currentMetrics);
    console.log(situation);
    if (typeof situation === 'boolean'){
        const data = await getData();
        cardText = getPrompt(data);
        prepareUI(cardText);
    }
    else{
        gameOverScreen(situation[1]);
    }

}

function getPrompt(data){
    /* gets a random card; returns the whole dataset */
    const index = Math.floor(Math.random() * data.length);
    return data[index];
}

function prepareUI(prompt){
    /* displays the card with the data */
    situation.innerHTML = prompt.name;
    descriptor.innerHTML = prompt.descriptor;
    leftBtn.innerHTML = prompt.left;
    rightBtn.innerHTML = prompt.right;
    const logoText = prompt.icon;
    console.log(logo.src);
    logo.src = uris[logoText];

    //quirks_left
    //quirks_right

}

async function getData(){
    const request = await fetch('./data/cards.json')
    const data = await request.json();
    return data
}

function resolveSituation(q1, q2){
    const val1 = values[q1];
    const val2 = values[q2];
    const applyMath = (currentValue, change) => {
        let newValue = Number(currentValue) + change;
        return Number(newValue.toFixed(1)); 
    };

    switch (val1[1]) {
        case 'social':
            metricSocial.value = applyMath(metricSocial.value, val1[0]);
            break;
        case 'defense':
            metricDefense.value = applyMath(metricDefense.value, val1[0]);
            break;
        case 'economy':
            metricEconomy.value = applyMath(metricEconomy.value, val1[0]);
            break;
        case 'religion':
            metricReligion.value = applyMath(metricReligion.value, val1[0]);            
            break;
    }

    switch (val2[1]) {
        case 'social':
            metricSocial.value = applyMath(metricSocial.value, val2[0]);
            break;
        case 'defense':
            metricDefense.value = applyMath(metricDefense.value, val2[0]);
            break;
        case 'economy':
            metricEconomy.value = applyMath(metricEconomy.value, val2[0]);
            break;
        case 'religion':
            metricReligion.value = applyMath(metricReligion.value, val2[0]);            
            break;
    }
}

function gameOverScreen(motif){
    switch (motif) {
        case 'social':
            deathReason.innerHTML = "The peasants have killed you this night."
            break;
        
            case 'defense':
            deathReason.innerHTML = "You have your enemies besieging your castle... you are waiting for your death."
            break;
        
            case 'economy':
            deathReason.innerHTML = "An anarchy have raisen upon the streets. You are now afraid of the townfolk."
            break;
    
        case 'religion':
            deathReason.innerHTML = "Your god have punished you with a deathly plague."  
            break;
    }
    stopLoopTheme(theme)
    gameOverOverlay.classList.remove('hidden');
}