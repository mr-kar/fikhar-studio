import Home from "./pages/Home";

import ProjectsPage from "./pages/Projects";
import AboutPage from "./pages/About";
import JourneyPage from "./pages/Journey";
import ContactPage from "./pages/Contact";

export function renderPage() {

    const path = window.location.pathname;

    switch (path) {

        case "/projects":
            return ProjectsPage();

        case "/about":
            return AboutPage();

        case "/journey":
            return JourneyPage();

        case "/contact":
            return ContactPage();

        case "/":
        default:
            return Home();

    }
}