window.addEventListener('DOMContentLoaded', function () {
    'use strict';
    // timer
    // Bad Code
    // function countTimer (deadline){
    //     let timerHours = document.querySelector('#timer-hours'),
    //         timerMinutes = document.querySelector('#timer-minutes'),
    //         timerSeconds = document.querySelector('#timer-seconds'),
    //         dateStop = new Date(deadline).getTime(),
    //         dateNow = new Date ().getTime(),
    //         timeRemaining = (dateStop - dateNow) / 1000,
    //         seconds = Math.floor(timeRemaining % 60),
    //         minutes = Math.floor((timeRemaining / 60) % 60),
    //         hours = Math.floor(timeRemaining / 60 / 60);
    //         // esli nado dni vivesti ,  haurs nadi % 24 !!!!!!
    //         // days = Math.floor(timeRemaining / 60 / 60 / 24);
    //         // console.log('days: ', days);

    //         timerHours.textContent = hours;
    //         timerMinutes.textContent = minutes;
    //         timerSeconds.textContent = seconds;


    // }
    // // countTimer('25 July 2019');

    // setInterval(countTimer, 1000, '25 July 2019');

    // good Code!!!
    function countTimer(deadline) {

        let timerHours = document.querySelector('#timer-hours'),
            imerMinutes = document.querySelector('#timer-minutes'),
            timerSeconds = document.querySelector('#timer-seconds');


        function getTimeRemaining() {

            let dateStop = new Date(deadline).getTime(),
                dateNow = new Date().getTime(),
                timeRemaining = (dateStop - dateNow) / 1000,
                seconds = Math.floor(timeRemaining % 60),
                minutes = Math.floor((timeRemaining / 60) % 60),
                hours = Math.floor(timeRemaining / 60 / 60);

        }
    }




});