/*
========================================
FIKHAR STUDIO
Journey Animation
Sprint 6.3
========================================
*/

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function journeyAnimation() {

    const section = document.querySelector("#journey");

    if (!section) return;


    // ===========================
    // HEADER
    // ===========================

    const label = section.querySelector(".section-label");
    const title = section.querySelector(".section-title");
    const description = section.querySelector(".section-description");


    if (label) {

        gsap.from(label, {

            scrollTrigger: {
                trigger: section,
                start: "top 75%",
                once: true
            },

            opacity: 0,
            y: 25,

            duration: .6,

            ease: "power3.out"

        });

    }


    if (title) {

        gsap.from(title, {

            scrollTrigger: {
                trigger: section,
                start: "top 75%",
                once: true
            },

            opacity: 0,
            y: 55,

            duration: .8,

            delay: .12,

            ease: "power3.out"

        });

    }


    if (description) {

        gsap.from(description, {

            scrollTrigger: {
                trigger: section,
                start: "top 75%",
                once: true
            },

            opacity: 0,
            y: 25,

            duration: .7,

            delay: .25,

            ease: "power3.out"

        });

    }


    // ===========================
    // JOURNEY ITEMS
    // ===========================

    const items = section.querySelectorAll(".journey-item");


    items.forEach((item, index) => {

        const year =
            item.querySelector(".journey-year");

        const marker =
            item.querySelector(".journey-marker");

        const category =
            item.querySelector(".journey-category");

        const title =
            item.querySelector(".journey-title");

        const description =
            item.querySelector(".journey-description");

        const stack =
            item.querySelectorAll(".journey-tech");

        const line =
            item.querySelector(".journey-line");


        // ===========================
        // YEAR
        // ===========================

        if (year) {

            gsap.from(year, {

                scrollTrigger: {
                    trigger: item,
                    start: "top 82%",
                    once: true
                },

                opacity: 0,
                x: -30,

                duration: .6,

                ease: "power3.out"

            });

        }


        // ===========================
        // MARKER
        // ===========================

        if (marker) {

            gsap.from(marker, {

                scrollTrigger: {
                    trigger: item,
                    start: "top 82%",
                    once: true
                },

                opacity: 0,
                scale: .5,

                duration: .5,

                delay: .08,

                ease: "back.out(1.7)"

            });

        }


        // ===========================
        // CATEGORY
        // ===========================

        if (category) {

            gsap.from(category, {

                scrollTrigger: {
                    trigger: item,
                    start: "top 82%",
                    once: true
                },

                opacity: 0,
                y: 20,

                duration: .5,

                delay: .08,

                ease: "power3.out"

            });

        }


        // ===========================
        // TITLE
        // ===========================

        if (title) {

            gsap.from(title, {

                scrollTrigger: {
                    trigger: item,
                    start: "top 82%",
                    once: true
                },

                opacity: 0,
                y: 45,

                duration: .75,

                delay: .15,

                ease: "power3.out"

            });

        }


        // ===========================
        // DESCRIPTION
        // ===========================

        if (description) {

            gsap.from(description, {

                scrollTrigger: {
                    trigger: item,
                    start: "top 80%",
                    once: true
                },

                opacity: 0,
                y: 25,

                duration: .7,

                delay: .25,

                ease: "power3.out"

            });

        }


        // ===========================
        // STACK
        // ===========================

        stack.forEach((tech, techIndex) => {

            gsap.from(tech, {

                scrollTrigger: {
                    trigger: item,
                    start: "top 78%",
                    once: true
                },

                opacity: 0,
                y: 15,

                duration: .4,

                delay: .3 + (techIndex * .06),

                ease: "power3.out"

            });

        });


        // ===========================
        // CONNECTING LINE
        // ===========================

        if (line) {

            gsap.from(line, {

                scrollTrigger: {
                    trigger: item,
                    start: "top 78%",
                    once: true
                },

                scaleY: 0,

                transformOrigin: "top center",

                duration: 1.2,

                delay: .15,

                ease: "power2.out"

            });

        }

    });


    // ===========================
    // CLOSING
    // ===========================

    const closing =
        section.querySelector(".journey-closing");


    if (closing) {

        gsap.from(closing, {

            scrollTrigger: {
                trigger: closing,
                start: "top 85%",
                once: true
            },

            opacity: 0,
            y: 50,

            duration: .9,

            ease: "power3.out"

        });

    }

}