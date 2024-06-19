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
            body.classList.remove('locked');

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
    

  

    let radio__tel = document.querySelectorAll('.custom__radio div span');
    let radio__input = document.querySelector('#radio__tel');
    
    radio__tel.forEach(item => {
        item.addEventListener('click', function(e) {
            let selectedValue = e.target.getAttribute('data-value');
            radio__input.value = selectedValue;
            radio__tel.forEach(el => el.classList.remove('active'));
            e.target.classList.add('active');
        });
    });
    
    let questions = document.querySelectorAll('.question');

    questions.forEach(item => {
        item.addEventListener('click', function(e) {
            questions.forEach(el => el.classList.remove('active'));
            item.classList.add('active');
        });
    });



    
            const inputs = document.querySelectorAll('input[type="tel"]');
            
            inputs.forEach(input => {
                input.addEventListener('input', function (e) {
                    let value = e.target.value.replace(/\D/g, ''); // Удаляем все нецифровые символы
                    let formattedValue = '+';
                    
                    if (value.length > 0) {
                        formattedValue += value.substring(0, 1);
                    }
                    if (value.length > 1) {
                        formattedValue += ' (' + value.substring(1, 4);
                    }
                    if (value.length > 4) {
                        formattedValue += ') ' + value.substring(4, 7);
                    }
                    if (value.length > 7) {
                        formattedValue += ' - ' + value.substring(7, 9);
                    }
                    if (value.length > 9) {
                        formattedValue += ' - ' + value.substring(9, 11);
                    }
                    
                    e.target.value = formattedValue;
                });
                
                input.addEventListener('keydown', function (e) {
                    // Разрешить только цифры, клавиши управления и некоторые специальные клавиши
                    const allowedKeys = ['Backspace', 'ArrowLeft', 'ArrowRight', 'Delete'];
                    if ((e.key >= '0' && e.key <= '9') || allowedKeys.includes(e.key)) {
                        return true;
                    }
                    e.preventDefault();
                });
            });
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function (e) {
                    e.preventDefault();
                    
                    const targetId = this.getAttribute('href').substring(1);
                    const targetElement = document.getElementById(targetId);
                    
                    if (targetElement) {
                        window.scrollTo({
                            top: targetElement.offsetTop,
                            behavior: 'smooth'
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

let form = document.querySelectorAll('form');
form.forEach(item => {



    item.addEventListener("submit", function(event) {
        event.preventDefault();

        var form = event.target;
        var formData = new FormData(form);

        var xhr = new XMLHttpRequest();
        xhr.open("POST", "send_email.php", true);
        xhr.onreadystatechange = function() {
            if (xhr.readyState == 4 && xhr.status == 200) {
                var response = JSON.parse(xhr.responseText);
                if (response.status === 'success') {
                 
                    openModal("thanks");
                } else {
                    alert("Произошла ошибка при отправке заявки. Пожалуйста, попробуйте снова.");
                }
            }
        };
        xhr.send(formData);
    });
});



