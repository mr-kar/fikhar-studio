/*
========================================
FIKHAR STUDIO
Contact Animation
Sprint 7.3
========================================
*/

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function contactAnimation() {

    const section = document.querySelector("#contact");

    if (!section) return;


    // ===========================
    // HEADER
    // ===========================

    const label =
        section.querySelector(".section-label");

    const title =
        section.querySelector(".contact-title");

    const description =
        section.querySelector(".contact-description");


    if (label) {

        gsap.from(label, {

            scrollTrigger: {
                trigger: section,
                start: "top 78%",
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
                start: "top 78%",
                once: true
            },

            opacity: 0,
            y: 70,

            duration: 1,

            delay: .1,

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
            y: 30,

            duration: .7,

            delay: .3,

            ease: "power3.out"

        });

    }


    // ===========================
    // EMAIL
    // ===========================

    const email =
        section.querySelector(".contact-email");


    if (email) {

        gsap.from(email, {

            scrollTrigger: {
                trigger: section,
                start: "top 72%",
                once: true
            },

            opacity: 0,
            y: 25,

            duration: .7,

            delay: .45,

            ease: "power3.out"

        });

    }


    // ===========================
    // SIDE
    // ===========================

    const availability =
        section.querySelector(".contact-availability");


    if (availability) {

        gsap.from(availability, {

            scrollTrigger: {
                trigger: section,
                start: "top 72%",
                once: true
            },

            opacity: 0,
            x: 30,

            duration: .7,

            delay: .25,

            ease: "power3.out"

        });

    }


    // ===========================
    // SOCIAL LABEL
    // ===========================

    const socialLabel =
        section.querySelector(".contact-social-label");


    if (socialLabel) {

        gsap.from(socialLabel, {

            scrollTrigger: {
                trigger: section,
                start: "top 70%",
                once: true
            },

            opacity: 0,
            y: 15,

            duration: .5,

            delay: .4,

            ease: "power3.out"

        });

    }


    // ===========================
    // SOCIAL LINKS
    // ===========================

    const socials =
        section.querySelectorAll(".contact-social");


    if (socials.length) {

        gsap.from(socials, {

            scrollTrigger: {
                trigger: section,
                start: "top 68%",
                once: true
            },

            opacity: 0,
            x: 25,

            stagger: .1,

            duration: .5,

            delay: .45,

            ease: "power3.out"

        });

    }


    // ===========================
    // BOTTOM
    // ===========================

    const bottom =
        section.querySelector(".contact-bottom");


    if (bottom) {

        gsap.from(bottom, {

            scrollTrigger: {
                trigger: bottom,
                start: "top 88%",
                once: true
            },

            opacity: 0,
            y: 25,

            duration: .7,

            ease: "power3.out"

        });

    }

}