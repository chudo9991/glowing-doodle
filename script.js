let wrapper = document.querySelector('.cardGroup--wrapper');
let landing = document.querySelector('#bigCard--landing');
let site = document.querySelector('#bigCard--site');
let targetSEO = document.querySelector('#bigCard--target');

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
            // console.log('site');
            site.style.display = "flex";
            site.addEventListener("click", () => {
                site.style.display = "none";
            })
        } else if (target.matches('#target')) {
            console.log('seo');
            targetSEO.style.display = "flex";
            targetSEO.addEventListener("click", () => {
                targetSEO.style.display = "none";
            })
        };        
    };
});