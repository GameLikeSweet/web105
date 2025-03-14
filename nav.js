var exItems = document.querySelectorAll('.ex');
var expansionItems = document.querySelectorAll('.expansion');

if (exItems.length === expansionItems.length) {
    exItems.forEach((ex, index) => {
        ex.addEventListener("mouseenter", () => {
            expansionItems[index].style.display = "block";
        });

        ex.addEventListener("mouseleave", () => {
            expansionItems[index].style.display = "none";
        });
    });
}


var notices = document.querySelector('.notices');

let index = 0;

if (notices != undefined) {
    let p = document.createElement('p');
    let text = ['[당첨자 발표] 뉴이어 전자영수증 이벤트', '크리스마스 & 연말연시 스타벅스 매장 영업시간 변경 안내'
        , '[당첨자 발표] 2021 스타벅스 플래너 영수증 이벤트'
    ];



    p.textContent = text[index];
    notices.appendChild(p);
    
    function updateText() {
        p.textContent = text[index];
        index = (index + 1) % text.length;
    }

    updateText();
    setInterval(updateText, 2000);
}


