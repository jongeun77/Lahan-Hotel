//위로 올라가지 않게 방지
$(document).on('click', 'a[href="#"]', function(e){
  e.preventDefault();
});


//slick.js
//section: visual
$(function(){
  $('.visual .slide,.slide2').slick({
     arrows: false, //화살표
     dots: false, //인디케이트 해제
     fade: true,//페이드효과
     autoplay:true, //자동재생
     autoplaySpeed: 4000, //재생시간
     pauseOnHover: false, //마우스 호버시 정지
     pauseOnFocus: false  // 포커스시 정지 
 });
 //intro-dining
 $('.slide2').slick({
  arrows: false, //화살표
  dots: false, //인디케이트 해제
  fade: false,//페이드효과
  autoplay:true, //자동재생
  autoplaySpeed: 3000, //재생시간
  pauseOnHover: false, //마우스 호버시 정지
  pauseOnFocus: false  // 포커스시 정지 
});
});
//introduce tab menu
$(function() {
  $('.introduce .roomInfo .tab li a').on('click',function(){ 
   var num = $('.introduce .roomInfo .tab li a').index($(this))
      //.introduce .roomInfo .tab li a의 갯수를 센후 변수(num)에저장 -> .index($(this)); 갯수를세주는 메소드
     $('.introduce .roomInfo .tabBox').removeClass('on'); //모든 탭 닫음
     $('.introduce .roomInfo .tabBox:eq('+num+')').addClass('on'); // eq()메소드는 인덱스값을 사용해 원하는 위치의 요소를 선택해서 가져올 수 있는 선택 메소드임
  });
//scrolla.js
$('.animate').scrolla({
  mobile: true, //모바일버전시 활성화
  once: false //스크롤시 딱 한번만 하고싶을땐 true
});    
//footer: family site tab menu
$('.fam_site_wrap .btn_fam').on('click',function(){
  $('.fam_site_wrap .item_wrap').slideToggle()
});
});//end

//header scroll
// $(window).scroll(function(){
//   if($(window).scrollTop()>50){
//     $('header').addClass('on')
//   }
//   else{$('header').removeClass('on')}
// })



//header scroll 2
var scrollTop =0;
scrollTop =$(document).scrollTop();
$(window).on('scroll resize',function(){
  scrollTop =$(document).scrollTop();
  fixHeader();
})
function fixHeader(){
  if(scrollTop>200){$('header').addClass('on')}
 else{$('header').removeClass('off')}
}
//header menuwrap
$(function(){
  $('header .menuOpen').on('click',function(){
    $('header .menuWrap').addClass('on')
  })
  $('.menuWrap .close').on('click',function(){
    $('.menuWrap').removeClass('on')
  })
 
})
