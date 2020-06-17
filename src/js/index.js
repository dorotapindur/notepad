import '../scss/main.scss';
import * as color from './modules/color.js';
import * as font from './modules/font.js';
import * as size from './modules/size.js';

// uncomment the lines below to enable PWA
// import {registerSW} from './pwa.js';
// registerSW();

/* place your code below */

import {theColor} from './modules/color.js';
import {colorInput} from './modules/color.js';

console.log(`HELLO 🚀 I'm trying to make a notepad`);

color;

font;

size;

const textarea = document.querySelector('.text--js');

const saveButton = document.querySelector('.save--js');

const loadButton = document.querySelector('.load--js');

const clearButton = document.querySelector('.clear--js');

//sprawdza, czy coś jest w local storage
let entry = localStorage.getItem('saved');
 if (entry) {
     document.querySelector('.info--js').innerHTML = ' ℹ️';
 }
 


saveButton.addEventListener('click', () => {
    //nie zapisuje, jeśli pole jest puste
    if (textarea.value) {
    localStorage.setItem('saved', textarea.value);   
    localStorage.setItem('savedColor', theColor);
    console.log("saved"); 
    entry = localStorage.getItem('saved');
    document.querySelector('.info--js').innerHTML = ' ℹ️';
    }
});

loadButton.addEventListener('click', () => {  
    textarea.value = localStorage.getItem('saved');  
    colorInput.value = localStorage.getItem('savedColor'); 
    document.documentElement.style.setProperty('--color', colorInput.value);
    console.log('loaded');
    document.querySelector('.info--js').innerHTML = '';
});

clearButton.addEventListener('click', () => {  
    textarea.value = '';   
    console.log('cleared');
    if (entry) {
        document.querySelector('.info--js').innerHTML = ' ℹ️';
    }
});



