//declaring the const variables for the button selection //
const btn1 = document.querySelector('.btn-1');
const btn2 = document.querySelector('.btn-2');


btn2.addEventListener('click' , display)
function display() {
  alert("All the Best for next Year and hope You get selected until there is another scam next year")
}


    btn1.addEventListener('mouseover', moveButton);
    btn1.addEventListener('click', moveButton);

    function moveButton() {
      const x = Math.random() * (window.innerWidth - btn1.clientWidth);
      const y = Math.random() * (window.innerHeight - btn1.clientHeight);

      btn1.style.left = `${x}px`;
      btn1.style.top = `${y}px`;
    }