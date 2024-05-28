"use strict";(self.webpackChunkcodisity_com=self.webpackChunkcodisity_com||[]).push([[4216],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,g=u["".concat(l,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(g,i(i({ref:t},c),{},{components:n})):r.createElement(g,i({ref:t},c))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1696:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const o={tags:["Routing"]},i="Routing",s={unversionedId:"fullstack/routing/index",id:"fullstack/routing/index",title:"Routing",description:"Routing is a fundamental concept in computer networking and web development. It refers to the process of determining the path that data should follow to reach its destination. Routing plays a crucial role in ensuring that data packets, requests, or messages are correctly directed from their source to their intended destination in a network or web application. Here are explanations of routing in both networking and web development contexts:",source:"@site/docs/050-fullstack/020-routing/index.mdx",sourceDirName:"050-fullstack/020-routing",slug:"/fullstack/routing/",permalink:"/fullstack/routing/",draft:!1,editUrl:"https://github.com/adrianbienias/codisity.com/blob/main/docs/050-fullstack/020-routing/index.mdx",tags:[{label:"Routing",permalink:"/tags/routing"}],version:"current",frontMatter:{tags:["Routing"]},sidebar:"fullstackSidebar",previous:{title:"Authentication and authorization",permalink:"/fullstack/authentication-and-authorization/"},next:{title:"Pagination",permalink:"/fullstack/pagination/"}},l={},p=[{value:"Links",id:"links",level:2}],c={toc:p},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"routing"},"Routing"),(0,a.kt)("p",null,"Routing is a fundamental concept in computer networking and web development. It refers to the process of determining the path that data should follow to reach its destination. Routing plays a crucial role in ensuring that data packets, requests, or messages are correctly directed from their source to their intended destination in a network or web application. Here are explanations of routing in both networking and web development contexts:"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Routing in Networking:")),(0,a.kt)("p",null,"In networking, routing involves the following key elements:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Routers:")," Routers are network devices that form the backbone of the internet and local area networks (LANs). They are responsible for forwarding data packets between different networks or subnetworks.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"IP Addresses:")," Devices in a network are assigned unique IP addresses, which serve as their network identifiers. IP addresses are used to determine the source and destination of data packets.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Routing Tables:")," Routers maintain routing tables that contain information about the available network paths and the next hop routers for each destination. These tables are used to make routing decisions.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Routing Protocols:")," Routing protocols are algorithms and rules that routers use to communicate with each other and exchange information about network topology and routes. Common routing protocols include RIP (Routing Information Protocol), OSPF (Open Shortest Path First), and BGP (Border Gateway Protocol).")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Path Selection:")," When a router receives a data packet, it examines the destination IP address and consults its routing table to determine the best path for forwarding the packet. The router selects the next hop router based on factors like the shortest path, lowest cost, or other routing metrics.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Dynamic Routing:")," In dynamic routing, routers continuously update their routing tables based on real-time information about network conditions. This allows for automatic route adaptation in case of network changes or failures.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Static Routing:")," In contrast, static routing involves manually configuring routing tables with fixed routes. It is typically used in small, stable networks where changes are infrequent."))),(0,a.kt)("p",null,"Routing ensures that data packets can traverse complex networks with multiple interconnected routers to reach their intended destinations efficiently and reliably."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Routing in Web Development:")),(0,a.kt)("p",null,"In web development, routing refers to the process of mapping URLs (Uniform Resource Locators) to specific actions or resources within a web application. It allows web applications to respond to different URLs by serving the appropriate content or triggering specific actions. Here are the key aspects of routing in web development:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"URL Mapping:"),' Web applications define routes that map URLs to specific controllers, actions, or endpoints. For example, a URL like "/products" might be mapped to a controller that displays a list of products.')),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"HTTP Methods:")," Routing also considers the HTTP method used in a request (e.g., GET, POST, PUT, DELETE). Different routes can be defined for different HTTP methods, allowing applications to handle various types of requests.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Route Parameters:"),' Routes can include placeholders or route parameters in the URL pattern. These parameters are extracted from the URL and can be used to pass dynamic data to controllers or actions. For example, "/products/123" might represent the product with ID 123.')),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Route Middleware:")," Middleware functions can be applied to routes to perform tasks like authentication, authorization, and request preprocessing before the main controller action is executed.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Named Routes:")," Web frameworks often allow developers to define named routes, making it easier to generate URLs dynamically in application views."))),(0,a.kt)("p",null,"Routing is a critical part of web applications, allowing developers to create organized and predictable URL structures and enabling users to navigate the application effectively. Most web frameworks, such as Ruby on Rails, Django, Express.js, and Laravel, provide built-in routing mechanisms to simplify the process of defining and handling routes."),(0,a.kt)("h2",{id:"links"},"Links"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Routing"},"Routing - Wikipedia"))))}d.isMDXComponent=!0}}]);