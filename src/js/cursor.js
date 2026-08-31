import gsap from "gsap";

export function initCursor() {

    const cursor = document.getElementById("cursor");

    if (!cursor) return;

    window.addEventListener("mousemove", (e) => {

        gsap.to(cursor, {
            x: e.clientX,
            y: e.clientY,
            duration: 0.15,
            ease: "power2.out"
        });

    });

    document.querySelectorAll("a, button").forEach(el => {

        el.addEventListener("mouseenter", () => {

            gsap.to(cursor,{

            width:60,

            height:60,

            duration:.25

            });

        });

        el.addEventListener("mouseleave", () => {

            gsap.to(cursor,{

width:14,

height:14,

duration:.25

});

        });

    });

}