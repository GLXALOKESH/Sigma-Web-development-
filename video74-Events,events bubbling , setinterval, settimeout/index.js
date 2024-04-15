let i1; 
let intervalRunning = false; 
// https://developer.mozilla.org/en-US/docs/Web/API/Element#mouse_events
function randgen() {
    let rand = Math.random();
    rand = Math.floor(rand * 10);
    return rand;
}

let colors = {
    0: 'red',
    1: 'green',
    2: 'blue',
    3: 'yellow',
    4: 'cyan',
    5: 'pink',
    6: 'violet',
    7: 'grey',
    8: 'silver',
    9: 'golden'
};

document.querySelector(".button").addEventListener('click', (e) => {
    e.stopPropagation(); 
    
    
    if (!intervalRunning) {
        i1 = setInterval(() => {
            let ret = randgen();
            document.querySelector(".inner-container").style.backgroundColor = colors[ret];
        }, 700);
        
        intervalRunning = true; 
    }
});

document.querySelector(".button").addEventListener('dblclick', (e) => {
    clearInterval(i1); 
    intervalRunning = false;
});
