var front = document.getElementsByClassName('reserve_front')[0];


if (front) {

    console.log('u have reserve_front');

    front.addEventListener('mouseenter', () => {
        setTimeout(() => {
            front.classList.replace('reserve_front', 'reserve_back');
            console.log('front to back work');
        }, 1000)
    })
    

    front.addEventListener('mouseleave', () => {
        setTimeout(() => {
            front.classList.replace('reserve_back', 'reserve_front');
            console.log('back to front work');
        }, 1000)
    })
};