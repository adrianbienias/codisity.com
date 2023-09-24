"use strict";(self.webpackChunkcodisity_com=self.webpackChunkcodisity_com||[]).push([[5642],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(r),m=a,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return r?n.createElement(f,i(i({ref:t},c),{},{components:r})):n.createElement(f,i({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},4374:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const o={tags:["JS","JavaScript","Astro"]},i="Astro",s={unversionedId:"frontend/astro/index",id:"frontend/astro/index",title:"Astro",description:"Astro is an open-source static site generator (SSG) and front-end framework designed to simplify and optimize the development of modern web applications and websites. It is designed to help developers build fast, efficient, and highly performant web experiences by providing a blend of server-rendered and client-rendered content. Here are the key features and concepts of Astro:",source:"@site/docs/030-frontend/036-astro/index.mdx",sourceDirName:"030-frontend/036-astro",slug:"/frontend/astro/",permalink:"/frontend/astro/",draft:!1,editUrl:"https://github.com/adrianbienias/codisity.com/blob/main/docs/030-frontend/036-astro/index.mdx",tags:[{label:"JS",permalink:"/tags/js"},{label:"JavaScript",permalink:"/tags/java-script"},{label:"Astro",permalink:"/tags/astro"}],version:"current",frontMatter:{tags:["JS","JavaScript","Astro"]},sidebar:"frontendSidebar",previous:{title:"React",permalink:"/frontend/react/"},next:{title:"Libraries",permalink:"/frontend/libraries/"}},l={},p=[{value:"Links",id:"links",level:2}],c={toc:p},d="wrapper";function u(e){let{components:t,...r}=e;return(0,a.kt)(d,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"astro"},"Astro"),(0,a.kt)("p",null,"Astro is an open-source static site generator (SSG) and front-end framework designed to simplify and optimize the development of modern web applications and websites. It is designed to help developers build fast, efficient, and highly performant web experiences by providing a blend of server-rendered and client-rendered content. Here are the key features and concepts of Astro:"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"1. Blended Static Site Generation:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Astro takes a unique approach by blending static site generation and client-side rendering. It allows developers to choose which parts of a web application are generated statically at build time and which parts are rendered dynamically on the client side. This flexibility optimizes performance while ensuring a rich interactive experience.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"2. Component-Driven Development:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Astro promotes a component-driven development model similar to that of popular front-end frameworks like React and Vue.js. Developers can create reusable UI components and compose them to build complex user interfaces.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"3. Framework-Agnostic:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Astro is framework-agnostic, which means it can work seamlessly with various front-end libraries and frameworks. It doesn't lock you into a specific JavaScript framework, giving you the freedom to choose the tools and libraries that best suit your project.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"4. Zero-Bundling for Static Content:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Astro uses a zero-bundling approach for static content, which means it generates minimal JavaScript for static pages. This leads to faster loading times, as only the necessary JavaScript is loaded, resulting in smaller file sizes.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"5. Smart Bundling for Dynamic Content:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"For dynamic or interactive content, Astro uses smart bundling to generate optimized JavaScript bundles tailored to each route or page. This ensures that only the code needed for a specific page is sent to the client, reducing initial load times.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"6. Fast Server Rendering:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Astro supports server-side rendering (SSR) for dynamic content. SSR improves performance by rendering initial page content on the server and sending it to the client as HTML, which can be especially beneficial for search engine optimization (SEO).")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"7. GraphQL Data Fetching:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Astro integrates with GraphQL for data fetching, making it easy to retrieve and display data from various sources, such as APIs or databases. This helps developers create dynamic and data-driven web applications.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"8. Developer Experience:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Astro emphasizes a smooth and enjoyable developer experience with features like hot module replacement (HMR), fast build times, and real-time previews, allowing developers to see changes instantly as they work.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"9. Markdown and MDX Support:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Astro supports rendering Markdown and MDX (Markdown with JSX) for content authoring. This is especially useful for creating blog posts, documentation, and other content-rich pages.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"10. Integration with Static Hosting:")," - Astro-generated sites are designed to work well with static site hosting services like Netlify, Vercel, and GitHub Pages. This makes it easy to deploy and host Astro-powered websites."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"11. Progressive Enhancement:")," - Astro follows the principle of progressive enhancement, where the core content and functionality of a web application are available to all users, regardless of their device or browser capabilities. Enhanced features are loaded only for users with modern browsers or devices."),(0,a.kt)("p",null,"In summary, Astro is a versatile static site generator and front-end framework that offers a unique approach to building web applications. Its focus on performance, component-driven development, and flexibility makes it a valuable tool for developers looking to create fast and efficient web experiences while retaining the flexibility to integrate with other front-end technologies."),(0,a.kt)("h2",{id:"links"},"Links"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://astro.build/"},"Astro")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://astro.build/blog/astro-290/"},"Astro 2.9: View Transitions (experimental) | Astro"))))}u.isMDXComponent=!0}}]);