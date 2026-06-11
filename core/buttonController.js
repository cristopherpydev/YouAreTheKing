import { playClick, playLoopTheme, stopLoopTheme } from "./soundManager.js";
import { clickSound, theme } from "./soundManager.js"
import {glowUp, glowDown} from "./mouseEvents.js"

const buttonStart = document.getElementById('start-button');
const header = document.getElementById('header-comp');
const wrapper = document.getElementById('wrapper');
const gameOverOverlay = document.getElementById('game-over-screen');

/* ================ metrics ================= */
const metricSocial = document.getElementById('social-bar');
const metricDefense = document.getElementById('defense-bar');
const metricReligion = document.getElementById('religion-bar');
const metricEconomy = document.getElementById('economy-bar');
const daysMetric = document.getElementById('days');
const tutorialBtn = document.getElementById('tutorial-button');

console.log(header);
buttonStart.addEventListener('click', startGame)
buttonStart.addEventListener("mouseover", glowUp)
buttonStart.addEventListener("mouseout", glowDown)

let daysCounter = 1;

export async function startGame(){
    /* = = = = = = = = INITIAL STATUS = = = = = = = = = */
    daysCounter = 1;
    tutorialBtn.style.display = "none";
    daysMetric.innerHTML = `Days at the throne: ${daysCounter}`;    
    gameOverOverlay.classList.add('hidden');
    playLoopTheme(theme)
    buttonStart.style.display = 'none';
    header.style.display = 'none';
    wrapper.style.display = 'flex';
    daysMetric.style.display = 'block';
    const initialMetricValues = await getInitialValues();
    metricSocial.value = initialMetricValues["social"];
    metricDefense.value = initialMetricValues["defense"];
    metricEconomy.value = initialMetricValues["economy"];
    metricReligion.value = initialMetricValues["religion"];
}

export async function getInitialValues() {
    /* = = = = = = = = FETCHING DATA PROCESS = = = = = = = = = */

    const request = await fetch("./data/global_metrics_data.json");
    const data = await request.json();
    console.log(data);
    return data
}

export function addDay(){
    daysCounter+=1;
    daysMetric.innerHTML = `Days at the throne: ${daysCounter}`;    

}


