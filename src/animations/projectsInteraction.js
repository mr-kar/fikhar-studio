/*
========================================
FIKHAR STUDIO
Projects Interaction
Sprint 3.4
========================================
*/

import gsap from "gsap";

export function projectsInteraction() {

    const previews = document.querySelectorAll(".project-preview");

    previews.forEach((preview) => {

        const browser = preview.querySelector(".browser");
        const glow = preview.querySelector(".project-glow");

        if (!browser || !glow) return;

        // Smooth movement
        const moveX = gsap.quickTo(browser, "x", {
            duration: 0.6,
            ease: "power3.out"
        });

        const moveY = gsap.quickTo(browser, "y", {
            duration: 0.6,
            ease: "power3.out"
        });

        const rotateX = gsap.quickTo(browser, "rotationX", {
            duration: 0.6,
            ease: "power3.out"
        });

        const rotateY = gsap.quickTo(browser, "rotationY", {
            duration: 0.6,
            ease: "power3.out"
        });

        const glowX = gsap.quickTo(glow, "x", {
            duration: 1,
            ease: "power3.out"
        });

        const glowY = gsap.quickTo(glow, "y", {
            duration: 1,
            ease: "power3.out"
        });

        preview.addEventListener("mousemove", (e) => {

            const rect = preview.getBoundingClientRect();

            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const offsetX = (x - centerX) / centerX;
            const offsetY = (y - centerY) / centerY;

            moveX(offsetX * 18);
            moveY(offsetY * 18);

            rotateY(offsetX * 8);
            rotateX(-offsetY * 8);

            glowX(offsetX * 40);
            glowY(offsetY * 40);

        });

        preview.addEventListener("mouseleave", () => {

            moveX(0);
            moveY(0);

            rotateX(0);
            rotateY(0);

            glowX(0);
            glowY(0);

        });

    });

}