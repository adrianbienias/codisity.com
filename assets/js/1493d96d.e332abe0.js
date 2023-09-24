"use strict";(self.webpackChunkcodisity_com=self.webpackChunkcodisity_com||[]).push([[7452],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>u});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=r.createContext({}),l=function(e){var t=r.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=l(e.components);return r.createElement(o.Provider,{value:t},e.children)},d="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=l(a),m=n,u=d["".concat(o,".").concat(m)]||d[m]||h[m]||i;return a?r.createElement(u,s(s({ref:t},c),{},{components:a})):r.createElement(u,s({ref:t},c))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,s=new Array(i);s[0]=m;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p[d]="string"==typeof e?e:n,s[1]=p;for(var l=2;l<i;l++)s[l]=a[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},8994:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>p,toc:()=>l});var r=a(7462),n=(a(7294),a(3905));const i={tags:["GraphQL"]},s="GraphQL",p={unversionedId:"backend/backend-api/graphql",id:"backend/backend-api/graphql",title:"GraphQL",description:"GraphQL is a query language for APIs (Application Programming Interfaces) and a runtime for executing those queries by providing a more efficient, powerful, and flexible way to request and manipulate data from servers. Unlike traditional REST APIs, which expose fixed endpoints and return fixed data structures, GraphQL allows clients to request exactly the data they need, no more and no less. Here are key aspects of GraphQL:",source:"@site/docs/040-backend/030-backend-api/020-graphql.mdx",sourceDirName:"040-backend/030-backend-api",slug:"/backend/backend-api/graphql",permalink:"/backend/backend-api/graphql",draft:!1,editUrl:"https://github.com/adrianbienias/codisity.com/blob/main/docs/040-backend/030-backend-api/020-graphql.mdx",tags:[{label:"GraphQL",permalink:"/tags/graph-ql"}],version:"current",sidebarPosition:20,frontMatter:{tags:["GraphQL"]},sidebar:"backendSidebar",previous:{title:"RESTful API",permalink:"/backend/backend-api/restful-api"},next:{title:"Databases",permalink:"/backend/databases/"}},o={},l=[{value:"Links",id:"links",level:2}],c={toc:l},d="wrapper";function h(e){let{components:t,...a}=e;return(0,n.kt)(d,(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"graphql"},"GraphQL"),(0,n.kt)("p",null,"GraphQL is a query language for APIs (Application Programming Interfaces) and a runtime for executing those queries by providing a more efficient, powerful, and flexible way to request and manipulate data from servers. Unlike traditional REST APIs, which expose fixed endpoints and return fixed data structures, GraphQL allows clients to request exactly the data they need, no more and no less. Here are key aspects of GraphQL:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Query Language:")," GraphQL introduces a query language that clients use to describe the data they want. Clients can specify the shape and structure of the response, including which fields, nested objects, and relationships they need.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Single Endpoint:")," Unlike REST APIs that often have multiple endpoints for different resources, GraphQL typically exposes a single endpoint for all data queries and mutations. This simplifies API access and eliminates over-fetching (retrieving more data than needed) or under-fetching (not getting enough data).")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Hierarchical Structure:")," GraphQL queries have a hierarchical structure that mirrors the shape of the response data. Clients define their queries by specifying the fields they want at different levels of depth within the data graph.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Strongly Typed:")," GraphQL APIs are strongly typed, meaning they have a defined schema that outlines the types of data that can be queried, including object types, fields, relationships, and input types. This schema serves as documentation and enforces type safety.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Real-time Data:")," GraphQL supports real-time data updates through subscriptions. Clients can subscribe to specific events, and the server will push updates to subscribed clients when relevant data changes.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Batching:")," Clients can send multiple queries in a single request, allowing them to retrieve related data efficiently. This reduces the number of HTTP requests made by the client, improving performance.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Introspection:")," GraphQL APIs are introspectable, which means clients can query the schema itself to discover available types, fields, and their descriptions. This self-documenting nature simplifies API exploration and development.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"N+1 Problem Mitigation:")," GraphQL provides mechanisms to address the N+1 problem, where a client makes N+1 requests to fetch related data. With GraphQL, clients can use connections, fragments, and batching to optimize data retrieval.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Versioning and Evolution:")," GraphQL APIs are versionless by design. Instead of creating new API versions for every change, developers can introduce incremental updates to the schema, deprecating old fields and adding new ones while ensuring backward compatibility.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Community and Ecosystem:")," GraphQL has a vibrant community and a growing ecosystem of tools and libraries for various programming languages and frameworks, making it easier for developers to adopt GraphQL in their projects.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Use Cases:")," GraphQL is suitable for a wide range of use cases, including web and mobile applications, where efficient data fetching is essential, and IoT (Internet of Things) applications, where real-time data updates are crucial.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Adoption:")," GraphQL has been adopted by many companies and organizations, including Facebook (where it was created), GitHub, Shopify, and more, for building modern and efficient APIs."))),(0,n.kt)("p",null,"In summary, GraphQL is a query language and runtime for APIs that offers a more efficient, flexible, and precise way to request and manipulate data from servers. It empowers clients to specify exactly what data they need, reducing over-fetching and enabling efficient data retrieval. GraphQL's introspectable and strongly typed nature, along with its real-time capabilities, make it a compelling choice for building modern and responsive APIs."),(0,n.kt)("h2",{id:"links"},"Links"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/GraphQL"},"GraphQL - Wikipedia")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://graphql.org/"},"GraphQL | A query language for your API")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://graphql.com/"},"GraphQL: APIs for humans")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://the-guild.dev/graphql/codegen"},"Home \u2013 GraphQL Code Generator")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.apollographql.com/"},"Apollo GraphQL | Supergraph: unify APIs, microservices, & databases in a composable graph")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/hayes/pothos"},"hayes/pothos: Pothos GraphQL is library for creating GraphQL schemas in typescript using a strongly typed code first approach")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://the-guild.dev/graphql/codegen"},"Home \u2013 GraphQL Code Generator")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/prisma/prisma-examples/tree/latest/typescript/graphql"},"prisma-examples/typescript/graphql at latest \xb7 prisma/prisma-examples")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://konfigthis.com/blog/graphql-vs-rest"},"I Reviewed 1,000s of GraphQL vs. REST perspectives")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://echobind.com/post/why-we-ditched-graphql-for-trpc"},"Why we ditched GraphQL for tRPC"))))}h.isMDXComponent=!0}}]);