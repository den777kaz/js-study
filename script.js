'use strict';



let allBooks = document.querySelectorAll('.books');
let book = document.querySelectorAll('.book');
let headText = document.querySelectorAll('h2');
let links = document.querySelectorAll('a');
let newHeadText = document.createElement('h2');
let list = document.querySelectorAll('ul');
let li = document.querySelectorAll('li');


//smena teksta
links[4].setAttribute('id', 'text');
let text4 = document.querySelector('#text');
text4.textContent= 'Книга 3. this и Прототипы Объектов';

// sortirovka
allBooks[0].insertBefore(book[2], null);
allBooks[0].insertBefore(book[1], book[0]);
allBooks[0].insertBefore(book[4], book[3]);

// smena fona (kartinki)
let bg = document.querySelector('body');
bg.style.backgroundImage = 'url(./image/you-dont-know-js.jpg)';

//udalit reklamu (sprjatat)
let advBanner = document.querySelector('.adv');
advBanner.style.display = 'none';


//dobavlenie li v 6 knigu
let newChapter = document.createElement('li');
newChapter.textContent = 'Глава 8: За пределами ES6';
list[2].appendChild(newChapter);

list[2].insertBefore(li[10], null);

// porjadok 2 (0) i 5(5) kniga 

list[5].insertBefore(li[50], li[48]);
list[5].insertBefore(li[49], li[50]);
list[5].insertBefore(li[55], li[49]);

list[0].insertBefore(li[2], null);
list[0].insertBefore(li[8], li[4]);
list[0].insertBefore(li[6], li[8]);





console.log(list, li);