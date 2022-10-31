import _ from 'lodash';
import './style.css';
import {loadImages, createHomeTab, createMenuTab, createReserveTab} from './initial-load.js';
import {homeTabContent} from './home-tab.js';
import {menuTabContent} from './menu-tab.js';
import {reserveTabContent} from './reserve-tab.js';

(function loadInitialPage () {
    loadImages();
    createHomeTab()
    createMenuTab()
    createReserveTab()
    homeTabContent();
})();

function clearPage () {
    const tabContent = document.querySelector(".tab-content");
    tabContent.innerHTML = " "; 
}

function loadHomePage () {
    clearPage();
    homeTabContent();
    const reserveBtn = document.querySelector(".reserve-btn");
    reserveBtn.addEventListener("click", loadReservePage)
};

function loadMenuPage () {
    clearPage();
    menuTabContent();
};

function loadReservePage () {
    clearPage();
    reserveTabContent()
};

const homeTabBtn = document.querySelector(".home-tab");
const menuTabBtn = document.querySelector(".menu-tab");
const reserveTabBtn = document.querySelector(".reserve-tab");

homeTabBtn.addEventListener("click", loadHomePage);
menuTabBtn.addEventListener("click", loadMenuPage);
reserveTabBtn.addEventListener("click", loadReservePage);

