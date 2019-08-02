'use strict';
import '@babel/polyfill';
import 'nodelist-foreach-polyfill';
import elementClosest from 'element-closest';
elementClosest(window);
import 'formdata-polyfill';
import 'es6-promise';
import 'fetch-polyfill';

import countTimer from './modules/countTimer';
import toggleMenu from './modules/toggleMenu';
import togglePopUp from './modules/togglePopUp';
import tabs from './modules/tabs';
import slider from './modules/slider';
import mouseOver from './modules/mouseOver';
import onlyNum from './modules/onlyNum';
import calc from './modules/calc';
import validation from './modules/validation';
import sendForm from './modules/sendForm';



// TIMER
countTimer('5 August 2019');

//    togglemenu
toggleMenu();

// Modal Window
togglePopUp();

// TABS
tabs();

// SLIDER
slider();

// our team pictures with mouseover replace
mouseOver();

// Calculator .
onlyNum();
calc(100);

//validation
validation();

// SEND - AJAX  -FORM
const form = document.getElementById('form1'),
     formFooter = document.getElementById('form2'),
     formPopup = document.getElementById('form3');
sendForm(form);
sendForm(formFooter);
sendForm(formPopup);