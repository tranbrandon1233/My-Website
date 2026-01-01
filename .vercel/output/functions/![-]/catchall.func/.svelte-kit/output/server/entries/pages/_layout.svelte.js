import { w as attr_class, x as ensure_array_like, y as attr, z as bind_props, F as slot } from "../../chunks/index.js";
import "clsx";
import { e as escape_html } from "../../chunks/context.js";
import { j as fallback } from "../../chunks/utils2.js";
function Footer($$renderer) {
  $$renderer.push(`<footer class="py-20 sm:py-32 bg-black border-t border-solid border-violet-950 flex flex-col gap-4 sm:gap-8 justify-center items-center" id="contact"><p class="px-4 py-2 bg-white text-slate-950 font-medium">Connect with me ↓</p> <div class="flex flex-col gap-4 items-center justify-center"><p><b class="pr-2">Email</b> tranbrandon1233@gmail.com</p> <p><b class="pr-2">GitHub</b> <a href="https://github.com/tranbrandon1233" target="_blank" class="text-violet-400">tranbrandon1233<sup><span class="text-xs scale-75 pl-0.5"><i class="fa-solid fa-arrow-up-right-from-square text-xs scale-[75%]"></i></span></sup></a></p> <p><b class="pr-2">LinkedIn</b> <a href="https://www.linkedin.com/in/brandon-tran-bb264b187" target="_blank" class="text-violet-400">Brandon Tran<sup><span class="text-xs scale-75 pl-0.5"><i class="fa-solid fa-arrow-up-right-from-square text-xs scale-[75%]"></i></span></sup></a></p></div></footer>`);
}
function Header($$renderer, $$props) {
  let y = $$props["y"];
  let tabs = fallback(
    $$props["tabs"],
    () => [
      { name: "Projects ", link: "#projects" },
      { name: "About me", link: "#about" }
    ],
    true
  );
  $$renderer.push(`<header${attr_class("sticky z-[10] top-0 duration-200 px-6 flex items-center justify-between border-b border-solid " + (y > 0 ? " py-4 bg-slate-950 border-violet-950" : " py-6 bg-transparent border-transparent"))}><h1 class="font-medium"><b class="font-bold poppins">Brandon Tran</b></h1> <div class="sm:flex items-center gap-4 hidden"><!--[-->`);
  const each_array = ensure_array_like(tabs);
  for (let index = 0, $$length = each_array.length; index < $$length; index++) {
    let tab = each_array[index];
    $$renderer.push(`<a${attr("href", tab.link)} class="duration-200 hover:text-violet-400"${attr("target", index === 2 ? "_blank" : "")}><p>${escape_html(tab.name)}</p></a>`);
  }
  $$renderer.push(`<!--]--> <button class="blueShadow relative overflow-hidden px-5 py-2 group rounded-full bg-white text-slate-950"><a href="#contact" class="duration-200 hover:text-violet-400"><div class="absolute top-0 right-full w-full h-full bg-violet-400 opacity-20 group-hover:translate-x-full z-0 duration-200"></div> <h4 class="relative z-9">Get in touch</h4></a></button></div></header>`);
  bind_props($$props, { y, tabs });
}
function _layout($$renderer, $$props) {
  let y;
  let innerHeight = 0;
  $$renderer.push(`<div class="container relative flex flex-col max-w-[1400px] mx-auto w-full text-sm sm:text-base min-h-screen"><div${attr_class("fixed bottom-0 w-full duration-200 flex p-10 z-[10]  pointer-events-none opacity-0")}><button class="ml-auto rounded-full bg-slate-900 text-violet-400 px-3 sm:px-4 hover:bg-slate-800 cursor-pointer aspect-square grid place-items-center"><i class="fa-solid fa-arrow-up"></i></button></div> `);
  Header($$renderer, { y, innerHeight });
  $$renderer.push(`<!----> <!--[-->`);
  slot($$renderer, $$props, "default", {});
  $$renderer.push(`<!--]--> `);
  Footer($$renderer);
  $$renderer.push(`<!----></div>`);
}
export {
  _layout as default
};
