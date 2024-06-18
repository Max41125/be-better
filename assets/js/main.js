document.addEventListener('DOMContentLoaded', function(){
    Fancybox.bind()
    let body = document.querySelector('body');
    let BurgerButton = document.querySelector('.burger');
    let Submenu = document.querySelector('.submenu');

    BurgerButton.addEventListener('click', function(){
        BurgerButton.classList.toggle('active');
        Submenu.classList.toggle('active');
        body.classList.toggle('locked');
    });

    let li = Submenu.querySelectorAll('li');
    li.forEach(item => {

        item.addEventListener('click', function(){

            BurgerButton.classList.toggle('active');
            Submenu.classList.toggle('active');

        });


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
    let modalAll = document.querySelectorAll('.modal');

    modalAll.forEach(modal => {
        modal.addEventListener('click', function(event) {
            let close = modal.querySelector('.modal__close');
            if ( modal.classList.contains('active') ) {
    
                if (event.target === modal) {
                    modal.classList.remove('active');
                    body.classList.remove('locked');
                }
                close.addEventListener('click', function() {

                    modal.classList.remove('active');
                    body.classList.remove('locked');

                });

            }
    
        });
    });
    
});



let body = document.querySelector('body');
let modal = document.querySelector('.modal');

function openModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.classList.add('active');
    body.classList.add('locked');
  }