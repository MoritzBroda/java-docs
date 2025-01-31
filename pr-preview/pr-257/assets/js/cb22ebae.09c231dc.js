"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([["583"],{30608:function(e,t,r){r.r(t),r.d(t,{default:()=>d,frontMatter:()=>l,metadata:()=>a,assets:()=>c,toc:()=>u,contentTitle:()=>o});var a=JSON.parse('{"id":"exercises/java-api/java-api","title":"Die Java API","description":"","source":"@site/docs/exercises/java-api/java-api.mdx","sourceDirName":"exercises/java-api","slug":"/exercises/java-api/","permalink":"/java-docs/pr-preview/pr-257/exercises/java-api/","draft":false,"unlisted":false,"editUrl":"https://github.com/jappuccini/java-docs/tree/main/docs/exercises/java-api/java-api.mdx","tags":[{"inline":true,"label":"java-api","permalink":"/java-docs/pr-preview/pr-257/tags/java-api"},{"inline":true,"label":"dates-and-times","permalink":"/java-docs/pr-preview/pr-257/tags/dates-and-times"},{"inline":true,"label":"files","permalink":"/java-docs/pr-preview/pr-257/tags/files"},{"inline":true,"label":"wrappers","permalink":"/java-docs/pr-preview/pr-257/tags/wrappers"}],"version":"current","sidebarPosition":90,"frontMatter":{"title":"Die Java API","description":"","sidebar_position":90,"tags":["java-api","dates-and-times","files","wrappers"]},"sidebar":"exercisesSidebar","previous":{"title":"OO07","permalink":"/java-docs/pr-preview/pr-257/exercises/oo/oo07"},"next":{"title":"JavaAPI01","permalink":"/java-docs/pr-preview/pr-257/exercises/java-api/java-api01"}}'),n=r("85893"),i=r("50065"),s=r("68399");let l={title:"Die Java API",description:"",sidebar_position:90,tags:["java-api","dates-and-times","files","wrappers"]},o=void 0,c={},u=[{value:"\xdcbungsaufgaben",id:"\xfcbungsaufgaben",level:2}];function p(e){let t={h2:"h2",...(0,i.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"\xfcbungsaufgaben",children:"\xdcbungsaufgaben"}),"\n","\n",(0,n.jsx)(s.Z,{})]})}function d(e={}){let{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},68399:function(e,t,r){r.d(t,{Z:()=>g});var a=r("85893");r("67294");var n=r("67026"),i=r("86563"),s=r("53367"),l=r("11107"),o=r("19999"),c=r("7670"),u=r("46055");let p={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};function d(e){let{href:t,children:r}=e;return(0,a.jsx)(s.Z,{href:t,className:(0,n.Z)("card padding--lg",p.cardContainer),children:r})}function f(e){let{href:t,icon:r,title:i,description:s}=e;return(0,a.jsxs)(d,{href:t,children:[(0,a.jsxs)(u.Z,{as:"h2",className:(0,n.Z)("text--truncate",p.cardTitle),title:i,children:[r," ",i]}),s&&(0,a.jsx)("p",{className:(0,n.Z)("text--truncate",p.cardDescription),title:s,children:s})]})}function m(e){let{item:t}=e,r=(0,i.LM)(t),n=function(){let{selectMessage:e}=(0,l.c)();return t=>e(t,(0,c.I)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return r?(0,a.jsx)(f,{href:r,icon:"\uD83D\uDDC3\uFE0F",title:t.label,description:t.description??n(t.items.length)}):null}function v(e){let{item:t}=e,r=(0,o.Z)(t.href)?"\uD83D\uDCC4\uFE0F":"\uD83D\uDD17",n=(0,i.xz)(t.docId??void 0);return(0,a.jsx)(f,{href:t.href,icon:r,title:t.label,description:t.description??n?.description})}function h(e){let{item:t}=e;switch(t.type){case"link":return(0,a.jsx)(v,{item:t});case"category":return(0,a.jsx)(m,{item:t});default:throw Error(`unknown item type ${JSON.stringify(t)}`)}}function j(e){let{className:t}=e,r=(0,i.jA)();return(0,a.jsx)(g,{items:r.items,className:t})}function g(e){let{items:t,className:r}=e;if(!t)return(0,a.jsx)(j,{...e});let s=(0,i.MN)(t);return(0,a.jsx)("section",{className:(0,n.Z)("row",r),children:s.map((e,t)=>(0,a.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,a.jsx)(h,{item:e})},t))})}},11107:function(e,t,r){r.d(t,{c:function(){return o}});var a=r(67294),n=r(87262);let i=["zero","one","two","few","many","other"];function s(e){return i.filter(t=>e.includes(t))}let l={locale:"en",pluralForms:s(["one","other"]),select:e=>1===e?"one":"other"};function o(){let e=function(){let{i18n:{currentLocale:e}}=(0,n.Z)();return(0,a.useMemo)(()=>{try{return function(e){let t=new Intl.PluralRules(e);return{locale:e,pluralForms:s(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".
Docusaurus will fallback to the default (English) implementation.
Error: ${t.message}
`),l}},[e])}();return{selectMessage:(t,r)=>(function(e,t,r){let a=e.split("|");if(1===a.length)return a[0];a.length>r.pluralForms.length&&console.error(`For locale=${r.locale}, a maximum of ${r.pluralForms.length} plural forms are expected (${r.pluralForms.join(",")}), but the message contains ${a.length}: ${e}`);let n=r.select(t);return a[Math.min(r.pluralForms.indexOf(n),a.length-1)]})(r,t,e)}}},50065:function(e,t,r){r.d(t,{Z:function(){return l},a:function(){return s}});var a=r(67294);let n={},i=a.createContext(n);function s(e){let t=a.useContext(i);return a.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),a.createElement(i.Provider,{value:t},e.children)}}}]);