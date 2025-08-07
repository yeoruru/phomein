'use strict';

//fullpage 풀페이지 스크롤
	 $(function() {
		$('#fullpage').fullpage({
            fingersonly: true,
			anchors:['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'fifthPage', 'sixthPage', 'seventhPage'],
			menu: '.rightNav',
			afterLoad: function(anchorLink, index){
				if(index == 2){ //두번째 페이지에 카운트업
					$('.volume').counterUp({delay: 10,time: 550});
				}
                if(index == 3){ //세번째 페이지에 카운트업
					$('.volume2').counterUp({delay: 10,time: 550});
				}
			}
		});
	});

//gnb depth 내부뎁스
$(function() {
    setGnb();
    function setGnb() {
        $('.innerHeader .gnb > li > a').on('mouseenter focus', function() {
            $('.innerHeader').addClass('on');
            $('.innerHeader .gnb > li .inner').addClass('on');
            $('header').css({'border':'none'});
        });
        $('header').on('mouseleave', function() {
            $('.innerHeader').removeClass('on');
            $('.innerHeader .gnb > li .inner').removeClass('on');
            $('header').css({'border-bottom':'1px solid rgba(255, 255, 255, 0.1)'});
        });
    }
});

//.top-visual .list 넓이값 높이값
$(function() {
    var winW = $(window).width(),
        winH = $(window).height(),
		topVisual = $('.top-visual'),
		list = topVisual.find('.list');
	list.css({width: winW+'px', height: winH+'px'});
});  

//.top-visual 이미지슬라이드
    $(function() {
        $(".top-visual").slick({
            arrows: false,
            dots: true,
            fade: true,
            autoplay: true,
            autoplaySpeed: 2800,
            pauseOnHover:false,
		    pauseOnFocus:false,
            customPaging: function(slider, i) {
                var tit = $(slider.$slides[i]).find('.visual-dot-nav').html();
                return '<div class="pager-tit" class=' + i + '>'+ tit + '</div>';
            }
        });
    });  