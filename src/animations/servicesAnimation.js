/*
========================================
FIKHAR STUDIO
Services Animation
Sprint 4.3
========================================
*/

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function servicesAnimation() {

    gsap.utils.toArray(".service-card").forEach((card) => {

        // ===========================
        // Reveal Animation
        // ===========================

        gsap.from(card, {

            y: 80,

            opacity: 0,

            duration: .9,

            ease: "power3.out",

            scrollTrigger: {

                trigger: card,

                start: "top 82%",

                toggleActions: "play none none none"

            }

        });

        // ===========================
        // Mouse Tilt
        // ===========================

        const moveX = gsap.quickTo(card, "x", {

            duration: .45,

            ease: "power3.out"

        });

        const moveY = gsap.quickTo(card, "y", {

            duration: .45,

            ease: "power3.out"

        });

        const rotateX = gsap.quickTo(card, "rotationX", {

            duration: .45,

            ease: "power3.out"

        });

        const rotateY = gsap.quickTo(card, "rotationY", {

            duration: .45,

            ease: "power3.out"

        });

        card.addEventListener("mousemove", (e) => {

            const rect = card.getBoundingClientRect();

            const x = e.clientX - rect.left;

            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;

            const centerY = rect.height / 2;

            const offsetX = (x - centerX) / centerX;

            const offsetY = (y - centerY) / centerY;

            moveX(offsetX * 8);

            moveY(offsetY * 8);

            rotateY(offsetX * 5);

            rotateX(-offsetY * 5);

        });

        card.addEventListener("mouseleave", () => {

            moveX(0);

            moveY(0);

            rotateX(0);

            rotateY(0);

        });

    });

}