"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5013],{9613:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(9496);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o=r.createContext({}),s=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,o=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=s(n),m=i,k=d["".concat(o,".").concat(m)]||d[m]||u[m]||l;return n?r.createElement(k,a(a({ref:t},c),{},{components:n})):r.createElement(k,a({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,a=new Array(l);a[0]=d;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:i,a[1]=p;for(var s=2;s<l;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9021:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>p,contentTitle:()=>o,metadata:()=>s,toc:()=>c,default:()=>d});var r=n(9518),i=n(7344),l=(n(9496),n(9613)),a=["components"],p={id:"run",title:"pnpm run"},o=void 0,s={unversionedId:"cli/run",id:"version-6.x/cli/run",title:"pnpm run",description:"\u30a8\u30a4\u30ea\u30a2\u30b9: run-script",source:"@site/i18n/ja/docusaurus-plugin-content-docs/version-6.x/cli/run.md",sourceDirName:"cli",slug:"/cli/run",permalink:"/ja/cli/run",editUrl:"https://crowdin.com/project/pnpm/ja",tags:[],version:"6.x",frontMatter:{id:"run",title:"pnpm run"},sidebar:"version-6.x/docs",previous:{title:"pnpm why",permalink:"/ja/cli/why"},next:{title:"pnpm test",permalink:"/ja/cli/test"}},c=[{value:"\u4f8b",id:"\u4f8b",children:[],level:2},{value:"\u8a73\u7d30\u60c5\u5831",id:"\u8a73\u7d30\u60c5\u5831",children:[],level:2},{value:"Differences with <code>npm run</code>",id:"differences-with-npm-run",children:[],level:2},{value:"Options",id:"options",children:[{value:"script-shell",id:"script-shell",children:[],level:3},{value:"shell-emulator",id:"shell-emulator",children:[],level:3},{value:"--recursive, -r",id:"--recursive--r",children:[],level:3},{value:"--if-present",id:"--if-present",children:[],level:3},{value:"--parallel",id:"--parallel",children:[],level:3},{value:"--stream",id:"--stream",children:[],level:3},{value:"--aggregate-output",id:"--aggregate-output",children:[],level:3},{value:"enable-pre-post-scripts",id:"enable-pre-post-scripts",children:[],level:3},{value:"--filter &lt;package_selector&gt;",id:"--filter-package_selector",children:[],level:3}],level:2}],u={toc:c};function d(e){var t=e.components,n=(0,i.Z)(e,a);return(0,l.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u30a8\u30a4\u30ea\u30a2\u30b9: ",(0,l.kt)("inlineCode",{parentName:"p"},"run-script")),(0,l.kt)("p",null,"\u30d1\u30c3\u30b1\u30fc\u30b8\u306e\u30de\u30cb\u30d5\u30a7\u30b9\u30c8\u30d5\u30a1\u30a4\u30eb\u3067\u5b9a\u7fa9\u3055\u308c\u305f\u30b9\u30af\u30ea\u30d7\u30c8\u3092\u5b9f\u884c\u3057\u307e\u3059\u3002"),(0,l.kt)("h2",{id:"\u4f8b"},"\u4f8b"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"package.json")," \u306b\u6b21\u306e\u3088\u3046\u306b ",(0,l.kt)("inlineCode",{parentName:"p"},"watch")," \u3068\u3044\u3046\u30b9\u30af\u30ea\u30d7\u30c8\u304c\u5b9a\u7fa9\u3055\u308c\u3066\u3044\u308b\u3068\u3057\u307e\u3057\u3087\u3046\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'"scripts": {\n    "watch": "build-command --watch"\n}\n')),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"pnpm run watch")," \u3092\u4f7f\u3063\u3066\u3053\u306e\u30b9\u30af\u30ea\u30d7\u30c8\u3092\u5b9f\u884c\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059! \u30b7\u30f3\u30d7\u30eb\u3067\u3059\u3088\u306d\uff1f \u30ad\u30fc\u3092\u306a\u308b\u3079\u304f\u6253\u3061\u305f\u304f\u306a\u3044\u4eba\u306e\u305f\u3081\u306b\u3001\u5168\u3066\u306e\u30b9\u30af\u30ea\u30d7\u30c8\u306f pnpm \u30b3\u30de\u30f3\u30c9\u306e\u30a8\u30a4\u30ea\u30a2\u30b9\u3068\u3057\u3066\u8a2d\u5b9a\u3055\u308c\u307e\u3059\u3002\u3064\u307e\u308a\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"pnpm watch")," \u306f\u305f\u3060\u306e ",(0,l.kt)("inlineCode",{parentName:"p"},"pnpm run watch")," \u306e\u7701\u7565\u3067\u3059(\u30b9\u30af\u30ea\u30d7\u30c8\u306e\u540d\u524d\u304c pnpm \u30b3\u30de\u30f3\u30c9\u3068\u88ab\u3063\u3066\u3044\u306a\u3044\u9650\u308a)\u3002"),(0,l.kt)("h2",{id:"\u8a73\u7d30\u60c5\u5831"},"\u8a73\u7d30\u60c5\u5831"),(0,l.kt)("p",null,"In addition to the shell\u2019s pre-existing ",(0,l.kt)("inlineCode",{parentName:"p"},"PATH"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"pnpm run")," includes ",(0,l.kt)("inlineCode",{parentName:"p"},"node_modules/.bin")," in the ",(0,l.kt)("inlineCode",{parentName:"p"},"PATH")," provided to ",(0,l.kt)("inlineCode",{parentName:"p"},"scripts"),". This means that so long as you have a package installed, you can use it in a script like a regular command. For example, if you have ",(0,l.kt)("inlineCode",{parentName:"p"},"eslint")," installed, you can write up a script like so:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'"lint": "eslint src --fix"\n')),(0,l.kt)("p",null,"And even though ",(0,l.kt)("inlineCode",{parentName:"p"},"eslint")," is not installed globally in your shell, it will run."),(0,l.kt)("p",null,"For workspaces, as of v3.5, ",(0,l.kt)("inlineCode",{parentName:"p"},"<workspace root>/node_modules/.bin")," is also added to the ",(0,l.kt)("inlineCode",{parentName:"p"},"PATH"),", so if a tool is installed in the workspace root, it may be called in any workspace package's ",(0,l.kt)("inlineCode",{parentName:"p"},"scripts"),"."),(0,l.kt)("h2",{id:"differences-with-npm-run"},"Differences with ",(0,l.kt)("inlineCode",{parentName:"h2"},"npm run")),(0,l.kt)("p",null,"By default, pnpm doesn't run arbitrary ",(0,l.kt)("inlineCode",{parentName:"p"},"pre")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"post")," hooks for user-defined scripts (such as ",(0,l.kt)("inlineCode",{parentName:"p"},"prestart"),"). This behavior, inherited from npm, caused scripts to be implicit rather than explicit, obfuscating the execution flow. It also led to surprising executions with ",(0,l.kt)("inlineCode",{parentName:"p"},"pnpm serve")," also running ",(0,l.kt)("inlineCode",{parentName:"p"},"pnpm preserve"),"."),(0,l.kt)("p",null,"If for some reason you need the pre/post scripts behavior of npm, use the ",(0,l.kt)("inlineCode",{parentName:"p"},"enable-pre-post-scripts")," option."),(0,l.kt)("h2",{id:"options"},"Options"),(0,l.kt)("h3",{id:"script-shell"},"script-shell"),(0,l.kt)("p",null,"Added in: v5.10.0"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u30c7\u30d5\u30a9\u30eb\u30c8: ",(0,l.kt)("strong",{parentName:"li"},"null")),(0,l.kt)("li",{parentName:"ul"},"\u30bf\u30a4\u30d7: ",(0,l.kt)("strong",{parentName:"li"},"path"))),(0,l.kt)("p",null,"The shell to use for scripts run with the ",(0,l.kt)("inlineCode",{parentName:"p"},"pnpm run")," command."),(0,l.kt)("p",null,"For instance, to force usage of Git Bash on Windows:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'pnpm config set script-shell "C:\\\\Program Files\\\\git\\\\bin\\\\bash.exe"\n')),(0,l.kt)("h3",{id:"shell-emulator"},"shell-emulator"),(0,l.kt)("p",null,"Added in: v5.8.0"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u30c7\u30d5\u30a9\u30eb\u30c8: ",(0,l.kt)("strong",{parentName:"li"},"false")),(0,l.kt)("li",{parentName:"ul"},"\u30bf\u30a4\u30d7: ",(0,l.kt)("strong",{parentName:"li"},"Boolean"))),(0,l.kt)("p",null,"When ",(0,l.kt)("inlineCode",{parentName:"p"},"true"),", pnpm will use a JavaScript implementation of a ",(0,l.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@yarnpkg/shell"},"bash-like shell")," to execute scripts."),(0,l.kt)("p",null,"This option simplifies cross-platform scripting. For instance, by default, the next script will fail on non-POSIX-compliant systems:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'"scripts": {\n  "test": "NODE_ENV=test node test.js"\n}\n')),(0,l.kt)("p",null,"But if the ",(0,l.kt)("inlineCode",{parentName:"p"},"shell-emulator")," setting is set to ",(0,l.kt)("inlineCode",{parentName:"p"},"true"),", it will work on all platforms."),(0,l.kt)("h3",{id:"--recursive--r"},"--recursive, -r"),(0,l.kt)("p",null,"This runs an arbitrary command from each package's \"scripts\" object. If a package doesn't have the command, it is skipped. If none of the packages have the command, the command fails."),(0,l.kt)("h3",{id:"--if-present"},"--if-present"),(0,l.kt)("p",null,"Added in: v4.5.0"),(0,l.kt)("p",null,"You can use the ",(0,l.kt)("inlineCode",{parentName:"p"},"--if-present")," flag to avoid exiting with a non-zero exit code when the script is undefined. This lets you run potentially undefined scripts without breaking the execution chain."),(0,l.kt)("h3",{id:"--parallel"},"--parallel"),(0,l.kt)("p",null,"Added in: v5.1.0"),(0,l.kt)("p",null,"Completely disregard concurrency and topological sorting, running a given script immediately in all matching packages with prefixed streaming output. This is the preferred flag for long-running processes over many packages, for instance, a lengthy build process."),(0,l.kt)("h3",{id:"--stream"},"--stream"),(0,l.kt)("p",null,"Added in: v5.1.0"),(0,l.kt)("p",null,"Stream output from child processes immediately, prefixed with the originating package directory. This allows output from different packages to be interleaved."),(0,l.kt)("h3",{id:"--aggregate-output"},"--aggregate-output"),(0,l.kt)("p",null,"Added in: v6.24.0"),(0,l.kt)("p",null,"Aggregate output from child processes that are run in parallel, and only print output when the child process is finished. It makes reading large logs after running ",(0,l.kt)("inlineCode",{parentName:"p"},"pnpm -r <command>")," with ",(0,l.kt)("inlineCode",{parentName:"p"},"--parallel")," or with ",(0,l.kt)("inlineCode",{parentName:"p"},"--workspace-concurrency=<number>")," much easier (especially on CI). Only ",(0,l.kt)("inlineCode",{parentName:"p"},"--reporter=append-only")," is supported."),(0,l.kt)("h3",{id:"enable-pre-post-scripts"},"enable-pre-post-scripts"),(0,l.kt)("p",null,"Added in: v6.1.0"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u30c7\u30d5\u30a9\u30eb\u30c8: ",(0,l.kt)("strong",{parentName:"li"},"false")),(0,l.kt)("li",{parentName:"ul"},"\u30bf\u30a4\u30d7: ",(0,l.kt)("strong",{parentName:"li"},"Boolean"))),(0,l.kt)("p",null,"When ",(0,l.kt)("inlineCode",{parentName:"p"},"true"),", pnpm will run any pre/post scripts automatically. So running ",(0,l.kt)("inlineCode",{parentName:"p"},"pnpm foo")," will be like running ",(0,l.kt)("inlineCode",{parentName:"p"},"pnpm prefoo && pnpm foo && pnpm postfoo"),"."),(0,l.kt)("h3",{id:"--filter-package_selector"},"--filter ","<","package_selector",">"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/ja/filtering"},"Read more about filtering.")))}d.isMDXComponent=!0}}]);