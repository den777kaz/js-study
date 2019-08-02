
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

    export default slider;