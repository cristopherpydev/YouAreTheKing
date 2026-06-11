import { clickSound } from "./soundManager.js";
import { playClick } from "./soundManager.js";
import { glowUp, glowDown } from "./mouseEvents.js";

/* = = = = = = = = = = = = = ELEMENTS = = = = = = = = = = = = = */

const tutorialBtn = document.getElementById('tutorial-button');

const tutorialLyt = document.getElementById('card-tutorial');

const closeBtn = document.getElementById('close-tutorial');

const text = document.getElementById('tutorial-text');

const img = document.getElementById('tutorial-img');

const prevBtn = document.getElementById('prev-button');

const nextBtn = document.getElementById('next-button');

let steps = 0;

const tutorialInfo = [
    {
        text: "Welcome to the tutorial. You are now about to face what a monarch must do in order to please everyone.",
        img: ""
    },
    {
        text: "First of, you should get familiar with the main goal: rule until your reign is over. <br><br> <b>You will have to face some choices to make your kingdom prevail</b>.",
        img: ""
    },
    {
        text: "There are 4 metrics to pay attention to. These metrics try to represent the 4 main tasks a monarch has to attend.<br><br>You soon will find that is very difficult to keep all of them high enough to not lose. <br><br>You have to make a choice, but every choice comes with two consequences: a positive and a negative. Your goal is to keep all metrics above zero.",
        img: ""
    },
    {
        text: "As it was said previously, a choice must be taken seriously. Every choice increases a metric and decreases another one.",
        img: ""
    },
    {
        text: "First of, we have the Social metric. Measures up the perception that the townfolk has upon you. A lower Social means that you are being percepted as a tyrant while a higher scoring means that you are a paragon who understands their needs. <br><br>You can recognize the metric with this icon:",
        img: "./assets/social-icon.png"
    },
    {
        text: "Then, we have the Defense metric. Measures up your military power. A lower Defense means that you are defenseless while a higher score means that you are powerful. <br><br>You can recognize the metric with this icon:",
        img: "./assets/defense-icon.png"
    },
    {
        text: "On the other hand, we have the Economy metric. Measures up the riches of your kingdom. A lower Economy means that your kingdom is suffering an economic regression while a higher score means that the riches are well distributed. <br><br>You can recognize the metric with this icon:",
        img: "./assets/economy-icon.png"
    },
    {
        text: "Finally, we have the Religion metric. Measures up the religion influence over the people. A lower Religion can defy the Old Gods, while a higher score can serve communion. <br><br>You can recognize the metric with this icon:",
        img: "./assets/religion-icon.png"
    },
    {
        text: "In order to make a choice, just click on the left or right button of every card.",
        img: ""
    },
    {
        text: "Happy gaming!",
        img: ""
    }
]
/* = = = = = = = = = = = = = OTHER ELEMENTS TO HIDE = = = = = = = = = = = = = */
const startBtn = document.getElementById('start-button');

/* events listeners */

tutorialBtn.addEventListener('click', showTutorial);
closeBtn.addEventListener('click', hideTutorial);
prevBtn.addEventListener('click', showPrevInfo);
nextBtn.addEventListener('click', showNextInfo);

tutorialBtn.addEventListener('mouseover', glowUp);
tutorialBtn.addEventListener('mouseout', glowDown);
nextBtn.addEventListener('mouseover', glowUp);
prevBtn.addEventListener('mouseover', glowUp);
nextBtn.addEventListener('mouseout', glowDown);
prevBtn.addEventListener('mouseout', glowDown);


/* = = = = */


function showTutorial(){

    steps = 0;

    text.innerHTML = tutorialInfo[steps].text;

    playClick(clickSound);

    tutorialLyt.style.display = "block";
    startBtn.style.display = "none";
    tutorialBtn.style.display = "none";

    prevBtn.style.display = "none";
    nextBtn.style.display = "block";

    const imgUri = getImg(steps);

    if(imgUri){
        img.style.display = "block";
        img.src = imgUri;
    }
    else{
        img.style.display = "none";
    }
}

function hideTutorial(){
    steps = 0;
    playClick(clickSound);
    tutorialLyt.style.display = "none";
    startBtn.style.display = "block";
    tutorialBtn.style.display = "block";

}

function showPrevInfo(){
    steps -=1;
    const imgUri = getImg(steps);
    playClick(clickSound);
    if (steps == 0){
        if (imgUri){
            img.style.display = "block";
            img.src = imgUri;
        }
        else{
            img.style.display = "none";
        }
        text.innerHTML = tutorialInfo[steps].text;
        prevBtn.style.display = "none";
    }
    else{
        if (imgUri){
            img.style.display = "block";
            img.src = imgUri;
        }
        else{
            img.style.display = "none";
        }
        text.innerHTML = tutorialInfo[steps].text;
        prevBtn.style.display = "block";
        nextBtn.style.display = "block";
    }


}

function showNextInfo(){
    steps +=1;
    const imgUri = getImg(steps);
    playClick(clickSound);
    if (steps < tutorialInfo.length-1){
        if (imgUri){
            img.style.display = "block";
            img.src = imgUri;
        }
        else{
            img.style.display = "none";
        }
        text.innerHTML = tutorialInfo[steps].text;
        prevBtn.style.display = "block";
    }
    else{
        if (imgUri){
            img.style.display = "block";
            img.src = imgUri;
        }
        else{
            img.style.display = "none";
        }
        text.innerHTML = tutorialInfo[steps].text;
        nextBtn.style.display = "none";
    }
}

function reloadAdvButtons(){
    nextBtn.style.display = "block";
    prevBtn.style.display = "block";
}

function getImg(steps){
    return tutorialInfo[steps].img || false;
}