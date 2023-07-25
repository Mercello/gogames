// const navBtn = document.querySelector('.nav__burger-btn');
// const navIcon = document.querySelector('.burger-icon');
// const nav = document.querySelector('.header__top-row');


// navBtn.onclick = function () {
//     navIcon.classList.toggle('burger-icon--active');
//     nav.classList.toggle('header__top-row--mobile');
//     document.body.classList.toggle('no-scroll');
// }

// mask('[data-tel-input]');

// const phoneInputs = document.querySelectorAll('[data-tel-input]');

// phoneInputs.forEach((input) => {
//     input.addEventListener('input', () => {
//         if (input.value == '+') input.value = '';
//     })
//     input.addEventListener('blur', () => {
//         if (input.value == '+') input.value = '';
//     })
// });

(function () {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav');
  const navList = document.querySelector('.nav__list');
  const backColor = document.querySelector('.back-color');
  const disScroll = document.querySelector('body');
  
  burger.addEventListener('click', function(e) {
    this.classList.toggle('burger--active');
    nav.classList.toggle('nav--active');
    navList.classList.toggle('nav__list--active');
    backColor.classList.toggle('back-color--active');
    disScroll.classList.toggle('dis-scroll');
  });
})();