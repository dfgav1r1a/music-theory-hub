//global variables
const sharp = '#';
const flat = 'b';
const pitches = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];
const scale = new Array();
let pitch = new String();  

//flats
const flats = (pitches) => {    
    for (let note of pitches) {
    note = note + flat;
    scale.push(note);    
  }
  return result();
}

//sharps
const sharps = (pitches) => {    
    for (let note of pitches) {
    note = note + sharp;
    scale.push(note);       
  }  
     return result();
}

//reset the scale array
const clear = () => {
    for (let el of pitches) {
        scale.pop(el);
    }
    return scale;
}

//To display the entire scale
const result = () => {
    let result = scale.join(' ');
    return result;
}

//scales 
const majorScales = (pitch) => {
    if (pitch === pitches[0]) {      
        for (let note of pitches) {
            scale.push(note);    
        }
    return result();
    }   else if (pitch === pitches[1]) {
            for (let note of pitches) {
                scale.push(note);    
            }
        let remove = scale.splice(0, 1);
        scale[2] = scale[2] + sharp;
        scale.push(remove + sharp);
        return result();
    }   else if (pitch === pitches[2]) {
            for (let note of pitches) {
                scale.push(note);    
            }
        let remove = scale.splice(0, 2);
        scale.push(remove[0], remove[1]);
        scale[1] = scale [1] + sharp;
        scale[2] = scale [2] + sharp;
        scale[5] = scale [5] + sharp;
        scale[6] = scale [6] + sharp;
        return result();   
    }   else if (pitch === pitches[3]) {
            for (let note of pitches) {
                scale.push(note);    
            }
        let remove = scale.splice(0, 3);
        scale.push(remove[0], remove[1], remove[2]);
        scale[3] = scale [3] + flat;
        return result();
    }   else if (pitch === pitches[4]) {
            for (let note of pitches) {
                scale.push(note);    
            }
        let remove = scale.splice(4, 6);
        scale.unshift(remove[0], remove[1], remove[2]);
        scale[6] = scale [6] + sharp;
        return result();
    }   else if (pitch === pitches[5]) {
            for (let note of pitches) {
                scale.push(note);    
            }
        let remove = scale.splice(5, 6);
        scale.unshift(remove[0], remove[1]);
        scale[2] = scale [2] + sharp;
        scale[5] = scale [5] + sharp;
        scale[6] = scale [6] + sharp;
        return result();
    }   else if (pitch === pitches[6]) {
            for (let note of pitches) {
                scale.push(note);    
            }
        let remove = scale.pop();
        scale.unshift(remove);
        scale[1] = scale [1] + sharp;
        scale[2] = scale [2] + sharp;
        scale[4] = scale [4] + sharp;
        scale[5] = scale [5] + sharp;
        scale[6] = scale [6] + sharp;
        return result();
    }
} 

//DOM
//programming the button
document.getElementById('generateBtn').addEventListener('click', generate);

function generate () {
    clear();   
    const scaleOutput = document.getElementById('degrees');
    scaleOutput.innerHTML = '';  
    pitch = document.getElementById('pitches').value;    
    const finalScale = majorScales(pitch);
    scaleOutput.innerHTML = `
        <p> The <b>${pitch}</b> major scale is: </p>
        <p> ${finalScale} </p>`;     
}






