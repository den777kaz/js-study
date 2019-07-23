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
            } else {
                clearInterval(updateClock);
                timerHours.textContent = '00';
                timerMinutes.textContent = '00';
                timerSeconds.textContent = '00';


                // timer.hours = '00';
                // timer.minutes = '00';
                // timer.seconds = '00';
            }
        }

        updateClock();

    }
    countTimer('28 July 2019');


    //    togglemenu and modal window

    const toggleMenu = () => {

        const btnMenu = document.querySelector('.menu'),
            menu = document.querySelector('menu'),
            menuItems = menu.querySelectorAll('ul>li>a');

        const handlerMenu = () => {
            menu.classList.toggle('active-menu');
        };

        menu.addEventListener('click', (event) => {
            let target = event.target;

            if(target.classList.contains('close-btn') || target.contains(menuItems)){

                menu.classList.toggle('active-menu');

            } else {

                target = target.matches('menu');
                console.log('target: ', target);

                if(!target){

                    menu.classList.toggle('active-menu');
                    
                }
            }
            console.log('target: ', target);
        });




        btnMenu.addEventListener('click', handlerMenu);
        // closeBtn.addEventListener('click', handlerMenu);
        menuItems.forEach((elem) => elem.addEventListener('click', handlerMenu));
        //    for (let i = 0; i < menuItems.length; i++){
        //        menuItems[i].addEventListener('click', handlerMenu);
        //    }
    };
    toggleMenu();

    // Modal Window

    const togglePopUp = () => {
        const popup = document.querySelector('.popup'),
            popupBtn = document.querySelectorAll('.popup-btn'),
            popupClose = document.querySelector('.popup-close');

        console.log('screen: ', screen.width);


        popupBtn.forEach((item) => {
            item.addEventListener('click', () => {
                popup.style.display = 'block';
                if (screen.width > 500) {
                    popup.animate([{
                            transform: 'translateX(-100%)'
                        },
                        {
                            transform: 'translateX(0)'
                        }
                    ], {
                        duration: 1000,
                        iterations: 1
                    });
                }

            });
        });
        popup.addEventListener('click', (event)=> {
            let target = event.target;

                if (target.classList.contains('popup-close')){

                    popup.style.display = 'none';

                }else {

                    target = target.closest('.popup-content');

                    if(!target){

                        popup.style.display = 'none';

                    }

                }
                
                console.log('target: ', target);
                
        });

        popupClose.addEventListener('click', () => {
            popup.style.display = 'none';

        });

    };
    togglePopUp();


// TABS

    const tabs = () => {
        const tabHeader = document.querySelector('.service-header'),
            tab = document.querySelectorAll('.service-header-tab'),
            tabContent = document.querySelectorAll('.service-tab');

        const toggleTabContent = (index)=> {
            for (let i = 0; i < tabContent.length; i++){
                if (index === i){
                    tab[i].classList.add('active');
                    tabContent[i].classList.remove('d-none');
                }else {
                    tab[i].classList.remove('active');
                    tabContent[i].classList.add('d-none');
                }
            }
        };

            tabHeader.addEventListener('click', (event)=> {

                let target = event.target;
                    target = target.closest('.service-header-tab'); // vozrawaet NULL esli ne nawol ne4ego

                if (target.classList.contains('service-header-tab')){
                    tab.forEach((item, i) => {
                        if(item === target){
                            toggleTabContent(i);
                        }
                    });
                }
            });

    };
    tabs();

});
