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
    countTimer('5 August 2019');


    //    togglemenu

    const toggleMenu = () => {

        const menu = document.querySelector('menu');

        document.body.addEventListener('click', (event) => {
            let target = event.target;

            if (target.closest('.menu')) {

                menu.classList.toggle('active-menu');

            } else if (target.classList.contains('close-btn') || target.matches('a')) {
                menu.classList.remove('active-menu');
            } else {
                target = target.closest('menu');
                if (!target) {
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
        popup.addEventListener('click', (event) => {
            let target = event.target;

            if (target.classList.contains('popup-close')) {

                popup.style.display = 'none';

            } else {

                target = target.closest('.popup-content');

                if (!target) {

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

        const toggleTabContent = (index) => {
            for (let i = 0; i < tabContent.length; i++) {
                if (index === i) {
                    tab[i].classList.add('active');
                    tabContent[i].classList.remove('d-none');
                } else {
                    tab[i].classList.remove('active');
                    tabContent[i].classList.add('d-none');
                }
            }
        };

        tabHeader.addEventListener('click', (event) => {

            let target = event.target;
            target = target.closest('.service-header-tab'); // vozrawaet NULL esli ne nawol ne4ego

            if (target.classList.contains('service-header-tab')) {
                tab.forEach((item, i) => {
                    if (item === target) {
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
            slide.forEach((item) => {
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

        const autoPlay = () => {

            prevSlide(slide, currentSlide, 'portfolio-item-active');
            // dots 
            prevSlide(dot, currentSlide, 'dot-active');
            currentSlide++;
            if (currentSlide >= slide.length) {
                currentSlide = 0;
            }
            // slide[currentSlide].classList.add('portfolio-item-active');
            nextSlide(slide, currentSlide, 'portfolio-item-active');
            // dots
            nextSlide(dot, currentSlide, 'dot-active');


        };

        const startSlide = (time = 3000) => {

            interval = setInterval(autoPlay, time);

        };


        const stopSlide = () => {
            clearInterval(interval);
        };
        slider.addEventListener('click', (event) => {
            event.preventDefault();
            let target = event.target;

            if (!target.matches('.portfolio-btn, .dot ')) {
                return;
            }

            prevSlide(slide, currentSlide, 'portfolio-item-active');
            // dots 
            prevSlide(dot, currentSlide, 'dot-active');

            if (target.matches('#arrow-right')) {
                currentSlide++;
            } else if (target.matches('#arrow-left')) {
                currentSlide--;
            } else if (target.matches('.dot')) {
                dot.forEach((elem, index) => {
                    if (elem === target) {
                        currentSlide = index;
                    }
                });

            }
            // back to first slide
            if (currentSlide >= slide.length) {
                currentSlide = 0;
            }
            // back to final slide
            if (currentSlide < 0) {
                currentSlide = slide.length - 1;
            }

            nextSlide(slide, currentSlide, 'portfolio-item-active');
            // dots
            nextSlide(dot, currentSlide, 'dot-active');
        });

        slider.addEventListener('mouseover', (event) => {
            if (event.target.matches('.portfolio-btn') || event.target.matches('.dot')) {
                stopSlide();
            }
        });
        slider.addEventListener('mouseout', (event) => {
            if (event.target.matches('.portfolio-btn') || event.target.matches('.dot')) {
                startSlide();
            }
        });

        startSlide(1500);
    };
    slider();

    // our team pictures with mouseover replace
    const imageBlock = document.querySelector('.command');

    let changeImage = (target) => {
        let defaultSrc = target.src;
        target.src = target.dataset.img;
        target.dataset.img = defaultSrc;


    };

    imageBlock.addEventListener('mouseover', (event) => {
        let target = event.target;
        if (target.matches('.command__photo')) {

            changeImage(target);

        }

    });
    imageBlock.addEventListener('mouseout', (event) => {
        let target = event.target;
        if (target.matches('.command__photo')) {
            changeImage(target);
        }

    });



    // Calculator .

    const onlyNum = () => {
        const calcInputs = document.querySelectorAll('calc-item-js');

        calcInputs.forEach((item) => {
            item.addEventListener('input', (event) => {
                item.value = item.value.replace(/[^0-9]/ig, '');
            });
        });

    };
    onlyNum();

    const calc = (price = 100) => {

        const calcBlock = document.querySelector('.calc-block'),
            calcType = document.querySelector('.calc-type'),
            calcSquare = document.querySelector('.calc-square'),
            calcDay = document.querySelector('.calc-day'),
            calcCount = document.querySelector('.calc-count'),
            totalValue = document.getElementById('total');


        const countSum = () => {
            let total = 0,
                countValue = 1,
                dayValue = 1;

            const typeValue = calcType.options[calcType.selectedIndex].value,
                squareValue = +calcSquare.value;
            // console.log('typeValue: ', typeValue);

            if (calcCount.value > 1) {
                countValue += (calcCount.value - 1) / 10;
            }

            if (calcDay.value && calcDay.value < 5) {
                dayValue *= 2;
            } else if (calcDay.value && calcDay.value < 10) {
                dayValue *= 1.5;
            }


            if (typeValue && squareValue) {
                total = price * typeValue * squareValue * countValue * dayValue;
            }

            totalValue.textContent = total;
        };

        calcBlock.addEventListener('change', (event) => {
            const target = event.target;
            if (target.matches('select') || target.matches('input')) {
                countSum();

            }
        });

    };
    calc(100);

    
    // SEND - AJAX  -FORM

    const sendForm = () => {

        //validation

        const inputs = document.querySelectorAll('input');
        console.log('inputs: ', inputs);

        inputs.forEach((item)=>{
            if(item.type === 'tel'){
                console.log('item: ', item);
                const regTel = /\D/ig;
                item.addEventListener('input', ()=>{
                    item.value = item.value.replace(regTel, '');
                });              
                
            }else if(item.type === 'text' || item.type === 'mess'){
                const regText = /\w\S/ig;
                item.addEventListener('input', ()=>{
                    item.value = item.value.replace(regText, '');
                });              
            }
        });

   

        const errorMessage = 'Something was wrong',
            loadMessage = 'Loading...',
            successMessage = 'thank you! We will contact you shortly!';

        const form = document.getElementById('form1'),
            formFooter = document.getElementById('form2'),
            formPopup = document.getElementById('form3');

        const statusMessage = document.createElement('div');
        statusMessage.textContent = '';
        statusMessage.style.cssText = 'font-size: 2rem;';

        formFooter.addEventListener('submit', (event) => {
            event.preventDefault();
            statusMessage.style.cssText = 'color: white;';
            formFooter.appendChild(statusMessage);
            statusMessage.textContent = loadMessage;
            const formData = new FormData(formFooter);

            let body = {};
            formData.forEach((val, key) => {
                body[key] = val;
            });

            postData(body, () => {
                statusMessage.textContent = successMessage;
            }, (error) => {
                statusMessage.textContent = errorMessage;
                console.error(error);
            });
            formFooter.reset();
        });
        formPopup.addEventListener('submit', (event) => {
            event.preventDefault();
            statusMessage.style.cssText = 'color: white;';
            formPopup.appendChild(statusMessage);
            statusMessage.textContent = loadMessage;
            const formData = new FormData(formPopup);

            let body = {};
            formData.forEach((val, key) => {
                body[key] = val;
            });

            postData(body, () => {
                statusMessage.textContent = successMessage;
            }, (error) => {
                statusMessage.textContent = errorMessage;
                console.error(error);
            });
            formPopup.reset();
        });
        form.addEventListener('submit', (event) => {
            event.preventDefault();
            form.appendChild(statusMessage);
            statusMessage.textContent = loadMessage;
            const formData = new FormData(form);

            let body = {};
            formData.forEach((val, key) => {
                body[key] = val;
            });

            // for (let val of formData.entries()){
            //     console.log('let: ', val);
            //     body[val[0]] = val[1];

            // }
            postData(body, () => {
                statusMessage.textContent = successMessage;
            }, (error) => {
                statusMessage.textContent = errorMessage;
                console.error(error);
            });
            form.reset();
        });

        const postData = (body, outputData, errorData) => {
            const request = new XMLHttpRequest();

            request.addEventListener('readystatechange', () => {

                if (request.readyState !== 4) {
                    return;
                }
                if (request.status === 200) {
                    outputData();

                } else {
                    errorData();
                }
            });

            request.open('POST', './server.php');
            request.setRequestHeader('Content-Type', 'application/json');
            // request.setRequestHeader('Content-Type', 'multipart/form-data');

            console.log(body);

            request.send(JSON.stringify(body));
            // request.send(formData);
        };

    };
    sendForm();
});