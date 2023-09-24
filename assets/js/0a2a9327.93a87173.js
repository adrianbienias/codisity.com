"use strict";(self.webpackChunkcodisity_com=self.webpackChunkcodisity_com||[]).push([[6434],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>u});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(a),g=r,u=d["".concat(l,".").concat(g)]||d[g]||m[g]||i;return a?n.createElement(u,o(o({ref:t},c),{},{components:a})):n.createElement(u,o({ref:t},c))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},9941:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));const i={tags:["ORM"]},o="Object-relational mapping",s={unversionedId:"backend/databases/object-relational-mapping",id:"backend/databases/object-relational-mapping",title:"Object-relational mapping",description:"Object-Relational Mapping (ORM) is a programming technique used in software development to bridge the gap between the object-oriented world of programming languages and the relational world of databases. It allows developers to work with databases using programming objects and classes, making it easier to interact with and manipulate data stored in relational databases. Here are key aspects of Object-Relational Mapping:",source:"@site/docs/040-backend/040-databases/010-object-relational-mapping.mdx",sourceDirName:"040-backend/040-databases",slug:"/backend/databases/object-relational-mapping",permalink:"/backend/databases/object-relational-mapping",draft:!1,editUrl:"https://github.com/adrianbienias/codisity.com/blob/main/docs/040-backend/040-databases/010-object-relational-mapping.mdx",tags:[{label:"ORM",permalink:"/tags/orm"}],version:"current",sidebarPosition:10,frontMatter:{tags:["ORM"]},sidebar:"backendSidebar",previous:{title:"Databases",permalink:"/backend/databases/"},next:{title:"Content management systems",permalink:"/backend/content-management-systems/"}},l={},p=[{value:"Links",id:"links",level:2}],c={toc:p},d="wrapper";function m(e){let{components:t,...a}=e;return(0,r.kt)(d,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"object-relational-mapping"},"Object-relational mapping"),(0,r.kt)("p",null,"Object-Relational Mapping (ORM) is a programming technique used in software development to bridge the gap between the object-oriented world of programming languages and the relational world of databases. It allows developers to work with databases using programming objects and classes, making it easier to interact with and manipulate data stored in relational databases. Here are key aspects of Object-Relational Mapping:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Object-Oriented Mapping:")," ORM systems provide a way to represent database tables and their relationships as object-oriented models in programming languages. In other words, database tables become classes, and rows in those tables become objects of those classes.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Abstraction:")," ORM abstracts away the complexities of SQL (Structured Query Language) and the underlying database schema. Developers can use familiar object-oriented constructs such as classes, objects, methods, and inheritance to work with data instead of writing raw SQL queries.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"CRUD Operations:")," ORM frameworks provide methods and APIs for performing CRUD (Create, Read, Update, Delete) operations on data objects. Developers can manipulate data by creating, retrieving, updating, and deleting objects without writing SQL statements explicitly.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Query Language:")," ORM systems often include their own query languages that allow developers to express database queries using a more natural and object-oriented syntax. For example, in a Python ORM like Django's ORM, you can use Python code to query the database.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Schema Generation:")," ORM tools can generate database schema from the object-oriented models and vice versa. This means you can define your data models in code, and the ORM will create the corresponding database tables, fields, and relationships.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Cross-Database Compatibility:")," Some ORM frameworks support multiple database systems, allowing developers to switch databases (e.g., from MySQL to PostgreSQL) with minimal code changes. This is possible because the ORM handles the underlying SQL differences.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Performance Optimization:")," ORM frameworks often include features for optimizing database queries, such as lazy loading (loading related data only when needed), eager loading (loading related data in advance), and query caching to minimize database round trips.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Relationships:")," ORM systems support modeling and working with complex relationships between data entities, including one-to-one, one-to-many, and many-to-many relationships. These relationships are often represented as attributes or methods in the object-oriented models.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Validation and Business Logic:")," Developers can include data validation rules and business logic in their object-oriented models, ensuring that data integrity is maintained at the application level.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Concurrency Control:")," ORM frameworks often provide mechanisms for handling concurrent updates to the same data, preventing conflicts and data corruption.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Migrations:")," Many ORM systems offer migration tools to manage database schema changes over time, making it easier to evolve the database schema as application requirements change.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Community and Ecosystem:")," ORM frameworks have active communities and extensive ecosystems of plugins, extensions, and documentation to support developers."))),(0,r.kt)("p",null,"Popular ORM frameworks and libraries include Django ORM (Python), Hibernate (Java), Entity Framework (C#), Sequelize (Node.js), and SQLAlchemy (Python). These frameworks abstract the complexities of database interactions and provide developers with high-level, object-oriented interfaces to work with relational databases, significantly improving development productivity and code maintainability."),(0,r.kt)("h2",{id:"links"},"Links"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Object%E2%80%93relational_mapping"},"Object\u2013relational mapping - Wikipedia")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/prisma/prisma-examples/tree/latest/typescript"},"prisma-examples/typescript at latest \xb7 prisma/prisma-examples"))))}m.isMDXComponent=!0}}]);