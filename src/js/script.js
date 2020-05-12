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
                e.preventDefault()
                content[i].classList.toggle('works-item__content_active');
                list[i].classList.toggle('works-item__list_active');
            })
         })
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
            })
        })
        elems.forEach((elem, i) => {
            elem.addEventListener('mouseout', () => {
                img[i].classList.toggle('services__img_none');
                imgWhite[i].classList.toggle('services__img_white-show');
            })
        })
    }
    switchWhite(item);
 // недописанный jquery
    /* $('.services__item').hover( () => {
        $('.services__img').toggleClass('services__img_none');
        $('.services__img_white').toggleClass('services__img_white-show');  
       
    }) */
 
}); 
     


    