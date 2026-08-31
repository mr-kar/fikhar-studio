/*
========================================
FIKHAR STUDIO
Footer Animation
Sprint 8.3
========================================
*/

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function footerAnimation() {

    const footer = document.querySelector("#footer");

    if (!footer) return;


    // ===========================
    // BRAND
    // ===========================

    const brand = footer.querySelector(".footer-brand");

    if (brand) {

        gsap.from(brand, {

            scrollTrigger: {
                trigger: footer,
                start: "top 85%",
                once: true
            },

            opacity: 0,
            y: 35,

            duration: .8,

            ease: "power3.out"

        });

    }


    // ===========================
    // COLUMNS
    // ===========================

    const columns =
        footer.querySelectorAll(".footer-column");

    if (columns.length) {

        gsap.from(columns, {

            scrollTrigger: {
                trigger: footer,
                start: "top 82%",
                once: true
            },

            opacity: 0,
            y: 30,

            stagger: .12,

            duration: .6,

            ease: "power3.out"

        });

    }


    // ===========================
    // LINKS
    // ===========================

    const links =
        footer.querySelectorAll(".footer-link");

    if (links.length) {

        gsap.from(links, {

            scrollTrigger: {
                trigger: footer,
                start: "top 78%",
                once: true
            },

            opacity: 0,
            x: 15,

            stagger: .06,

            duration: .45,

            delay: .2,

            ease: "power3.out"

        });

    }


    // ===========================
    // BOTTOM
    // ===========================

    const bottom =
        footer.querySelector(".footer-bottom");

    if (bottom) {

        gsap.from(bottom, {

            scrollTrigger: {
                trigger: footer,
                start: "top 72%",
                once: true
            },

            opacity: 0,

            duration: .7,

            delay: .25,

            ease: "power3.out"

        });

    }

}