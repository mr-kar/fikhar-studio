/*
========================================
FIKHAR STUDIO
About Animation
Sprint 5.3R
Rewrite Version
========================================
*/

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function aboutAnimation() {

    const section = document.querySelector("#about");

    if (!section) return;

    // ===========================
    // Header
    // ===========================

    gsap.from(section.querySelector(".section-label"), {

        scrollTrigger:{
            trigger:section,
            start:"top 75%"
        },

        opacity:0,
        y:30,
        duration:.6,
        ease:"power3.out"

    });

    gsap.from(section.querySelector(".section-title"), {

        scrollTrigger:{
            trigger:section,
            start:"top 75%"
        },

        opacity:0,
        y:60,
        duration:.8,
        delay:.15,
        ease:"power3.out"

    });

    gsap.from(section.querySelector(".section-description"), {

        scrollTrigger:{
            trigger:section,
            start:"top 75%"
        },

        opacity:0,
        y:30,
        duration:.7,
        delay:.3,
        ease:"power3.out"

    });

    // ===========================
    // Image
    // ===========================

    gsap.from(section.querySelector(".about-image"), {

        scrollTrigger:{
            trigger:section,
            start:"top 65%"
        },

        opacity:0,
        scale:.9,
        y:50,
        duration:1,
        ease:"power3.out"

    });

    // ===========================
    // Description
    // ===========================

    gsap.from(section.querySelector(".about-description"), {

        scrollTrigger:{
            trigger:section,
            start:"top 65%"
        },

        opacity:0,
        x:40,
        duration:.9,
        delay:.2,
        ease:"power3.out"

    });

    // ===========================
    // Principles
    // ===========================

const pills = section.querySelectorAll(".about-pill");

pills.forEach((pill, index)=>{

    gsap.from(pill,{

        scrollTrigger:{
            trigger:pill,
            start:"top 90%"
        },

        opacity:0,

        y:20,

        duration:.5,

        delay:index*.08,

        ease:"power3.out"

    });

});

    // ===========================
    // Stats
    // ===========================

const stats = section.querySelectorAll(".about-stat");

stats.forEach((card,index)=>{

    gsap.from(card,{

        scrollTrigger:{
            trigger:card,
            start:"top 90%"
        },

        opacity:0,

        y:40,

        duration:.7,

        delay:index*.12,

        ease:"power3.out"

    });

});

}