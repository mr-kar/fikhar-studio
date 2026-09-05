import Navbar from "../components/navbar";
import Footer from "../components/footer";

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
            <!-- PROJECT AREA -->
            <!-- ========================= -->

            <section class="projects-page-list">

                <div class="max-w-7xl mx-auto px-6 lg:px-10">

                    <div class="projects-page-grid">

                        <!-- Project cards akan masuk di 4B -->

                    </div>

                </div>

            </section>

        </main>

        ${Footer()}

    `;
}