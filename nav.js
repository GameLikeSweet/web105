var flip = document.getElementsByClassName('flip')[0];

if (flip) {
    flip.addEventListener('focus',
        () => {
            flip.placeholder = '통합검색'
            flip.classList.replace('flip', 'open')
        }
    )
};

flip.addEventListener('blur', () => {
    flip.classList.replace('open', 'flip');
    flip.placeholder = 'search'
});


var exItems = document.querySelectorAll('.ex');
var expansionItems = document.querySelectorAll('.expansion');

if (exItems.length === expansionItems.length) {
    exItems.forEach((ex, index) => {
        ex.addEventListener("mouseenter", () => {
            expansionItems[index].style.display = "block";
        });

        ex.addEventListener("mouseleave", () => {
            expansionItems[index].style.display = "none";

            expansionItems[index].addEventListener("mouseenter",
                () => { expansionItems[index].style.display = 'block' });

            expansionItems[index].addEventListener("mouseleave",
                () => { expansionItems[index].style.display = 'none' });
        });
    });
}


var notices = document.querySelector('.notices');



