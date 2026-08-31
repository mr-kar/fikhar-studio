import gsap from "gsap";

export function heroAnimation() {

    gsap.from(".hero-subtitle",{

        y:40,

        opacity:0,

        duration:1

    });

    gsap.from(".hero-title",{

        y:80,

        opacity:0,

        duration:1.2,

        delay:.2

    });

    gsap.from(".hero-desc",{

        y:40,

        opacity:0,

        delay:.6

    });

    gsap.from(".hero-btn",{

        y:30,

        opacity:0,

        delay:.9

    });

}