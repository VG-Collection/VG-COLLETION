let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    cartItem.classList.remove('active');
}

let cartItem = document.querySelector('.paintings-container');

document.querySelector('#painting-btn').onclick = () =>{
    cartItem.classList.toggle('active');
    navbar.classList.remove('active');
    
}