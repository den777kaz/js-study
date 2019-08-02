const togglePopUp = () => {
    const popup = document.querySelector('.popup'),
        popupBtn = document.querySelectorAll('.popup-btn'),
        popupClose = document.querySelector('.popup-close');

    // console.log('screen: ', screen.width);


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

        

    });

    popupClose.addEventListener('click', () => {
        popup.style.display = 'none';

    });

};
export default togglePopUp;