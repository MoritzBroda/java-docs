"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([["1519"],{91860:function(e,t,n){n.r(t),n.d(t,{metadata:()=>r,contentTitle:()=>l,default:()=>d,assets:()=>c,toc:()=>u,frontMatter:()=>a});var r=JSON.parse('{"id":"exercises/optionals/optionals","title":"Optionals","description":"","source":"@site/docs/exercises/optionals/optionals.mdx","sourceDirName":"exercises/optionals","slug":"/exercises/optionals/","permalink":"/java-docs/pr-preview/pr-245/exercises/optionals/","draft":false,"unlisted":false,"editUrl":"https://github.com/jappuccini/java-docs/tree/main/docs/exercises/optionals/optionals.mdx","tags":[{"inline":true,"label":"optionals","permalink":"/java-docs/pr-preview/pr-245/tags/optionals"}],"version":"current","sidebarPosition":195,"frontMatter":{"title":"Optionals","description":"","sidebar_position":195,"tags":["optionals"]},"sidebar":"exercisesSidebar","previous":{"title":"Maps02","permalink":"/java-docs/pr-preview/pr-245/exercises/maps/maps02"},"next":{"title":"Optionals01","permalink":"/java-docs/pr-preview/pr-245/exercises/optionals/optionals01"}}'),i=n("85893"),s=n("50065"),o=n("94301");let a={title:"Optionals",description:"",sidebar_position:195,tags:["optionals"]},l=void 0,c={},u=[{value:"\xdcbungsaufgaben",id:"\xfcbungsaufgaben",level:2}];function p(e){let t={h2:"h2",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{id:"\xfcbungsaufgaben",children:"\xdcbungsaufgaben"}),"\n","\n",(0,i.jsx)(o.Z,{})]})}function d(e={}){let{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}},94301:function(e,t,n){n.d(t,{Z:()=>j});var r=n("85893");n("67294");var i=n("67026"),s=n("69369"),o=n("83012"),a=n("43115"),l=n("63150"),c=n("96025"),u=n("34403");let p={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};function d(e){let{href:t,children:n}=e;return(0,r.jsx)(o.Z,{href:t,className:(0,i.Z)("card padding--lg",p.cardContainer),children:n})}function f(e){let{href:t,icon:n,title:s,description:o}=e;return(0,r.jsxs)(d,{href:t,children:[(0,r.jsxs)(u.Z,{as:"h2",className:(0,i.Z)("text--truncate",p.cardTitle),title:s,children:[n," ",s]}),o&&(0,r.jsx)("p",{className:(0,i.Z)("text--truncate",p.cardDescription),title:o,children:o})]})}function m(e){let{item:t}=e,n=(0,s.LM)(t),i=function(){let{selectMessage:e}=(0,a.c)();return t=>e(t,(0,c.I)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return n?(0,r.jsx)(f,{href:n,icon:"\uD83D\uDDC3\uFE0F",title:t.label,description:t.description??i(t.items.length)}):null}function h(e){let{item:t}=e,n=(0,l.Z)(t.href)?"\uD83D\uDCC4\uFE0F":"\uD83D\uDD17",i=(0,s.xz)(t.docId??void 0);return(0,r.jsx)(f,{href:t.href,icon:n,title:t.label,description:t.description??i?.description})}function x(e){let{item:t}=e;switch(t.type){case"link":return(0,r.jsx)(h,{item:t});case"category":return(0,r.jsx)(m,{item:t});default:throw Error(`unknown item type ${JSON.stringify(t)}`)}}function g(e){let{className:t}=e,n=(0,s.jA)();return(0,r.jsx)(j,{items:n.items,className:t})}function j(e){let{items:t,className:n}=e;if(!t)return(0,r.jsx)(g,{...e});let o=(0,s.MN)(t);return(0,r.jsx)("section",{className:(0,i.Z)("row",n),children:o.map((e,t)=>(0,r.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,r.jsx)(x,{item:e})},t))})}},43115:function(e,t,n){n.d(t,{c:function(){return l}});var r=n(67294),i=n(2933);let s=["zero","one","two","few","many","other"];function o(e){return s.filter(t=>e.includes(t))}let a={locale:"en",pluralForms:o(["one","other"]),select:e=>1===e?"one":"other"};function l(){let e=function(){let{i18n:{currentLocale:e}}=(0,i.Z)();return(0,r.useMemo)(()=>{try{return function(e){let t=new Intl.PluralRules(e);return{locale:e,pluralForms:o(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".
Docusaurus will fallback to the default (English) implementation.
Error: ${t.message}
`),a}},[e])}();return{selectMessage:(t,n)=>(function(e,t,n){let r=e.split("|");if(1===r.length)return r[0];r.length>n.pluralForms.length&&console.error(`For locale=${n.locale}, a maximum of ${n.pluralForms.length} plural forms are expected (${n.pluralForms.join(",")}), but the message contains ${r.length}: ${e}`);let i=n.select(t);return r[Math.min(n.pluralForms.indexOf(i),r.length-1)]})(n,t,e)}}},50065:function(e,t,n){n.d(t,{Z:function(){return a},a:function(){return o}});var r=n(67294);let i={},s=r.createContext(i);function o(e){let t=r.useContext(s);return r.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);