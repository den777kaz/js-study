window.addEventListener('DOMContentLoaded', function () {
    'use strict';
    function countTimer(deadline) {

        let timerHours = document.querySelector('#timer-hours'),
            timerMinutes = document.querySelector('#timer-minutes'),
            timerSeconds = document.querySelector('#timer-seconds');


        function getTimeRemaining() {
            let dateStop = new Date(deadline).getTime(),
                dateNow = new Date().getTime(),
                timeRemaining = (dateStop - dateNow) / 1000,
                seconds = Math.floor(timeRemaining % 60),
                minutes = Math.floor((timeRemaining / 60) % 60),
                hours = Math.floor(timeRemaining / 60 / 60);

            return {
                timeRemaining,
                hours,
                minutes,
                seconds
            };
        }

        function updateClock() {
            let timer = getTimeRemaining();

            timerHours.textContent = ('0' + timer.hours).slice(-2);
            timerMinutes.textContent = ('0' + timer.minutes).slice(-2);
            timerSeconds.textContent = ('0' + timer.seconds).slice(-2);

            if (timer.timeRemaining > 0) {
                setInterval(updateClock, 1000);
            }else {
                clearInterval(updateClock);
                timerHours.textContent ='00';
                timerMinutes.textContent = '00';
                timerSeconds.textContent = '00';


                // timer.hours = '00';
                // timer.minutes = '00';
                // timer.seconds = '00';
            }
        }

        updateClock();

    }
    countTimer('21 July 2019');
});


// let today = new Date();
// today.setHours(0, 0, 10, 0);
// console.log('today: ', today);