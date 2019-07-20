
function count (){
    let date = new Date(),
    lifetime = document.querySelector('#lifetime'),
    day = document.querySelector('#day'),
    halloDay = document.querySelector('#hallo'),
    newYear = document.querySelector('#new-year');


    
    

// Добрый день (утро, вечер, ночь в зависимости от времени суток)
// privetstvie
function hallo () {
   

    let time = date.getHours();
    
    if(time >= 5 && time < 12){
        halloDay.innerHTML = 'доброе утро';
    }else if (time >= 12 && time < 18){
        halloDay.innerHTML = 'добрый день';
        
    }else if (time >= 18 && time >= 23 ){
        halloDay.innerHTML = 'добрый вечер ';
    }else if (time >= 0  && time <= 4 ){
        
        halloDay.innerHTML =  'добрая ночь  :)';
    }
}
hallo();

function currentTime (){
let currentTime = ('0' + date.getHours()).slice(-2) + ':' + ('0' + date.getMinutes()).slice(-2) + ':' + ('0' + date.getSeconds()).slice(-2);
lifetime.innerHTML = `<p id=lifetime>Time: ${currentTime}</p>`;

let currentDay = date.getDay();

const weekday = [];


weekday[0] = 'Воскресенье';
weekday[1] = 'Понедельник (';
weekday[2] = 'Вторник';
weekday[3] = 'Среда';
weekday[4] = 'Четверг';
weekday[5] = 'Пятница';
weekday[6] = 'Суббота';

day.innerHTML = `<p id=current-day>Day: ${weekday[currentDay]}</p>`;

}
currentTime();



// До нового года осталось 175 дней

function happyNewYear(deadline){

let dayNow = date.getTime();
let dayStop = new Date(deadline).getTime(); 
let daysLeft= Math.floor((dayStop - dayNow) / 1000 / 60 / 60 / 24);
newYear.innerHTML = `<p id=lifetime>Happy New Year: ${daysLeft}</p>`;

if (daysLeft <= 0){
clearTimeout(happyNewYear);
}

}
  
setTimeout(happyNewYear, 1000, '31 December 2019');




}

setInterval(count, 1000);