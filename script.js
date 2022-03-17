let wrapper = document.querySelector('.cardGroup--wrapper');
let landing = document.querySelector('#bigCard--landing');

wrapper.addEventListener('click', (e) => {
    const  { target } = e;
    if (target.matches('.cardGroup--button')) {
        if (target.matches('#landing')) {
            // console.log('ландинг');
            landing.style.display = "flex";
            landing.addEventListener("click", () => {
                landing.style.display = "none";
            })
            
        } else if (target.matches('#site')) {
            console.log('site');
        } else if (target.matches('#seo')) {
            console.log('seo');
        };        
    };
});