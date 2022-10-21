import _ from 'lodash';
import './style.css';
import {createTitle, createCatchPhrase, loadImage} from './initial-load.js';

(function initialLoad () {
    const content = document.getElementById("content");
    
    const title = document.createElement("div");
    title.className = "title";
    title.textContent = createTitle();
    content.appendChild(title);
    
    const catchPhrase = document.createElement("div");
    catchPhrase.className = "catch-phrase";
    catchPhrase.textContent = createCatchPhrase();
    content.appendChild(catchPhrase);

    const image = document.createElement("div");
    image.className = "background-img";
    image.innerHTML = loadImage();
    content.appendChild(image);
})();