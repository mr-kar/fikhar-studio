/*
========================================
FIKHAR STUDIO
Footer
Sprint 8.1
========================================
*/

import { footer } from "../data/footer";

export default function Footer() {

    return `

<footer
    id="footer"
    class="relative overflow-hidden"
>

    <div class="max-w-7xl mx-auto px-6 lg:px-10">


        <!-- ========================= -->
        <!-- FOOTER MAIN -->
        <!-- ========================= -->

        <div class="footer-main">


            <!-- BRAND -->

            <div class="footer-brand">

                <span class="footer-label">

                    ${footer.brand}

                </span>

                <p class="footer-tagline">

                    ${footer.tagline}

                </p>

            </div>


            <!-- NAVIGATION -->

            <div class="footer-column">

                <span class="footer-heading">

                    NAVIGATION

                </span>

                <nav class="footer-links">

                    ${footer.navigation.map(item => `

                        <a
                            href="${item.target}"
                            class="footer-link"
                        >

                            ${item.label}

                        </a>

                    `).join("")}

                </nav>

            </div>


            <!-- SOCIALS -->

            <div class="footer-column">

                <span class="footer-heading">

                    SOCIAL

                </span>

                <div class="footer-links">

                    ${footer.socials.map(social => `

                        <a
                            href="${social.url}"
                            target="_blank"
                            rel="noopener noreferrer"
                            class="footer-link"
                        >

                            ${social.label}

                            <span class="footer-external">

                                ↗

                            </span>

                        </a>

                    `).join("")}

                </div>

            </div>

        </div>


        <!-- ========================= -->
        <!-- FOOTER BOTTOM -->
        <!-- ========================= -->

        <div class="footer-bottom">

            <span>

                ${footer.copyright}

            </span>

            <span class="footer-status">

                Built with curiosity.

            </span>

        </div>


    </div>

</footer>

`;

}