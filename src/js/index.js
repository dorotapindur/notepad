import '../scss/main.scss';

// uncomment the lines below to enable PWA
// import {registerSW} from './pwa.js';
// registerSW();

/* place your code below */

console.log(`HELLO 🚀 I'm trying to make a notepad`);

const textarea = document.querySelector('.text--js');

const saveButton = document.querySelector('.save--js');

const loadButton = document.querySelector('.load--js');

const clearButton = document.querySelector('.clear--js');

saveButton.addEventListener('click', () => {
    localStorage.setItem('saved', textarea.value);
    console.log("saved");
    
});

loadButton.addEventListener('click', () => {  
    textarea.value = localStorage.getItem('saved', textarea.value);   
    console.log('loaded');
});

clearButton.addEventListener('click', () => {  
    textarea.value = '';   
    console.log('cleared');
});

