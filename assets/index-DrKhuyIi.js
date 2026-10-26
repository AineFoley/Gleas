const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/server-BgV531J_.js","assets/data-BeyXBgWI.js","assets/requests-DVvidQYF.js","assets/seed-Bz3G-F3J.js","assets/main-B5cjS2vW.js","assets/main-DTph4y3d.css"])))=>i.map(i=>d[i]);
(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e={width:390,height:844},t=667,n=54,r=12,i={width:48,height:104},a=`https://github.com/AineFoley/Gleas`,o=`
    :root { --surface: #e5e5e5; --ink: #1d2a3f; }
    :root[data-theme='dark'] { --surface: #2c2c2c; --ink: #fff; }
    html, body { height: 100%; margin: 0; }
    body {
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 16px;
        padding: 24px;
        overflow: hidden;
        background: var(--surface);
        color: var(--ink);
        font: 13px/1.5 Inter, system-ui, sans-serif;
        transition: background-color 0.4s, color 0.4s;
    }
    .stage {
        flex: none;
        width: calc(${String(e.width+24)}px * var(--scale));
        height: calc((var(--screen-height) + 24px) * var(--scale));
    }
    .device { position: relative; width: max-content; transform: scale(var(--scale)); transform-origin: 0 0; }
    /* The volume buttons on the left, and the side button on the right. */
    .device::before, .device::after { content: ''; position: absolute; width: 3px; background: #111; }
    .device::before { left: -3px; top: 170px; height: 60px; border-radius: 2px 0 0 2px; box-shadow: 0 76px 0 #111; }
    .device::after { right: -3px; top: 220px; height: 96px; border-radius: 0 2px 2px 0; }
    .phone {
        position: relative;
        display: flex;
        flex-direction: column;
        width: ${String(e.width)}px;
        height: var(--screen-height);
        border: ${String(r)}px solid #111;
        border-radius: 58px;
        overflow: hidden;
        background: var(--surface);
        box-shadow: 0 0 0 2px #2a2a2a, 0 30px 70px rgb(0 0 0 / 0.3);
        transition: background-color 0.4s;
    }
    .status {
        flex: none;
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: ${String(n)}px;
        padding: 4px 30px 0 44px;
        font-weight: 600;
        font-size: 15px;
    }
    .status svg { display: block; }
    .icons { display: flex; align-items: center; gap: 6px; }
    .island {
        position: absolute;
        top: 11px;
        left: 50%;
        width: 124px;
        height: 36px;
        border-radius: 18px;
        background: #000;
        transform: translateX(-50%);
    }
    .phone iframe { flex: 1; width: 100%; border: 0; }
    .home {
        position: absolute;
        bottom: 8px;
        left: 50%;
        width: 134px;
        height: 5px;
        border-radius: 3px;
        background: var(--ink);
        transform: translateX(-50%);
        pointer-events: none;
    }
    p { margin: 0; max-width: ${String(e.width)}px; text-align: center; opacity: 0.8; }
    a { color: inherit; }
`,s=`
    <svg width="18" height="12" viewBox="0 0 18 12" fill="currentColor" aria-hidden="true">
        <rect x="0" y="8" width="3" height="4" rx="1"/><rect x="5" y="5.5" width="3" height="6.5" rx="1"/>
        <rect x="10" y="3" width="3" height="9" rx="1"/><rect x="15" y="0" width="3" height="12" rx="1"/>
    </svg>
    <svg width="16" height="12" viewBox="0 0 16 12" fill="currentColor" aria-hidden="true">
        <path d="M8 2.6c2.3 0 4.4.9 6 2.4l1.3-1.4A10.6 10.6 0 0 0 8 .6C5.2.6 2.6 1.7.7 3.6L2 5c1.6-1.5 3.7-2.4 6-2.4Zm0 3.8c1.3 0 2.4.5 3.3 1.3l1.3-1.4A6.8 6.8 0 0 0 8 4.4c-1.8 0-3.4.7-4.6 1.9l1.3 1.4c.9-.8 2-1.3 3.3-1.3ZM8 8.4c-.6 0-1.2.2-1.6.6L8 10.8 9.6 9c-.4-.4-1-.6-1.6-.6Z"/>
    </svg>
    <svg width="27" height="13" viewBox="0 0 27 13" fill="none" aria-hidden="true">
        <rect x="0.5" y="0.5" width="22" height="12" rx="3.5" stroke="currentColor" opacity="0.4"/>
        <rect x="2" y="2" width="19" height="9" rx="2" fill="currentColor"/>
        <path d="M24.5 4.5v4c.8-.3 1.3-1.1 1.3-2s-.5-1.7-1.3-2Z" fill="currentColor" opacity="0.4"/>
    </svg>
`,c=()=>window.self===window.top&&window.matchMedia(`(hover: hover) and (pointer: fine) and (min-width: 480px)`).matches;function l(n){let r={width:window.innerWidth-i.width,height:window.innerHeight-i.height},a=Math.min(e.height,Math.max(t,r.height-24)),o=Math.min(1,r.height/(a+24),r.width/(e.width+24));n.style.setProperty(`--screen-height`,`${String(a)}px`),n.style.setProperty(`--scale`,String(Math.max(o,.4)))}function u(e){e.textContent=new Date().toLocaleTimeString(`en-GB`,{hour:`2-digit`,minute:`2-digit`})}function d(e){let t=e.contentDocument?.documentElement;if(!t)return;let n=()=>{t.dataset.theme&&(document.documentElement.dataset.theme=t.dataset.theme)};n(),new MutationObserver(n).observe(t,{attributes:!0,attributeFilter:[`data-theme`]})}function f(){let e=document.createElement(`style`);e.textContent=o,document.head.append(e);let t=document.createElement(`div`);t.className=`stage`,t.innerHTML=`
        <div class="device">
            <div class="phone">
                <div class="status" aria-hidden="true"><span class="clock"></span><span class="icons">${s}</span></div>
                <div class="island"></div>
                <iframe title="Gléas"></iframe>
                <div class="home"></div>
            </div>
        </div>`;let n=t.querySelector(`iframe`);n.src=window.location.href,n.addEventListener(`load`,()=>d(n));let r=t.querySelector(`.clock`);u(r),setInterval(()=>u(r),1e4);let i=document.createElement(`p`);i.innerHTML=`A demo of Gléas: nothing you enter leaves this browser.<br><a href="?new">Start as someone new</a> · <a href="${a}">About the app</a>`,document.body.replaceChildren(t,i),l(t),window.addEventListener(`resize`,()=>l(t));let c=new URL(window.location.href);c.searchParams.has(`new`)&&(c.searchParams.delete(`new`),window.history.replaceState(null,``,c))}function p(){let e=document.createElement(`style`);e.textContent=`html { scrollbar-width: none; } ::-webkit-scrollbar { display: none; }`,document.head.append(e)}var m=`modulepreload`,h=function(e){return`/Gleas/`+e},g={},_=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e=document.getElementsByTagName(`link`),i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}function s(e){return import.meta.resolve?import.meta.resolve(e):new URL(e,import.meta.url).href}r=o(t.map(t=>{if(t=h(t,n),t=s(t),t in g)return;g[t]=!0;let r=t.endsWith(`.css`);for(let n=e.length-1;n>=0;n--){let i=e[n];if(i.href===t&&(!r||i.rel===`stylesheet`))return}let i=document.createElement(`link`);if(i.rel=r?`stylesheet`:m,r||(i.as=`script`),i.crossOrigin=``,i.href=t,a&&i.setAttribute(`nonce`,a),document.head.appendChild(i),r)return new Promise((e,n)=>{i.addEventListener(`load`,e),i.addEventListener(`error`,()=>n(Error(`Unable to preload CSS for ${t}`)))})}).filter(e=>e!==void 0))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})};c()?f():(window.self!==window.top&&p(),_(()=>import(`./server-BgV531J_.js`).then(()=>_(()=>import(`./seed-Bz3G-F3J.js`),__vite__mapDeps([3,1]))),__vite__mapDeps([0,1,2])).then(()=>_(()=>import(`./main-B5cjS2vW.js`),__vite__mapDeps([4,1,2,5]))));export{_ as t};