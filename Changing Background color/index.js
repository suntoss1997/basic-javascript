const colorBtn=document.querySelector('.colorBtn');
const bgColor=document.querySelector('body');
const colors=["red", "yellow", "blue", "green", "orange"];

colorBtn.addEventListener('click', changeColor);
function changeColor(){
  let random=Math.floor(Math.random()*colors.length);
  bgColor.style.backgroundColor=colors[random];
}