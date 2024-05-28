"use strict";(self.webpackChunkcodisity_com=self.webpackChunkcodisity_com||[]).push([[3250],{3905:(e,a,t)=>{t.d(a,{Zo:()=>p,kt:()=>f});var r=t(7294);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function s(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?s(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function o(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var l=r.createContext({}),d=function(e){var a=r.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},p=function(e){var a=d(e.components);return r.createElement(l.Provider,{value:a},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},m=r.forwardRef((function(e,a){var t=e.components,n=e.mdxType,s=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=d(t),m=n,f=c["".concat(l,".").concat(m)]||c[m]||u[m]||s;return t?r.createElement(f,i(i({ref:a},p),{},{components:t})):r.createElement(f,i({ref:a},p))}));function f(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var s=t.length,i=new Array(s);i[0]=m;var o={};for(var l in a)hasOwnProperty.call(a,l)&&(o[l]=a[l]);o.originalType=e,o[c]="string"==typeof e?e:n,i[1]=o;for(var d=2;d<s;d++)i[d]=t[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},8906:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>o,toc:()=>d});var r=t(7462),n=(t(7294),t(3905));const s={tags:["DB","Data"]},i="Data structures and databases",o={unversionedId:"basics/software/data-structures-and-databases",id:"basics/software/data-structures-and-databases",title:"Data structures and databases",description:"Data Structures:",source:"@site/docs/010-basics/040-software/050-data-structures-and-databases.mdx",sourceDirName:"010-basics/040-software",slug:"/basics/software/data-structures-and-databases",permalink:"/basics/software/data-structures-and-databases",draft:!1,editUrl:"https://github.com/adrianbienias/codisity.com/blob/main/docs/010-basics/040-software/050-data-structures-and-databases.mdx",tags:[{label:"DB",permalink:"/tags/db"},{label:"Data",permalink:"/tags/data"}],version:"current",sidebarPosition:50,frontMatter:{tags:["DB","Data"]},sidebar:"basicsSidebar",previous:{title:"Algorithms",permalink:"/basics/software/algorithms"},next:{title:"Design patterns",permalink:"/basics/software/design-patterns"}},l={},d=[{value:"Links",id:"links",level:2}],p={toc:d},c="wrapper";function u(e){let{components:a,...t}=e;return(0,n.kt)(c,(0,r.Z)({},p,t,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"data-structures-and-databases"},"Data structures and databases"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Data Structures:")),(0,n.kt)("p",null,"Data structures are fundamental constructs used in computer science to organize and store data efficiently. They are essential for various programming tasks and are designed to facilitate data retrieval, insertion, and manipulation. Data structures come in various forms, each suited to specific use cases. Here are some common data structures:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Arrays:")," Arrays are collections of elements, each identified by an index or key. They are simple and efficient for random access but have a fixed size.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Linked Lists:")," Linked lists consist of nodes, each containing data and a reference (pointer) to the next node in the sequence. They are dynamic and well-suited for insertions and deletions at any point in the list.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Stacks:")," Stacks are linear data structures that follow the Last-In-First-Out (LIFO) principle. Elements are added or removed from the top of the stack.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Queues:")," Queues are linear data structures that follow the First-In-First-Out (FIFO) principle. Elements are added at the rear (enqueue) and removed from the front (dequeue).")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Trees:")," Trees are hierarchical data structures composed of nodes, each having zero or more child nodes. Examples include binary trees, AVL trees, and B-trees. Trees are used for tasks like searching, sorting, and hierarchical organization.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Graphs:")," Graphs consist of nodes (vertices) connected by edges. They are versatile data structures used for modeling relationships between objects and solving various problems, including network analysis and route planning.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Hash Tables:")," Hash tables (also known as dictionaries or associative arrays) use a hash function to map keys to values. They provide efficient key-value pair storage and retrieval.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Heaps:")," Heaps are specialized trees used for priority queue implementations. They ensure that the element with the highest (or lowest) priority is always at the root.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Trie:"),' A trie (pronounced "try") is a tree-like data structure used for storing a dynamic set of strings or keys. It is particularly efficient for searching and prefix-based operations.')),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Sparse Data Structures:")," These data structures are designed to efficiently store data with a large number of empty or default values. Examples include sparse matrices and sparse arrays."))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Databases:")),(0,n.kt)("p",null,"Databases are structured repositories for storing, managing, and retrieving data. They are critical for organizing large volumes of information, ensuring data integrity, and providing efficient data access. Databases can be categorized into various types:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Relational Databases:")," These databases organize data into tables with rows and columns. They use Structured Query Language (SQL) for querying and manipulation. Examples include MySQL, PostgreSQL, Oracle Database, and Microsoft SQL Server.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"NoSQL Databases:")," NoSQL databases provide more flexible data models than relational databases. They are suitable for handling unstructured or semi-structured data. Types of NoSQL databases include document-oriented (e.g., MongoDB), key-value stores (e.g., Redis), column-family stores (e.g., Apache Cassandra), and graph databases (e.g., Neo4j).")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"In-Memory Databases:")," These databases store data primarily in RAM, offering extremely fast data access. Redis and Apache Ignite are examples of in-memory databases.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"NewSQL Databases:")," NewSQL databases aim to combine the benefits of traditional relational databases with scalability and performance improvements. They are designed for high-demand, distributed applications.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Time-Series Databases:")," These databases are optimized for storing and querying time-series data, such as sensor readings, log files, and financial data. Examples include InfluxDB and Prometheus.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Object Databases:")," Object databases store data in the form of objects, making them suitable for object-oriented applications. They allow for direct storage of complex data structures."))),(0,n.kt)("p",null,"Databases provide features like data indexing, transactions, concurrency control, and security. They are used in various applications, including web development, enterprise software, scientific research, finance, and more."),(0,n.kt)("p",null,"In summary, data structures are fundamental for organizing and managing data within a program, while databases are dedicated systems for storing, managing, and retrieving data efficiently, often on a larger scale and with support for multiple users and concurrent operations. Both data structures and databases are essential tools for software development and data management."),(0,n.kt)("h2",{id:"links"},"Links"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Category:Data_structures"},"Category:Data structures - Wikipedia")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Category:Databases"},"Category:Databases - Wikipedia"))))}u.isMDXComponent=!0}}]);