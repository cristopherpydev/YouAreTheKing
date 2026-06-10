export const clickSound = new Audio("./assets/music/click.wav");
export const theme = new Audio("./assets/music/loopmusic.mp3")
theme.loop = true;
clickSound.preload = "auto";

export function playClick(clickSound){
    clickSound.play();
}

export function playLoopTheme(mainTheme){
    theme.play();
}

export function stopLoopTheme(mainTheme){
    theme.pause();
    theme.currentTime = 0;
}