
const burger = document?.querySelector('.burger');

const nav = document?.querySelector('.header__nav');

const logo = document?.querySelector('.header__logo');



const body = document?.body;

burger.addEventListener('click',()=>{
  disableScroll();
  burger?.classList.toggle('burger--active');
  nav?.classList.toggle('header__nav--visible');
  logo?.classList.toggle('header__logo--visible');


})

function disableScroll(){
  if(body.classList.contains('dis-scroll')){
    body.classList.remove('dis-scroll');
  }
  else{
  body.classList.add('dis-scroll');
  }
}
