"use strict";(self.webpackChunkcodisity_com=self.webpackChunkcodisity_com||[]).push([[6620],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>g});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=c(a),d=r,g=u["".concat(l,".").concat(d)]||u[d]||h[d]||i;return a?n.createElement(g,s(s({ref:t},p),{},{components:a})):n.createElement(g,s({ref:t},p))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,s=new Array(i);s[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[u]="string"==typeof e?e:r,s[1]=o;for(var c=2;c<i;c++)s[c]=a[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},2635:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var n=a(7462),r=(a(7294),a(3905));const i={tags:["Hash"]},s="Hashing",o={unversionedId:"basics/hashing/index",id:"basics/hashing/index",title:"Hashing",description:'Hashing is a process of converting data (often referred to as a "message") into a fixed-size string of characters, which is typically a hexadecimal number. This output is known as a hash value or hash code. Hashing is widely used in computer science, cryptography, and data security for various purposes. Here are key aspects to understand about hashing:',source:"@site/docs/010-basics/080-hashing/index.mdx",sourceDirName:"010-basics/080-hashing",slug:"/basics/hashing/",permalink:"/basics/hashing/",draft:!1,editUrl:"https://github.com/adrianbienias/codisity.com/blob/main/docs/010-basics/080-hashing/index.mdx",tags:[{label:"Hash",permalink:"/tags/hash"}],version:"current",frontMatter:{tags:["Hash"]},sidebar:"basicsSidebar",previous:{title:"GitHub",permalink:"/basics/version-control/github"},next:{title:"Cache",permalink:"/basics/cache/"}},l={},c=[{value:"Links",id:"links",level:2}],p={toc:c},u="wrapper";function h(e){let{components:t,...a}=e;return(0,r.kt)(u,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"hashing"},"Hashing"),(0,r.kt)("p",null,'Hashing is a process of converting data (often referred to as a "message") into a fixed-size string of characters, which is typically a hexadecimal number. This output is known as a hash value or hash code. Hashing is widely used in computer science, cryptography, and data security for various purposes. Here are key aspects to understand about hashing:'),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"1. Purpose of Hashing:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Data Integrity:")," Hashing is used to verify the integrity of data. By generating a hash value for a piece of data (e.g., a file), users can later recompute the hash and compare it to the original hash to check if the data has been modified or corrupted."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Data Retrieval:")," Hashing is used in data structures like hash tables to quickly retrieve data. It allows for efficient mapping of keys (e.g., words in a dictionary) to values (e.g., definitions)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Password Storage:")," Hashing is employed to store passwords securely. Instead of storing plain-text passwords, systems store the hash of the password. When a user logs in, the system hashes the entered password and compares it to the stored hash."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Cryptographic Security:")," Hash functions are used in cryptography to ensure data confidentiality, authentication, and data integrity. Cryptographic hash functions are designed to be secure against various attacks.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"2. Properties of a Good Hash Function:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A good hash function should exhibit the following properties:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Deterministic:")," For the same input, it always produces the same hash output."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Fast to Compute:")," It should compute the hash quickly."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Pre-image Resistance:")," Given a hash value, it should be computationally infeasible to reverse the process and find the original input."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Collision Resistance:")," It should be extremely unlikely for two different inputs to produce the same hash output."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Avalanche Effect:")," A small change in the input should result in a significantly different hash value."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Fixed Output Length:")," The hash function should produce a fixed-length hash output, regardless of the input size.")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"3. Common Hash Functions:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"There are various hash functions used for different purposes:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"MD5 (Message Digest Algorithm 5):")," Once popular but now considered weak for cryptographic purposes due to vulnerabilities."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"SHA-1 (Secure Hash Algorithm 1):")," Also considered weak for cryptographic purposes."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"SHA-256 and SHA-3:")," Part of the Secure Hash Algorithm family, these are widely used and considered secure."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"bcrypt and scrypt:")," Cryptographic hash functions designed specifically for secure password storage.")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"4. Cryptographic Hash Functions:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Cryptographic hash functions are specifically designed to resist attacks and are used in security-sensitive applications. They must meet stringent security criteria.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"5. Salt:"),' When storing passwords, it\'s common to use a technique called "salting." A unique random value (the salt) is added to each password before hashing. This prevents attackers from using precomputed tables (rainbow tables) to crack multiple passwords at once.'),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"6. Examples of Hashing Usage:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Checksums:")," Files downloaded from the internet often have a checksum associated with them. Users can calculate the checksum of the downloaded file and compare it to the provided checksum to ensure the file is intact."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Digital Signatures:")," In public key cryptography, digital signatures are created by hashing a message and then encrypting the hash with the sender's private key. The recipient can verify the signature using the sender's public key."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Data Deduplication:")," Hashing is used to identify duplicate data in storage systems, allowing for efficient data deduplication."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Blockchain:")," Blockchain technology relies on cryptographic hashing to create a secure and immutable ledger of transactions.")),(0,r.kt)("p",null,"In summary, hashing is a fundamental concept in computer science and data security, providing data integrity verification, efficient data retrieval, and security for various applications. It is essential for protecting data, verifying authenticity, and ensuring the secure storage of sensitive information like passwords."),(0,r.kt)("h2",{id:"links"},"Links"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Hash_table"},"Hash table - Wikipedia"))))}h.isMDXComponent=!0}}]);