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

let one = document.querySelector('.one');
let card = document.querySelector('.ourWorks--bigСard--ex1');
one.addEventListener('click', ()=>{
    card.style.display = "flex";
});
card.addEventListener('click', ()=>{
    card.style.display = "none";
});

let two = document.querySelector('.two');
let card2 = document.querySelector('.ourWorks--bigСard--ex2');
two.addEventListener('click', ()=>{
    card2.style.display = "flex";
});
card2.addEventListener('click', ()=>{
    card2.style.display = "none";
});

let three = document.querySelector('.three');
let card3 = document.querySelector('.ourWorks--bigСard--ex3');
three.addEventListener('click', ()=>{
    card3.style.display = "flex";
});
card3.addEventListener('click', ()=>{
    card3.style.display = "none";
});