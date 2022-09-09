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

// URL shortner

const text = document.querySelector("#input");
const result = document.querySelector(".result");
const btn = document.getElementById("btn");

btn.addEventListener('click',(e) => {
    e.preventDefault();

    const url = text.value;
    // console.log(url);

    shortenUrl(url);
});

async function shortenUrl(url){
    try {
        const res = await fetch(`https://api.shrtco.de/v2/shorten?url=${url}`);
        const data = await res.json(); // converting the result returned to us in JSON format

        // creating the div where the shortened url and the copy btn will be shown
        const newUrl = document.createElement('div');
        newUrl.classList.add('item');
        newUrl.innerHTML = 
        // data is the variable created above which stores the result given to us and we are assigning the result part and the short_link part inside the result of it
        `
            <p>${data.result.short_link}</p> 
            <button class="newUrl-btn">Copy</button>
            <button class="delete-btn">Delete</button>
        `
        // result is the div alrdy created in HTML
            result.prepend(newUrl);
            const copyBtn = document.querySelector('.newUrl-btn');
            copyBtn.addEventListener("click",() => {
                // here we are selecting the new short url beside the copy btn..this is one of copying the text in js
                navigator.clipboard.writeText(copyBtn.previousElementSibling.textContent);
                copyBtn.innerHTML = "Copied";
                copyBtn.style.backgroundColor = "blue";
            });

        // deleting the div if user doesnt want it anymore on the screen
            const deleteBtn = document.querySelector('.delete-btn');
            deleteBtn.classList.add(".delete-btn");
            deleteBtn.addEventListener("click",(e) => {
                // here we are selecting the new short url beside the copy btn..this is one of copying the text in js
                deleteBtn.classList.add(".delete-animation");
                newUrl.remove();
                deleteBtn.style.backgroundColor = "red";
            });
            // making the input box empty once the function runs perfectly for nxt use case
            text.value = "";

    } catch (error) {
        alert("Please enter a valid URL");
    }
}