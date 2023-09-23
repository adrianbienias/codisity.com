"use strict";(self.webpackChunkcodisity_com=self.webpackChunkcodisity_com||[]).push([[5275],{3905:(e,t,i)=>{i.d(t,{Zo:()=>u,kt:()=>f});var n=i(7294);function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function r(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?r(Object(i),!0).forEach((function(t){a(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function s(e,t){if(null==e)return{};var i,n,a=function(e,t){if(null==e)return{};var i,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||(a[i]=e[i]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var l=n.createContext({}),m=function(e){var t=n.useContext(l),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},u=function(e){var t=m(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var i=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=m(i),p=a,f=d["".concat(l,".").concat(p)]||d[p]||c[p]||r;return i?n.createElement(f,o(o({ref:t},u),{},{components:i})):n.createElement(f,o({ref:t},u))}));function f(e,t){var i=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=i.length,o=new Array(r);o[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:a,o[1]=s;for(var m=2;m<r;m++)o[m]=i[m];return n.createElement.apply(null,o)}return n.createElement.apply(null,i)}p.displayName="MDXCreateElement"},6342:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>s,toc:()=>m});var n=i(7462),a=(i(7294),i(3905));const r={tags:["Vim"]},o="Vim",s={unversionedId:"basics/code-editors/vim",id:"basics/code-editors/vim",title:"Vim",description:'Vim, short for "Vi IMproved," is a highly configurable and powerful text editor designed for use in Unix-based operating systems, although it is also available on other platforms. It is a modal text editor, which means it operates in different modes, allowing users to efficiently navigate and edit text. Vim is known for its efficiency, speed, and versatility, and it is beloved by many developers, system administrators, and power users for various tasks, including software development, text editing, and system configuration. Here are key aspects to understand about Vim:',source:"@site/docs/010-basics/190-code-editors/020-vim.mdx",sourceDirName:"010-basics/190-code-editors",slug:"/basics/code-editors/vim",permalink:"/basics/code-editors/vim",draft:!1,editUrl:"https://github.com/adrianbienias/codisity.com/blob/main/docs/010-basics/190-code-editors/020-vim.mdx",tags:[{label:"Vim",permalink:"/tags/vim"}],version:"current",sidebarPosition:20,frontMatter:{tags:["Vim"]},sidebar:"basicsSidebar",previous:{title:"Code formatting",permalink:"/basics/code-editors/code-formatting"},next:{title:"Visual Studio Code",permalink:"/basics/code-editors/visual-studio-code"}},l={},m=[{value:"Links",id:"links",level:2}],u={toc:m},d="wrapper";function c(e){let{components:t,...i}=e;return(0,a.kt)(d,(0,n.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"vim"},"Vim"),(0,a.kt)("p",null,'Vim, short for "Vi IMproved," is a highly configurable and powerful text editor designed for use in Unix-based operating systems, although it is also available on other platforms. It is a modal text editor, which means it operates in different modes, allowing users to efficiently navigate and edit text. Vim is known for its efficiency, speed, and versatility, and it is beloved by many developers, system administrators, and power users for various tasks, including software development, text editing, and system configuration. Here are key aspects to understand about Vim:'),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"1. Modes:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Vim operates in different modes, each serving a specific purpose:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Normal Mode:")," In this mode, Vim is focused on navigation and manipulation of text. Users can move the cursor, delete text, copy, paste, and issue commands to perform various tasks."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Insert Mode:")," In this mode, users can type and edit text as they would in a typical text editor. They enter insert mode to add or modify content."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Visual Mode:")," Visual mode is used for selecting blocks of text. It allows users to highlight and manipulate text selections easily.")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"2. Keybindings and Commands:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},'Vim relies heavily on keybindings and commands for performing actions. Users can execute commands and perform text manipulation tasks by entering specific keystrokes. For example, "dd" deletes a line, "yy" copies a line, and "p" pastes text.')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"3. Customization:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Vim is highly customizable. Users can configure it to suit their preferences by editing the ",(0,a.kt)("inlineCode",{parentName:"li"},".vimrc")," configuration file. Plugins and extensions are also available to enhance Vim's functionality.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"4. Plugins and Extensions:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Vim has a rich ecosystem of plugins and extensions created by the community. These plugins can add features such as syntax highlighting for various programming languages, auto-completion, version control integration, and more.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"5. Text Navigation:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},'Vim offers efficient text navigation capabilities. Users can move the cursor quickly using keyboard shortcuts, such as "h" (left), "j" (down), "k" (up), and "l" (right), or by specifying line numbers or search patterns.')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"6. Text Editing:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},'Vim provides numerous text editing commands for tasks like copying, cutting, pasting, and replacing text. For example, "x" deletes a character, "yy" copies a line, and "u" undoes the last action.')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"7. Macros:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Vim allows users to record and playback macros, which are sequences of commands. This is useful for automating repetitive tasks.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"8. Split Windows:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Vim can split the editing window horizontally or vertically, allowing users to work on multiple files or sections of code simultaneously.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"9. Scripting and Automation:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Vim has its own scripting language called Vimscript. Users can create custom scripts and functions to automate tasks or extend Vim's functionality.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"10. Learning Curve:")," - Vim has a steep learning curve, particularly for users who are new to modal text editors. However, many users find the investment in learning Vim pays off in increased productivity over time."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"11. Availability:")," - Vim is available on most Unix-like systems by default. Additionally, there are Vim distributions and versions available for Windows, macOS, and other platforms."),(0,a.kt)("p",null,"In summary, Vim is a highly efficient and customizable text editor known for its unique modal interface, extensive keyboard shortcuts, and powerful features. While it may require some effort to learn, many users find Vim to be an indispensable tool for text editing, programming, and various system administration tasks."),(0,a.kt)("h2",{id:"links"},"Links"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Vim_(text_editor)"},"Vim (text editor) - Wikipedia")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://learnxinyminutes.com/docs/vim/"},"Learn Vim in Y Minutes: Scenic Programming Language Tours")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.freecodecamp.org/news/vimrc-configuration-guide-customize-your-vim-editor/"},"Vimrc Configuration Guide - How to Customize Your Vim Code Editor with Mappings, Vimscript, Status Line, and More")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://linuxize.com/post/vim-find-replace/"},"Find and Replace in Vim / Vi | Linuxize")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=RZ4p-saaQkc"},"Vim Tutorial for Beginners - YouTube")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://stackoverflow.com/questions/11784408/vim-multiline-editing-like-in-sublimetext"},"Vim multiline editing like in sublimetext? - Stack Overflow")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://medium.com/@schtoeffel/you-don-t-need-more-than-one-cursor-in-vim-2c44117d51db"},"You don\u2019t need more than one cursor in vim | by Christoph Hermann | Medium")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://stackoverflow.com/questions/2600783/how-does-the-vim-write-with-sudo-trick-work"},'How does the vim "write with sudo" trick work? - Stack Overflow')),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.lazyvim.org/"},"\ud83d\ude80 Getting Started | LazyVim"))))}c.isMDXComponent=!0}}]);