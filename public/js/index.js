$('.owl-carousel').owlCarousel({
    loop:true,
    dots:false,
    margin:-10,
    nav:false,
    // autoplay:false,
    // autoplayTimeout: 2000,
    // autoplayHoverPause: true,
    // autoPlaySpeed: 0,
    // smartSpeed:2000,
    responsive:{
        0:{
            items:1
        },
        992:{
            items:3
        },
        1400:{
            items:4
        }
    }
})
$(document).ready(function(){
    // document.documentElement.scrollTop = 0;
    // document.body.scrollTop = 0;
    $(window).scroll(function() { 
      if ($(document).scrollTop() > 50) { 
        $(".header").css("background-color", "#4C8AF0");
      } else {
        $(".header").css("background-color", "transparent");
      }
    });
    $("a[href*='#']:not([href='#])").click(function() {
      let target = $(this).attr("href");
      $('html,body').stop().animate({
        scrollTop: $(target).offset().top
      }, 300);
      event.preventDefault();
    });
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
var noti = document.querySelector(".noti")
var dataOj = {
name: document.querySelector('input[id="name"]'),
phone: document.querySelector('input[id="phone"]'),
email: document.querySelector('input[id="email"]'),
mess: document.querySelector('textarea[id="mess"]')
}
document.querySelector("#submit_form").onsubmit=function(e){
  e.preventDefault()  
  let checked = validateEmail(dataOj.email.value);
  sendInfo(checked, dataOj, noti)
}
const validateEmail = (email)=>{
  let validRegex = /^[a-zA-Z0-9][\-_\.\+\!\#\$\%\&\'\*\/\=\?\^\`\{\|]{0,1}([a-zA-Z0-9][\-_\.\+\!\#\$\%\&\'\*\/\=\?\^\`\{\|]{0,1})*[a-zA-Z0-9]@[a-zA-Z0-9][-\.]{0,1}([a-zA-Z][-\.]{0,1})*[a-zA-Z0-9]\.[a-zA-Z0-9]{1,}([\.\-]{0,1}[a-zA-Z]){0,}[a-zA-Z0-9]{0,}$/i;
  let requireMess = document.querySelector(".require")
  if(validRegex.test(email)){
    return true;
  }else{
    requireMess.innerHTML = '<img class="mb-3" src="imgs/fail.png" alt="fail"/> <p class="fail mb-3">Invalid Email!</p>'
    return false;
  }
}
const sendInfo =(check, dataOj, noti)=>{
  if(check){
    let dataReq = {
      'entry.559400748': dataOj.name.value,
      'entry.1040115808': dataOj.phone.value,
      'entry.1832294402': dataOj.email.value,
      'entry.1085358572':dataOj.mess.value
    }
    let queryStr = new URLSearchParams(dataReq);
    queryStr = queryStr.toString();
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "https://docs.google.com/forms/u/0/d/e/1FAIpQLSdTCR2TQ_yVQqTL696JByhSz7_A0VhDF85u1ajRTnI-HfkrIg/formResponse",true);
    xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
    noti.innerHTML='<img class="mb-3" src="imgs/success.png" alt="success"/> <p class="success mb-3">Gửi thông tin thành công!</p>'
    dataOj.name.value="",
    dataOj.phone.value="",
    dataOj.email.value="",
    dataOj.mess.value="",
    xhr.send(queryStr);
    setTimeout(()=>{
    noti.innerHTML=''
    },3000)
  }
}
$("#email").keydown(function(){
  let requireMess = document.querySelector(".require")
  requireMess.innerHTML=''
})
// const selected = document.getElementById("email")
// console.log(selected)
// selected.addEventListener("change", function(){
//   console.log(1)
// })
