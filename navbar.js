
// button to open nav bar on mobile phones

button = document.querySelector('#openNavBar');
button.addEventListener("click", function (e) {
    document.querySelector('.mobileHeader').style.display = "inline";
}
)

// button to close nav bar on mobile phones

buttonClose = document.querySelector('#closeNavBar');
buttonClose.addEventListener("click", function (e) {
    document.querySelector('.mobileHeader').style.animationName = "navclose";
    document.querySelector('.mobileHeader').style.animationDuration = "1s";

    setTimeout(timer, 1000)

    function timer() {
        document.querySelector('.mobileHeader').style.display = "none";
        document.querySelector('.mobileHeader').style.animationName = "navbar"
        document.querySelector('.mobileHeader').style.animationDuration = "1s";

    }


}


)
