//Change Nav Color:

window.addEventListener("scroll", function() {
    this.document.querySelector("header").classList.toggle("shiftColor", window.scrollY > 200);
})

//Persistent Animation on Navigation:

