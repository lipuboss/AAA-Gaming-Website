window.addEventListener("load", () => {
    setTimeout(() => {
        const loader = document.getElementById("loader");
        loader.style.opacity = "0";
        loader.style.visibility = "hidden";
    }, 2000);
});

const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");

let playing = false;

musicBtn.addEventListener("click", () => {
    if (!playing) {
        music.play();
        musicBtn.innerHTML = "🔊";
    } else {
        music.pause();
        musicBtn.innerHTML = "🎵";
    }
    playing = !playing;
});

const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {
    const update = () => {
        const target = +counter.dataset.target;
        const current = +counter.innerText;
        const increment = target / 150;

        if (current < target) {
            counter.innerText = Math.ceil(current + increment);
            setTimeout(update, 15);
        } else {
            counter.innerText = target;
        }
    };

    update();
});

function searchPlayer() {
    const uid = document.getElementById("uid").value;

    if (uid === "") {
        alert("Enter Free Fire UID");
        return;
    }

    document.getElementById("pname").innerHTML = "LIPU BOSS";
    document.getElementById("puid").innerHTML = uid;
    document.getElementById("plevel").innerHTML = "90";
    document.getElementById("prank").innerHTML = "Heroic ★★★";
}

const cursor = document.createElement("div");

cursor.style.width = "20px";
cursor.style.height = "20px";
cursor.style.border = "2px solid red";
cursor.style.borderRadius = "50%";
cursor.style.position = "fixed";
cursor.style.pointerEvents = "none";
cursor.style.zIndex = "99999";
cursor.style.boxShadow = "0 0 20px red";

document.body.appendChild(cursor);

document.addEventListener("mousemove", e => {
    cursor.style.left = e.clientX - 10 + "px";
    cursor.style.top = e.clientY - 10 + "px";
});

window.addEventListener("scroll", () => {
    const header = document.querySelector("header");

    if (window.scrollY > 60) {
        header.style.background = "rgba(0,0,0,.85)";
        header.style.boxShadow = "0 0 20px red";
    } else {
        header.style.background = "rgba(255,255,255,.06)";
        header.style.boxShadow = "none";
    }
});

const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector("nav ul");

menuBtn.addEventListener("click", () => {
    if (nav.style.display === "flex") {
        nav.style.display = "none";
    } else {
        nav.style.display = "flex";
        nav.style.flexDirection = "column";
        nav.style.position = "absolute";
        nav.style.top = "70px";
        nav.style.right = "20px";
        nav.style.background = "#111";
        nav.style.padding = "20px";
        nav.style.borderRadius = "12px";
    }
});

console.log("🔥 LIPU BOSS AAA Gaming Website Loaded Successfully!");
