import "./css/style.css";

import { renderPage } from "./router";

import { initCursor } from "./js/cursor";
import "./js/lenis";

import { startLoading } from "./animations/loadingAnimation";
import { heroAnimation } from "./animations/heroAnimation";
import { projectsAnimation } from "./animations/projectsAnimation";
import { projectsInteraction } from "./animations/projectsInteraction";
import { servicesAnimation } from "./animations/servicesAnimation";
import { aboutAnimation } from "./animations/aboutAnimation";
import { journeyAnimation } from "./animations/journeyAnimation";
import { contactAnimation } from "./animations/contactAnimation";
import { footerAnimation } from "./animations/footerAnimation";

document.querySelector("#app").innerHTML = renderPage();

initCursor();

startLoading(()=>{

heroAnimation();

projectsAnimation();

projectsInteraction();

servicesAnimation();

aboutAnimation();

journeyAnimation();

contactAnimation();

footerAnimation();

});