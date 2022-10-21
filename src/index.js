import _ from 'lodash';
import './style.css';
import {createTitle, createCatchPhrase, loadImage, createHomeTab, createMenuTab, createContactTab} from './initial-load.js';

(function initialLoad () {
    createTitle();
    createCatchPhrase();
    loadImage();
    createHomeTab()
    createMenuTab()
    createContactTab()
})();


