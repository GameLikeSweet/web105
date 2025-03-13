document.addEventListener("DOMContentLoaded", () => {
  var exItems = document.querySelectorAll('.ex'); // 모든 ex 요소 가져오기
  var expansionItems = document.querySelectorAll('.expansion'); // 모든 expansion 요소 가져오기

  // 모든 expansion 숨기기 (초기 상태)
  expansionItems.forEach(exp => exp.style.display = "none");

  // 각 ex 요소에 대해 이벤트 추가
  exItems.forEach((ex, index) => {
      ex.addEventListener("mouseenter", () => {
          // 모든 expansion 숨기고, 현재 index의 expansion만 보이게 하기
          expansionItems.forEach(exp => exp.style.display = "none");
          if (expansionItems[index]) {
              expansionItems[index].style.display = "block";
          }
      });

      ex.addEventListener("mouseleave", () => {
          if (expansionItems[index]) {
              expansionItems[index].style.display = "none";
          }
      });

      // expansion에도 마우스 올려두면 유지 (마우스 올린 후 메뉴를 클릭할 수 있도록)
      if (expansionItems[index]) {
          expansionItems[index].addEventListener("mouseenter", () => {
              expansionItems[index].style.display = "block";
          });

          // expansion에서 벗어나면 숨기기
          expansionItems[index].addEventListener("mouseleave", () => {
              expansionItems[index].style.display = "none";
          });
      }
  });
});
