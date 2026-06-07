const buttonStart = document.getElementById('start-button');
const header = document.getElementById('header-comp');
const wrapper = document.getElementById('wrapper');

console.log(header);
buttonStart.addEventListener('click', startGame)

function startGame(){
    buttonStart.style.display = 'none';
    header.style.display = 'none';
    wrapper.style.display = 'flex';
}

