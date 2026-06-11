const leftBtn = document.getElementById('btn-left');
const rightBtn = document.getElementById('btn-right');
const leftBtnSel = document.querySelector(".btn-left");
const rightBtnSel = document.querySelector(".btn-right");

leftBtn.addEventListener("mouseover", glowUp)
leftBtn.addEventListener("mouseout", glowDown)

rightBtn.addEventListener("mouseover", glowUp)
rightBtn.addEventListener("mouseout", glowDown)

export function glowUp(){
    /* glows up the metrics to give visual feedback to the users */
    this.style.animation = "glow 0.5s infinite alternate";
}

export function glowDown(){
    this.style.animation = "none";
}


