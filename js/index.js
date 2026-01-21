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
    document.documentElement.classList.add("dark")

    // change to sun
    var icon = document.querySelector("#theme i")
    icon.classList.remove("fa-moon")
    icon.classList.add("fa-sun")

    // add theme to storage
    localStorage.setItem("theme", "dark")
}

function setLight() {
    document.documentElement.classList.remove("dark")

    // change to moon
    var icon = document.querySelector("#theme i")
    icon.classList.remove("fa-sun")
    icon.classList.add("fa-moon")

    // add theme to storage
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


const images = ['cat-sit-black-R.png', 'cat-stand-black-R.png', 'cat-stand-orange-R.png', 'cat-stand-white-R.png'];

function animateWalk() {
    
}

function stopWalk() {

}

function moveCat(e) {
    var cat = document.getElementById("cat-pic");

    var targetX = e.clientX;

    animateWalk();

    cat.style.left = `${targetX}px`;
}

document.addEventListener("click", moveCat);
