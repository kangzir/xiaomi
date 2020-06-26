// $('.cart').hover(function(){
//     $('.cart-pull').show()
// },function(){
//     $('.cart-pull').hide()
// })
$('.mi-app').parent('.position-relative').hover(function(){
    $('.mi-app').stop().slideDown(100)
},function(){
    $('.mi-app').stop().slideUp(100)
})

$(function(){
    $('.nav-list>li:has(.contents)').hover(function(){
        // alert('msg');
        //  console.log($(this));
         $(this).find('.item-children').stop().show()
         $(this).find('.contents').css('border-bottom','1px solidrgb(163, 162, 162)')
    },function(){
        $(this).find('.item-children').stop().hide()
    })
})
var mySwiper = new Swiper ('.swiper-container',{
    effect:'slide',
    slidesPerView:4,//一行显示3个
    slidesPerGroup : 4,//设置一组几个图片
    speed:1000

  })
  $('#btn1').click(function(){
  mySwiper.slidePrev();
  })
  $('#btn2').click(function(){
  mySwiper.slideNext();
  })
//   function SHtog (){
//     $(this).addClass('tab-active')
//     $('.home-brick-row-2-box .more li').not($(this)).removeClass('tab-active')  
//     var index = $(this).index()
//     console.log($(this));
    
//     var $div = $('.home-brick-row-2-box .span8 .conceal')
//     $div.eq(index).show()
    
//     $div.not($div.eq(index)).hide()

//    }
  $('.home-brick-row-2-box .more li').hover(function(){
      $(this).addClass('tab-active')
      $('.home-brick-row-2-box .more li').not($(this)).removeClass('tab-active')

      var index = $(this).index()
      
      var $div = $('.home-brick-row-2-box .span8 .conceal')
      $div.eq(index).show()
      
      $div.not($div.eq(index)).hide()
  })

  $('.home-brick-row-2-box .more-1 li').hover(function(){
    $(this).addClass('tab-active')
    $('.home-brick-row-2-box .more-1 li').not($(this)).removeClass('tab-active')

    var index = $(this).index()
    
    var $div = $('.home-brick-row-2-box .span8 .conceal-1')
    $div.eq(index).show()
    
    $div.not($div.eq(index)).hide()
})
$('.home-brick-row-2-box .more-2 li').hover(function(){
    $(this).addClass('tab-active')
    $('.home-brick-row-2-box .more-2 li').not($(this)).removeClass('tab-active')

    var index = $(this).index()
    
    var $div = $('.home-brick-row-2-box .span8 .conceal-2')
    $div.eq(index).show()
    
    $div.not($div.eq(index)).hide()
})
$('.home-brick-row-2-box .more-3 li').hover(function(){
    $(this).addClass('tab-active')
    $('.home-brick-row-2-box .more-3 li').not($(this)).removeClass('tab-active')

    var index = $(this).index()
    
    var $div = $('.home-brick-row-2-box .span8 .conceal-3')
    $div.eq(index).show()
    
    $div.not($div.eq(index)).hide()
})
$('.home-brick-row-2-box .more-4 a').hover(function(){
    $(this).addClass('tab-active')
    $('.home-brick-row-2-box .more-4 a').not($(this)).removeClass('tab-active')

    
})
$('.home-brick-row-2-box .nav a').hover(function(e){
    e.preventDefault()
    $(this).tab('show')
  })

//   $('.list-content .col-md-3 a').hover(function(e){
//     e.preventDefault()
//     $(this).tab('show')
//   },function(){
//     // $(this).tab('hide')
   
//     var li =  $('.list-content .col-md-3 li').index()
//     console.log(li);
    
//   })
$('.list-content .col-md-9>.tab>.tab-pane').hide()
$('.list-content .col-md-3 li').hover(function(){

    var index = $(this).index()
    var pupro = $('.list-content .col-md-9>.tab>.tab-pane')
    pupro.eq(index).show()
    pupro.not(pupro.eq(index)).hide()
},function(){
    $('.list-content .col-md-9>.tab>.tab-pane').hide()
})
$('#mycarouse .carousel-control-prev').click(function(){
    $(this).carousel('prev')
    alert('msg');
})
$('#mycarouse .carousel-control-next').click(function(){
    $(this).carousel('next')
    alert('msg');
})
// 滚动触发回到顶部
$(window).scroll(function () {
    //   获得的是滚动条的高度。
  var scrollerh = $(document).scrollTop();
  
  if (scrollerh > 700) {
    $('.home-tool-bar .hdaotingbu').css({display:'block'})
  }else{
    $('.home-tool-bar .hdaotingbu').css({display:'none'})
      
  }
})
// 固定导航栏到上面
// $(window).scroll(function(){
//     var scrollrh2 = $(document).scrollTop();
//     if(scrollrh2>200){
//         $('.guding').css({
//             top:'0px',
//             transition: '0.1s',
//             position:'fixed',
//         })
//     }else{
    
//     $('.guding').css({position:'absolute',top:'100px'})
//     }
// })
$('.site-video .site-bd li:eq(0)').click(function(){
    $('#vishi1').modal('show')
})
$('.site-video .site-bd li:eq(1)').click(function(){
    $('#vishi2').modal('show')
})
$('.site-video .site-bd li:eq(2)').click(function(){
    $('#vishi3').modal('show')
})
$('.site-video .site-bd li:eq(3)').click(function(){
    $('#vishi4').modal('show')
})
// $('.modal .close').click(function(){
//    var myvideo = $('#vishi1 #myvi')
//          myvideo.pause()
// })
// 
// 
// 
// 
// 
// 
$(window).scroll(function () {
    //   获得的是滚动条的高度。
  var scrollerh = $(document).scrollTop();
  if (scrollerh > 200) {
      $('.top-tiao').css({
        position: 'fixed',
        top:'0',
        width:'100%',

      })
  }else{
    $('.top-tiao').css({
        position:'relative'
    })
  }
})

var mySwiper1 = new Swiper ('.swiper-container', {
    loop: true, // 循环模式选项
    // 如果需要分页器
    effect:'fade',
    pagination: {
      el: '.swiper-pagination',
      clickable :true,
      dynamicBullets: true,
    },
    // 如果需要前进后退按钮
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    speed:800,

  })   