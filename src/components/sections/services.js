/*
========================================
FIKHAR STUDIO
Services Section
Sprint 4.1
========================================
*/

import { services } from "../../data/services";

export default function Services() {

    return `

<section id="services" class="relative py-40 overflow-hidden">

    <div class="max-w-7xl mx-auto px-6 lg:px-10">

        <!-- ========================= -->
        <!-- SECTION HEADER -->
        <!-- ========================= -->

        <div class="section-divider"></div>

        <div class="max-w-3xl mb-28">

            <span class="section-label">

                WHAT I DO

            </span>

            <h2 class="section-title mt-6">

                Services
                <br>

                I Provide

            </h2>

            <p class="section-description">

                I build modern digital experiences that combine
                clean design, performance, and interaction.
                Every project is crafted with attention to detail,
                scalability, and user experience.

            </p>

        </div>

        <!-- ========================= -->
        <!-- SERVICES GRID -->
        <!-- ========================= -->

        <div class="services-grid">

            ${services.map(service => `

            <article class="service-card">

                <!-- Number -->

                <span class="service-number">

                    0${service.id}

                </span>

                <!-- Icon -->

                <div class="service-icon">

                    ${service.icon}

                </div>

                <!-- Title -->

                <h3 class="service-title">

                    ${service.title}

                </h3>

                <!-- Description -->

                <p class="service-description">

                    ${service.description}

                </p>

                <!-- Stack -->

                <div class="service-stack">

                    ${service.stack.map(item => `

                        <span class="service-tech">

                            ${item}

                        </span>

                    `).join("")}

                </div>

                <!-- Arrow -->

                <div class="service-arrow">

                    →

                </div>

            </article>

            `).join("")}

        </div>

    </div>

</section>

`;

}