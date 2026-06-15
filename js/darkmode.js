/* =======================

QUEENS OF CHANGE

Dark / Light Mode

======================== */

const themeToggle = document.getElementById("theme-toggle");


// Load saved theme

const savedTheme = localStorage.getItem("theme");


if(savedTheme){

document.documentElement.setAttribute(

"data-theme",

savedTheme

);


updateIcon(savedTheme);

}

else{

document.documentElement.setAttribute(

"data-theme",

"light"

);

themeToggle.innerHTML="🌙";

}




// Toggle Theme

themeToggle.addEventListener("click",()=>{


const currentTheme=

document.documentElement.getAttribute(

"data-theme"

);


const newTheme=

currentTheme==="dark"

?

"light"

:

"dark";



document.documentElement.setAttribute(

"data-theme",

newTheme

);



localStorage.setItem(

"theme",

newTheme

);



updateIcon(newTheme);


});





// Change Button Icon

function updateIcon(theme){


if(theme==="dark"){


themeToggle.innerHTML="☀️";


}

else{


themeToggle.innerHTML="🌙";


}


}






/* Smooth Transition */

window.addEventListener("load",()=>{


document.body.classList.add(

"theme-transition"

);


});