const validation = ()=> {
    const inputs = document.querySelectorAll('input');


    inputs.forEach((item) => {
        if (item.type === 'tel') {
            // console.log('item: ', item);
            const regTel = /[^\+0-9]/ig;
            item.addEventListener('input', () => {
                item.value = item.value.replace(regTel, '');
            });

        } else if (item.type === 'text' || item.type === 'mess') {
            const regText = /\w\S/ig;
            item.addEventListener('input', () => {
                item.value = item.value.replace(regText, '');
            });
        }
    });
};
export default validation;