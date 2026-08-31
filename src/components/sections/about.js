/*
========================================
FIKHAR STUDIO
About Section
Sprint 5.1
========================================
*/

import { about } from "../../data/about";

export default function About() {

    return `

<section id="about" class="relative py-40 overflow-hidden">

    <div class="max-w-7xl mx-auto px-6 lg:px-10">

        <!-- ========================= -->
        <!-- SECTION HEADER -->
        <!-- ========================= -->

        <div class="section-divider"></div>

        <div class="max-w-3xl mb-28">

            <span class="section-label">

                ${about.badge}

            </span>

            <h2 class="section-title mt-6">

                ${about.title}

            </h2>

            <p class="section-description">

                ${about.subtitle}

            </p>

        </div>

        <!-- ========================= -->
        <!-- ABOUT CONTENT -->
        <!-- ========================= -->

        <div class="about-grid">

            <!-- IMAGE -->

            <div class="about-image-wrapper">

                <div class="about-glow"></div>

                <img
                    src="${about.image}"
                    alt="Fikhar"
                    class="about-image">

            </div>

            <!-- CONTENT -->

            <div class="about-content">

                <p class="about-description">

                    ${about.description}

                </p>

                <!-- PRINCIPLES -->

                <div class="about-principles">

                    ${about.principles.map(item => `

                        <span class="about-pill">

                            ${item}

                        </span>

                    `).join("")}

                </div>

                <!-- STATS -->

                <div class="about-stats">

                    ${about.stats.map(stat => `

                        <div class="about-stat">

                            <h3>

                                ${stat.number}

                            </h3>

                            <span>

                                ${stat.label}

                            </span>

                        </div>

                    `).join("")}

                </div>

            </div>

        </div>

    </div>

</section>

`;

}