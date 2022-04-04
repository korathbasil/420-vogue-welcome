const daysText = document.getElementById("days");
const hoursText = document.getElementById("hours");
const minutesText = document.getElementById("minutes");
const secondsText = document.getElementById("seconds");

const contentH2One = document.getElementById("content-h2-1");
const timer = document.getElementById("timer");
const contentH2Two = document.getElementById("content-h2-2");
const contentBottomDiv = document.getElementById("content-bottom-div");


const target = new Date('April 20, 2022 00:00:00')

setInterval(() => {
    calculateAndDisplayTimer(Date.now())
}, 1000)


function calculateAndDisplayTimer(now) {
    const diff = Math.floor((target - now) / 1000);

    const days = Math.floor(diff/ (60 * 60 * 24));
    let bal = diff - (days * (60 * 60 * 24));
    
    const hours = Math.floor(bal / (60 * 60));
    bal = bal - (hours * (60 * 60));
    
    const minutes = Math.floor(bal / 60);
    bal = bal - (minutes * 60);

    displayTimerPart(daysText, days);
    displayTimerPart(hoursText, hours);
    displayTimerPart(minutesText, minutes);
    displayTimerPart(secondsText, bal);
}

function displayTimerPart(part, value) {
    let text = value.toString();
    if(value / 10 < 1) text = "0" + text;
    part.innerHTML = text;
}

function start() {
    setTimeout(() => {
        contentH2One.style.opacity = 1;
    }, 400);
    setTimeout(() => {
        timer.style.opacity = 1;
    }, 700);
    setTimeout(() => {
        contentH2Two.style.opacity = 1;
    }, 900);
    setTimeout(() => {
        contentBottomDiv.style.opacity = 1;
    }, 1000);
}

start()