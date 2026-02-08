import{c as m,r as d,j as s}from"./index-C4C_teaV.js";const c=["/src/assets/images/clients/didww.png","/src/assets/images/clients/idt.jpg","/src/assets/images/clients/LANCK_Telecom.webp","/src/assets/images/clients/Orange-Emblem.png","/src/assets/images/clients/ringcentral.avif","/src/assets/images/clients/voda.png"];function g(){const e=m.c(6),t=d.useRef(null);let a;e[0]===Symbol.for("react.memo_cache_sentinel")?(a=s.jsxs("div",{className:"max-w-2xl",children:[s.jsx("p",{className:"text-sm font-semibold text-tv-teal",children:"Trusted by"}),s.jsx("h2",{className:"mt-2 text-2xl font-semibold tracking-tight text-tv-navy sm:text-3xl",children:"Trusted by carriers and voice partners worldwide"}),s.jsx("p",{className:"mt-3 text-base text-tv-slate",children:"TransitVox works with carriers, wholesalers, and enterprise voice providers across global regions, supporting CLI and Non-CLI wholesale traffic."})]}),e[0]=a):a=e[0];let n,r,i,l;e[1]===Symbol.for("react.memo_cache_sentinel")?(n=()=>t.current?.classList.add("paused"),r=()=>t.current?.classList.remove("paused"),i=s.jsx("div",{className:"pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white via-white/80 to-transparent z-10"}),l=s.jsx("div",{className:"pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white via-white/80 to-transparent z-10"}),e[1]=n,e[2]=r,e[3]=i,e[4]=l):(n=e[1],r=e[2],i=e[3],l=e[4]);let o;return e[5]===Symbol.for("react.memo_cache_sentinel")?(o=s.jsxs("section",{className:"bg-white",children:[s.jsxs("div",{className:"mx-auto max-w-6xl px-4 py-14 sm:py-16",children:[a,s.jsxs("div",{className:"relative mt-10 overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 py-6",onMouseEnter:n,onMouseLeave:r,children:[i,l,s.jsx("div",{ref:t,className:"marquee flex w-max items-center gap-14 px-6",children:[...c,...c].map(p)})]}),s.jsx("p",{className:"mt-6 text-sm text-tv-slate",children:"Client logos are shown for representation purposes. Actual partnerships may vary by region and service type."})]}),s.jsx("style",{children:`
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
        `})]}),e[5]=o):o=e[5],o}function p(e,t){return s.jsx("div",{className:"flex h-14 items-center justify-center",children:s.jsx("img",{src:e,alt:"Client logo",draggable:!1,className:`
                    h-full w-auto
                    grayscale opacity-70
                    transition-all duration-300
                    hover:grayscale-0 hover:opacity-100
                  `})},t)}export{g as C};
