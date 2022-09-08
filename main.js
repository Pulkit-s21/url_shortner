import './style.css'
import 'tw-elements';

const openBtn = document.querySelector("#openMenu");
const closeBtn = document.querySelector("#closeMenu");
const menubar = document.querySelector('[role="menuBar"]');

openBtn.addEventListener("click",() => {
    const IsExpanded = JSON.parse(openBtn.getAttribute("aria-expanded"));
    openBtn.setAttribute('aria-expanded', !IsExpanded);
    menubar.classList.toggle("hidden");
    menubar.classList.toggle("flex");
    openBtn.classList.toggle("hidden");
    closeBtn.classList.toggle("hidden");
});

closeBtn.addEventListener("click",() => {
    const IsExpanded = JSON.parse(closeBtn.getAttribute("aria-expanded"));
    closeBtn.setAttribute('aria-expanded', !IsExpanded);
    menubar.classList.toggle("hidden");
    menubar.classList.toggle("flex");
    openBtn.classList.toggle("hidden");
    closeBtn.classList.toggle("hidden");
});