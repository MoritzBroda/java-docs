"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([["1314"],{17422:function(e,t,r){r.r(t),r.d(t,{default:()=>m,frontMatter:()=>l,metadata:()=>n,assets:()=>o,toc:()=>u,contentTitle:()=>c});var n=JSON.parse('{"id":"exercises/lambdas/lambdas","title":"Lambda-Ausdr\xfccke (Lambdas)","description":"","source":"@site/docs/exercises/lambdas/lambdas.mdx","sourceDirName":"exercises/lambdas","slug":"/exercises/lambdas/","permalink":"/java-docs/pr-preview/pr-263/exercises/lambdas/","draft":false,"unlisted":false,"editUrl":"https://github.com/jappuccini/java-docs/tree/main/docs/exercises/lambdas/lambdas.mdx","tags":[{"inline":true,"label":"inner-classes","permalink":"/java-docs/pr-preview/pr-263/tags/inner-classes"},{"inline":true,"label":"lambdas","permalink":"/java-docs/pr-preview/pr-263/tags/lambdas"}],"version":"current","sidebarPosition":175,"frontMatter":{"title":"Lambda-Ausdr\xfccke (Lambdas)","description":"","sidebar_position":175,"tags":["inner-classes","lambdas"]},"sidebar":"exercisesSidebar","previous":{"title":"InnerClasses04","permalink":"/java-docs/pr-preview/pr-263/exercises/inner-classes/inner-classes04"},"next":{"title":"Lambdas01","permalink":"/java-docs/pr-preview/pr-263/exercises/lambdas/lambdas01"}}'),s=r("85893"),a=r("50065"),i=r("68399");let l={title:"Lambda-Ausdr\xfccke (Lambdas)",description:"",sidebar_position:175,tags:["inner-classes","lambdas"]},c=void 0,o={},u=[{value:"\xdcbungsaufgaben",id:"\xfcbungsaufgaben",level:2}];function d(e){let t={h2:"h2",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h2,{id:"\xfcbungsaufgaben",children:"\xdcbungsaufgaben"}),"\n","\n",(0,s.jsx)(i.Z,{})]})}function m(e={}){let{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},68399:function(e,t,r){r.d(t,{Z:()=>g});var n=r("85893");r("67294");var s=r("67026"),a=r("86563"),i=r("53367"),l=r("11107"),c=r("19999"),o=r("7670"),u=r("46055");let d={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};function m(e){let{href:t,children:r}=e;return(0,n.jsx)(i.Z,{href:t,className:(0,s.Z)("card padding--lg",d.cardContainer),children:r})}function p(e){let{href:t,icon:r,title:a,description:i}=e;return(0,n.jsxs)(m,{href:t,children:[(0,n.jsxs)(u.Z,{as:"h2",className:(0,s.Z)("text--truncate",d.cardTitle),title:a,children:[r," ",a]}),i&&(0,n.jsx)("p",{className:(0,s.Z)("text--truncate",d.cardDescription),title:i,children:i})]})}function f(e){let{item:t}=e,r=(0,a.LM)(t),s=function(){let{selectMessage:e}=(0,l.c)();return t=>e(t,(0,o.I)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return r?(0,n.jsx)(p,{href:r,icon:"\uD83D\uDDC3\uFE0F",title:t.label,description:t.description??s(t.items.length)}):null}function b(e){let{item:t}=e,r=(0,c.Z)(t.href)?"\uD83D\uDCC4\uFE0F":"\uD83D\uDD17",s=(0,a.xz)(t.docId??void 0);return(0,n.jsx)(p,{href:t.href,icon:r,title:t.label,description:t.description??s?.description})}function h(e){let{item:t}=e;switch(t.type){case"link":return(0,n.jsx)(b,{item:t});case"category":return(0,n.jsx)(f,{item:t});default:throw Error(`unknown item type ${JSON.stringify(t)}`)}}function x(e){let{className:t}=e,r=(0,a.jA)();return(0,n.jsx)(g,{items:r.items,className:t})}function g(e){let{items:t,className:r}=e;if(!t)return(0,n.jsx)(x,{...e});let i=(0,a.MN)(t);return(0,n.jsx)("section",{className:(0,s.Z)("row",r),children:i.map((e,t)=>(0,n.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,n.jsx)(h,{item:e})},t))})}},11107:function(e,t,r){r.d(t,{c:function(){return c}});var n=r(67294),s=r(87262);let a=["zero","one","two","few","many","other"];function i(e){return a.filter(t=>e.includes(t))}let l={locale:"en",pluralForms:i(["one","other"]),select:e=>1===e?"one":"other"};function c(){let e=function(){let{i18n:{currentLocale:e}}=(0,s.Z)();return(0,n.useMemo)(()=>{try{return function(e){let t=new Intl.PluralRules(e);return{locale:e,pluralForms:i(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".
Docusaurus will fallback to the default (English) implementation.
Error: ${t.message}
`),l}},[e])}();return{selectMessage:(t,r)=>(function(e,t,r){let n=e.split("|");if(1===n.length)return n[0];n.length>r.pluralForms.length&&console.error(`For locale=${r.locale}, a maximum of ${r.pluralForms.length} plural forms are expected (${r.pluralForms.join(",")}), but the message contains ${n.length}: ${e}`);let s=r.select(t);return n[Math.min(r.pluralForms.indexOf(s),n.length-1)]})(r,t,e)}}},50065:function(e,t,r){r.d(t,{Z:function(){return l},a:function(){return i}});var n=r(67294);let s={},a=n.createContext(s);function i(e){let t=n.useContext(a);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);