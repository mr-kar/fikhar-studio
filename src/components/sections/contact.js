/*
========================================
FIKHAR STUDIO
Contact Section
Sprint 7.1
========================================
*/

import { contact } from "../../data/contact";

export default function Contact() {

    return `

<section
    id="contact"
    class="relative py-40 overflow-hidden"
>

    <div class="max-w-7xl mx-auto px-6 lg:px-10">

        <!-- ========================= -->
        <!-- DIVIDER -->
        <!-- ========================= -->

        <div class="section-divider"></div>


        <!-- ========================= -->
        <!-- CONTACT CONTENT -->
        <!-- ========================= -->

        <div class="contact-layout">


            <!-- ========================= -->
            <!-- MAIN MESSAGE -->
            <!-- ========================= -->

            <div class="contact-main">

                <span class="section-label">

                    ${contact.badge}

                </span>


                <h2 class="contact-title">

                    ${contact.title}

                </h2>


                <p class="contact-description">

                    ${contact.description}

                </p>


                <!-- ========================= -->
                <!-- EMAIL -->
                <!-- ========================= -->

                <a
                    href="mailto:${contact.email}"
                    class="contact-email"
                >

                    <span>

                        ${contact.email}

                    </span>

                    <span class="contact-arrow">

                        ↗

                    </span>

                </a>

            </div>


            <!-- ========================= -->
            <!-- CONTACT SIDE -->
            <!-- ========================= -->

            <div class="contact-side">


                <!-- AVAILABILITY -->

                <div class="contact-availability">

                    <span class="availability-dot"></span>

                    <span>

                        ${contact.availability}

                    </span>

                </div>


                <!-- SOCIALS -->

                <div class="contact-socials">

                    <span class="contact-social-label">

                        FIND ME

                    </span>


                    <div class="contact-social-list">

                        ${contact.socials.map(social => `

                            <a
                                href="${social.url}"
                                target="_blank"
                                rel="noopener noreferrer"
                                class="contact-social"
                            >

                                ${social.label}

                                <span>

                                    ↗

                                </span>

                            </a>

                        `).join("")}

                    </div>

                </div>

            </div>

        </div>


        <!-- ========================= -->
        <!-- BOTTOM CTA -->
        <!-- ========================= -->

        <div class="contact-bottom">

            <span>

                HAVE AN IDEA?

            </span>

            <span>

                LET'S MAKE IT REAL.

            </span>

        </div>

    </div>

</section>

`;

}