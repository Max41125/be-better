document.addEventListener('DOMContentLoaded', function(){

    let BurgerButton = document.querySelector('.burger');
    let Submenu = document.querySelector('.submenu');

    BurgerButton.addEventListener('click', function(){
        BurgerButton.classList.toggle('active');
        Submenu.classList.toggle('active');
    })

});