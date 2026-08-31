export default function Loading() {
  return `
<div id="loader"
class="fixed inset-0 bg-black text-white z-[99999] flex items-center justify-center overflow-hidden">

    <div class="text-center">

        <h1
        class="loader-logo text-6xl lg:text-8xl font-light tracking-[0.35em]">

            FIKHAR

        </h1>

        <p
        class="mt-6 uppercase tracking-[0.4em] text-neutral-500">

            Studio

        </p>

        <div
        class="mt-10 text-sm tracking-[0.4em]">

            <span id="loader-percent">

                000

            </span>%

        </div>

    </div>

</div>
`;
}