$(document).ready(function() {
    $('.comments__carousel').slick({
        prevArrow: '<button type="button" class="slick-prev"><span class="icon-back"></span></button>',
        nextArrow: '<button type="button" class="slick-next"><span class="icon-next"></span></button>',
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '10px',
        responsive: [
            {
                breakpoint: 1140,
                settings: {
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 992,
                settings: {
                    arrows: false,
                    slidesToShow: 1,
                    dots: true
                }
            }
        ] 
    });
    
    $(".check__hover").hover(function() {
        $(this).closest(".check").css({ 'background-position': 'center -1122px' });
    }, function(){
        $(this).closest(".check").css({ 'background-position': 'center -0' });
    });
    

    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });
    
    //pageUP
    $("a[href^='#']").click(function(){
        const _href = $(this).attr("href");
        $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
        return false;
    });
    
    $(window).scroll(function() {
        if ($(this).scrollTop() > 1600) {
            $('.pageup').fadeIn();
        } else {
            $('.pageup').fadeOut();
        }
    });

    //validate 
    $('input[name=phone]').mask("+7 (999) 999-9999");
//map
    var map;


    DG.then(function () {
    map = DG.map('map', {
        center: [56.29930981, 43.86913508],
        zoom: 17
    });
    var myIcon = DG.icon({
        iconUrl: 'img/marker.svg',
        iconRetinaUrl: 'img/marker.svg',
        className: 'marker-map',
        iconSize: [33, 33],
        iconAnchor: [16, 45]
    });
    DG.marker([56.29917885, 43.86831433], {icon: myIcon}).addTo(map);
    });

//modal

    $('[data-modal=consultation]').on('click', function() {
        $('.overlay, #consultation').fadeIn();
    });

    $('.btn_comment').on('click', function() {
        $('.overlay, #comment').fadeIn();
    });
    $('.legal').on('click', function() {
        $('.overlay, #legal').fadeIn();
    });
    $('.tech').on('click', function() {
        $('.overlay, #tech').fadeIn();
    });
    $('.return').on('click', function() {
        $('.overlay, #return').fadeIn();
    });

    $('.modal__close').on('click', function() {
        $('.overlay, #consultation, #thanks, #legal, #tech, return').fadeOut();
    });

    $(".overlay").on('click', function (e) {
        if (e.target == this) $(".modal, .overlay").fadeOut('fast');
    })

    $('#consultation form').validate({
        rules: {
            name: {
                required: true,
            },
            phone: "required",
            email: {
                required: true,
                email: true
            }
        },
        messages: {
            name: {
                required: "Пожалуйста, введите свое имя",
                },
            phone: "Пожалуйста, введите свой номер телефона",
            email: {
                required: "Пожалуйста, введите свою почту",
                email: "Неправильно введен адрес почты"
            }
        },
            submitHandler: function(form) {
                $.ajax({
                type: "POST",
                url: "mailer/smart.php",
                data: $('#consultation form').serialize()
            }).done(function() {
                $('#consultation, #comment').fadeOut();
                $('.overlay, #thanks').fadeIn('slow');

                $(form).trigger('reset');
            });
            return false;
        }
    });

    $('#main-form').validate({
        rules: {
            name: {
                required: true,
            },
            phone: "required",
            email: {
                required: true,
                email: true
            }
        },
        messages: {
            name: {
                required: "Пожалуйста, введите свое имя",
                },
            phone: "Пожалуйста, введите свой номер телефона",
        },
        submitHandler: function(form) {
            $.ajax({
            type: "POST",
            url: "mailer/smart.php",
            data: $('#main-form').serialize()
        }).done(function() {
            $('.overlay, #thanks').fadeIn('slow');

            $(form).trigger('reset');
        });
        return false;
        }
    });

    $('#comment form').validate({
        rules: {
            name: {
                required: true,
            },
            phone: "required",
            email: {
                required: true,
                email: true
            }
        },
        messages: {
            name: {
                required: "Пожалуйста, введите свое имя",
                },
            phone: "Пожалуйста, введите свой номер телефона",
            email: {
                required: "Пожалуйста, введите свою почту",
                email: "Неправильно введен адрес почты"
            }
        },
        submitHandler: function(form) {
            $.ajax({
            type: "POST",
            url: "mailer/smart.php",
            data: $('#comment form').serialize()
        }).done(function() {
            $('#consultation, #comment').fadeOut();
            $('.overlay, #thanks').fadeIn('slow');

            $(form).trigger('reset');
        });
        return false;
        }
    });
    
});   

       window.addEventListener('DOMContentLoaded', () => {
            const menu = document.querySelector('.promo__nav'),
            menuItem = document.querySelectorAll('.promo__navi'),
            hamburger = document.querySelector('.hamburger');
            over = document.querySelector('.promo__over');
        
            hamburger.addEventListener('click', () => {
                hamburger.classList.toggle('hamburger_active');
                menu.classList.toggle('promo__nav_active');
                over.classList.toggle('promo__over_active');
            });
            over.addEventListener('click', () => {
                hamburger.classList.toggle('hamburger_active');
                menu.classList.toggle('promo__nav_active');
                over.classList.toggle('promo__over_active')
            })
        
            menuItem.forEach(item => {
                item.addEventListener('click', () => {
                    hamburger.classList.toggle('hamburger_active');
                    menu.classList.toggle('promo__nav_active');
                    over.classList.toggle('promo__over_active');
                })
            })

        });

        $(function () {
            window.sr = ScrollReveal({
                mobile: false
            });
            ScrollReveal().reveal('h1', {
                origin: 'left',
                distance: '500px',
                duration: 1000,
                viewFactor: 0.4
            });
            ScrollReveal().reveal('.promo__subtitle', {
                origin: 'left',
                distance: '500px',
                duration: 1000,
                viewFactor: 0.4
            });
            ScrollReveal().reveal('.title', {
                origin: 'bottom',
                distance: '100px',
                duration: 800,
                viewFactor: 0.4
            });
            ScrollReveal().reveal('.subtitle', {
                origin: 'bottom',
                distance: '50px',
                duration: 800,
                viewFactor: 0.4,
                delay: 200
            });
            ScrollReveal().reveal('.advantages__item', {
                origin: 'bottom',
                distance: '100px',
                duration: 800,
                viewFactor: 0.4
            });
            ScrollReveal().reveal('.check__text', {
                origin: 'left',
                distance: '100px',
                duration: 800,
                viewFactor: 0.4
            });
            ScrollReveal().reveal('.check__text_right', {
                origin: 'right',
                distance: '100px',
                duration: 800,
                viewFactor: 0.4
            });
            ScrollReveal().reveal('.work__item', {
                origin: 'bottom',
                distance: '100px',
                duration: 800,
                viewFactor: 0.4
            });
            ScrollReveal().reveal('.rate__imgs', {
                origin: 'bottom',
                distance: '100px',
                duration: 800,
                viewFactor: 0.4
            });
            ScrollReveal().reveal('.rate__item', {
                origin: 'bottom',
                scale: 0.85,
                distance: '100px',
                duration: 800,
                viewFactor: 0.2
            });
            ScrollReveal().reveal('.key__item', {
                origin: 'bottom',
                scale: 0.85,
                distance: '100px',
                duration: 800,
                viewFactor: 0.2
            });
            ScrollReveal().reveal('.rate__cash', {
                origin: 'bottom',
                distance: '100px',
                duration: 800,
                viewFactor: 0.4
            });
            ScrollReveal().reveal('.rate__cash', {
                origin: 'bottom',
                distance: '100px',
                duration: 800,
                viewFactor: 0.4
            });
            ScrollReveal().reveal('.guarantee__item', {
                origin: 'bottom',
                distance: '100px',
                duration: 800,
                viewFactor: 0.4
            });
            ScrollReveal().reveal('.comments__carousel', {
                origin: 'bottom',
                distance: '100px',
                duration: 800,
                viewFactor: 0.4
            });
            ScrollReveal().reveal('.btn_comment', {
                scale: 0.85,
                distance: '50px',
                duration: 800,
                viewFactor: 0.4
            });
            ScrollReveal().reveal('.contact__subtitle', {
                origin: 'bottom',
                distance: '50px',
                duration: 800,
                viewFactor: 0.4,
                delay: 200
            });
            ScrollReveal().reveal('#main-form', {
                scale: 0.85,
                distance: '50px',
                duration: 800,
                viewFactor: 0.4
            });
        });


       








