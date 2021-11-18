var i = 0;
var headingTxt = 'Hi, my name is Kasper Ligthart.';
var speed = 50;
const heading = document.getElementById("heading");
const headingBody = document.getElementById("headingBody");

function typeWriter() {
    if (i < headingTxt.length) {
        heading.innerHTML += headingTxt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    } else {
        headingBody.classList.remove("opacity-0");
    }
}

typeWriter();