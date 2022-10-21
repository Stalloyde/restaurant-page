import _ from 'lodash';
import './style.css';
import {createTitle, createCatchPhrase, loadImage} from './initial-load.js';

(function initialLoad () {
    createTitle();
    createCatchPhrase();
    loadImage();
})();

