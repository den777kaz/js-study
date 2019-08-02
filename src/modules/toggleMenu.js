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
export default toggleMenu;