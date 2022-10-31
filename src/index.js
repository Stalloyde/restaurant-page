import _ from 'lodash';
import './style.css';
import {loadImages, createHomeTab, createMenuTab, createContactTab} from './initial-load.js';
import {homeTabContent} from './home-tab.js';
import {menuTabContent} from './menu-tab.js';
import {contactTabContent} from './contact-tab.js';

(function loadInitialPage () {
    loadImages();
    createHomeTab()
    createMenuTab()
    createContactTab()
    homeTabContent();
})();


function clearPage () {
    const tabContent = document.querySelector(".tab-content");
    tabContent.innerHTML = " "; 
}

function loadHomePage () {
    clearPage();
    homeTabContent();
};

function loadMenuPage () {
    clearPage();
    menuTabContent();
};

function loadContactPage () {
    clearPage();
    contactTabContent();
};

const homeBtn = document.querySelector(".home-tab");
const menuBtn = document.querySelector(".menu-tab");
const contactBtn = document.querySelector(".contact-tab");

homeBtn.addEventListener("click", loadHomePage);
menuBtn.addEventListener("click", loadMenuPage);
contactBtn.addEventListener("click", loadContactPage);

///write modal pop ups for home,menu and contact tabs with content inside
// home-tab contents should be loaded initially.
// each modal buttons should have an event listener that calls the appendation of content
