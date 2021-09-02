"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[13177],{3905:function(e,t,r){r.d(t,{Zo:function(){return m},kt:function(){return f}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},p=Object.keys(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},m=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,p=e.originalType,u=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),s=c(r),f=a,d=s["".concat(u,".").concat(f)]||s[f]||l[f]||p;return r?n.createElement(d,o(o({ref:t},m),{},{components:r})):n.createElement(d,o({ref:t},m))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var p=r.length,o=new Array(p);o[0]=s;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var c=2;c<p;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},47564:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return m},default:function(){return s}});var n=r(87462),a=r(63366),p=(r(67294),r(3905)),o=["components"],i={},u=void 0,c={unversionedId:"puppeteer.frame.name",id:"version-10.0.0/puppeteer.frame.name",isDocsHomePage:!1,title:"puppeteer.frame.name",description:"Home &gt; puppeteer &gt; Frame &gt; name",source:"@site/versioned_docs/version-10.0.0/puppeteer.frame.name.md",sourceDirName:".",slug:"/puppeteer.frame.name",permalink:"/puppeteer/docs/10.0.0/puppeteer.frame.name",editUrl:"https://github.com/facebook/puppeteer/edit/main/website/versioned_docs/version-10.0.0/puppeteer.frame.name.md",version:"10.0.0",frontMatter:{},sidebar:"version-10.0.0/docs",previous:{title:"puppeteer.frame.isdetached",permalink:"/puppeteer/docs/10.0.0/puppeteer.frame.isdetached"},next:{title:"puppeteer.frame.parentframe",permalink:"/puppeteer/docs/10.0.0/puppeteer.frame.parentframe"}},m=[{value:"Frame.name() method",id:"framename-method",children:[]},{value:"Remarks",id:"remarks",children:[]}],l={toc:m};function s(e){var t=e.components,r=(0,a.Z)(e,o);return(0,p.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"/puppeteer/docs/10.0.0/index"},"Home")," ",">"," ",(0,p.kt)("a",{parentName:"p",href:"/puppeteer/docs/10.0.0/puppeteer"},"puppeteer")," ",">"," ",(0,p.kt)("a",{parentName:"p",href:"/puppeteer/docs/10.0.0/puppeteer.frame"},"Frame")," ",">"," ",(0,p.kt)("a",{parentName:"p",href:"/puppeteer/docs/10.0.0/puppeteer.frame.name"},"name")),(0,p.kt)("h2",{id:"framename-method"},"Frame.name() method"),(0,p.kt)("b",null,"Signature:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-typescript"},"name(): string;\n")),(0,p.kt)("b",null,"Returns:"),(0,p.kt)("p",null,"string"),(0,p.kt)("p",null,"the frame's ",(0,p.kt)("inlineCode",{parentName:"p"},"name")," attribute as specified in the tag."),(0,p.kt)("h2",{id:"remarks"},"Remarks"),(0,p.kt)("p",null,"If the name is empty, it returns the ",(0,p.kt)("inlineCode",{parentName:"p"},"id")," attribute instead."),(0,p.kt)("p",null,"Note: This value is calculated once when the frame is created, and will not update if the attribute is changed later."))}s.isMDXComponent=!0}}]);