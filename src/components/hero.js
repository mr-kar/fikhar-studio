export default function Hero() {
  return `
<section id="hero" class="relative min-h-screen flex items-center overflow-hidden opacity-0">

<div class="absolute inset-0">

<div
class="absolute inset-0
bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)]
bg-[size:60px_60px]">
</div>

<div class="absolute top-20 right-0 w-[600px] h-[600px] bg-blue-500/20 blur-[180px] rounded-full"></div>

</div>

<div class="relative z-10 max-w-7xl mx-auto px-6 sm:px-8">

<p class="uppercase tracking-[0.4em] text-sm">

Creative Frontend Developer

</p>

<h1 class="mt-8 text-6xl sm:text-7xl lg:text-9xl leading-[0.9] font-light max-w-full break-words">

Building

<br>

Digital

<span class="font-serif italic">

Experiences

</span>

</h1>

<p class="mt-10 max-w-xl text-neutral-500 text-lg leading-relaxed">

I design modern websites that blend visual storytelling,
clean code, and delightful user interaction.

</p>

<div class="mt-14 flex gap-5">

<a
href="#work"
class="bg-black text-white px-8 py-4 rounded-full">

View Projects

</a>

<a
href="#contact"
class="border border-black px-8 py-4 rounded-full">

Let's Talk

</a>

</div>

</div>

</section>
`;
}