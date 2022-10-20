import _ from 'lodash';
import './style.css';
import {createTitle, createCatchPhrase} from './initial-load.js';


(function initialLoad () {
    const content = document.getElementById("content");
    
    const title = document.createElement("div");
    title.className = "title";
    title.textContent = createTitle("The World's Greatest Kebab");
    content.appendChild(title);
    
    const catchPhrase = document.createElement("div");
    catchPhrase.className = "catch-phrase";
    catchPhrase.textContent = createCatchPhrase("Sometimes, the best thing comes from a giant skewer");
    content.appendChild(catchPhrase);
})();