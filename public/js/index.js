$('.owl-carousel').owlCarousel({
    loop:true,
    dots:false,
    margin:-10,
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
$(document).ready(function(){
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    $(window).scroll(function() { 
      if ($(document).scrollTop() > 50) { 
        $(".header").css("background-color", "#4C8AF0");
      } else {
        $(".header").css("background-color", "transparent");
      }
    })
});
$(".header .nav-item .nav-link ").click(function(){
  const listLink = document.getElementsByClassName("link-page")
  for (let i = 0; i < listLink.length; i++) {
    if(listLink[i].classList.contains("active")){
      listLink[i].classList.remove("active")
    }
  }
  $(this).addClass("active")
})
