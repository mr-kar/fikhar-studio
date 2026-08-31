/*
========================================
FIKHAR STUDIO
Journey Section
Sprint 6.2
========================================
*/

import { journey } from "../../data/journey";

export default function Journey() {

    return `

<section
    id="journey"
    class="relative py-40 overflow-hidden"
>

    <div class="max-w-7xl mx-auto px-6 lg:px-10">

        <!-- ========================= -->
        <!-- SECTION HEADER -->
        <!-- ========================= -->

        <div class="section-divider"></div>

        <div class="max-w-3xl mb-32">

            <span class="section-label">

                JOURNEY

            </span>

            <h2 class="section-title mt-6">

                From Curiosity
                <br>
                To Creation.

            </h2>

            <p class="section-description">

                A timeline of learning, experimentation,
                and building digital experiences with
                increasing purpose and precision.

            </p>

        </div>


        <!-- ========================= -->
        <!-- JOURNEY TIMELINE -->
        <!-- ========================= -->

        <div class="journey-list">

            ${journey.map((item, index) => `

            <article class="journey-item">

                <!-- ========================= -->
                <!-- YEAR -->
                <!-- ========================= -->

                <div class="journey-year">

                    ${item.year}

                </div>


                <!-- ========================= -->
                <!-- TIMELINE -->
                <!-- ========================= -->

                <div class="journey-marker">

                    <span class="journey-dot"></span>

                </div>


                <!-- ========================= -->
                <!-- CONTENT -->
                <!-- ========================= -->

                <div class="journey-content">

                    <span class="journey-category">

                        ${item.category}

                    </span>


                    <h3 class="journey-title">

                        ${item.title}

                    </h3>


                    <p class="journey-description">

                        ${item.description}

                    </p>


                    <!-- ========================= -->
                    <!-- STACK -->
                    <!-- ========================= -->

                    <div class="journey-stack">

                        ${item.stack.map(tech => `

                            <span class="journey-tech">

                                ${tech}

                            </span>

                        `).join("")}

                    </div>

                </div>


                <!-- ========================= -->
                <!-- CONNECTING LINE -->
                <!-- ========================= -->

                ${
                    index < journey.length - 1
                    ? `<div class="journey-line"></div>`
                    : ""
                }

            </article>

            `).join("")}

        </div>


        <!-- ========================= -->
        <!-- JOURNEY CLOSING -->
        <!-- ========================= -->

        <div class="journey-closing">

            <span class="section-label">

                STILL LEARNING

            </span>

            <h3>

                The Journey
                <br>
                Is Still Being Written.

            </h3>

            <p>

                Every project adds another layer of
                experience, curiosity, and perspective.
                The next chapter is always waiting
                to be built.

            </p>

        </div>

    </div>

</section>

`;

}