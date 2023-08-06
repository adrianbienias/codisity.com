"use strict";(self.webpackChunkcodisity_com=self.webpackChunkcodisity_com||[]).push([[5926],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>y});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},m=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),u=l(r),d=a,y=u["".concat(s,".").concat(d)]||u[d]||p[d]||i;return r?n.createElement(y,c(c({ref:t},m),{},{components:r})):n.createElement(y,c({ref:t},m))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,c=new Array(i);c[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:a,c[1]=o;for(var l=2;l<i;l++)c[l]=r[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},9290:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>k,contentTitle:()=>O,default:()=>N,frontMatter:()=>w,metadata:()=>v,toc:()=>E});var n=r(7462),a=r(7294),i=r(3905),c=r(6010),o=r(2802),s=r(9960),l=r(3919),m=r(5999);const u={cardContainer:"cardContainer_S8oU",cardTitle:"cardTitle_HoSo",cardDescription:"cardDescription_c27F"};function p(e){let{href:t,children:r}=e;return a.createElement(s.Z,{href:t,className:(0,c.Z)("card padding--lg",u.cardContainer)},r)}function d(e){let{href:t,icon:r,title:n,description:i}=e;return a.createElement(p,{href:t},a.createElement("h2",{className:(0,c.Z)("text--truncate",u.cardTitle),title:n},r," ",n),i&&a.createElement("p",{className:(0,c.Z)("text--truncate",u.cardDescription),title:i},i))}function y(e){let{item:t}=e;const r=(0,o.Wl)(t);return r?a.createElement(d,{href:r,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??(0,m.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function f(e){let{item:t}=e;const r=(0,l.Z)(t.href)?"":"\ud83d\udd17";return a.createElement(d,{href:t.href,icon:r,title:t.label,description:t.description})}function b(e){let{item:t}=e;switch(t.type){case"link":return a.createElement(f,{item:t});case"category":return a.createElement(y,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function h(e){let{className:t}=e;const r=(0,o.jA)();return a.createElement(g,{items:r.items,className:t})}function g(e){const{items:t,className:r}=e;if(!t)return a.createElement(h,e);const n=(0,o.MN)(t);return a.createElement("section",{className:(0,c.Z)("row",r)},n.map(((e,t)=>a.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},a.createElement(b,{item:e})))))}const w={},O="Binary system",v={unversionedId:"basics/computer-hardware/binary-system/index",id:"basics/computer-hardware/binary-system/index",title:"Binary system",description:"Links",source:"@site/docs/010-basics/010-computer-hardware/000-binary-system/index.mdx",sourceDirName:"010-basics/010-computer-hardware/000-binary-system",slug:"/basics/computer-hardware/binary-system/",permalink:"/basics/computer-hardware/binary-system/",draft:!1,editUrl:"https://github.com/adrianbienias/codisity.com/blob/main/docs/010-basics/010-computer-hardware/000-binary-system/index.mdx",tags:[],version:"current",frontMatter:{},sidebar:"basicsSidebar",previous:{title:"Computer hardware",permalink:"/basics/computer-hardware/"},next:{title:"\u25b6\ufe0f Binary system basics",permalink:"/basics/computer-hardware/binary-system/binary-system-basics"}},k={},E=[{value:"Links",id:"links",level:2}],x={toc:E},j="wrapper";function N(e){let{components:t,...r}=e;return(0,i.kt)(j,(0,n.Z)({},x,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"binary-system"},"Binary system"),(0,i.kt)(g,{mdxType:"DocCardList"}),(0,i.kt)("h2",{id:"links"},"Links"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://nandgame.com/"},"NandGame - Build a computer from scratch."))))}N.isMDXComponent=!0}}]);