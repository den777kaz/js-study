window.addEventListener('DOMContentLoaded', function () {
    'use strict';
// TIMER
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


    //    togglemenu

    const toggleMenu = () => {
   
        const menu = document.querySelector('menu');

        document.body.addEventListener('click', (event)=> {
            let target = event.target;
           
            if(target.closest('.menu')){

                menu.classList.toggle('active-menu');

            }else if (target.classList.contains('close-btn') || target.matches('a')){
                menu.classList.remove('active-menu');
            }else {
                target = target.closest('menu');
                if(!target){
                    menu.classList.remove('active-menu');
                }
            }

         
          
        });
        
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

// SLIDER

    const slider = () => {

        const slide = document.querySelectorAll('.portfolio-item'),
            btn = document.querySelectorAll('.portfolio-btn'),
            slider = document.querySelector('.portfolio-content'),
            portfolioDots = document.querySelectorAll('.portfolio-dots');

            const createDots = () => {
                slide.forEach((item)=>{
                    let newDot = document.createElement('li');
                    portfolioDots[0].appendChild(newDot);
                    newDot.classList.add('dot');
                });
                
        };
        createDots();
       

        let dot = document.querySelectorAll('.dot');
        dot[0].classList.add('dot-active');

        let currentSlide = 0,
            interval;


        
     

        const nextSlide = (item, index, strClass) => {
            item[index].classList.add(strClass);
        };
        const prevSlide = (item, index, strClass) => {
            // slide[currentSlide].classList.remove('portfolio-item-active');
            item[index].classList.remove(strClass);

        };

        const autoPlay = ()=> {

           prevSlide(slide, currentSlide, 'portfolio-item-active');
            // dots 
            prevSlide(dot, currentSlide, 'dot-active');
            currentSlide++;
            if(currentSlide >= slide.length){
                currentSlide = 0;
            }
            // slide[currentSlide].classList.add('portfolio-item-active');
            nextSlide(slide, currentSlide, 'portfolio-item-active');
            // dots
            nextSlide(dot, currentSlide, 'dot-active');


        };

        const startSlide = (time = 3000)=> {

            interval = setInterval(autoPlay, time);

        };
        

        const stopSlide = ()=> {
            clearInterval(interval);
        };
        slider.addEventListener('click', (event)=> {
            event.preventDefault();
            let target = event.target;

            if(!target.matches('.portfolio-btn, .dot ')){
                return;
            }

            prevSlide(slide, currentSlide, 'portfolio-item-active');
            // dots 
            prevSlide(dot, currentSlide, 'dot-active');

            if(target.matches('#arrow-right')){
                currentSlide ++;
            }else if(target.matches('#arrow-left')){
                currentSlide --;
            }else if(target.matches('.dot')){
                dot.forEach((elem, index) =>{
                    if(elem === target){
                        currentSlide = index;
                    }
                });

            }
            // back to first slide
            if(currentSlide >= slide.length){
                currentSlide = 0;                
            }
            // back to final slide
            if (currentSlide < 0) {
                currentSlide = slide.length -1;
            }

            nextSlide(slide, currentSlide, 'portfolio-item-active');
            // dots
            nextSlide(dot, currentSlide, 'dot-active');
        });

        slider.addEventListener('mouseover', (event) => {
            if(event.target.matches('.portfolio-btn') || event.target.matches('.dot')){
                stopSlide();
            }
        });
        slider.addEventListener('mouseout', (event) => {
            if(event.target.matches('.portfolio-btn') || event.target.matches('.dot')){
                startSlide();
            }
        });

        startSlide(1500);
    };
    slider();
});