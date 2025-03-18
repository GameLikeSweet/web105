var front = document.querySelector('.reserve_front');
var back = document.querySelector('.reserve_back');

front.addEventListener('mouseover', mouse_in);
back.addEventListener('mouseout', mouse_out);

function mouse_in () {
    front.style.display = 'none';
    back.style.display = 'flex';
}

function mouse_out () {
    front.style.display = 'flex';
    back.style.display = 'none';
}