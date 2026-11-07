let btn = document.querySelector("#theme-toggle");

let body = document.querySelector('body');
let currEvent = "light"

btn.addEventListener("click", ()=>{
    if (currEvent === "light") {
        currEvent = "dark";
        body.classList.add("dark");
        body.classList.remove("light");
    }else{
        currEvent = "light";
        body.classList.add("light");
        body.classList.remove("dark");
    }
})