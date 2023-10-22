$(document).ready(function(){
    
    $(".slider-owl").owlCarousel({
        items: 1,
        loop: true,
        dots: true,
        autoplay: true,
        autoplayTimeout: 5000,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
    });

    $('.topbar__action').click(function(){
        $('.topbar').removeClass('show');

        $('.mobile-menu').css('transform', 'translateY(-15px)');

    });

    $('.mobile-icon').click(function(){
        $(this).find('i').toggleClass('fa-bars-staggered fa-xmark')
        $('.mobile-menu').toggleClass('show');
    });

    $('.mobile-menu__head > button').click(function(){
        const parentElement = $(this).closest('.mobile-menu__head');
        const dropdownMenu = parentElement.siblings('.mobile-menu__dropdown');

        if(dropdownMenu){
            $(this).toggleClass('rotate');
            dropdownMenu.toggleClass('show');
        }

    });
});