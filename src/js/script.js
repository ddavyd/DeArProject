$(document).ready(function(){
     
    $('ul.works__tabs').on('click', 'li:not(.works__tab_active)', function() {
    $(this)
        .addClass('works__tab_active').siblings().removeClass('works__tab_active')
        .closest('div.container').find('div.works__content').removeClass('works__content_active').eq($(this).index()).addClass('works__content_active');
    });
      
    const more = document.querySelectorAll('.works-item__link'),
        content = document.querySelectorAll('.works-item__content'),
        list = document.querySelectorAll('.works-item__list'),
        back = document.querySelectorAll('.works-item__back');

    function toggle(elems) {
        elems.forEach((elem, i) => {
            elem.addEventListener('click', (e) => {
                e.preventDefault();
                content[i].classList.toggle('works-item__content_active');
                list[i].classList.toggle('works-item__list_active');
            });
         });
    }
    toggle(more);
    toggle(back);

   const item = document.querySelectorAll('.services__item'),
            img = document.querySelectorAll('.services__img'),
            imgWhite = document.querySelectorAll('.services__img_white');

    function switchWhite(elems) {
        elems.forEach((elem, i) => {
            elem.addEventListener('mouseover',  () => {
                img[i].classList.toggle('services__img_none');
                imgWhite[i].classList.toggle('services__img_white-show');
            });
        });
        elems.forEach((elem, i) => {
            elem.addEventListener('mouseout', () => {
                img[i].classList.toggle('services__img_none');
                imgWhite[i].classList.toggle('services__img_white-show');
            });
        });
    }
    switchWhite(item);
 // недописанный jquery
    /* $('.services__item').hover( () => {
        $('.services__img').toggleClass('services__img_none');
        $('.services__img_white').toggleClass('services__img_white-show');  
       
    }) */
    
   /*  $('.button').on('click', () => {
        $('.overlay').toggleClass('overlay_active')
        $('.modal').toggleClass('modal_active')
    })
}); */ 

/* let btn = document.querySelectorAll('.button'),
                overlay = document.querySelector('.overlay'),
                modal = document.querySelector('.modal'),
                close = document.querySelectorAll('.modal__close');
 
        function modalAdd(items) {
            items.forEach((item) => {
                item.addEventListener('click', () => {
                    overlay.classList.toggle('overlay_active');
                    modal.classList.toggle('modal_active');
                })
            })
        }
     modalAdd(btn);
     modalAdd(close); */

     $('.button').on('click', () =>{
         $('.overlay').fadeIn('overlay_active');
         $('.modal').fadeIn('modal_active');
     });
     
     $('.modal__close').on('click', () =>{
        $('.overlay').fadeOut('overlay_active');
        $('.modal').fadeOut('modal_active');
    });

    function errorForm(elems){
        $(elems).validate({
            rules: {
               name: "required",
               phone: "required",
               email: {
                required: true,
                email: true
               }
            },
            messages: {
                name: "Пожалуйста, введите свое имя",
                phone: "Пожалуйста, введите свой номер телефона",
                email: {
                  required: "Пожалуйста, введите свою почту",
                  email: "Ваша почта должна быть в формате: name@domain.com"
                }
              }
        });
    }
    errorForm($('#consultation form'));
    errorForm($('#contacts__form'));
    errorForm($('#consultation-form'));

    $('input[name=phone]').mask("+7(999) 999-99-99");
        
    $(window).scroll( function() {
    if ($(this).scrollTop() > 1600 ){
        $('.pageup').fadeIn();
    } else { 
        $('.pageup').fadeOut();
    }
    });

    

});

    