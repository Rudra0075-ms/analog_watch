const clock = document.querySelector(".clock");
const numbers = document.getElementById("numbers");

const hour = document.getElementById("hour");
const minute = document.getElementById("minute");
const second = document.getElementById("second");

const hh = document.getElementById("hh");
const mm = document.getElementById("mm");
const ss = document.getElementById("ss");
const ampm = document.getElementById("ampm");

// Create Numbers 1-12
const radius = 150;

for (let i = 1; i <= 12; i++) {

    const angle = (i * 30 - 90) * Math.PI / 180;

    const x = 175 + radius * Math.cos(angle);
    const y = 175 + radius * Math.sin(angle);

    const n = document.createElement("span");
    n.innerText = i;
    n.style.left = `${x}px`;
    n.style.top = `${y}px`;

    numbers.appendChild(n);
}

// Update Clock

function updateClock() {

    const now = new Date();

    // IST
    const ist = new Date(
        now.toLocaleString("en-US", {
            timeZone: "Asia/Kolkata"
        })
    );

    let h = ist.getHours();
    let m = ist.getMinutes();
    let s = ist.getSeconds();

    // Analog

    hour.style.transform =
        `rotate(${(h % 12) * 30 + m * 0.5}deg)`;

    minute.style.transform =
        `rotate(${m * 6 + s * 0.1}deg)`;

    second.style.transform =
        `rotate(${s * 6}deg)`;

    // Digital

    const period = h >= 12 ? "PM" : "AM";

    let displayHour = h % 12;
    displayHour = displayHour ? displayHour : 12;

    hh.innerText = String(displayHour).padStart(2, "0");
    mm.innerText = String(m).padStart(2, "0");
    ss.innerText = String(s).padStart(2, "0");
    ampm.innerText = period;
}

updateClock();
setInterval(updateClock, 1000);
