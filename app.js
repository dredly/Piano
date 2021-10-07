function playAudio() {
    let audio = document.querySelector('#audio');
    audio.play();
}

const allKeys = document.querySelectorAll('.full-piano>*');
for (let key of allKeys) {
    key.addEventListener('click', () => playAudio());
    key.addEventListener('click', () => {
        key.classList.add('pressed-key');
        setTimeout(() => {
            key.classList.remove('pressed-key');
        }, 500);
    });
};

const whiteKeys = document.querySelectorAll('.white-key');
let counter = 1;
for (let whiteKey of [...whiteKeys]) {
    whiteKey.style.gridColumn = `${2 * counter - 1} / ${2 * counter + 1}`;
    counter++;
}