/*
========================================
FIKHAR STUDIO
Projects Animation
FINAL v1.0
========================================
*/

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function projectsAnimation() {

    gsap.utils.toArray(".project").forEach((project) => {

        const content = project.querySelector(":scope > div:first-child");

        const preview = project.querySelector(".project-preview");

        const browser = project.querySelector(".browser");

        const image = project.querySelector(".project-image");

        const badge = project.querySelector(".project-badge");

        // ==========================
        // CONTENT
        // ==========================

        if (content) {

            gsap.from(content.children, {

                y: 60,

                opacity: 0,

                duration: .8,

                stagger: .12,

                ease: "power3.out",

                scrollTrigger: {

                    trigger: project,

                    start: "top 75%",

                    toggleActions: "play none none none"

                }

            });

        }

        // ==========================
        // PREVIEW
        // ==========================

        if (preview) {

            gsap.from(preview, {

                x: 80,

                opacity: 0,

                duration: 1,

                ease: "power3.out",

                scrollTrigger: {

                    trigger: project,

                    start: "top 75%",

                    toggleActions: "play none none none"

                }

            });

        }

        // ==========================
        // BROWSER
        // ==========================

        if (browser) {

            gsap.from(browser, {

                scale: .92,

                rotate: -3,

                duration: 1,

                ease: "power3.out",

                scrollTrigger: {

                    trigger: browser,

                    start: "top 80%",

                    toggleActions: "play none none none"

                }

            });

        }

        // ==========================
        // IMAGE
        // ==========================

        if (image) {

            gsap.from(image, {

                scale: 1.12,

                duration: 1.6,

                ease: "power2.out",

                scrollTrigger: {

                    trigger: browser,

                    start: "top 80%"

                }

            });

        }

        // ==========================
        // BADGE
        // ==========================

        if (badge) {

            gsap.from(badge, {

                y: -20,

                opacity: 0,

                duration: .6,

                delay: .25,

                ease: "power3.out",

                scrollTrigger: {

                    trigger: browser,

                    start: "top 80%"

                }

            });

        }

    });

}