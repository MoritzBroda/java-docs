"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([["567"],{8188:function(e,t,r){r.r(t),r.d(t,{default:()=>p,frontMatter:()=>i,metadata:()=>n,assets:()=>l,toc:()=>u,contentTitle:()=>c});var n=JSON.parse('{"id":"exercises/comparators/comparators","title":"Komparatoren","description":"","source":"@site/docs/exercises/comparators/comparators.mdx","sourceDirName":"exercises/comparators","slug":"/exercises/comparators/","permalink":"/java-docs/pr-preview/pr-270/exercises/comparators/","draft":false,"unlisted":false,"editUrl":"https://github.com/jappuccini/java-docs/tree/main/docs/exercises/comparators/comparators.mdx","tags":[{"inline":true,"label":"comparators","permalink":"/java-docs/pr-preview/pr-270/tags/comparators"}],"version":"current","sidebarPosition":150,"frontMatter":{"title":"Komparatoren","description":"","sidebar_position":150,"tags":["comparators"]},"sidebar":"exercisesSidebar","previous":{"title":"Interfaces01","permalink":"/java-docs/pr-preview/pr-270/exercises/interfaces/interfaces01"},"next":{"title":"Comparators01","permalink":"/java-docs/pr-preview/pr-270/exercises/comparators/comparators01"}}'),a=r("85893"),s=r("50065"),o=r("68399");let i={title:"Komparatoren",description:"",sidebar_position:150,tags:["comparators"]},c=void 0,l={},u=[{value:"\xdcbungsaufgaben",id:"\xfcbungsaufgaben",level:2},{value:"\xdcbungsaufgaben von tutego.de",id:"\xfcbungsaufgaben-von-tutegode",level:2}];function d(e){let t={a:"a",h2:"h2",li:"li",ul:"ul",...(0,s.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h2,{id:"\xfcbungsaufgaben",children:"\xdcbungsaufgaben"}),"\n","\n",(0,a.jsx)(o.Z,{}),"\n",(0,a.jsx)(t.h2,{id:"\xfcbungsaufgaben-von-tutegode",children:"\xdcbungsaufgaben von tutego.de"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["\xdcbungsaufgabe\n",(0,a.jsx)(t.a,{href:"https://tutego.de/javabuch/aufgaben/interface_enum_sealed_classes_record.html#_verbrauch_von_elektroger%C3%A4ten_vergleichen",children:"I-8-1.1.1"})]}),"\n",(0,a.jsxs)(t.li,{children:["\xdcbungsaufgabe\n",(0,a.jsx)(t.a,{href:"https://tutego.de/javabuch/aufgaben/interface_enum_sealed_classes_record.html#_elektroger%C3%A4te_mit_dem_h%C3%B6chsten_verbrauch_finden",children:"I-8-1.1.2"})]}),"\n",(0,a.jsxs)(t.li,{children:["\xdcbungsaufgabe\n",(0,a.jsx)(t.a,{href:"https://tutego.de/javabuch/aufgaben/interface_enum_sealed_classes_record.html#_schnittstelle_comparator_zum_sortieren_einsetzen",children:"I-8-1.1.3"})]}),"\n"]})]})}function p(e={}){let{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},68399:function(e,t,r){r.d(t,{Z:()=>b});var n=r("85893");r("67294");var a=r("67026"),s=r("86563"),o=r("53367"),i=r("11107"),c=r("19999"),l=r("7670"),u=r("46055");let d={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};function p(e){let{href:t,children:r}=e;return(0,n.jsx)(o.Z,{href:t,className:(0,a.Z)("card padding--lg",d.cardContainer),children:r})}function m(e){let{href:t,icon:r,title:s,description:o}=e;return(0,n.jsxs)(p,{href:t,children:[(0,n.jsxs)(u.Z,{as:"h2",className:(0,a.Z)("text--truncate",d.cardTitle),title:s,children:[r," ",s]}),o&&(0,n.jsx)("p",{className:(0,a.Z)("text--truncate",d.cardDescription),title:o,children:o})]})}function f(e){let{item:t}=e,r=(0,s.LM)(t),a=function(){let{selectMessage:e}=(0,i.c)();return t=>e(t,(0,l.I)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return r?(0,n.jsx)(m,{href:r,icon:"\uD83D\uDDC3\uFE0F",title:t.label,description:t.description??a(t.items.length)}):null}function h(e){let{item:t}=e,r=(0,c.Z)(t.href)?"\uD83D\uDCC4\uFE0F":"\uD83D\uDD17",a=(0,s.xz)(t.docId??void 0);return(0,n.jsx)(m,{href:t.href,icon:r,title:t.label,description:t.description??a?.description})}function g(e){let{item:t}=e;switch(t.type){case"link":return(0,n.jsx)(h,{item:t});case"category":return(0,n.jsx)(f,{item:t});default:throw Error(`unknown item type ${JSON.stringify(t)}`)}}function x(e){let{className:t}=e,r=(0,s.jA)();return(0,n.jsx)(b,{items:r.items,className:t})}function b(e){let{items:t,className:r}=e;if(!t)return(0,n.jsx)(x,{...e});let o=(0,s.MN)(t);return(0,n.jsx)("section",{className:(0,a.Z)("row",r),children:o.map((e,t)=>(0,n.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,n.jsx)(g,{item:e})},t))})}},11107:function(e,t,r){r.d(t,{c:function(){return c}});var n=r(67294),a=r(87262);let s=["zero","one","two","few","many","other"];function o(e){return s.filter(t=>e.includes(t))}let i={locale:"en",pluralForms:o(["one","other"]),select:e=>1===e?"one":"other"};function c(){let e=function(){let{i18n:{currentLocale:e}}=(0,a.Z)();return(0,n.useMemo)(()=>{try{return function(e){let t=new Intl.PluralRules(e);return{locale:e,pluralForms:o(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".
Docusaurus will fallback to the default (English) implementation.
Error: ${t.message}
`),i}},[e])}();return{selectMessage:(t,r)=>(function(e,t,r){let n=e.split("|");if(1===n.length)return n[0];n.length>r.pluralForms.length&&console.error(`For locale=${r.locale}, a maximum of ${r.pluralForms.length} plural forms are expected (${r.pluralForms.join(",")}), but the message contains ${n.length}: ${e}`);let a=r.select(t);return n[Math.min(r.pluralForms.indexOf(a),n.length-1)]})(r,t,e)}}},50065:function(e,t,r){r.d(t,{Z:function(){return i},a:function(){return o}});var n=r(67294);let a={},s=n.createContext(a);function o(e){let t=n.useContext(s);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);