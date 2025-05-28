function expand(button) {
    var block = button.closest('.block')
    block.classList.toggle('expanded')

    if(block.classList.contains('expanded')) {
        button.textContent = '▲'
    } 
    else {
        button.textContent = '▼'
    }
}


function getTheme() {
    var theme = localStorage.getItem("theme")

    // on load, get the previous theme
    if(theme == "dark") {
        setDark()
    }
    else {
        setLight()
    }
}


function setDark() {


    // general theme
    var body = document.body
    if(body) {
        body.classList.add("dark")
    }

    var navname = document.querySelector(".navname")
    if(navname) {
        navname.classList.add("dark")
    }

    var navLinks = document.querySelectorAll(".navli a")
    for(var i = 0; i < navLinks.length; i++) {
        navLinks[i].classList.add("dark")
    }

    var navbar = document.querySelectorAll(".navbar a")
    for(var i = 0; i < navbar.length; i++) {
        navbar[i].classList.add("dark")
    }

    var themeBtn = document.getElementById("theme")
    if(themeBtn) {
        themeBtn.classList.add("dark")
    }

    var footer = document.querySelector("footer")
    if(footer) {
        footer.classList.add("dark")
    }

    var footerLinks = document.querySelectorAll("footer a")
    for(var i = 0; i < footerLinks.length; i++) {
        footerLinks[i].classList.add("dark")
    }

    // projects theme
    var heading = document.querySelector("h2")
    heading.classList.add("dark")

    var block = document.querySelectorAll(".block")
    for(var i = 0; i < block.length; i++) {
        block[i].classList.add("dark")
    }

    var blockA = document.querySelectorAll(".block a")
    for(var i = 0; i < blockA.length; i++) {
        blockA[i].classList.add("dark")
    } 

    var content = document.querySelectorAll(".content")
    for(var i = 0; i < content.length; i++) {
        content[i].classList.add("dark")
    }

    // change to sun
    var icon = document.querySelector("#theme i")
    if (icon) {
        icon.classList.remove("fa-moon")
        icon.classList.add("fa-sun")
    }

    localStorage.setItem("theme", "dark")
}

function setLight() {

    // general theme
    var body = document.body
    if(body) {
        body.classList.remove("dark")
    }

    var navname = document.querySelector(".navname")
    if(navname) {
        navname.classList.remove("dark")
    }

    var navLinks = document.querySelectorAll(".navli a")
    for(var i = 0; i < navLinks.length; i++) {
        navLinks[i].classList.remove("dark")
    }

    var navbar = document.querySelectorAll(".navbar a")
    for(var i = 0; i < navbar.length; i++) {
        navbar[i].classList.remove("dark")
    }

    var themeBtn = document.getElementById("theme")
    if(themeBtn) {
        themeBtn.classList.remove("dark")
    }

    var footer = document.querySelector("footer")
    if(footer) {
        footer.classList.remove("dark")
    }

    var footerLinks = document.querySelectorAll("footer a")
    for(var i = 0; i < footerLinks.length; i++) {
        footerLinks[i].classList.remove("dark")
    }

    // projects theme
    var heading = document.querySelector("h2")
    heading.classList.remove("dark")

    var block = document.querySelectorAll(".block")
    for(var i = 0; i < block.length; i++) {
        block[i].classList.remove("dark")
    }

    var blockA = document.querySelectorAll(".block a")
    for(var i = 0; i < blockA.length; i++) {
        blockA[i].classList.remove("dark")
    } 

    var content = document.querySelectorAll(".content")
    for(var i = 0; i < content.length; i++) {
        content[i].classList.remove("dark")
    }


    // change to moon
    var icon = document.querySelector("#theme i")
    if (icon) {
        icon.classList.remove("fa-sun")
        icon.classList.add("fa-moon")
    }

    localStorage.setItem("theme", "light")
}


function changeTheme() {
    var curTheme = localStorage.getItem("theme")

    // if the current theme is dark, change to light
    if(curTheme == "dark") {
        setLight()
    }
    // else, change to dark
    else {
        setDark()
    }
}