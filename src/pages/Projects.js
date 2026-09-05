import Navbar from "../components/navbar";
import Footer from "../components/footer";

import { projects } from "../data/projects";

export default function ProjectsPage() {

    return `

        ${Navbar()}

        <main id="projects-page">

            <!-- ========================= -->
            <!-- PROJECTS HERO -->
            <!-- ========================= -->

            <section class="projects-page-hero">

                <div class="max-w-7xl mx-auto px-6 lg:px-10">

                    <div class="section-divider"></div>

                    <div class="max-w-4xl">

                        <span class="section-label">
                            SELECTED WORK
                        </span>

                        <h1 class="section-title mt-6">
                            Projects That
                            <br>
                            Turn Ideas Into Reality.
                        </h1>

                        <p class="section-description">
                            A collection of digital experiences,
                            experiments, and interfaces built with
                            purpose, precision, and curiosity.
                        </p>

                    </div>

                </div>

            </section>


            <!-- ========================= -->
            <!-- PROJECT LIST -->
            <!-- ========================= -->

            <section class="projects-page-list">

                <div class="max-w-7xl mx-auto px-6 lg:px-10">

                    <div class="projects-page-grid">

                        ${projects.map((project) => `

                            <article class="projects-page-item">

                                <div class="projects-page-number">
                                    ${project.number}
                                </div>

                                <div class="projects-page-content">

                                    <span class="projects-page-category">
                                        ${project.category}
                                    </span>

                                    <h2 class="projects-page-title">
                                        ${project.title}
                                    </h2>

                                    <span class="projects-page-year">
                                        ${project.year}
                                    </span>

                                    <p class="projects-page-description">
                                        ${project.description}
                                    </p>

                                    <div class="projects-page-stack">

                                        ${project.stack.map((tech) => `

                                            <span class="projects-page-tech">
                                                ${tech}
                                            </span>

                                        `).join("")}

                                    </div>

                                </div>


                                <div class="projects-page-preview">

                                    <img
                                        src="${project.image}"
                                        alt="${project.title}"
                                        class="projects-page-image"
                                    >

                                </div>

                            </article>

                        `).join("")}

                    </div>

                </div>

            </section>

        </main>

        ${Footer()}

    `;
}