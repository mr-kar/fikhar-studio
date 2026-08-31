/*
========================================
FIKHAR STUDIO
Featured Projects
Final Version - Sprint 3.5
========================================
*/

import { projects } from "../../data/projects";

export default function Projects() {
    return `
    
<section id="work" class="relative py-40 overflow-hidden">

    <div class="max-w-7xl mx-auto px-6 lg:px-10">

        <!-- SECTION HEADER -->

        <div class="section-divider"></div>

        <div class="max-w-3xl mb-32">

            <span class="section-label">
                FEATURED WORK
            </span>

            <h2 class="section-title mt-6">

                Selected
                <br>
                Projects

            </h2>

            <p class="section-description">

                A curated collection of digital products,
                premium landing pages, creative interfaces,
                and interactive experiences crafted with
                modern frontend technologies.

            </p>

        </div>

        <!-- PROJECT LIST -->

        <div class="flex flex-col gap-40">

            ${projects.map((project, index) => `

            <article
                class="project grid lg:grid-cols-2 gap-20 items-center">

                <!-- ========================= -->
                <!-- CONTENT -->
                <!-- ========================= -->

                <div
                    class="${index % 2 ? "lg:order-2" : ""} relative">

                    <span class="project-number">

                        ${project.number}

                    </span>

                    <span
                        class="project-year">

                        ${project.year}

                    </span>

                    <h3
                        class="project-title">

                        ${project.title}

                    </h3>

                    <p
                        class="project-category">

                        ${project.category}

                    </p>

                    <p
                        class="project-desc">

                        ${project.description}

                    </p>

                    <!-- TECH STACK -->

                    <div class="project-stack">

                        ${project.stack.map(tech => `

                        <span class="tech">

                            ${tech}

                        </span>

                        `).join("")}

                    </div>

                    <!-- BUTTONS -->

                    <div class="project-actions">

                        <a
                            href="${project.live}"
                            target="_blank"
                            class="project-link">

                            Live Demo

                        </a>

                        <a
                            href="${project.github}"
                            target="_blank"
                            class="project-link secondary">

                            Source Code

                        </a>

                    </div>

                </div>

                <!-- ========================= -->
                <!-- PREVIEW -->
                <!-- ========================= -->

                <div
                    class="${index % 2 ? "lg:order-1" : ""}">

                    <div
                        class="project-preview">

                        <!-- Glow -->

                        <div
                            class="project-glow"
                            style="background:${project.accent};">

                        </div>

                        <!-- Badge -->

                        <div class="project-badge">

                            <span class="badge-dot"></span>

                            ${project.status}

                        </div>

                        <!-- Browser -->

                        <div class="browser">

                            <div class="browser-top">

                                <span></span>
                                <span></span>
                                <span></span>

                            </div>

                            <img
                                src="${project.image}"
                                alt="${project.title}"
                                class="project-image">

                        </div>

                    </div>

                </div>

            </article>

            `).join("")}

        </div>

        <!-- ========================= -->
        <!-- FINAL CTA -->
        <!-- ========================= -->

        <div class="projects-cta">

            <span class="section-label">

                NEXT PROJECT?

            </span>

            <h3>

                Let's Build Something
                <br>

                Remarkable Together.

            </h3>

            <p>

                Whether it's an AI platform,
                luxury website,
                startup landing page,
                or interactive experience,
                let's turn your ideas into
                something unforgettable.

            </p>

            <a
                href="#contact"
                class="cta-button">

                Start a Project

            </a>

        </div>

    </div>

</section>

`;
}