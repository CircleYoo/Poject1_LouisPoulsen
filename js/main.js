(function() {
    'use strict'

    const $aside = document.querySelector('aside');
    const $asideBtn = document.querySelector('aside > button');
    
    $asideBtn.addEventListener('click', ()=> {
        // $aside.classList = 'aside_close';
        $aside.style.display = 'none';
    })

})();