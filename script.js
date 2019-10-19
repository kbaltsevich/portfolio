//materializecss
M.AutoInit();

//swiper
var mySwiper = new Swiper('.swiper-container', {
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

//my scripts

let imgs = document.querySelectorAll('.my-slider__card--img'),
    myModal = document.querySelectorAll('.my-modal'),
    btnsBack = document.querySelectorAll('.my-modal__back'),
    body = document.querySelector('body'),
    btnMobile = document.querySelectorAll('.my-modal__mobile'),
    btnDesktop = document.querySelectorAll('.my-modal__desktop'),
    btnDescription = document.querySelectorAll('.my-slider__description'),
    cardDescription = document.querySelectorAll('.my-slider__card--description');

imgs.forEach((item) => {
    item.addEventListener('click', function () {
        let indicator = this.id;

        myModal.forEach(function (el) {
            if (el.classList.contains(`${indicator}`)) {
                el.classList.remove('hidden');
                body.classList.add('for_body');
                if(el.classList.contains('fade')){
                    el.classList.remove('fade');
                };
                if(el.classList.contains('fadeOut')){
                    el.classList.remove('fadeOut');
                }
                el.classList.add('fade');
                btnMobile.forEach(function (item) {
                    if (item.classList.contains(`${indicator}`)) {
                        item.addEventListener('click', () => {
                            document.querySelector(`.my-modal__frame--${indicator}`).classList.add(`my-modal__frame--mobile--${indicator}`);
                            btnDesktop.forEach(function (btn) {
                                if (btn.classList.contains(`${indicator}`)) {
                                    btn.classList.remove('hidden-btn');
                                }
                            })
                            item.classList.add('hidden-btn');
                        })
                    }
                });

                btnDesktop.forEach(function (item) {
                    if (item.classList.contains(`${indicator}`)) {
                        item.addEventListener('click', () => {
                            document.querySelector(`.my-modal__frame--${indicator}`).classList.remove(`my-modal__frame--mobile--${indicator}`);
                            btnMobile.forEach(function (btn) {
                                if (btn.classList.contains(`${indicator}`)) {
                                    btn.classList.remove('hidden-btn');
                                }
                            })
                            item.classList.add('hidden-btn');
                        })
                    }
                })
            }
        });
    });
});

btnsBack.forEach((item) => {
    item.addEventListener('click', () => {
        body.classList.remove('for_body');
        myModal.forEach(function (el) {
            if (!el.classList.contains('hidden')) {
                if(el.classList.contains('fadeOut')){
                    el.classList.remove('fadeOut');
                }
                if(el.classList.contains('fade')){
                    el.classList.remove('fade');
                };
                el.classList.add('fadeOut');
                el.classList.add('hidden');
            }
        })
    })
})

btnDescription.forEach(function(item, index){
    item.addEventListener('click', ()=>{
        console.log(cardDescription[index]);

        if(!cardDescription[index].classList.contains('show')){
            cardDescription[index].classList.add('show');
        } else {
            cardDescription[index].classList.remove('show');
        }
    })
})