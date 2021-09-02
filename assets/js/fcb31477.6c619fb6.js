"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[86753],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return d}});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},p=Object.keys(e);for(a=0;a<p.length;a++)r=p[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(a=0;a<p.length;a++)r=p[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),i=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):u(u({},t),e)),r},c=function(e){var t=i(e.components);return a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,p=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),s=i(r),d=n,f=s["".concat(l,".").concat(d)]||s[d]||m[d]||p;return r?a.createElement(f,u(u({ref:t},c),{},{components:r})):a.createElement(f,u({ref:t},c))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var p=r.length,u=new Array(p);u[0]=s;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:n,u[1]=o;for(var i=2;i<p;i++)u[i]=r[i];return a.createElement.apply(null,u)}return a.createElement.apply(null,r)}s.displayName="MDXCreateElement"},45618:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return i},toc:function(){return c},default:function(){return s}});var a=r(87462),n=r(63366),p=(r(67294),r(3905)),u=["components"],o={},l=void 0,i={unversionedId:"puppeteer.frame.evaluate",id:"version-9.1.1/puppeteer.frame.evaluate",isDocsHomePage:!1,title:"puppeteer.frame.evaluate",description:"Home &gt; puppeteer &gt; Frame &gt; evaluate",source:"@site/versioned_docs/version-9.1.1/puppeteer.frame.evaluate.md",sourceDirName:".",slug:"/puppeteer.frame.evaluate",permalink:"/puppeteer/docs/9.1.1/puppeteer.frame.evaluate",editUrl:"https://github.com/facebook/puppeteer/edit/main/website/versioned_docs/version-9.1.1/puppeteer.frame.evaluate.md",version:"9.1.1",frontMatter:{},sidebar:"version-9.1.1/docs",previous:{title:"puppeteer.frame.content",permalink:"/puppeteer/docs/9.1.1/puppeteer.frame.content"},next:{title:"puppeteer.frame.evaluatehandle",permalink:"/puppeteer/docs/9.1.1/puppeteer.frame.evaluatehandle"}},c=[{value:"Frame.evaluate() method",id:"frameevaluate-method",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Remarks",id:"remarks",children:[]}],m={toc:c};function s(e){var t=e.components,r=(0,n.Z)(e,u);return(0,p.kt)("wrapper",(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"/puppeteer/docs/9.1.1/index"},"Home")," ",">"," ",(0,p.kt)("a",{parentName:"p",href:"/puppeteer/docs/9.1.1/puppeteer"},"puppeteer")," ",">"," ",(0,p.kt)("a",{parentName:"p",href:"/puppeteer/docs/9.1.1/puppeteer.frame"},"Frame")," ",">"," ",(0,p.kt)("a",{parentName:"p",href:"/puppeteer/docs/9.1.1/puppeteer.frame.evaluate"},"evaluate")),(0,p.kt)("h2",{id:"frameevaluate-method"},"Frame.evaluate() method"),(0,p.kt)("b",null,"Signature:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-typescript"},"evaluate<T extends EvaluateFn>(pageFunction: T, ...args: SerializableOrJSHandle[]): Promise<UnwrapPromiseLike<EvaluateFnReturnType<T>>>;\n")),(0,p.kt)("h2",{id:"parameters"},"Parameters"),(0,p.kt)("table",null,(0,p.kt)("thead",{parentName:"table"},(0,p.kt)("tr",{parentName:"thead"},(0,p.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,p.kt)("th",{parentName:"tr",align:null},"Type"),(0,p.kt)("th",{parentName:"tr",align:null},"Description"))),(0,p.kt)("tbody",{parentName:"table"},(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},"pageFunction"),(0,p.kt)("td",{parentName:"tr",align:null},"T"),(0,p.kt)("td",{parentName:"tr",align:null},"a function that is run within the frame")),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},"args"),(0,p.kt)("td",{parentName:"tr",align:null},(0,p.kt)("a",{parentName:"td",href:"/puppeteer/docs/9.1.1/puppeteer.serializableorjshandle"},"SerializableOrJSHandle"),"[","]"),(0,p.kt)("td",{parentName:"tr",align:null},"arguments to be passed to the pageFunction")))),(0,p.kt)("b",null,"Returns:"),(0,p.kt)("p",null,"Promise","<",(0,p.kt)("a",{parentName:"p",href:"/puppeteer/docs/9.1.1/puppeteer.unwrappromiselike"},"UnwrapPromiseLike"),"<",(0,p.kt)("a",{parentName:"p",href:"/puppeteer/docs/9.1.1/puppeteer.evaluatefnreturntype"},"EvaluateFnReturnType"),"<","T",">",">",">"),(0,p.kt)("h2",{id:"remarks"},"Remarks"),(0,p.kt)("p",null,"This method behaves identically to ",(0,p.kt)("a",{parentName:"p",href:"/puppeteer/docs/9.1.1/puppeteer.page.evaluate"},"Page.evaluate()")," except it's run within the context of the ",(0,p.kt)("inlineCode",{parentName:"p"},"frame"),", rather than the entire page."))}s.isMDXComponent=!0}}]);