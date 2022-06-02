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
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}
$(document).ready(function(){
    $(window).scroll(function() { 
      if ($(document).scrollTop() > 50) { 
        $(".header").css("background-color", "#4C8AF0");
      } else {
        $(".header").css("background-color", "transparent");
      }
    });
    $("a[href*='#']:not([href='#])").click(function(e) {
      let target = $(this).attr("href");
      $('html,body').stop().animate({
        scrollTop: $(target).offset().top
      }, 1000);
      e.preventDefault();
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

document.querySelector("#submit_form").onsubmit=function(e){
  document.getElementById("submit").disabled = true;
  let noti = document.querySelector(".noti")
  let dataOj = {
  name: document.querySelector('input[id="name"]'),
  phone: document.querySelector('input[id="phone"]'),
  email: document.querySelector('input[id="email"]'),
  mess: document.querySelector('textarea[id="mess"]')
  }
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
    requireMess.innerHTML = '<img src="imgs/fail.png" alt="fail"/> <p class="fail">Invalid Email!</p>'
    requireMess.style.display="flex"
    return false;
  }
}

const httpReq = (dataOj, queryStr, noti)=>{
  var xhr = new XMLHttpRequest();
  xhr.open("POST", "https://docs.google.com/forms/u/0/d/e/1FAIpQLSdwMMF_AOXOSV-23nG3Q2SZc2UDJdvrLvbFzpHhHDg1R9hxLw/formResponse",true);
  xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
  noti.innerHTML='<img class="mb-3" src="imgs/success.png" alt="success"/> <p class="success mb-3">Gửi thông tin thành công!</p>'
  dataOj.name.value="",
  dataOj.phone.value="",
  dataOj.email.value="",
  dataOj.mess.value="",
  xhr.send(queryStr);
}

const sendInfo =(check, dataOj, noti)=>{
  if(check){
    let dataReq = {
      'entry.638256125': dataOj.name.value,
      'entry.1184467511': dataOj.phone.value,
      'entry.1354280366': dataOj.email.value,
      'entry.706947604':dataOj.mess.value
    }
    let queryStr = new URLSearchParams(dataReq);
    queryStr = queryStr.toString();
    httpReq(dataOj,queryStr,noti)
    setTimeout(()=>{
      noti.innerHTML=''
      document.getElementById("submit").disabled = false;
    },3000)
  }
}

$("#email").keydown(function(){
  let requireMess = document.querySelector(".require")
  requireMess.style.display="none"
  requireMess.innerHTML=''
})
// const selected = document.getElementById("email")
// console.log(selected)
// selected.addEventListener("change", function(){
//   console.log(1)
// })
