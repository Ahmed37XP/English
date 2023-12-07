//python
const pybtn = document.querySelector(".py-btn");
const py = document.querySelector(".py-div")

pybtn.addEventListener("mouseover" , () => {
    py.style.display = "block";
})
pybtn.addEventListener("mouseout" , () => {
    py.style.display = "none";
})
 //java
const javabtn = document.querySelector(".java-btn");
const java = document.querySelector(".java-div")

javabtn.addEventListener("mouseover", () => {
    java.style.display = "block";
})
javabtn.addEventListener("mouseout", () => {
    java.style.display = "none";
})
//javascript
const jsbtn = document.querySelector(".js-btn");
const js = document.querySelector(".js-div")

jsbtn.addEventListener("mouseover", () => {
    js.style.display = "block";
})
jsbtn.addEventListener("mouseout", () => {
    js.style.display = "none";
})

//php
const phpbtn = document.querySelector(".php-btn");
const php = document.querySelector(".php-div")

phpbtn.addEventListener("mouseover", () => {
    php.style.display = "block";
})
phpbtn.addEventListener("mouseout", () => {
    php.style.display = "none";
})
 //cpp
const cppbtn = document.querySelector(".cpp-btn");
const cpp = document.querySelector(".cpp-div")

cppbtn.addEventListener("mouseover", () => {
    cpp.style.display = "block";
})
cppbtn.addEventListener("mouseout", () => {
    cpp.style.display = "none";
})


window.addEventListener("scroll", () => {
    let page = window.scrollY
    const welcome = document.querySelector(".welcome-text");
    const desc = document.getElementById("desc-text");
    const question = document.getElementById("question");
    const img = document.querySelector(".pro-img");
    const secondtext = document.querySelector(".second-text");
    const second = document.querySelector(".second")
    const third = document.querySelector(".third")

    if(page < 40){
        welcome.style.opacity = "1"
        question.style.display = "block"
        desc.style.display = "none"
        img.style.display="block"
        secondtext.style.display = "none"
        second.style.display ="none"
        third.style.display ="none"
        
    }
    else if (page > 40 && page < 150) {
        welcome.style.opacity = "0"
        desc.style.display="block"
        question.style.display="none"
        img.style.display ="block"
        secondtext.style.display ="none";
        second.style.display ="none"
        third.style.display = "none"
        
    }
    else if(page>160 && page <400){
        second.style.display ="block";
        secondtext.style.display = "block"
        desc.style.display ="none"
        img.style.display="none"
        third.style.display = "none"
        welcome.style.opacity = "0"
    }
    else if(page>400){
        second.style.display = "none";
        secondtext.style.display = "none"
        desc.style.display = "none"
        img.style.display = "none"
        third.style.display ="block"
        welcome.style.opacity = "0"
    }
   
    
   
    
})