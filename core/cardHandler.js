

// const btnLeft = document.getElementById();
// const btnRight = document.getElementById();

// btnLeft.addEventListener('click', leftStage);
// btnRight.addEventListener('click', leftStage);


const situation = document.getElementById('situation');
const descriptor = document.getElementById('descriptor');
const logo = document.getElementById('icon');
const leftBtn = document.getElementById('btn-left');
const rightBtn = document.getElementById('btn-right');
const uris = {
    "economy": "./assets/diamon-icon.png",
    "social": "./assets/social-icon.png",
    "defense": "./assets/shield-icon.png",
    "religion": "./assets/candle-vector.png",
};

const data = await getData();

const cardText = getPrompt(data);


prepareUI(cardText);

/* == dev maintenance == 

    this file serves as the card handler.
    fetches up and renders data in the screen.
    handles the visualization.

*/

function leftStage(){

    
}

function rightStage(){

}

function getPrompt(data){
    const index = Math.floor(Math.random() * data.length);
    return data[index];
}

function prepareUI(prompt){
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
