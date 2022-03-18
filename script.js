let wrapper = document.querySelector('.cardGroup--wrapper');
let landing = document.querySelector('#bigCard--landing');
let site = document.querySelector('#bigCard--site');
let targetSEO = document.querySelector('#bigCard--target');

landing.addEventListener("click", () => {
    landing.style.display = "none";
});

site.addEventListener("click", () => {
    site.style.display = "none";
});

targetSEO.addEventListener("click", () => {
    targetSEO.style.display = "none";
});

wrapper.addEventListener('click', (e) => {
    const  { target } = e;
    if (target.matches('.cardGroup--button')) {
        if (target.matches('#landing')) {
            landing.style.display = "flex";
            landing.style.animation = "appear 0.7s 1 ease-out";
            
        } else if (target.matches('#site')) {
            site.style.display = "flex";
            site.style.animation = "appear 0.7s 1 ease-out";
            
        } else if (target.matches('#target')) {
            targetSEO.style.display = "flex";
            targetSEO.style.animation = "appear 0.7s 1 ease-out";

        };        
    };
});

let ourWorks = document.querySelector('.ourWorks');

ourWorks.addEventListener('click', (e) => {
    const  { target } = e;
    if (target.matches('.ourWorks')) {
        if (target.matches('.two')) {
            // landing.style.display = "flex";
            // landing.style.animation = "appear 0.7s 1 ease-out";
            console.log('two!');
            
        }
    }
});

let one = document.querySelector('.one');
let work1 = document.querySelector('.ourWorks--bigСard');
one.addEventListener('click', ()=>{
    work1.style.display = "flex";
    work1.style.animation = "appear 0.7s 1 ease-out";
});
work1.addEventListener('click', ()=>{
    work1.style.display = "none";
});