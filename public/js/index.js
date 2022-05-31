$('.owl-carousel').owlCarousel({
    loop:true,
    dots:false,
    margin:6,
    nav:false,
    autoplay:true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    autoPlaySpeed: 0,
    smartSpeed:2000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
})