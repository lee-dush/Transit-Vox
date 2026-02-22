import{c as m,r as d,j as t}from"./index-HJoqfx99.js";const c=["./clients/didww.png","./clients/idt.jpg","./clients/LANCK_Telecom.webp","./clients/Orange-Emblem.png","./clients/ringcentral.avif","./clients/voda.png"];function u(){const e=m.c(6),s=d.useRef(null);let a;e[0]===Symbol.for("react.memo_cache_sentinel")?(a=t.jsxs("div",{className:"max-w-2xl",children:[t.jsx("p",{className:"text-sm font-semibold text-tv-teal",children:"Trusted by"}),t.jsx("h2",{className:"mt-2 text-2xl font-semibold tracking-tight text-tv-navy sm:text-3xl",children:"Trusted by carriers and voice partners worldwide"}),t.jsx("p",{className:"mt-3 text-base text-tv-slate",children:"TransitVox works with carriers, wholesalers, and enterprise voice providers across global regions, supporting CLI and Non-CLI wholesale traffic."})]}),e[0]=a):a=e[0];let n,r,l,i;e[1]===Symbol.for("react.memo_cache_sentinel")?(n=()=>s.current?.classList.add("paused"),r=()=>s.current?.classList.remove("paused"),l=t.jsx("div",{className:"pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white via-white/80 to-transparent z-10"}),i=t.jsx("div",{className:"pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white via-white/80 to-transparent z-10"}),e[1]=n,e[2]=r,e[3]=l,e[4]=i):(n=e[1],r=e[2],l=e[3],i=e[4]);let o;return e[5]===Symbol.for("react.memo_cache_sentinel")?(o=t.jsxs("section",{className:"bg-white",children:[t.jsxs("div",{className:"mx-auto max-w-6xl px-4 py-14 sm:py-16",children:[a,t.jsxs("div",{className:"relative mt-10 overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 py-6",onMouseEnter:n,onMouseLeave:r,children:[l,i,t.jsx("div",{ref:s,className:"marquee flex w-max items-center gap-14 px-6",children:[...c,...c].map(p)})]}),t.jsx("p",{className:"mt-6 text-sm text-tv-slate",children:"Client logos are shown for representation purposes. Actual partnerships may vary by region and service type."})]}),t.jsx("style",{children:`
          .marquee {
            animation: scroll 40s linear infinite;
          }
          .marquee.paused {
            animation-play-state: paused;
          }
          @keyframes scroll {
            from {
              transform: translateX(0);
            }
            to {
              transform: translateX(-50%);
            }
          }
        `})]}),e[5]=o):o=e[5],o}function p(e,s){return t.jsx("div",{className:"flex h-14 items-center justify-center",children:t.jsx("img",{src:e,alt:"Client logo",draggable:!1,className:`\r
                    h-full w-auto\r
                    grayscale opacity-70\r
                    transition-all duration-300\r
                    hover:grayscale-0 hover:opacity-100\r
                  `})},s)}export{u as C};
