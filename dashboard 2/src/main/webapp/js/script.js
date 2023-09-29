/*  Dark mode */
const btn = document.getElementById("toggle");

const theme = document.querySelector("#theme-link");

btn.addEventListener("click",function(){
    if(theme.getAttribute("href")=="/styles.css")
    theme.href ="css/dark-theme.css";

    else {
        theme.href = "css/style.css";
    }
})