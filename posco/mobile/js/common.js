$(document).ready(function() {
  var select = $('.wrap_home .content_search .swiper-container1 .swiper-slide .card_search .card_bottom .bottom_btn .detail_list .detail_list_input .detail_ ._select_info');
  var select2 = $('.wrap_search .search_content .search_top .search_top_btn .search_top_btn_detail .detail_list .detail_list_input .detail_ ._select_info');
  var select3 = $('.wrap_page .page_content .page_top .page_top_btn .page_top_btn_detail .detail_list .detail_list_input .detail_ ._select_info');
  select.change(function() {
     var current = select.val();
     if (current != 'null') {
       select.css('color','black');
     }
  }); 
  select2.change(function() {
     var current = select2.val();
     if (current != 'null') {
       select2.css('color','#fff');
     }
  }); 
  select3.change(function() {
     var current = select3.val();
     if (current != 'null') {
       select3.css('color','#fff');
     }
  }); 

  var counterClass = true;
        
  $('.root .wrap .wrap_home .content_search .swiper-container1 .swiper-slide.slide_2').on('classChanged',function(e){
    if(counterClass) {
      $('.counter').each(function () {
          $(this).prop('Counter',0).animate({
              Counter: $(this).text()
          }, {
              duration: 1000,
              easing: 'swing',
              step: function (now) {
                  $(this).text(Math.ceil(now));
                
              },
              complete: function() {
                counterClass = false;
              }
          });
      });
    }

  });

  var dim_input = document.querySelector('.dim_full .user_search .user .content_user .user_input_box .user_input');
  var dim_img = $('.dim_full .user_search .user .content_user .user_input_box .user_a img');
  var dim_span = $('.dim_full .user_search .footer_user span');
  dim_input.addEventListener("input",function () {
    if(dim_input.value !== "") {
      dim_img.attr("src", "mobile/img/content/ic_card_04_b.png");
      dim_span.css("opacity", 1);
    } else {
      dim_img.attr("src", "mobile/img/content/ic_card_04.png");
      dim_span.css("opacity", 0.5);
    }
  });


  var home_search_input = document.querySelector('.wrap_home .content_search .swiper-container1 .swiper-slide .card_search .card_input .search_input');
  var home_search_window = document.querySelector('.root .search_input_div');

  home_search_input.addEventListener("focus", e => {
    home_search_window.classList.add('active');
  });

  home_search_input.addEventListener("blur", e => {
    setTimeout(function() {
      home_search_window.classList.remove('active');
    }, 300);
  });

  var search_search_input = document.querySelector('.wrap_search .search_content .search_top .search_top_input .search_input');
  var search_search_window = document.querySelector('.root .search_search_input_div');
  var search_search_img = $('.wrap_search .search_content .search_top .search_top_input a img');

  search_search_input.addEventListener("input",function () {
    if(search_search_input.value !== "") {
      search_search_img.attr("src", "mobile/img/content/ic_search_W.png");
    } else {
      search_search_img.attr("src", "mobile/img/content/ic_search_dis.png");
    }
  });
  search_search_input.addEventListener("focus", e => {
    search_search_window.classList.add('active');
    search_search_input.classList.add('line');
  });

  search_search_input.addEventListener("blur", e => {
    setTimeout(function() {
      search_search_window.classList.remove('active');
      search_search_input.classList.remove('line');
    }, 300);    
  });

  var page_search_input = document.querySelector('.wrap_page .page_content .page_top .page_top_input .page_input');
  var page_search_img = $('.wrap_page .page_content .page_top .page_top_input a img');

  page_search_input.addEventListener("input",function () {
    if(page_search_input.value !== "") {
      page_search_img.attr("src", "mobile/img/content/ic_search_W.png");
    } else {
      page_search_img.attr("src", "mobile/img/content/ic_search_dis.png");
    }
  });


  var window_search_input = document.querySelector('.window_search .window_search_header .window_search_header_top .window_search_header_right .window_search_input');
  var window_search_img = $('.window_search .window_search_header .window_search_header_top .window_search_header_right .txt a img');

  window_search_input.addEventListener("input",function () {
    if(window_search_input.value !== "") {
      window_search_img.attr("src", "mobile/img/content/ic_card_04_b.png");
    } else {
      window_search_img.attr("src", "mobile/img/content/ic_card_04.png");
    }
  });


  var start_inputTxt = $('.detail_list .detail_list_input .detail_.detail_date .detail_date_div ._input_date');
  var end_inputTxt = $('.detail_list .detail_list_input .detail_.detail_date .detail_date_div ._input_date');
  start_inputTxt.on('touchend', function(e) {
    // console.log(e.originalEvent.target);
    // console.log(e.target);
    // console.log(e);
    // e.target.trigger('click');
    // e.originalEvent.target.trigger('click');
  });

  //wrap_search_swiper
  var search_updown;
  var search_line = $('.wrap_search .search_content .content_list .list_top_info_top.list_swiper');
  var search_swiper_list_touch = $('.root .wrap .wrap_search .search_content .content_list');
  var search_prevY = 0;
  var search_yDown;
  function handleTouchStart(evt) {                                         
    search_yDown = evt.touches[0].clientY;          
  }; 
  search_swiper_list_touch.on('touchstart', function(e) {
    // e.preventDefault();
    handleTouchStart(e.originalEvent);
  });
  search_swiper_list_touch.on('touchend', function(e) {
    var top_max = 159;

    var content_list = $('.root .wrap .wrap_search .search_content .content_list');
    var content_list_top = content_list.css('top').replace('px','');
    
    var list_info = $('.root .wrap .wrap_search .search_content .content_list .content_list_info');
    var list_info_scroll = list_info.scrollTop();

    if(search_updown){
      if(-top_max <= content_list_top) {
        content_list.css('top', (-top_max)+'px');
        search_line.css("border", "0px");
      }
    } else {
      if(list_info_scroll <= 0) {
        content_list.css('top', 0+'px');
        search_line.css("border-bottom", "1px solid #DEDEDE"); 
      }
    }

  });
  
    search_swiper_list_touch.bind('touchmove', function(e) {
    var e = e.originalEvent;
    var yUp = e.touches[0].clientY;
    var yDiff = search_yDown - yUp;
    var top_max = 157;
    var n = 4;
    
    var content_list = $('.wrap_search .search_content .content_list');
    var content_list_top = content_list.css('top').replace('px','');


    var list_info = $('.wrap_search .search_content .content_list .content_list_info');
    
    var list_info_scroll = list_info.scrollTop();
    


    if (yDiff >= search_prevY) {

      search_updown = true;
        if(-top_max < content_list_top) {
          content_list.css('top', ((content_list_top*1)-n-n)+'px');
        } else {
          list_info.scrollTop(list_info_scroll+n+n+n);
        }
    } else {

      search_updown = false;
      if(list_info_scroll <= 0 && content_list_top <= 0) {
        content_list.css('top', ((content_list_top*1)+n+n)+'px');
      } else {
        list_info.scrollTop(list_info_scroll-n-n-n);
      }
    }
    search_yDown = e.touches[0].clientY;

    if(content_list_top <= 1) {
      search_line.css("border", "0px");
    } else {
      search_line.css("border-bottom", "1px solid #DEDEDE"); 
    }

  });

  //wrap_search_swiper


  //wrap_page_swiper
  var page_updown;
  var page_swiper_list_touch = $('.root .wrap .wrap_page .page_content .content_list');
  var page_line = $('.wrap_page .page_content .content_list .list_top_info_top.list_swiper');
  var page_prevY = 0;
  var page_prevX = 0;
  var page_yDown, page_xDown;
  function handleTouchStart_page(evt) {                                         
    page_yDown = evt.touches[0].clientY;
    page_xDown = evt.touches[0].clientX;  
  }; 
  page_swiper_list_touch.on('touchstart', function(e) {
    handleTouchStart_page(e.originalEvent);
  });
  page_swiper_list_touch.on('touchend', function(e) {
    var top_max = 159;

    var content_list = $('.root .wrap .wrap_page .page_content .content_list');
    var content_list_top = content_list.css('top').replace('px','');
    
    var list_info = $('.root .wrap .wrap_page .page_content .content_list .content_list_info');
    var list_info_scroll = list_info.scrollTop();
    
    if(page_updown){
      if(-top_max < content_list_top) {
        content_list.css('top', (-top_max)+'px');
      }
    } else {
      if(list_info_scroll <= 0) {
        content_list.css('top', 0+'px');
      }
    }
    if(page_updown){
      if(-top_max < content_list_top) {
        content_list.css('top', (-top_max)+'px');
        page_line.css("border", "0px");
      }
    } else {
      if(list_info_scroll <= 0) {
        content_list.css('top', 0+'px');
        page_line.css("border-bottom", "1px solid #DEDEDE"); 
      }
    }

  });
  
    page_swiper_list_touch.bind('touchmove', function(e) {
    var e = e.originalEvent;
    var yUp = e.touches[0].clientY;
    var xUp = e.touches[0].clientX;
    var yDiff = page_yDown - yUp;
    var xDiff = page_xDown - xUp;
    var top_max = 157;
    var n = 4;

    var content_list = $('.root .wrap .wrap_page .page_content .content_list');
    var content_list_top = content_list.css('top').replace('px','');
    
    var list_info = $('.root .wrap .wrap_page .page_content .content_list .content_list_info');
    var list_info_scroll = list_info.scrollTop();   
      if( xDiff > 1 || xDiff < -1 ) {
        if ( xDiff >= 0 ) {
      
        } else if( xDiff < 0 ) {
        }
      } else {
        if (yDiff >= 0) {
          page_updown = true;
            if(-top_max < content_list_top) {
              content_list.css('top', ((content_list_top*1)-n-n)+'px');
            } else {
              list_info.scrollTop(list_info_scroll+n+n+n);
            }
        } else if( yDiff < page_prevY) {
          page_updown = false;
          if(list_info_scroll <= 0 && content_list_top <= 0) {
            content_list.css('top', ((content_list_top*1)+n+n)+'px');
          } else {
            list_info.scrollTop(list_info_scroll-n-n-n);
          }
        }
      }
    page_yDown = e.touches[0].clientY;
    page_xDown = e.touches[0].clientX;

    if(content_list_top <= 1) {
      page_line.css("border", "0px");
    } else {
      page_line.css("border-bottom", "1px solid #DEDEDE"); 
    }
    
  });

  //wrap_page_swiper


  //wrap_my_swiper
  var my_updown;
  var my_line = $('.root .wrap .wrap_my .my_content .my_menu .my_menu_top.my_menu_underline');
  var my_swiper_list_touch = $('.root .wrap .wrap_my .my_content .my_menu');
  var my_prevY = 0;
  var my_yDown;
  function handleTouchStart(evt) {                                         
    my_yDown = evt.touches[0].clientY;          
  }; 
  my_swiper_list_touch.on('touchstart', function(e) {
    // e.preventDefault();
    handleTouchStart(e.originalEvent);
  });
  my_swiper_list_touch.on('touchend', function(e) {
    var top_max = 295;

    var content_list = $('.root .wrap .wrap_my .my_content .my_menu');
    var content_list_top = content_list.css('top').replace('px','');
    
    var list_info = $('.root .wrap .wrap_my .my_content .my_menu .my_menu_list');
    var list_info_scroll = list_info.scrollTop();

    if(my_updown){
      if(-top_max <= content_list_top) {
        content_list.css('top', (-top_max)+'px');
        my_line.css("border", "0px");
      }
    } else {
      if(list_info_scroll <= 0) {
        content_list.css('top', 0+'px');
        my_line.css("border-bottom", "1px solid #DEDEDE"); 
      }
    }

  });
  
    my_swiper_list_touch.bind('touchmove', function(e) {
    var e = e.originalEvent;
    var yUp = e.touches[0].clientY;
    var yDiff = my_yDown - yUp;
    var top_max = 293;
    var n = 4;
    
    var content_list = $('.root .wrap .wrap_my .my_content .my_menu');
    var content_list_top = content_list.css('top').replace('px','');


    var list_info = $('.root .wrap .wrap_my .my_content .my_menu .my_menu_list');
    
    var list_info_scroll = list_info.scrollTop();
    


    if (yDiff >= my_prevY) {

      my_updown = true;
        if(-top_max <= content_list_top) {
          content_list.css('top', ((content_list_top*1)-n-n)+'px');
        } else {
          list_info.scrollTop(list_info_scroll+n+n+n);
        }
    } else {

      my_updown = false;
      if(list_info_scroll <= 0 && content_list_top <= 0) {
        content_list.css('top', ((content_list_top*1)+n+n)+'px');
      } else {
        list_info.scrollTop(list_info_scroll-n-n-n);
      }
    }
    my_yDown = e.touches[0].clientY;

    if(content_list_top <= 1) {
      my_line.css("border", "0px");
    } else {
      my_line.css("border-bottom", "1px solid #DEDEDE"); 
    }

  });

  //wrap_my_swiper


  $('.root .dim_full .dim').on('touchstart', function(e) {
    setTimeout(function() {
      dim_delete();
    }, 100);
    // dim_delete();
  });


});


//scroll 
$(window).scroll(function(event){ 
  var p = (($(window).scrollTop()*2 / ($(document).height() - $(window).height())) - 1) * -1;
  $(".root .bg_").css("opacity", p);
});
//scroll 

// notice_page 
function notice_page_on() {
  var notice_page = document.querySelector('.root .notice');
  notice_page.classList.add('active');
  var wrap = $('.root .wrap');
  var header = $('.root header');
  var bg = $('.root .bg_');
  wrap.css('display', 'none');
  header.css('display', 'none');
  bg.css('opacity', '0');
  
}
function notice_page_off() {
  var notice_page = document.querySelector('.root .notice');
  notice_page.classList.remove('active');
  var wrap = $('.root .wrap');
  var header = $('.root header');
  var bg = $('.root .bg_');
  wrap.css('display', 'flex');
  header.css('display', 'block');
  bg.css('opacity', '1');

}
// notice_page 


// setting_page 

function setting_page_on() {
  var notice_page = document.querySelector('.root .setting');
  notice_page.classList.add('active');
  var wrap = $('.root .wrap');
  var header = $('.root header');
  var bg = $('.root .bg_');
  wrap.css('display', 'none');
  header.css('display', 'none');
  bg.css('opacity', '0');
  
}
function setting_page_off() {
  var setting_page = document.querySelector('.root .setting');
  setting_page.classList.remove('active');
  var wrap = $('.root .wrap');
  var header = $('.root header');
  var bg = $('.root .bg_');
  wrap.css('display', 'flex');
  header.css('display', 'block');
  bg.css('opacity', '1');

}
// setting_page 

// window_search 

function window_search_on() {
    var window_search = document.querySelector('.root .window_search');
    window_search.classList.add('active');
    var wrap = $('.root .wrap');
    var header = $('.root header');
    var bg = $('.root .bg_');
    wrap.css('display', 'none');
    header.css('display', 'none');
    bg.css('opacity', '0');  
}
function window_search_off() {
  var window_search = document.querySelector('.root .window_search');
  window_search.classList.remove('active');
  var wrap = $('.root .wrap');
  var header = $('.root header');
  var bg = $('.root .bg_');
  wrap.css('display', 'flex');
  header.css('display', 'block');
  bg.css('opacity', '1');

}
// window_search 

// window_search_result 

function window_search_result_on(t) {
  console.log(t);
  if(t !== "" || t !== undefined) {
    window_search_off();
  } 
  var window_search_result = document.querySelector('.root .window_search_result');
    window_search_result.classList.add('active');
    var wrap = $('.root .wrap');
    var header = $('.root header');
    var bg = $('.root .bg_');
    wrap.css('display', 'none');
    header.css('display', 'none');
    bg.css('opacity', '0');
}
function window_search_result_off() {
  var window_search_result = document.querySelector('.root .window_search_result');
  window_search_result.classList.remove('active');
  var wrap = $('.root .wrap');
  var header = $('.root header');
  var bg = $('.root .bg_');
  wrap.css('display', 'flex');
  header.css('display', 'block');
  bg.css('opacity', '1');

}
// window_search_result 

// page_result

function page_result_on() {
  var page_result = document.querySelector('.root .page_result');
  page_result.classList.add('active');
  var wrap = $('.root .wrap');
  var header = $('.root header');
  var bg = $('.root .bg_');
  wrap.css('display', 'none');
  header.css('display', 'none');
  bg.css('opacity', '0');  
}
function page_result_off() {
var page_result = document.querySelector('.root .page_result');
page_result.classList.remove('active');
var wrap = $('.root .wrap');
var header = $('.root header');
var bg = $('.root .bg_');
wrap.css('display', 'flex');
header.css('display', 'block');
bg.css('opacity', '1');

}
// page_result 


// wrap_home
function detail_list() {
  var detail =  $('.wrap_home .content_search .swiper-container1 .swiper-slide .card_search .card_bottom');
  var detail_list =  $('.wrap_home .content_search .swiper-container1 .swiper-slide .card_search .card_bottom .bottom_btn .detail_list');
  var detail_span =  $('.wrap_home .content_search .swiper-container1 .swiper-slide .card_search .card_bottom .bottom_btn a span');
  if(detail.css("bottom") !== "0px") {
    detail_span[0].innerText = "상세검색설정";
    detail_span.prev().attr("src", "mobile/img/content/ic_detail.png");
    detail.animate({
      bottom: '0vh'
    }, 500);
    detail_list.animate({
      height: '0vh'
    }, 500);
  }else {
    detail_span[0].innerText = "검색설정닫기";
    detail_span.prev().attr("src", "mobile/img/content/ic_card_close.png");
    detail.animate({
      bottom: '-245px'
    }, 500);
    detail_list.animate({
      height: '275px'
    }, 500);
  }
}



function popup_user() {
  var dim_full = document.querySelector('.root .dim_full');
  $('html').css('overflow-y', 'hidden');
  dim_full.classList.add('active');
}
function dim_delete() {
  var dim_full = document.querySelector('.root .dim_full');
  dim_full.classList.remove('active');
  $('html').css('overflow-y', 'scroll');
}
// wrap_home

// wrap_search
function detail_list2() {
  var detail =  $('.wrap_search .search_content .search_top .search_top_btn .search_top_btn_detail .detail_list');
  var detail_list =  $('.wrap_search .search_content .search_top .search_top_btn');
  var detail_span =  $('.wrap_search .search_content .search_top .search_top_btn .btn_list span');
  
  var search_top_input =  $('.wrap_search .search_content .search_top .search_top_input');

  var detail_btn =  $('.wrap_search .search_content .search_top .search_top_btn .btn_list');

  var search_top = $('.wrap_search .search_content .touch_list_swiper');

  if(detail_list.css("height") !== "50px") {
    detail_span[0].innerText = "상세검색설정";
    detail_span.prev().attr("src", "mobile/img/content/ic_detail.png");
    
    search_top.css('display', 'none');
    detail.animate({
      height: '0vh'
    }, 500);
    detail_list.animate({
      height: '50px'
    }, 500);
    search_top_input.animate({
      paddingBottom: '15px'
    }, 500);
    detail_btn.animate({
    }, 500, function() {
      $(this).css('background','#1487F7')
    });
    
  }else {
    detail_span[0].innerText = "검색설정닫기";
    detail_span.prev().attr("src", "mobile/img/content/ic_search_close.png");
    search_top.css('display', 'block');
    detail.animate({
      height: '320px'
    }, 500);
    detail_list.animate({
      height: '320px'
    }, 500);
    search_top_input.animate({
      paddingBottom: '0px'
    }, 500);
    detail_btn.animate({
    }, 500, function() {
      $(this).css('background','url(mobile/img/content/btn_search_bg.png) no-repeat center / cover');
    });
  }
}
// wrap_search




//Footer menu
function onFooter(n) {
  notice_page_off();
  setting_page_off();
  window_search_off();
  window_search_result_off();
  page_result_off();
  var wrap_t = document.querySelectorAll('.wrap-menu[data-index]');
  var header = document.querySelectorAll('header .header_top[data-index]');
  var header_rm = document.querySelector('header .header_top[data-index].active');
  var footer = document.querySelectorAll('.footer_menu .footer_menu_list[data-index]');
  var footer_rm = document.querySelector('.footer_menu .footer_menu_list[data-index].active');
  var rm_ac = document.querySelector('.wrap-menu.active');
  var footer_img_on_off = document.querySelectorAll('.footer_menu .footer_menu_list[data-index="'+n+'"] img');
  var footer_img_ = document.querySelectorAll('.footer_menu .footer_menu_list[data-index] img');
  var t_index = n-1;
  if(n == 2 || n == 3 || n == 4) {
  // if(n == 2 || n == 3) {
    $('html').scrollTop(0)
    $('html').css('overflow-y', 'hidden');
  } else {
    $('html').scrollTop(0)
    $('html').css('overflow-y', 'scroll');
  }
  if(t_index !== 0) {
    $(".root .bg_").css("background", "url(mobile/img/gnb/CRM_sub_bg.png) 100% top / 100% no-repeat rgb(101, 61, 235)");
  } else {
    $(".root .bg_").css("background", "url(mobile/img/gnb/main_bg.png) 100% top / 100% 290px no-repeat");
  }
  footer_img_.forEach(function ( t ) {
    if(t.id !== 'footer_menu_img_off') {
      t.classList.remove("selected")
    } else {
      t.classList.add("selected");
    }
  });
  footer_img_on_off[1].classList.remove('selected');
  footer_img_on_off[0].classList.add('selected');
  $(".root .bg_").css("opacity", 1);
  header_rm.classList.remove('active');
  header[t_index].classList.add('active');
  footer_rm.classList.remove('active');
  footer[t_index].classList.add('active');
  rm_ac.classList.remove('active');
  wrap_t[t_index].classList.add('active');
  
}
//Footer menu
