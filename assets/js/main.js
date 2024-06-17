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

    let custom__select = document.querySelector('.custom__select');
    let custom__options = document.querySelectorAll('.custom__options span');
    let custom__input = document.querySelector('#type_tel');
    let custom__text = document.querySelector('.custom__select > span');
    
    custom__select.addEventListener('click', function(e) {
        custom__select.classList.toggle('active');
    });
    
    custom__options.forEach(item => {
        item.addEventListener('click', function(e) {
            let selectedValue = e.target.getAttribute('data-value');
            custom__input.value = selectedValue;
            custom__text.innerHTML = selectedValue;
            
        });
    });

});
let modal = document.querySelector('.modal');
function openModal(){
    modal.classList.add('active');
}