document.addEventListener('DOMContentLoaded', function(){

    let BurgerButton = document.querySelector('.burger');
    let Submenu = document.querySelector('.submenu');

    BurgerButton.addEventListener('click', function(){
        BurgerButton.classList.toggle('active');
        Submenu.classList.toggle('active');

    });

    let li = Submenu.querySelectorAll('li');
    li.forEach(item => {

        item.addEventListener('click', function(){

            BurgerButton.classList.toggle('active');
            Submenu.classList.toggle('active');

        });


    });
    let modal = document.querySelector('.modal');
    let close = document.querySelector('.modal__close');


    close.addEventListener('click', function() {
        modal.classList.remove('active');
    });

    modal.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.classList.remove('active');
        }
    });



});
let modal = document.querySelector('.modal');
function openModal(){
    modal.classList.add('active');
}