import gsap from "gsap";

export function heroAnimation(){

gsap.to("#hero",{

opacity:1,

duration:.3

});

const tl=gsap.timeline();

tl.from(".hero-subtitle",{

opacity:0,

y:40,

duration:.8

})

.from(".hero-title",{

opacity:0,

y:70,

duration:1

},"-=.3")

.from(".hero-desc",{

opacity:0,

y:30

},"-=.5")

.from(".hero-btn",{

opacity:0,

y:20

},"-=.4");

}