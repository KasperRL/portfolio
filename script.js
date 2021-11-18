var i = 0;
var headingTxt = 'Hi, my name is Kasper Ligthart.';
var speed = 50;
const heading = document.getElementById("heading");

const elements = [
    document.getElementById("headingBody"),
    document.getElementById("nav"),
    document.getElementById("work"),
    document.getElementById("contact"),
];

function typeWriter() {
    if (i < headingTxt.length) {
        heading.innerHTML += headingTxt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    } else {
        elements.forEach(element => {
            element.classList.remove("opacity-0");
        });
    }
}

typeWriter();