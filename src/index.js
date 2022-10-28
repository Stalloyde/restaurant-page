import _ from 'lodash';
import './style.css';
import {loadImages, createHomeTab, createMenuTab, createContactTab} from './initial-load.js';
import {homeTabContent} from './home-tab.js';

(function initialLoad () {
    loadImages();
    createHomeTab()
    createMenuTab()
    createContactTab()
    homeTabContent();
})();


///write modal pop ups for home,menu and contact tabs with content inside
// home-tab contents should be loaded initially.
// each modal buttons should have an event listener that calls the appendation of content
