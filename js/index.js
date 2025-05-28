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

    // homepage theme
    var bio = document.getElementById("bio")
    bio.classList.add("dark")

    var contactLinks = document.querySelectorAll(".contact-links a")
    for (var i = 0; i < contactLinks.length; i++) {
        contactLinks[i].classList.add("dark")
    }

    var contact = document.querySelectorAll(".contact")
    for (var i = 0; i < contact.length; i++) {
        contact[i].classList.add("dark")
    }

    // change to sun
    var icon = document.querySelector("#theme i")
    icon.classList.remove("fa-moon")
    icon.classList.add("fa-sun")

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

    // homepage theme
    var bio = document.getElementById("bio")
    bio.classList.remove("dark")

    var contactLinks = document.querySelectorAll(".contact-links a")
    for (var i = 0; i < contactLinks.length; i++) {
        contactLinks[i].classList.remove("dark")
    }

    var contact = document.querySelectorAll(".contact")
    for (var i = 0; i < contact.length; i++) {
        contact[i].classList.remove("dark")
    }

    // change to moon
    var icon = document.querySelector("#theme i")
    icon.classList.remove("fa-sun")
    icon.classList.add("fa-moon")

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