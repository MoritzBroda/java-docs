"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([["3032"],{72105:function(e,t,n){n.r(t),n.d(t,{default:()=>f,frontMatter:()=>o,metadata:()=>r,assets:()=>c,toc:()=>u,contentTitle:()=>s});var r=JSON.parse('{"id":"additional-material/steffen/java-2/index","title":"Java 2","description":"","source":"@site/docs/additional-material/steffen/java-2/index.mdx","sourceDirName":"additional-material/steffen/java-2","slug":"/additional-material/steffen/java-2/","permalink":"/java-docs/pr-preview/pr-247/additional-material/steffen/java-2/","draft":false,"unlisted":false,"editUrl":"https://github.com/jappuccini/java-docs/tree/main/docs/additional-material/steffen/java-2/index.mdx","tags":[],"version":"current","sidebarPosition":20,"frontMatter":{"title":"Java 2","description":"","sidebar_position":20,"tags":[]},"sidebar":"additionalMaterialSidebar","previous":{"title":"2023","permalink":"/java-docs/pr-preview/pr-247/additional-material/steffen/java-1/exam-preparation/2023"},"next":{"title":"Folien","permalink":"/java-docs/pr-preview/pr-247/additional-material/steffen/java-2/slides"}}'),a=n("85893"),i=n("50065"),l=n("68399");let o={title:"Java 2",description:"",sidebar_position:20,tags:[]},s=void 0,c={},u=[];function d(e){return(0,a.jsx)(l.Z,{})}function f(e={}){let{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},68399:function(e,t,n){n.d(t,{Z:()=>v});var r=n("85893");n("67294");var a=n("67026"),i=n("86563"),l=n("53367"),o=n("11107"),s=n("19999"),c=n("7670"),u=n("46055");let d={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};function f(e){let{href:t,children:n}=e;return(0,r.jsx)(l.Z,{href:t,className:(0,a.Z)("card padding--lg",d.cardContainer),children:n})}function p(e){let{href:t,icon:n,title:i,description:l}=e;return(0,r.jsxs)(f,{href:t,children:[(0,r.jsxs)(u.Z,{as:"h2",className:(0,a.Z)("text--truncate",d.cardTitle),title:i,children:[n," ",i]}),l&&(0,r.jsx)("p",{className:(0,a.Z)("text--truncate",d.cardDescription),title:l,children:l})]})}function m(e){let{item:t}=e,n=(0,i.LM)(t),a=function(){let{selectMessage:e}=(0,o.c)();return t=>e(t,(0,c.I)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return n?(0,r.jsx)(p,{href:n,icon:"\uD83D\uDDC3\uFE0F",title:t.label,description:t.description??a(t.items.length)}):null}function h(e){let{item:t}=e,n=(0,s.Z)(t.href)?"\uD83D\uDCC4\uFE0F":"\uD83D\uDD17",a=(0,i.xz)(t.docId??void 0);return(0,r.jsx)(p,{href:t.href,icon:n,title:t.label,description:t.description??a?.description})}function j(e){let{item:t}=e;switch(t.type){case"link":return(0,r.jsx)(h,{item:t});case"category":return(0,r.jsx)(m,{item:t});default:throw Error(`unknown item type ${JSON.stringify(t)}`)}}function x(e){let{className:t}=e,n=(0,i.jA)();return(0,r.jsx)(v,{items:n.items,className:t})}function v(e){let{items:t,className:n}=e;if(!t)return(0,r.jsx)(x,{...e});let l=(0,i.MN)(t);return(0,r.jsx)("section",{className:(0,a.Z)("row",n),children:l.map((e,t)=>(0,r.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,r.jsx)(j,{item:e})},t))})}},11107:function(e,t,n){n.d(t,{c:function(){return s}});var r=n(67294),a=n(87262);let i=["zero","one","two","few","many","other"];function l(e){return i.filter(t=>e.includes(t))}let o={locale:"en",pluralForms:l(["one","other"]),select:e=>1===e?"one":"other"};function s(){let e=function(){let{i18n:{currentLocale:e}}=(0,a.Z)();return(0,r.useMemo)(()=>{try{return function(e){let t=new Intl.PluralRules(e);return{locale:e,pluralForms:l(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".
Docusaurus will fallback to the default (English) implementation.
Error: ${t.message}
`),o}},[e])}();return{selectMessage:(t,n)=>(function(e,t,n){let r=e.split("|");if(1===r.length)return r[0];r.length>n.pluralForms.length&&console.error(`For locale=${n.locale}, a maximum of ${n.pluralForms.length} plural forms are expected (${n.pluralForms.join(",")}), but the message contains ${r.length}: ${e}`);let a=n.select(t);return r[Math.min(n.pluralForms.indexOf(a),r.length-1)]})(n,t,e)}}},50065:function(e,t,n){n.d(t,{Z:function(){return o},a:function(){return l}});var r=n(67294);let a={},i=r.createContext(a);function l(e){let t=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);