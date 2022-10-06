import './style.css'
import 'tw-elements';
import anime from 'animejs/lib/anime.es.js';

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

    const url = text.value.trim();
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
            <button class="newUrl-btn"><i class="fa-regular fa-copy"></i></button>
            <button class="delete-btn"><i class="fa-solid fa-trash"></i></button>
        `
        // result is the div alrdy created in HTML
            result.prepend(newUrl);

        // copy btn functioning
            const copyBtn = document.querySelector('.newUrl-btn');
            copyBtn.style.backgroundColor = "#0dbd82";
            copyBtn.addEventListener("click",() => {
                // here we are selecting the new short url beside the copy btn..this is one of copying the text in js
                navigator.clipboard.writeText(copyBtn.previousElementSibling.textContent);
                copyBtn.innerHTML = `<i class="fa-solid fa-clipboard"></i>`;
                copyBtn.style.backgroundColor = "#04cbd9";
            });

        // deleting the div if user doesnt want it anymore on the screen
            const deleteBtn = document.querySelector('.delete-btn');
            deleteBtn.style.backgroundColor = "#fa2323";
            deleteBtn.addEventListener("click",() => {
                newUrl.remove();
            });

        // making the input box empty once the function runs perfectly for nxt use case
            text.value = "";

    } catch (error) {
        alert("Please enter a valid URL");
    }
}

anime({
    targets: '.relative img',
    rotate: {
        value: 360,
        duration: 1800,
        easing: 'easeInOutSine'
    },
    scale: {
        value: 1.1,
        duration: 1000,
        delay: 800,
        easing: 'easeInOutQuart'
    },
    scale: {
        value: 1,
        duration: 1000,
        delay: 800,
        easing: 'easeInOutQuart'
    },
    loop: true,
    delay: 250 // All properties except 'scale' inherit 250ms delay
});


// TODO: There is a way to do this is in a loop but I cnt figure it out and in video it was done using Jquery

// init scrollMagic
var controller = new ScrollMagic.Controller();

// create a scene
new ScrollMagic.Scene({
    triggerElement: ".box-1",
    // duration: '30%', // duration doesnt mean time in scrollMagic it means px and % is for responsiveness
    // triggerHook: 0.7
})
.setClassToggle(".box-1","fade-in")
.addTo(controller)

// init scrollMagic
var controller2 = new ScrollMagic.Controller();

// create a scene
new ScrollMagic.Scene({
    triggerElement: ".box-2",
    // duration: '30%', // duration doesnt mean time in scrollMagic it means px and % is for responsiveness
    // triggerHook: 0.7
})
.setClassToggle(".box-2","fade-in")
.addTo(controller2)

// init scrollMagic
var controller3 = new ScrollMagic.Controller();

// create a scene
new ScrollMagic.Scene({
    triggerElement: ".box-3",
    // duration: '30%', // duration doesnt mean time in scrollMagic it means px and % is for responsiveness
    // triggerHook: 0.7
})
.setClassToggle(".box-3","fade-in")
.addTo(controller3)

// * Parallax using SMGsap and tween

// new ScrollMagic.Scene({
//     triggerElement: '.bcg-parallax',
//     triggerHook: 1,
//     duration: '200%',
// })
// .setTween(TweenMax.from('.bcg', 1, {y: '-30%', ease: Power0.easeNone}))
// .addTo(controller)


// * gsap animation 

// gsap.to('header div div',{
//     duration: 1,
//     y: 10,
//     ease: "power2.out",
//     repeat: -1,
//     repeatDelay: 1,
//     yoyo: true
// });

// gsap.from('header div div',{
//     duration: 1,
//     y: 10,
//     delay: 1,
//     ease: "power2.out",
// });

// // * animating the nav links for better visuals

// gsap.fromTo(
//     ['.link-5','.link-4','.link-3','.link-2','.link-1'],{
//         opacity: 0,
//         x: -10
//     },
//     {
//         opacity: 1,
//         x: 0,
//         duration: .3,
//         ease: 'slow(.7,.7.false)',
//         delay: .1,
//         stagger: .2
//     }
// )
// // * animating the header content for better visuals

// gsap.fromTo(
//     ['header div div','header div div h2','header div div p','header div div a'],{
//         opacity: 0,
//         x: -10
//     },
//     {
//         opacity: 1,
//         x: 0,
//         duration: .7,
//         ease: 'slow(.7,.7.false)',
//         delay: .7,
//         stagger: .2
//     }
// )

// // * animating the urlShortner section

// gsap.fromTo(
//     ['div form','.shortBtn','.urlInput'],{
//         opacity: 0,
//         x: -10
//     },
//     {
//         opacity: 1,
//         x: 0,
//         duration: .5,
//         ease: 'slow(.7,.7.false)',
//         delay: 1.5,
//         stagger: .2
//     }
// )

// * creating timeline so that we dont have to manually delay each animations..since they are all linked we dont need to add delay and wait for first one to finish

const timeLine = gsap.timeline();

timeLine
    .fromTo(
            ['.link-5','.link-4','.link-3','.link-2','.link-1'],
            {
                opacity: 0,
                x: -10
            },
            {
                opacity: 1,
                x: 0,
                duration: .3,
                ease: 'slow(.7,.7.false)',
                stagger: .2
            }
        )
    .fromTo(
            ['header div div','header div div h2','header div div p','header div div a'],
            {
                opacity: 0,
                x: -10
            },
            {
                opacity: 1,
                x: 0,
                duration: .7,
                ease: 'slow(.7,.7.false)',
                stagger: .2
            }
        )
    .fromTo(
            ['div form','.shortBtn','.urlInput'],
            {
                opacity: 0,
                x: -10
            },
            {
                opacity: 1,
                x: 0,
                duration: .5,
                ease: 'slow(.7,.7.false)',
                stagger: .2
            }
        )