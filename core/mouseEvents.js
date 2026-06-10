const leftBtn = document.getElementById('btn-left');
const rightBtn = document.getElementById('btn-right');
const leftBtnSel = document.querySelector(".btn-left");
const rightBtnSel = document.querySelector(".btn-right");

leftBtn.addEventListener("mouseover", glowUpMetrics)
leftBtn.addEventListener("mouseout", resetGlowUp)

rightBtn.addEventListener("mouseover", glowUpMetrics)
rightBtn.addEventListener("mouseout", resetGlowUp)

function glowUpMetrics(){
    /* glows up the metrics to give visual feedback to the users */
    this.style.animation = "glow 0.5s infinite alternate";
}

function resetGlowUp(){
    this.style.animation = "none";
}


