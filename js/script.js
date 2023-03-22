$('.header-appBar-wrap').click(function(){
    $('.mobile-menu').stop().animate({left:0},500)
    $('header-mobile-menu-bar>div').stop().animate({left:100+'%'},500)
});

$('.appbarCloseBt').click(function(){
    $('.mobile-menu').stop().animate({left:'-100%'},500)
    $('header-mobile-menu-bar>div').stop().animate({left:100+'%'},500)
});

//slick
$('.single-item').slick({
    slidesToShow : 1,
    slidesToScroll : 1,
    autoplay : true,
    pauseOnHover : true,
    arrows : true,
    responsive: [ // 반응형 웹 구현 옵션
        {  
          breakpoint: 960, //화면 사이즈 960px
          settings: {
            slidesToShow: 2
          } 
        },
      ]
    
});
$('.single-item').slick('slickRemove',0);  



function getClock(){
    const clock = document.getElementById("clock");
    const date = new Date()
    const hour = String(date.getHours()).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const second = String(date.getSeconds()).padStart(2,"0");//number이기 때문에 padStart 붙일 수 없음. String 변환해주어야한다.
    clock.innerText = `${hour}:${minutes}:${second}`;
    const now = new Date();	// 현재 날짜 및 시간
    const month = now.getMonth();



}
getClock();

setInterval(getClock, 1000);

const time = document.getElementById("todayRt_dateMsg");
const date = new Date();  
const month= date.getMonth() +1;  
const day  = date.getDate();  
const year = date.getFullYear();  

const weekday = new Array(7);
weekday[0] = "(일)";
weekday[1] = "(월)";
weekday[2] = "(화)";
weekday[3] = "(수)";
weekday[4] = "(목)";
weekday[5] = "(금)";
weekday[6] = "(토)";
const days = weekday[date.getDay()];

 
// 현재 년, 월, 일이 출력된다.
time.innerText = `${year}년 ${month}월 ${day}일 ${days}`;



//클릭시 좌표 이동
function goToScroll(name) {
    let location = document.querySelector("." + name).offsetTop;
    window.scrollTo({top: location, behavior: 'smooth'});
}

$("#back-to-top").hide();
 
// fade in #back-top
$(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 500) {
            $('#back-to-top').fadeIn();
        } else {
            $('#back-to-top').fadeOut();
        }
    });
});

let navclick = document.querySelectorAll(".navclick1 a");

function handleClick(event) {
  console.log(event.target);
  // console.log(this);
  // 콘솔창을 보면 둘다 동일한 값이 나온다

  console.log(event.target.classList);

  if (event.target.classList[0] === "clicked") {
    event.target.classList.remove("clicked");
  } else {
    for (let i = 0; i < navclick.length; i++) {
      navclick[i].classList.remove("clicked");
    }

    event.target.classList.add("clicked");
  }
}

function init() {
  for (let i = 0; i < navclick.length; i++) {
    navclick[i].addEventListener("click", handleClick);
  }
}

init();

    


//특정 인덱스 번호에 있는 slider 삭제


// $(function(){
//     $('.slider-wrap').slick({
//       slide: 'div',        //슬라이드 되어야 할 태그
//       infinite : true,     //무한 반복 옵션     
//       slidesToShow : 2,        // 한 화면에 보여질 컨텐츠 개수
//       slidesToScroll : 1,        //스크롤 한번에 움직일 컨텐츠 개수
//       speed : 500,     // 다음 버튼 누르고 다음 화면 뜨는데까지 걸리는 시간(ms)
//       arrows : true,         // 옆으로 이동하는 화살표 표시 여부
//       dots : true,         // 스크롤바 아래 점으로 페이지네이션 여부
//       autoplay : true,            // 자동 스크롤 사용 여부
//       autoplaySpeed : 2000,         // 자동 스크롤 시 다음으로 넘어가는데 걸리는 시간 (ms)
//       pauseOnHover : true,        // 슬라이드 이동    시 마우스 호버하면 슬라이더 멈추게 설정
//       vertical : false,        // 세로 방향 슬라이드 옵션
//       prevArrow : "<button type='button' class='slick-prev'>Previous</button>",
//       nextArrow : "<button type='button' class='slick-next'>Next</button>",
//       draggable : true,     //드래그 가능 여부 
//       responsive: [ // 반응형 웹 구현 옵션
//         {  
//           breakpoint: 960, //화면 사이즈 960px
//           settings: {
//             slidesToShow: 4
//           } 
//         },
//         { 
//           breakpoint: 768, //화면 사이즈 768px
//           settings: {    
//             slidesToShow: 5
//           } 
//         }
//       ]

//     });
// })