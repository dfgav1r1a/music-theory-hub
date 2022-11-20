
const removeKeys = () => {
    const piano = document.getElementById('piano');
    while (piano.firstChild) {
        piano.removeChild(piano.firstChild);
    }
};

const generateKeys = (finalScale) => {
    removeKeys()
    const scaleArray = finalScale.split(' ');
    console.log(scaleArray);
    const piano = document.getElementById('piano');
    const keys = scaleArray.map(pitch => {
                    const key = document.createElement('div');
                    key.className = 'note';
                    key.setAttribute('id', pitch);
                    key.innerHTML = pitch;
                    piano.appendChild(key); 
                });
} 

export {generateKeys};


