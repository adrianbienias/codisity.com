"use strict";(self.webpackChunkcodisity_com=self.webpackChunkcodisity_com||[]).push([[9442],{3905:(e,t,a)=>{a.d(t,{Zo:()=>l,kt:()=>f});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var m=n.createContext({}),c=function(e){var t=n.useContext(m),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},l=function(e){var t=c(e.components);return n.createElement(m.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,m=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=c(a),u=r,f=p["".concat(m,".").concat(u)]||p[u]||d[u]||i;return a?n.createElement(f,o(o({ref:t},l),{},{components:a})):n.createElement(f,o({ref:t},l))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=u;var s={};for(var m in t)hasOwnProperty.call(t,m)&&(s[m]=t[m]);s.originalType=e,s[p]="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},3037:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var n=a(7462),r=(a(7294),a(3905));const i={tags:["CLI"]},o="Command line interface",s={unversionedId:"backend/command-line-interface/index",id:"backend/command-line-interface/index",title:"Command line interface",description:"A Command Line Interface (CLI) is a text-based interface that allows users to interact with a computer or software application by typing commands into a terminal or command prompt. In a CLI, users provide instructions to the computer or software by entering text commands, and the system responds with text-based output. Here are key aspects of a CLI:",source:"@site/docs/040-backend/020-command-line-interface/index.mdx",sourceDirName:"040-backend/020-command-line-interface",slug:"/backend/command-line-interface/",permalink:"/backend/command-line-interface/",draft:!1,editUrl:"https://github.com/adrianbienias/codisity.com/blob/main/docs/040-backend/020-command-line-interface/index.mdx",tags:[{label:"CLI",permalink:"/tags/cli"}],version:"current",frontMatter:{tags:["CLI"]},sidebar:"backendSidebar",previous:{title:"Node.js",permalink:"/backend/node-js/"},next:{title:"Backend API",permalink:"/backend/backend-api/"}},m={},c=[{value:"Links",id:"links",level:2}],l={toc:c},p="wrapper";function d(e){let{components:t,...a}=e;return(0,r.kt)(p,(0,n.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"command-line-interface"},"Command line interface"),(0,r.kt)("p",null,"A Command Line Interface (CLI) is a text-based interface that allows users to interact with a computer or software application by typing commands into a terminal or command prompt. In a CLI, users provide instructions to the computer or software by entering text commands, and the system responds with text-based output. Here are key aspects of a CLI:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Text-Based Interaction:")," In a CLI, users communicate with the computer or software using text commands and receive text responses. This text-based interaction contrasts with graphical user interfaces (GUIs), which use graphical elements like windows, buttons, and icons for interaction.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Prompt:")," The CLI typically presents a prompt, which is a text indicator (often a symbol or a directory path) that signals that the system is ready to receive a command. Users type their commands after the prompt.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Commands:")," Commands are specific textual instructions that tell the computer or software what action to perform. Examples of commands include creating files or directories, moving or copying files, running programs, and configuring system settings.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Arguments and Options:")," Commands often accept additional information called arguments and options. Arguments are parameters that provide additional data needed to complete a command's action (e.g., specifying a filename). Options modify a command's behavior (e.g., specifying whether a command should run silently or with verbose output).")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"File System Navigation:")," Users can navigate the file system by using commands to change directories, list files and directories, create and delete files and directories, and move or copy files.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Scripting:")," CLIs are often used for automation and scripting. Users can create scripts (sequences of commands) to automate repetitive tasks, making them more efficient.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Operating System Access:")," CLIs provide direct access to the underlying operating system. This allows users to perform advanced tasks and system administration, which may not be possible or as straightforward in a GUI.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Remote Access:")," CLIs can be used for remote management of computers and servers over a network or the internet. Secure Shell (SSH) is a common protocol for accessing remote systems via a CLI.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Customization:")," Users can often customize the appearance and behavior of the CLI, including the prompt, colors, aliases (shortcuts for frequently used commands), and environment variables.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Cross-Platform:")," CLIs are available on various operating systems, including Windows (Command Prompt and PowerShell), macOS (Terminal), and Linux/Unix (Bash, Zsh, etc.). This cross-platform nature allows users to apply their CLI skills across different environments.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Learning Curve:")," CLIs can have a steeper learning curve than GUIs, as users need to learn specific commands and their syntax. However, mastering the CLI can lead to increased efficiency and greater control over the system."))),(0,r.kt)("p",null,"Common examples of CLIs include the Windows Command Prompt, macOS Terminal, and the Linux shell (e.g., Bash). Additionally, many software applications, especially in the development and system administration domains, provide their own CLIs for advanced configuration and automation."),(0,r.kt)("p",null,"In summary, a Command Line Interface (CLI) is a text-based interface that allows users to interact with computers and software by entering text commands. It provides a powerful and flexible way to control and manage systems, perform tasks, and automate processes efficiently. While it may require some initial learning, proficiency in using the CLI can be highly valuable for developers, system administrators, and power users."),(0,r.kt)("h2",{id:"links"},"Links"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Command-line_interface"},"Command-line interface - Wikipedia")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://onceupon.github.io/Bash-Oneliner/"},"Bash-Oneliner | A collection of handy Bash One-Liners and terminal tricks for data processing and Linux system maintenance.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://charm.sh/libs/"},"Charm")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/chalk/chalk"},"chalk/chalk: \ud83d\udd8d Terminal string styling done right")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/charmbracelet/gum"},"charmbracelet/gum: A tool for glamorous shell scripts \ud83c\udf80")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/infinitered/gluegun?ck_subscriber_id=192963084"},"infinitered/gluegun: A delightful toolkit for building TypeScript-powered command-line apps.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/junegunn/fzf"},"junegunn/fzf: \ud83c\udf38 A command-line fuzzy finder")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/barthr/redo"},"barthr/redo: Redo is the ultimate tool to create reusable functions from your history in an interactive way")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/nexe/nexe"},"nexe/nexe: \ud83c\udf89 create a single executable out of your node.js apps")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/andreafrancia/trash-cli/"},"andreafrancia/trash-cli: Command line interface to the freedesktop.org trashcan.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/tj/commander.js"},"tj/commander.js: node.js command-line interfaces made easy"))))}d.isMDXComponent=!0}}]);