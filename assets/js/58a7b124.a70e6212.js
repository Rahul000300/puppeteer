"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[77456],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},p=Object.keys(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=n.createContext({}),c=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(o.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,p=e.originalType,o=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(r),m=a,g=d["".concat(o,".").concat(m)]||d[m]||s[m]||p;return r?n.createElement(g,i(i({ref:t},u),{},{components:r})):n.createElement(g,i({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var p=r.length,i=new Array(p);i[0]=d;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<p;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},13108:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return o},metadata:function(){return c},toc:function(){return u},default:function(){return d}});var n=r(87462),a=r(63366),p=(r(67294),r(3905)),i=["components"],l={},o=void 0,c={unversionedId:"puppeteer.tracing",id:"version-10.0.0/puppeteer.tracing",isDocsHomePage:!1,title:"puppeteer.tracing",description:"Home &gt; puppeteer &gt; Tracing",source:"@site/versioned_docs/version-10.0.0/puppeteer.tracing.md",sourceDirName:".",slug:"/puppeteer.tracing",permalink:"/puppeteer/docs/10.0.0/puppeteer.tracing",editUrl:"https://github.com/facebook/puppeteer/edit/main/website/versioned_docs/version-10.0.0/puppeteer.tracing.md",version:"10.0.0",frontMatter:{},sidebar:"version-10.0.0/docs",previous:{title:"puppeteer.touchscreen.tap",permalink:"/puppeteer/docs/10.0.0/puppeteer.touchscreen.tap"},next:{title:"puppeteer.tracing._client",permalink:"/puppeteer/docs/10.0.0/puppeteer.tracing._client"}},u=[{value:"Tracing class",id:"tracing-class",children:[]},{value:"Remarks",id:"remarks",children:[]},{value:"Example",id:"example",children:[]},{value:"Properties",id:"properties",children:[]},{value:"Methods",id:"methods",children:[]}],s={toc:u};function d(e){var t=e.components,r=(0,a.Z)(e,i);return(0,p.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"/puppeteer/docs/10.0.0/index"},"Home")," ",">"," ",(0,p.kt)("a",{parentName:"p",href:"/puppeteer/docs/10.0.0/puppeteer"},"puppeteer")," ",">"," ",(0,p.kt)("a",{parentName:"p",href:"/puppeteer/docs/10.0.0/puppeteer.tracing"},"Tracing")),(0,p.kt)("h2",{id:"tracing-class"},"Tracing class"),(0,p.kt)("p",null,"The Tracing class exposes the tracing audit interface."),(0,p.kt)("b",null,"Signature:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-typescript"},"export declare class Tracing \n")),(0,p.kt)("h2",{id:"remarks"},"Remarks"),(0,p.kt)("p",null,"You can use ",(0,p.kt)("inlineCode",{parentName:"p"},"tracing.start")," and ",(0,p.kt)("inlineCode",{parentName:"p"},"tracing.stop")," to create a trace file which can be opened in Chrome DevTools or ",(0,p.kt)("a",{parentName:"p",href:"https://chromedevtools.github.io/timeline-viewer/"},"timeline viewer"),"."),(0,p.kt)("p",null,"The constructor for this class is marked as internal. Third-party code should not call the constructor directly or create subclasses that extend the ",(0,p.kt)("inlineCode",{parentName:"p"},"Tracing")," class."),(0,p.kt)("h2",{id:"example"},"Example"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-js"},"await page.tracing.start({path: 'trace.json'});\nawait page.goto('https://www.google.com');\nawait page.tracing.stop();\n\n")),(0,p.kt)("h2",{id:"properties"},"Properties"),(0,p.kt)("table",null,(0,p.kt)("thead",{parentName:"table"},(0,p.kt)("tr",{parentName:"thead"},(0,p.kt)("th",{parentName:"tr",align:null},"Property"),(0,p.kt)("th",{parentName:"tr",align:null},"Modifiers"),(0,p.kt)("th",{parentName:"tr",align:null},"Type"),(0,p.kt)("th",{parentName:"tr",align:null},"Description"))),(0,p.kt)("tbody",{parentName:"table"},(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},(0,p.kt)("a",{parentName:"td",href:"/puppeteer/docs/10.0.0/puppeteer.tracing._client"},"_","client")),(0,p.kt)("td",{parentName:"tr",align:null}),(0,p.kt)("td",{parentName:"tr",align:null},(0,p.kt)("a",{parentName:"td",href:"/puppeteer/docs/10.0.0/puppeteer.cdpsession"},"CDPSession")),(0,p.kt)("td",{parentName:"tr",align:null})),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},(0,p.kt)("a",{parentName:"td",href:"/puppeteer/docs/10.0.0/puppeteer.tracing._path"},"_","path")),(0,p.kt)("td",{parentName:"tr",align:null}),(0,p.kt)("td",{parentName:"tr",align:null},"string"),(0,p.kt)("td",{parentName:"tr",align:null})),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},(0,p.kt)("a",{parentName:"td",href:"/puppeteer/docs/10.0.0/puppeteer.tracing._recording"},"_","recording")),(0,p.kt)("td",{parentName:"tr",align:null}),(0,p.kt)("td",{parentName:"tr",align:null},"boolean"),(0,p.kt)("td",{parentName:"tr",align:null})))),(0,p.kt)("h2",{id:"methods"},"Methods"),(0,p.kt)("table",null,(0,p.kt)("thead",{parentName:"table"},(0,p.kt)("tr",{parentName:"thead"},(0,p.kt)("th",{parentName:"tr",align:null},"Method"),(0,p.kt)("th",{parentName:"tr",align:null},"Modifiers"),(0,p.kt)("th",{parentName:"tr",align:null},"Description"))),(0,p.kt)("tbody",{parentName:"table"},(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},(0,p.kt)("a",{parentName:"td",href:"/puppeteer/docs/10.0.0/puppeteer.tracing.start"},"start(options)")),(0,p.kt)("td",{parentName:"tr",align:null}),(0,p.kt)("td",{parentName:"tr",align:null},"Starts a trace for the current page.")),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},(0,p.kt)("a",{parentName:"td",href:"/puppeteer/docs/10.0.0/puppeteer.tracing.stop"},"stop()")),(0,p.kt)("td",{parentName:"tr",align:null}),(0,p.kt)("td",{parentName:"tr",align:null},"Stops a trace started with the ",(0,p.kt)("code",null,"start")," method.")))))}d.isMDXComponent=!0}}]);