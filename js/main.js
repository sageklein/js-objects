
let header = document.querySelector(".article__header");
console.log(header);
header.textContent = "Welcome to my Awesome blog!";

let allHeaders = document.querySelectorAll(".article__header");
console.log("all headers", allHeaders); 

for (let i = 0; i < allHeaders.length; i++) {
    allHeaders[i].classList.add("important");
    console.log(allHeaders);   
}
let dashed = document.querySelector(".dashed");
dashed.classList.remove("dashed");
console.log("dashed", dashed);

let footer = document.querySelector(".article__footer");
console.log("footer", footer);
footer.classList.add("goldenrod");