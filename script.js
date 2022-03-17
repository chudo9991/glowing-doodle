let wrapper = document.querySelector('.cardGroup--wrapper');

wrapper.addEventListener('click', (e) => {
    const  { target } = e;
    if (target.matches('.cardGroup--button')) {
        if (target.matches('#landing')) {
            console.log('ландинг');
        } else if (target.matches('#site')) {
            console.log('site');
        } else if (target.matches('#seo')) {
            console.log('seo');
        };        
    };
});