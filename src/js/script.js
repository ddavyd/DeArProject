      // табы

      $('ul.works__tabs').on('click', 'li:not(.works__tab_active)', function() {
        $(this)
          .addClass('works__tab_active').siblings().removeClass('works__tab_active')
          .closest('div.container').find('div.works__content').removeClass('works__content_active').eq($(this).index()).addClass('works__content_active');
      });

      // модальные окна

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
     
    