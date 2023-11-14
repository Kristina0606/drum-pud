import {KEYS, COLORS, SOUNDS} from './constants.js'

console.log (KEYS)
console.log (COLORS)
console.log (SOUNDS)

const visualContainer = document.querySelector('.visual-container');

const animatePad = (code) =>
{
    const pad = document.querySelector(`div[data-key='${code}']`);
    pad.style.animation = 'click .1s linear';

    pad.addEventListener('animationend', () =>{
        pad.style.animation = 'none'
    })
}

const playSound = (code) => {
    const sound = SOUNDS[code];
    const audio = new Audio(sound);
    audio.load();
    audio.play();
}

const showVisualization = (code) => {
    const visual = document.createElement('div');
    visual.classList.add('visual')
    visualContainer.append(visual);
    visual.style.background = COLORS[code];
    visual.addEventListener('animationend', () => {
        visual.remove()
    })


}

const onKeyDown = (evt) => {
    const keys = Object.values(KEYS);
    const isAvailable = keys.includes(evt.code);

    if (isAvailable) {
        showVisualization(evt.code);
        playSound(evt.code);
        animatePad(evt.code)
    } else {
        throw new Error('Action is not available!')
    }
    
}

window.addEventListener('keydown', onKeyDown)