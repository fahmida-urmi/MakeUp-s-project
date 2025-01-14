
let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{

   
    shoppingCart.classList.remove("active");
    loginForm.classList.remove("active");
    searchForm.classList.toggle('active');
    navBar.classList.remove('active');
}



let shoppingCart = document.querySelector('.shopping-carts');

document.querySelector('#cart-btn').onclick = () =>{
    
    searchForm.classList.remove("active");
    loginForm.classList.remove("active");
    shoppingCart.classList.toggle('active');
    navBar.classList.remove('active');
}



let loginForm = document.querySelector('.login-form');

document.querySelector('#login-btn').onclick = () =>{


    searchForm.classList.remove("active");
    shoppingCart.classList.remove("active");
    loginForm.classList.toggle('active');
    navBar.classList.remove('active');
}




let navBar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{

    searchForm.classList.remove("active");
    shoppingCart.classList.remove("active");
    loginForm.classList.remove('active');
    navBar.classList.toggle('active');
}


window.onscroll = () =>{
    searchForm.classList.remove("active");
    shoppingCart.classList.remove("active");
    navBar.classList.remove('active');
    loginForm.classList.remove("active");
}

let slides = document.querySelectorAll('.home .slide');
let index = 0;

function next() {

 slides[index].classList.remove('active');
 index = (index + 1) % slides.length;
 slides[index].classList.add('active');

}


function prev() {

    slides[index].classList.remove('active');
    index = (index - 1 + slides.length) % slides.length;
    slides[index].classList.add('active');
   
   }


   /*
  var swiper = new Swiper(".product-slider", {
    
    spaceBetween: 30,
    loop:true,
    speed:1000,
    autoplay:{
      delay:3000,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      600: {
        slidesPerView: 1,
       
      },
      778: {
        slidesPerView: 2,
       
      },
      992: {
        slidesPerView: 2,
       
      },
      1200: {
        slidesPerView: 2,
        
      },
    },
  });
*/
  