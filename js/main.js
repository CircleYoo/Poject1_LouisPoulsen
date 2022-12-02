(function() {
    'use strict'

    // 브랜드 스토어 오픈
    const $aside = document.querySelector('aside');
    const $asideBtn = document.querySelector('aside > button');
    
    $asideBtn.addEventListener('click', ()=> {
        $aside.style.display = 'none';
    })

    // 스크롤 시 header 높이 줄이기
    const $header = document.querySelector('header');
    const $logoImg = document.querySelector('#logo_img');
    const $logoImgMini = document.querySelector('#logo_img_mini');
    window.onscroll = function () {
        if (window.scrollY > 0) {
            $header.classList.add('scrolled');
            $logoImg.style.display = 'none'
            $logoImgMini.style.display = 'block'
        } else {
            $header.classList.remove('scrolled');
            $logoImg.style.display = 'block'
            $logoImgMini.style.display = 'none'
        }
    };

    // 검색창 열고 닫기
    const $searchIcon = document.querySelector('.main_icon .fa-magnifying-glass');
    const $searchBar = document.querySelector('#search_bar');
    const $headerXBtn = document.querySelector('.header_xBtn');

    $searchIcon.addEventListener('click', ()=> {
        $searchBar.classList.toggle('search_open');
        $headerXBtn.style.display='block';
    })

    $headerXBtn.addEventListener('click', ()=> {
        $headerXBtn.style.display='none'
        $searchBar.classList.toggle('search_open');
    })

    // 장바구니 열고 닫기 + 스크롤 방지 + 뒷 배경 어둡게
    const $cartBtn = document.querySelector('.main_icon .fa-cart-shopping');
    const $cartTap = document.querySelector('#cart');
    const $cartXBtn = document.querySelector('#cart_title > button');
    const $cartOverlay = document.querySelector('.cart_overlay');
    const body = document.getElementsByTagName('body')[0];

    $cartBtn.addEventListener('click', () => {
        $cartTap.classList.toggle('cart_active')
        body.classList.toggle('scrollLock');  
        $cartOverlay.style.display = 'block';
    })
    
    $cartXBtn.addEventListener('click', () => {
        $cartOverlay.style.display = 'none';
        $cartTap.classList.toggle('cart_active')
        body.classList.toggle('scrollLock');   
    })

    // main title 글자 색 + 이미지 변경
    const shapeColor = document.querySelector('#shape');
    const objImg = document.querySelector('#main_png > img')

    let colorArr = ['#055e52','#f9a02d', '#7eac63', '#ee6f65',  '#a16842'];
    let imgArr = new Array();
    imgArr[0] = 'img/main/main-01.png';
    imgArr[1] = 'img/main/main-02.png';
    imgArr[2] = 'img/main/main-03.png';
    imgArr[3] = 'img/main/main-04.png';
    imgArr[4] = 'img/main/main-05.png';

    let imgIdx = 0;
    let idx = 0;
    setInterval(() => {
        shapeColor.style.color = colorArr[idx++];
        if(colorArr.length === idx) { idx = 0; }

        objImg.src = imgArr[imgIdx++];
        if(imgArr.length === imgIdx) { imgIdx = 0; }
    }, 1500);

    
    // con7 store - mouseover
    const $store = document.querySelectorAll('#con7_store > a')

    for(let i=0; i<$store.length; i++) {
        $store[i].addEventListener('mouseenter', () => {
            console.log($store)
            document.body.style.backgroundColor = "#b4ccd9";
        })
        $store[i].addEventListener('mouseleave', () => {
            console.log($store)
            document.body.style.backgroundColor = "#fff";
        })
    }

})();