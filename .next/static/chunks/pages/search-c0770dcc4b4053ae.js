(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[603],{8161:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/search",function(){return n(9505)}])},8418:function(e,t,n){"use strict";function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,o=!1,i=void 0;try{for(var u,a=e[Symbol.iterator]();!(r=(u=a.next()).done)&&(n.push(u.value),!t||n.length!==t);r=!0);}catch(c){o=!0,i=c}finally{try{r||null==a.return||a.return()}finally{if(o)throw i}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}t.default=void 0;var o,i=(o=n(7294))&&o.__esModule?o:{default:o},u=n(6273),a=n(387),c=n(7190);var l={};function s(e,t,n,r){if(e&&u.isLocalURL(t)){e.prefetch(t,n,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;l[t+"%"+n+(o?"%"+o:"")]=!0}}var f=function(e){var t,n=!1!==e.prefetch,o=a.useRouter(),f=i.default.useMemo((function(){var t=r(u.resolveHref(o,e.href,!0),2),n=t[0],i=t[1];return{href:n,as:e.as?u.resolveHref(o,e.as):i||n}}),[o,e.href,e.as]),d=f.href,p=f.as,v=e.children,h=e.replace,m=e.shallow,g=e.scroll,b=e.locale;"string"===typeof v&&(v=i.default.createElement("a",null,v));var y=(t=i.default.Children.only(v))&&"object"===typeof t&&t.ref,x=r(c.useIntersection({rootMargin:"200px"}),2),j=x[0],_=x[1],w=i.default.useCallback((function(e){j(e),y&&("function"===typeof y?y(e):"object"===typeof y&&(y.current=e))}),[y,j]);i.default.useEffect((function(){var e=_&&n&&u.isLocalURL(d),t="undefined"!==typeof b?b:o&&o.locale,r=l[d+"%"+p+(t?"%"+t:"")];e&&!r&&s(o,d,p,{locale:t})}),[p,d,_,b,n,o]);var k={ref:w,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,i,a,c){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&u.isLocalURL(n))&&(e.preventDefault(),null==a&&r.indexOf("#")>=0&&(a=!1),t[o?"replace":"push"](n,r,{shallow:i,locale:c,scroll:a}))}(e,o,d,p,h,m,g,b)},onMouseEnter:function(e){u.isLocalURL(d)&&(t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),s(o,d,p,{priority:!0}))}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var E="undefined"!==typeof b?b:o&&o.locale,O=o&&o.isLocaleDomain&&u.getDomainLocale(p,E,o&&o.locales,o&&o.domainLocales);k.href=O||u.addBasePath(u.addLocale(p,E,o&&o.defaultLocale))}return i.default.cloneElement(t,k)};t.default=f},7190:function(e,t,n){"use strict";function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,o=!1,i=void 0;try{for(var u,a=e[Symbol.iterator]();!(r=(u=a.next()).done)&&(n.push(u.value),!t||n.length!==t);r=!0);}catch(c){o=!0,i=c}finally{try{r||null==a.return||a.return()}finally{if(o)throw i}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!u,c=o.useRef(),l=r(o.useState(!1),2),s=l[0],f=l[1],d=o.useCallback((function(e){c.current&&(c.current(),c.current=void 0),n||s||e&&e.tagName&&(c.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=a.get(t);if(n)return n;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return a.set(t,n={id:t,observer:o,elements:r}),n}(n),o=r.id,i=r.observer,u=r.elements;return u.set(e,t),i.observe(e),function(){u.delete(e),i.unobserve(e),0===u.size&&(i.disconnect(),a.delete(o))}}(e,(function(e){return e&&f(e)}),{rootMargin:t}))}),[n,t,s]);return o.useEffect((function(){if(!u&&!s){var e=i.requestIdleCallback((function(){return f(!0)}));return function(){return i.cancelIdleCallback(e)}}}),[s]),[d,s]};var o=n(7294),i=n(9311),u="undefined"!==typeof IntersectionObserver;var a=new Map},9505:function(e,t,n){"use strict";n.r(t);var r=n(5893),o=n(7294),i=n(3043),u=n.n(i),a=n(1664);function c(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function l(){var e=c(["\nbg-gray-200 h-screen\n"]);return l=function(){return e},e}function s(){var e=c(["\nbg-white px-4\n"]);return s=function(){return e},e}function f(){var e=c(["\nh-12 cursor-pointer\n"]);return f=function(){return e},e}function d(){var e=c(["\nw-10 flex flex-col mr-2 mb-2 items-center\n"]);return d=function(){return e},e}function p(){var e=c(["\nbg-white flex items-center px-4\n"]);return p=function(){return e},e}function v(){var e=c(["\nh-2.5 \n"]);return v=function(){return e},e}function h(){var e=c(["\nh-10\n"]);return h=function(){return e},e}function m(){var e=c(["\nh-3\n"]);return m=function(){return e},e}function g(){var e=c(["\nflex flex-col flex-1\n"]);return g=function(){return e},e}function b(){var e=c(["\nh-10 bg-gray-200 my-2 rounded-2 p-2 outline-none border-none \n"]);return b=function(){return e},e}function y(){var e=c(["\nw-10 h-10 bg-gray-200 rounded-full ml-3 \n"]);return y=function(){return e},e}function x(){var e=c(["\nflex items-center bg-white px-4 py-2 mt-2\n"]);return x=function(){return e},e}function j(){var e=c(["\nbg-gray-400 w-10 h-10 p-2 rounded-full mr-2\n"]);return j=function(){return e},e}function _(){var e=c(["\nbg-black text-white text-center mt-2 mx-4 px-4 py-3 text-2xl cursor-pointer\n"]);return _=function(){return e},e}t.default=function(){var e=(0,o.useState)(""),t=e[0],n=e[1],i=(0,o.useState)(""),u=i[0],c=i[1];return(0,r.jsxs)(w,{children:[(0,r.jsx)(k,{children:(0,r.jsx)(a.default,{href:"/",children:(0,r.jsx)(E,{src:"https://img.icons8.com/ios-filled/50/000000/left.png"})})}),(0,r.jsxs)(M,{children:[(0,r.jsxs)(O,{children:[(0,r.jsx)(C,{src:"https://img.icons8.com/ios-filled/50/9CA3AF/filled-circle.png"}),(0,r.jsx)(L,{src:"https://img.icons8.com/ios/50/9CA3AF/vertical-line.png"}),(0,r.jsx)(A,{src:"https://img.icons8.com/windows/50/000000/square-full.png"})]}),(0,r.jsxs)(P,{children:[(0,r.jsx)(I,{placeholder:"Enter pickup location",value:t,onChange:function(e){e.preventDefault(),n(e.target.value),console.log(t)}}),(0,r.jsx)(I,{placeholder:"Where to?",value:u,onChange:function(e){e.preventDefault(),c(e.target.value),console.log(u)}})]}),(0,r.jsx)(N,{src:"https://img.icons8.com/ios/50/000000/plus-math.png"})]}),(0,r.jsxs)(R,{children:[(0,r.jsx)(D,{src:"https://img.icons8.com/ios-filled/50/ffffff/star--v1.png"}),"Saved Places"]}),(0,r.jsx)(a.default,{href:{pathname:"/confirm",query:{pickup:t,dropoff:u}},children:(0,r.jsx)(S,{children:"Confirm Locations"})})]})};var w=u().div(l()),k=u().div(s()),E=u().img(f()),O=u().div(d()),M=u().div(p()),C=u().img(v()),L=u().img(h()),A=u().img(m()),P=u().div(g()),I=u().input(b()),N=u().img(y()),R=u().div(x()),D=u().img(j()),S=u().div(_())},1664:function(e,t,n){e.exports=n(8418)},7824:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]},3043:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;const o=r(n(7904));t.default=o.default},7904:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const o=r(n(7294)),i=r(n(7824)),u=n(4796),a=(e,t="")=>{const n=e.toString().trim().replace(/\s{2,}/g," ").split(" ").filter((e=>","!==e)),r=t?t.split(" "):[];return u.classnames(...r.concat(n).filter((e=>" "!==e)).filter(((e,t,n)=>n.indexOf(e)===t))).split(" ")};function c(e,...t){return e.reduce(((e,t)=>`${e} ${t}`),t.join(" ")).trim().replace(/\s{2,}/g," ")}function l(e){return(t,...n)=>o.default.forwardRef(((r,i)=>o.default.createElement(e,Object.assign({},Object.fromEntries(Object.entries(r).filter((([e])=>"$"!==e.charAt(0)))),{ref:i,className:c(a(t,r.className),...n.map((e=>e(r))))}))))}const s=i.default.reduce(((e,t)=>({...e,[t]:l(t)})),{}),f=Object.assign(l,s);t.default=f},4796:function(e,t){!function(e){"use strict";function t(e){var n,r,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(n=0;n<e.length;n++)e[n]&&(r=t(e[n]))&&(o&&(o+=" "),o+=r);else for(n in e)e[n]&&(o&&(o+=" "),o+=n);return o}var n=function(){for(var e,n,r=0,o="";r<arguments.length;)(e=arguments[r++])&&(n=t(e))&&(o&&(o+=" "),o+=n);return o},r=n;e.classnames=n,e.default=r,e.tw=r,Object.defineProperty(e,"__esModule",{value:!0})}(t)}},function(e){e.O(0,[774,888,179],(function(){return t=8161,e(e.s=t);var t}));var t=e.O();_N_E=t}]);