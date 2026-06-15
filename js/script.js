/* =====================

QUEENS OF CHANGE

script.js

====================== */


/* COUNTER ANIMATION */

const counters = document.querySelectorAll(".counter");

const startCounter = (counter)=>{

const target = +counter.dataset.target;

let count = 0;

const speed = target/100;


const update = ()=>{

count += speed;

if(count < target){

counter.innerText = Math.floor(count).toLocaleString();

requestAnimationFrame(update);

}

else{

counter.innerText = target.toLocaleString()+"+";

}

}

update();

};


const observer = new IntersectionObserver(

(entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

startCounter(entry.target);

observer.unobserve(entry.target);

}

})

},

{

threshold:.5

}

);


counters.forEach(counter=>{

observer.observe(counter);

});





/* CURSOR GLOW */


const glow=document.querySelector(".cursor-glow");


document.addEventListener("mousemove",(e)=>{

glow.style.left=e.clientX+"px";

glow.style.top=e.clientY+"px";

});






/* SCROLL REVEAL ANIMATION */


const revealElements=document.querySelectorAll(

".stat-card,.service-card,.timeline-item,.story-card,.gallery-grid img,.cta"

);


const revealObserver=new IntersectionObserver(

(entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},

{

threshold:.2

}

);


revealElements.forEach(el=>{

el.classList.add("hidden");

revealObserver.observe(el);

});






/* GALLERY MODAL */


const galleryImages=document.querySelectorAll(

".gallery-grid img"

);


galleryImages.forEach(img=>{

img.addEventListener("click",()=>{


const modal=document.createElement("div");

modal.classList.add("modal");


modal.innerHTML=`

<img src="${img.src}">

<span class="close">

✕

</span>

`;


document.body.appendChild(modal);


modal.querySelector(".close")

.addEventListener("click",()=>{

modal.remove();

});


modal.addEventListener("click",(e)=>{

if(e.target===modal){

modal.remove();

}

});


});

});







/* NAVBAR BACKGROUND CHANGE */


const header=document.querySelector("header");


window.addEventListener("scroll",()=>{


if(window.scrollY>100){

header.classList.add("nav-scroll");

}

else{

header.classList.remove("nav-scroll");

}


});








/* FLOATING PETALS RANDOM */


const petals=document.querySelectorAll(

".petals span"

);


petals.forEach(petal=>{


petal.style.animationDelay=

Math.random()*10+"s";


petal.style.opacity=

Math.random();


petal.style.fontSize=

20+Math.random()*25+"px";


});








/* SMOOTH BUTTON RIPPLE EFFECT */


const buttons=document.querySelectorAll(

".primary-btn,.secondary-btn,.donate-btn"

);


buttons.forEach(btn=>{


btn.addEventListener("click",(e)=>{


const ripple=document.createElement("span");

ripple.classList.add("ripple");


const x=e.clientX-

btn.getBoundingClientRect().left;


const y=e.clientY-

btn.getBoundingClientRect().top;


ripple.style.left=x+"px";

ripple.style.top=y+"px";


btn.appendChild(ripple);


setTimeout(()=>{

ripple.remove();

},600);


});


});







/* TYPEWRITER EFFECT */

const heroTitle=document.querySelector(".hero h1");


const text=

"Empowering Women Through Change";


let i=0;


function typeWriter(){


if(i<text.length){


heroTitle.innerHTML+=text.charAt(i);


i++;


setTimeout(typeWriter,60);


}


}


if(heroTitle){


heroTitle.innerHTML="";


window.addEventListener(

"load",

typeWriter

);


}