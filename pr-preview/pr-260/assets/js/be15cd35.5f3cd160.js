"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([["9448"],{62026:function(e,t,r){r.r(t),r.d(t,{default:()=>p,frontMatter:()=>a,metadata:()=>n,assets:()=>c,toc:()=>u,contentTitle:()=>l});var n=JSON.parse('{"id":"exercises/git/git","title":"Git","description":"","source":"@site/docs/exercises/git/git.mdx","sourceDirName":"exercises/git","slug":"/exercises/git/","permalink":"/java-docs/pr-preview/pr-260/exercises/git/","draft":false,"unlisted":false,"editUrl":"https://github.com/jappuccini/java-docs/tree/main/docs/exercises/git/git.mdx","tags":[{"inline":true,"label":"git","permalink":"/java-docs/pr-preview/pr-260/tags/git"}],"version":"current","sidebarPosition":15,"frontMatter":{"title":"Git","description":"","sidebar_position":15,"tags":["git"]},"sidebar":"exercisesSidebar","previous":{"title":"Programmieren","permalink":"/java-docs/pr-preview/pr-260/exercises/coding/"},"next":{"title":"Git01","permalink":"/java-docs/pr-preview/pr-260/exercises/git/git01"}}'),i=r("85893"),s=r("50065"),o=r("68399");let a={title:"Git",description:"",sidebar_position:15,tags:["git"]},l=void 0,c={},u=[{value:"\xdcbungsaufgaben",id:"\xfcbungsaufgaben",level:2}];function d(e){let t={h2:"h2",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{id:"\xfcbungsaufgaben",children:"\xdcbungsaufgaben"}),"\n","\n",(0,i.jsx)(o.Z,{})]})}function p(e={}){let{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},68399:function(e,t,r){r.d(t,{Z:()=>j});var n=r("85893");r("67294");var i=r("67026"),s=r("86563"),o=r("53367"),a=r("11107"),l=r("19999"),c=r("7670"),u=r("46055");let d={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};function p(e){let{href:t,children:r}=e;return(0,n.jsx)(o.Z,{href:t,className:(0,i.Z)("card padding--lg",d.cardContainer),children:r})}function f(e){let{href:t,icon:r,title:s,description:o}=e;return(0,n.jsxs)(p,{href:t,children:[(0,n.jsxs)(u.Z,{as:"h2",className:(0,i.Z)("text--truncate",d.cardTitle),title:s,children:[r," ",s]}),o&&(0,n.jsx)("p",{className:(0,i.Z)("text--truncate",d.cardDescription),title:o,children:o})]})}function m(e){let{item:t}=e,r=(0,s.LM)(t),i=function(){let{selectMessage:e}=(0,a.c)();return t=>e(t,(0,c.I)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return r?(0,n.jsx)(f,{href:r,icon:"\uD83D\uDDC3\uFE0F",title:t.label,description:t.description??i(t.items.length)}):null}function g(e){let{item:t}=e,r=(0,l.Z)(t.href)?"\uD83D\uDCC4\uFE0F":"\uD83D\uDD17",i=(0,s.xz)(t.docId??void 0);return(0,n.jsx)(f,{href:t.href,icon:r,title:t.label,description:t.description??i?.description})}function h(e){let{item:t}=e;switch(t.type){case"link":return(0,n.jsx)(g,{item:t});case"category":return(0,n.jsx)(m,{item:t});default:throw Error(`unknown item type ${JSON.stringify(t)}`)}}function x(e){let{className:t}=e,r=(0,s.jA)();return(0,n.jsx)(j,{items:r.items,className:t})}function j(e){let{items:t,className:r}=e;if(!t)return(0,n.jsx)(x,{...e});let o=(0,s.MN)(t);return(0,n.jsx)("section",{className:(0,i.Z)("row",r),children:o.map((e,t)=>(0,n.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,n.jsx)(h,{item:e})},t))})}},11107:function(e,t,r){r.d(t,{c:function(){return l}});var n=r(67294),i=r(87262);let s=["zero","one","two","few","many","other"];function o(e){return s.filter(t=>e.includes(t))}let a={locale:"en",pluralForms:o(["one","other"]),select:e=>1===e?"one":"other"};function l(){let e=function(){let{i18n:{currentLocale:e}}=(0,i.Z)();return(0,n.useMemo)(()=>{try{return function(e){let t=new Intl.PluralRules(e);return{locale:e,pluralForms:o(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".
Docusaurus will fallback to the default (English) implementation.
Error: ${t.message}
`),a}},[e])}();return{selectMessage:(t,r)=>(function(e,t,r){let n=e.split("|");if(1===n.length)return n[0];n.length>r.pluralForms.length&&console.error(`For locale=${r.locale}, a maximum of ${r.pluralForms.length} plural forms are expected (${r.pluralForms.join(",")}), but the message contains ${n.length}: ${e}`);let i=r.select(t);return n[Math.min(r.pluralForms.indexOf(i),n.length-1)]})(r,t,e)}}},50065:function(e,t,r){r.d(t,{Z:function(){return a},a:function(){return o}});var n=r(67294);let i={},s=n.createContext(i);function o(e){let t=n.useContext(s);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);