import { gsap } from "gsap";

//Replace this value with your name
//const yourName = "Eric Sweeney"
document.querySelector("#name").innerHTML = "Eric Sweeney"();

//GreenSock Timeline

const mainTL = gsap.timeline();

mainTL.from(".red", {duration: 2, opacity:0}, "box")
.from(".blue", {duration: 2, opacity:0}, "box")

.from(".red", {duration: 1, x:0, ease:"bounce.out"}, "box1")
.from(".blue", {duration:1, x:350, ease:"bounce.out"}, "box1")

.to(".red", {duration: 2, y:0, rotation: 360}, "box2")
.to(".blue", {duration: 2, y:300, rotation:360}, "box2")


;