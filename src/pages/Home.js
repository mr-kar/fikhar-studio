import Loading from "../components/loading";
import Cursor from "../components/cursor";

import Navbar from "../components/navbar";
import Hero from "../components/hero";
import Footer from "../components/footer";

import Projects from "../components/sections/projects";
import Services from "../components/sections/services";
import About from "../components/sections/about";
import Journey from "../components/sections/journey";
import Contact from "../components/sections/contact";

export default function Home() {
    return `

        ${Loading()}

        ${Cursor()}

        ${Navbar()}

        ${Hero()}

        ${Projects()}

        ${Services()}

        ${About()}

        ${Journey()}

        ${Contact()}

        ${Footer()}

    `;
}