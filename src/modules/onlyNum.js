
   const onlyNum = () => {
    const calcInputs = document.querySelectorAll('calc-item-js');

    calcInputs.forEach((item) => {
        item.addEventListener('input', (event) => {
            item.value = item.value.replace(/[^0-9]/ig, '');
        });
    });

};
export default onlyNum;