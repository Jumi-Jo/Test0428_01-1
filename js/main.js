$("document").ready(function(){
  //fullpage
  var page = $('.fullpage').fullpage({

    // 1024 이하 fullpage 스크롤 작동 X
    responsiveWidth: 1024,

    // menu에 대한 옵션 설정
		menu : '.gnb',
    anchors : ['menu1', 'menu2', 'menu3', 'menu4'],

    // 네비게이션 보이기
    navigation: true,
    navigationTooltips: ['oneul', 'Value', 'Menu', 'Room', ''],
    navigationPosition: 'right',
    showActiveTooltip: true,
    autoScrolling: true,

    onLeave: function (origin, destination, direction, trigger) {
      if (destination == 2 || destination == 3 || destination == 4){
        $("header , #fp-nav").addClass("active");
      } 
      else {
        $("header , #fp-nav").removeClass("active");
      }

      if(destination == 5){
        $("header , #fp-nav").fadeOut();
      }else{
        $("header , #fp-nav").fadeIn();
      }
    }
  });


  //header

  $("header .ham").click(function(){
    $("header .mgnb-wrap").animate({"left":"0"});
  });
  $("header .mgnb-close").click(function(){
    $("header .mgnb-wrap").animate({"left":"100%"});
  });


  //menu

  const menu = new Swiper('.menu-img-box', {
    breakpoints: { // 반응형 슬라이드
      320: { // 320px 이상
      slidesPerView: 2,
      },
      768: { // 768px 이상
      slidesPerView: 3,
      loop:"true"
      },
      1200: { // 1200px 이상
        slidesPerView: 4,
      },
    },
    spaceBetween: 20, // 슬라이드 간의 거리 px 
  });


  //room
  const room = new Swiper('.room-img-box', {
    breakpoints: { // 반응형 슬라이드
      320: { // 320px 이상
      slidesPerView: 1.5,
      },
      768: { // 768px 이상
      slidesPerView: 2,
      loop:"true"
      },
      1200: { // 1200px 이상
        slidesPerView: 3,
      },
    },
    spaceBetween: 20, // 슬라이드 간의 거리 px
    loop:"true",
    autoplay: { // 자동슬라이드
      delay: 5000, // 슬라이드 한장이 머무르는 시간 5000 = 5초
      disableOnInteraction: false,
    },
    speed: 2000, // 슬라이드 넘어가는 속도
  });

});