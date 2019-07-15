'use strict';

function DomElement(selector, height, width, bg, fontsize) {
    this.selector = selector;
    this.height = height;
    this.width = width;
    this.bg = bg;
    this.fontsize = fontsize;
}
let ask = prompt('Please enter . or #');

DomElement.prototype.create = function () {
    let figur = document.createElement('div');
    let textField = document.createElement('div');

    if (this.selector === '.') {
        figur.style.cssText = `height:${this.height}px; width:${this.width}px; background-color: ${this.bg}; font-size: ${this.fontsize}px;`;
        figur.textContent = 'Hallo World';
        document.body.appendChild(figur);

    }

    if (this.selector === '#') {

        textField.style.cssText = `height:${this.height}px; width:${this.width}px; background-color: ${this.bg}; font-size: ${this.fontsize}px;`;
        textField.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, error.';
        document.body.appendChild(textField);

    }
    console.log('figur: ', figur);
};


let options = new DomElement(ask, 150, 350, 'red', 25);


options.create();