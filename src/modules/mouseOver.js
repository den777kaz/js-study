const mouseOver = () => {
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
};
export default mouseOver;