"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4511],{9613:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var r=n(9496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),m=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},c=function(e){var t=m(e.components);return r.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),s=m(n),u=a,f=s["".concat(o,".").concat(u)]||s[u]||d[u]||i;return n?r.createElement(f,p(p({ref:t},c),{},{components:n})):r.createElement(f,p({ref:t},c))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,p=new Array(i);p[0]=s;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:a,p[1]=l;for(var m=2;m<i;m++)p[m]=n[m];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},1244:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>l,contentTitle:()=>o,metadata:()=>m,toc:()=>c,default:()=>s});var r=n(9518),a=n(7344),i=(n(9496),n(9613)),p=["components"],l={id:"pnpm-cli",title:"pnpm CLI"},o=void 0,m={unversionedId:"pnpm-cli",id:"version-6.x/pnpm-cli",title:"pnpm CLI",description:"Differences vs npm",source:"@site/i18n/id/docusaurus-plugin-content-docs/version-6.x/pnpm-cli.md",sourceDirName:".",slug:"/pnpm-cli",permalink:"/id/pnpm-cli",editUrl:"https://crowdin.com/project/pnpm/id",tags:[],version:"6.x",frontMatter:{id:"pnpm-cli",title:"pnpm CLI"},sidebar:"version-6.x/docs",previous:{title:"Installation",permalink:"/id/installation"},next:{title:"pnpx CLI",permalink:"/id/pnpx-cli"}},c=[{value:"Differences vs npm",id:"differences-vs-npm",children:[],level:2},{value:"Options",id:"options",children:[{value:"-C &lt;path&gt;, --dir &lt;path&gt;",id:"-c-path---dir-path",children:[],level:3},{value:"-w, --workspace-root",id:"-w---workspace-root",children:[],level:3}],level:2},{value:"Commands",id:"commands",children:[],level:2}],d={toc:c};function s(e){var t=e.components,n=(0,a.Z)(e,p);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"differences-vs-npm"},"Differences vs npm"),(0,i.kt)("p",null,"Unlike npm, pnpm validates all options. For example, ",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm install --target_arch x64")," will fail as ",(0,i.kt)("inlineCode",{parentName:"p"},"--target_arch")," is not a valid option for ",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm install"),"."),(0,i.kt)("p",null,"However, some dependencies may use the ",(0,i.kt)("inlineCode",{parentName:"p"},"npm_config_")," environment variable, which is populated from the CLI options. In this case, you have the following options:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"explicitly set the env variable: ",(0,i.kt)("inlineCode",{parentName:"li"},"npm_config_target_arch=x64 pnpm install")),(0,i.kt)("li",{parentName:"ol"},"force the unknown option with ",(0,i.kt)("inlineCode",{parentName:"li"},"--config."),": ",(0,i.kt)("inlineCode",{parentName:"li"},"pnpm install --config.target_arch x64"))),(0,i.kt)("h2",{id:"options"},"Options"),(0,i.kt)("h3",{id:"-c-path---dir-path"},"-C ","<","path",">",", --dir ","<","path",">"),(0,i.kt)("p",null,"Run as if pnpm was started in ",(0,i.kt)("inlineCode",{parentName:"p"},"<path>")," instead of the current working directory."),(0,i.kt)("h3",{id:"-w---workspace-root"},"-w, --workspace-root"),(0,i.kt)("p",null,"Added in: v5.6.0"),(0,i.kt)("p",null,"Run as if pnpm was started in the root of the ",(0,i.kt)("a",{parentName:"p",href:"https://pnpm.io/workspaces"},"workspace")," instead of the current working directory."),(0,i.kt)("h2",{id:"commands"},"Commands"),(0,i.kt)("p",null,"For more information, see the documentation for individual CLI commands. Here is a list of handy npm equivalents to get you started:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"npm command"),(0,i.kt)("th",{parentName:"tr",align:null},"pnpm equivalent"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"npm install")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/id/cli/install"},(0,i.kt)("inlineCode",{parentName:"a"},"pnpm install")))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"npm i <pkg>")),(0,i.kt)("td",{parentName:"tr",align:null},"[",(0,i.kt)("inlineCode",{parentName:"td"},"pnpm add <pkg>"),"]")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"npm run <cmd>")),(0,i.kt)("td",{parentName:"tr",align:null},"[",(0,i.kt)("inlineCode",{parentName:"td"},"pnpm <cmd>"),"]")))),(0,i.kt)("p",null,"When an unknown command is used, pnpm will search for a script with the given name, so ",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm run lint")," is the same as ",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm lint"),". If there is no script with the specified name, then pnpm will execute the command as a shell script, so you can do things like ",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm eslint")," (see ",(0,i.kt)("a",{parentName:"p",href:"/id/cli/exec"},"pnpm exec"),")."))}s.isMDXComponent=!0}}]);