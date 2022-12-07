(function() {
    'use strict';

    let swiperTopNum = document.querySelector('#con2_img_1 .swiper-slide ');
	// $('.gallery-top').find('.swiper-slide');
	let swiperSubNum = document.querySelector('#con2_img_2 .gallery-thumbs');
	// $('.gallery-thumbs').find('.gallery-thumbs');

	let galleryTop = new Swiper('.gallery-top', {
    	spaceBetween: 10,	//슬라이드 간격

		loop: true,	//슬라이드 반복
		loopedSlides: swiperTopNum.length	//loop 시 파라미터 duplicate 개수 - 정적으로 숫자 4 표현 가능
    });

    let galleryThumbs = new Swiper('.gallery-thumbs', {
    	spaceBetween: 0,	//슬라이드 간격
    	navigation: {	//네비게이션 사용자 설정
    		nextEl: '.swiper-button-next',	//다음 버튼 클래스 설정
        	prevEl: '.swiper-button-prev',	//이전 버튼 클래스 설정
        },
    	centeredSlides: true,	//슬라이드 중앙 배치
    	slidesPerView: 'auto',	//한번에 보여지는 슬라이드 개수(auto 가능)
    	touchRatio: 0.2,	//드래그 비율 설정(기본값: 1, 기본값을 0으로 설정할 경우 드래그 불가능)
    	slideToClickedSlide: true,	//슬라이드가 여러개 나열되어 있을 경우, 클릭 시 해당 슬라이드 위치로 이동
		loop: true,	//슬라이드 반복
		loopedSlides: swiperSubNum.length //loop 시 파라미터 duplicate 개수 - 정적으로 숫자 4 표현 가능

        //Main Swiper와 Thumbnail Swiper가 연동제어 서로를 제어
    });
    galleryTop.controller.control = galleryThumbs;
    galleryThumbs.controller.control = galleryTop;
})();