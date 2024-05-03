
const callback =(arg) =>{
    console.log(arg)
}

function loadScript  (src, callback)  {
let script ;
script = document.createElement('script');
script.src = src;
script.onload = callback('Script Loaded');
document.head.appendChild(script);
}

loadScript('index2.js', callback);
