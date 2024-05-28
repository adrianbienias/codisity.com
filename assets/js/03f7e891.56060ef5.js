"use strict";(self.webpackChunkcodisity_com=self.webpackChunkcodisity_com||[]).push([[6596],{3905:(t,e,a)=>{a.d(e,{Zo:()=>u,kt:()=>m});var n=a(7294);function i(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){i(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function s(t,e){if(null==t)return{};var a,n,i=function(t,e){if(null==t)return{};var a,n,i={},r=Object.keys(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||(i[a]=t[a]);return i}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(i[a]=t[a])}return i}var c=n.createContext({}),l=function(t){var e=n.useContext(c),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},u=function(t){var e=l(t.components);return n.createElement(c.Provider,{value:e},t.children)},p="mdxType",h={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var a=t.components,i=t.mdxType,r=t.originalType,c=t.parentName,u=s(t,["components","mdxType","originalType","parentName"]),p=l(a),d=i,m=p["".concat(c,".").concat(d)]||p[d]||h[d]||r;return a?n.createElement(m,o(o({ref:e},u),{},{components:a})):n.createElement(m,o({ref:e},u))}));function m(t,e){var a=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var r=a.length,o=new Array(r);o[0]=d;var s={};for(var c in e)hasOwnProperty.call(e,c)&&(s[c]=e[c]);s.originalType=t,s[p]="string"==typeof t?t:i,o[1]=s;for(var l=2;l<r;l++)o[l]=a[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},4418:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var n=a(7462),i=(a(7294),a(3905));const r={tags:["Auth"]},o="Authentication and authorization",s={unversionedId:"fullstack/authentication-and-authorization/index",id:"fullstack/authentication-and-authorization/index",title:"Authentication and authorization",description:"Authentication and authorization are two fundamental concepts in the field of computer security and access control, especially in the context of software applications and systems. While they are related, they serve distinct purposes:",source:"@site/docs/050-fullstack/010-authentication-and-authorization/index.mdx",sourceDirName:"050-fullstack/010-authentication-and-authorization",slug:"/fullstack/authentication-and-authorization/",permalink:"/fullstack/authentication-and-authorization/",draft:!1,editUrl:"https://github.com/adrianbienias/codisity.com/blob/main/docs/050-fullstack/010-authentication-and-authorization/index.mdx",tags:[{label:"Auth",permalink:"/tags/auth"}],version:"current",frontMatter:{tags:["Auth"]},sidebar:"fullstackSidebar",previous:{title:"Full Stack",permalink:"/fullstack/fullstack/"},next:{title:"Routing",permalink:"/fullstack/routing/"}},c={},l=[{value:"Links",id:"links",level:2}],u={toc:l},p="wrapper";function h(t){let{components:e,...a}=t;return(0,i.kt)(p,(0,n.Z)({},u,a,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"authentication-and-authorization"},"Authentication and authorization"),(0,i.kt)("p",null,"Authentication and authorization are two fundamental concepts in the field of computer security and access control, especially in the context of software applications and systems. While they are related, they serve distinct purposes:"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Authentication:"),"\nAuthentication is the process of verifying the identity of a user, device, or system component trying to access a resource or perform an action. It ensures that the entity claiming a particular identity is indeed who it says it is. Authentication typically relies on one or more of the following factors:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Something You Know:")," This factor involves knowledge-based authentication, such as a username and password. The user provides a secret (password) that only they should know.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Something You Have:")," This factor involves possession-based authentication, such as a physical smart card, a mobile device, or a security token. The user must possess a physical item to gain access.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Something You Are:")," This factor involves biometric authentication, such as fingerprint or facial recognition. It relies on unique physical or behavioral traits of the user, which are difficult to forge."))),(0,i.kt)("p",null,"Authentication methods can vary in complexity and security, and they are often used in combination to create multi-factor authentication (MFA) systems. MFA adds an extra layer of security by requiring users to provide multiple forms of authentication, making it more difficult for unauthorized users to gain access."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Authorization:"),"\nAuthorization, on the other hand, is the process of determining what actions or resources an authenticated entity is allowed to access or perform. Once a user's identity is authenticated, authorization checks are performed to decide whether the authenticated entity has the necessary permissions to carry out a specific action or access a particular resource."),(0,i.kt)("p",null,"Authorization is based on a set of rules or policies that define who can do what within an application or system. These policies are often implemented through access control lists (ACLs), role-based access control (RBAC), or attribute-based access control (ABAC). Authorization decisions are made by evaluating the authenticated entity's identity and the permissions associated with that identity."),(0,i.kt)("p",null,"In summary:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Authentication")," verifies the identity of a user or entity."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Authorization")," determines what actions or resources an authenticated entity is allowed to access.")),(0,i.kt)("p",null,"These two concepts work together to control access to data, services, and functionality within software applications and systems. Properly implemented authentication and authorization mechanisms are crucial for maintaining security and protecting sensitive information."),(0,i.kt)("h2",{id:"links"},"Links"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Authentication"},"Authentication - Wikipedia")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Authorization"},"Authorization - Wikipedia")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://web.dev/identity/"},"Identity")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.passportjs.org/"},"Passport.js")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://authjs.dev/"},"Auth.js")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://next-auth.js.org/"},"NextAuth.js")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.authelia.com/"},"Authelia - The Single Sign-On Multi-Factor portal for web apps")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://lucia-auth.com/"},"Lucia \xb7 Lucia")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://g-booking.medium.com/jwt-fingerprint-tokens-af56215bb19a"},"JWT Fingerprints with a REST API. Improving back-end API security using\u2026 | by Mark Arnold | Medium"))))}h.isMDXComponent=!0}}]);