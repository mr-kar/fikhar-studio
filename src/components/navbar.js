export default function Navbar() {
    const currentPath = window.location.pathname;

    const isActive = (path) => {
        return currentPath === path;
    };

    return `
<header class="fixed top-0 left-0 w-full z-50">

    <nav class="max-w-7xl mx-auto px-8 py-6 flex justify-between items-center">

        <a
            href="/"
            class="text-2xl font-bold tracking-[0.3em]">

            FIKHAR

        </a>

        <ul class="hidden lg:flex gap-12 uppercase tracking-[0.18em] text-sm">

            <li>
                <a
                    href="/projects"
                    class="transition ${isActive("/projects") ? "opacity-100" : "hover:opacity-60"}">

                    Work

                </a>
            </li>

            <li>
                <a
                    href="/about"
                    class="transition ${isActive("/about") ? "opacity-100" : "hover:opacity-60"}">

                    About

                </a>
            </li>

            <li>
                <a
                    href="/journey"
                    class="transition ${isActive("/journey") ? "opacity-100" : "hover:opacity-60"}">

                    Journey

                </a>
            </li>

            <li>
                <a
                    href="/contact"
                    class="transition ${isActive("/contact") ? "opacity-100" : "hover:opacity-60"}">

                    Contact

                </a>
            </li>

        </ul>

        <a
            href="/contact"
            class="px-6 py-3 rounded-full border border-black hover:bg-black hover:text-white transition">

            Let's Talk

        </a>

    </nav>

</header>
`;
}