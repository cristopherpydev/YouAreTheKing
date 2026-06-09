const situation = document.getElementById('situation');
const descriptor = document.getElementById('descriptor');
const logo = document.getElementById('icon');
const leftBtn = document.getElementById('btn-left');
const rightBtn = document.getElementById('btn-right');

/* = = = = METRICS = = = = */
const metricSocial = document.getElementById('social-bar');
const metricDefense = document.getElementById('defense-bar');
const metricReligion = document.getElementById('religion-bar');
const metricEconomy = document.getElementById('economy-bar');
const daysMetric = document.getElementById('days');

const uris = {
    "economy": "./assets/diamon-icon.png",
    "social": "./assets/social-icon.png",
    "defense": "./assets/shield-icon.png",
    "religion": "./assets/candle-vector.png",
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

    console.log(choiceData);
    const dataset = choiceData["quirks_left"];
    const q1 = choiceData["quirks_left"][0];
    const q2 = choiceData["quirks_left"][1];

    console.log(q1);
    console.log(q2);
    resolveSituation(q1, q2);

    const data = await getData();
    cardText = getPrompt(data);
    prepareUI(cardText);
}

async function rightStage(choiceData){
    /* updates the global score, 
    updates the UI, 
    calls up for a new card
    */
    console.log(choiceData);
    const dataset = choiceData["quirks_right"];
    const q1 = choiceData["quirks_right"][0];
    const q2 = choiceData["quirks_right"][1];

    console.log(q1);
    console.log(q2);
    resolveSituation(q1, q2);

    const data = await getData();
    cardText = getPrompt(data);
    prepareUI(cardText);

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
    const request = await fetch('../data/cards.json')
    const data = await request.json();
    return data
}

function resolveSituation(q1, q2){
    const val1 = values[q1];
    const val2 = values[q2];

    switch (val1[1]) {
        case 'social':
            metricSocial.value += val1[0];
            break;
        case 'defense':
            metricDefense.value += val1[0];
            break;
        case 'economy':
            metricEconomy.value += val1[0];
            break;
        case 'religion':
            metricReligion.value += val1[0];            
            break;
        default:
            break;
    }
    switch (val2[1]) {
        case 'social':
            metricSocial.value += val2[0];
            break;
        case 'defense':
            metricDefense.value += val2[0];
            break;
        case 'economy':
            metricEconomy.value += val2[0];
            break;
        case 'religion':
            metricReligion.value += val2[0];            
            break;
        default:
            break;
    }
}