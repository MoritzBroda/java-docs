"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([["3737"],{61784:function(e,n,t){t.r(n),t.d(n,{default:()=>d,frontMatter:()=>l,metadata:()=>a,assets:()=>u,toc:()=>o,contentTitle:()=>c});var a=JSON.parse('{"id":"exercises/loops/loops","title":"Schleifen","description":"","source":"@site/docs/exercises/loops/loops.mdx","sourceDirName":"exercises/loops","slug":"/exercises/loops/","permalink":"/java-docs/pr-preview/pr-258/exercises/loops/","draft":false,"unlisted":false,"editUrl":"https://github.com/jappuccini/java-docs/tree/main/docs/exercises/loops/loops.mdx","tags":[{"inline":true,"label":"control-structures","permalink":"/java-docs/pr-preview/pr-258/tags/control-structures"},{"inline":true,"label":"loops","permalink":"/java-docs/pr-preview/pr-258/tags/loops"}],"version":"current","sidebarPosition":65,"frontMatter":{"title":"Schleifen","description":"","sidebar_position":65,"tags":["control-structures","loops"]},"sidebar":"exercisesSidebar","previous":{"title":"Cases06","permalink":"/java-docs/pr-preview/pr-258/exercises/cases/cases06"},"next":{"title":"Loops01","permalink":"/java-docs/pr-preview/pr-258/exercises/loops/loops01"}}'),r=t("85893"),s=t("50065"),i=t("68399");let l={title:"Schleifen",description:"",sidebar_position:65,tags:["control-structures","loops"]},c=void 0,u={},o=[{value:"\xdcbungsaufgaben",id:"\xfcbungsaufgaben",level:2},{value:"\xdcbungsaufgaben von tutego.de",id:"\xfcbungsaufgaben-von-tutegode",level:2},{value:"\xdcbungsaufgaben der Uni Koblenz-Landau",id:"\xfcbungsaufgaben-der-uni-koblenz-landau",level:2},{value:"\xdcbungsaufgaben der Technischen Hochschule Ulm",id:"\xfcbungsaufgaben-der-technischen-hochschule-ulm",level:2}];function h(e){let n={a:"a",h2:"h2",li:"li",ul:"ul",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"\xfcbungsaufgaben",children:"\xdcbungsaufgaben"}),"\n","\n",(0,r.jsx)(i.Z,{}),"\n",(0,r.jsx)(n.h2,{id:"\xfcbungsaufgaben-von-tutegode",children:"\xdcbungsaufgaben von tutego.de"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\xdcbungsaufgabe\n",(0,r.jsx)(n.a,{href:"https://tutego.de/javabuch/aufgaben/imperativ.html#_zahlen_von_der_kommandozeile_summieren",children:"I-2-1.5.3"})]}),"\n",(0,r.jsxs)(n.li,{children:["\xdcbungsaufgabe\n",(0,r.jsx)(n.a,{href:"https://tutego.de/javabuch/aufgaben/imperativ.html#_ein_mathematisches_ph%C3%A4nomen_durchlaufen",children:"I-2-1.5.4"})]}),"\n",(0,r.jsxs)(n.li,{children:["\xdcbungsaufgabe\n",(0,r.jsx)(n.a,{href:"https://tutego.de/javabuch/aufgaben/imperativ.html#_produkte_f%C3%BCr_fakult%C3%A4ten_berechnen",children:"I-2-1.5.5"})]}),"\n",(0,r.jsxs)(n.li,{children:["\xdcbungsaufgabe\n",(0,r.jsx)(n.a,{href:"https://tutego.de/javabuch/aufgaben/imperativ.html#_feststellen_ob_eine_zahl_durch_fakult%C3%A4t_gebildet_wurde",children:"I-2-1.5.6"})]}),"\n",(0,r.jsxs)(n.li,{children:["\xdcbungsaufgabe\n",(0,r.jsx)(n.a,{href:"https://tutego.de/javabuch/aufgaben/imperativ.html#_kleinste_und_gr%C3%B6%C3%9Fte_ziffer_einer_zahl_finden",children:"I-2-1.5.7"})]}),"\n",(0,r.jsxs)(n.li,{children:["\xdcbungsaufgabe\n",(0,r.jsx)(n.a,{href:"https://tutego.de/javabuch/aufgaben/imperativ.html#_ein_wimpel_im_wind_durch_geschachtelte_schleifen",children:"I-2-1.5.8"})]}),"\n",(0,r.jsxs)(n.li,{children:["\xdcbungsaufgabe\n",(0,r.jsx)(n.a,{href:"https://tutego.de/javabuch/aufgaben/imperativ.html#_einfaches_schachbrett_ausgeben",children:"I-2-1.5.9"})]}),"\n",(0,r.jsxs)(n.li,{children:["\xdcbungsaufgabe\n",(0,r.jsx)(n.a,{href:"https://tutego.de/javabuch/aufgaben/imperativ.html#_es_weihnachtet_sehr_b%C3%A4ume_mit_schmuck_darstellen",children:"I-2-1.5.10"})]}),"\n",(0,r.jsxs)(n.li,{children:["\xdcbungsaufgabe\n",(0,r.jsx)(n.a,{href:"https://tutego.de/javabuch/aufgaben/imperativ.html#_fischige_stickmotive_zeichnen",children:"I-2-1.5.11"})]}),"\n",(0,r.jsxs)(n.li,{children:["\xdcbungsaufgabe\n",(0,r.jsx)(n.a,{href:"https://tutego.de/javabuch/aufgaben/imperativ.html#_ausprobieren_statt_denken",children:"I-2-1.5.12"})]}),"\n",(0,r.jsxs)(n.li,{children:["\xdcbungsaufgabe\n",(0,r.jsx)(n.a,{href:"https://tutego.de/javabuch/aufgaben/imperativ.html#_anzahl_ziffern_einer_zahl_ermitteln",children:"I-2-1.5.13"})]}),"\n",(0,r.jsxs)(n.li,{children:["\xdcbungsaufgabe\n",(0,r.jsx)(n.a,{href:"https://tutego.de/javabuch/aufgaben/imperativ.html#_herzen_zeichnen",children:"I-2-1.6.1"})]}),"\n",(0,r.jsxs)(n.li,{children:["\xdcbungsaufgabe\n",(0,r.jsx)(n.a,{href:"https://tutego.de/javabuch/aufgaben/imperativ.html#_%C3%BCberladene_linien_methoden_implementieren",children:"I-2-1.6.2"})]}),"\n",(0,r.jsxs)(n.li,{children:["\xdcbungsaufgabe\n",(0,r.jsx)(n.a,{href:"https://tutego.de/javabuch/aufgaben/imperativ.html#_alles_im_lot",children:"I-2-1.6.3"})]}),"\n",(0,r.jsxs)(n.li,{children:["\xdcbungsaufgabe\n",(0,r.jsx)(n.a,{href:"https://tutego.de/javabuch/aufgaben/imperativ.html#_collatz_folge_berechnen",children:"I-2-1.6.5"}),"\n(ohne Rekursion)"]}),"\n",(0,r.jsxs)(n.li,{children:["\xdcbungsaufgabe\n",(0,r.jsx)(n.a,{href:"https://tutego.de/javabuch/aufgaben/imperativ.html#_multiplikationstabelle_erstellen",children:"I-2-1.6.6"})]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\xfcbungsaufgaben-der-uni-koblenz-landau",children:"\xdcbungsaufgaben der Uni Koblenz-Landau"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\xdcbungsaufgabe ",(0,r.jsx)(n.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:t(42255).Z+"",children:"C1"})]}),"\n",(0,r.jsxs)(n.li,{children:["\xdcbungsaufgabe ",(0,r.jsx)(n.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:t(42255).Z+"",children:"C2"})]}),"\n",(0,r.jsxs)(n.li,{children:["\xdcbungsaufgabe ",(0,r.jsx)(n.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:t(42255).Z+"",children:"C3"})]}),"\n",(0,r.jsxs)(n.li,{children:["\xdcbungsaufgabe ",(0,r.jsx)(n.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:t(42255).Z+"",children:"C4"})]}),"\n",(0,r.jsxs)(n.li,{children:["\xdcbungsaufgabe ",(0,r.jsx)(n.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:t(42255).Z+"",children:"C5"})]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\xfcbungsaufgaben-der-technischen-hochschule-ulm",children:"\xdcbungsaufgaben der Technischen Hochschule Ulm"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\xdcbungsaufgabe ",(0,r.jsx)(n.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:t(61203).Z+"",children:"Schleifen01"})]}),"\n",(0,r.jsxs)(n.li,{children:["\xdcbungsaufgabe ",(0,r.jsx)(n.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:t(61203).Z+"",children:"Schleifen02"})]}),"\n",(0,r.jsxs)(n.li,{children:["\xdcbungsaufgabe ",(0,r.jsx)(n.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:t(61203).Z+"",children:"Schleifen03"})]}),"\n",(0,r.jsxs)(n.li,{children:["\xdcbungsaufgabe ",(0,r.jsx)(n.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:t(61203).Z+"",children:"Schleifen04"})]}),"\n",(0,r.jsxs)(n.li,{children:["\xdcbungsaufgabe ",(0,r.jsx)(n.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:t(61203).Z+"",children:"Schleifen05"})]}),"\n"]})]})}function d(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},42255:function(e,n,t){t.d(n,{Z:function(){return a}});let a=t.p+"assets/files/exercises-koblenz-5125438b36e15ed612db6d300cc5935b.pdf"},61203:function(e,n,t){t.d(n,{Z:function(){return a}});let a=t.p+"assets/files/exercises-ulm-cf2cc33b9ccdae3a1c0746c07fc951bd.pdf"},68399:function(e,n,t){t.d(n,{Z:()=>j});var a=t("85893");t("67294");var r=t("67026"),s=t("86563"),i=t("53367"),l=t("11107"),c=t("19999"),u=t("7670"),o=t("46055");let h={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};function d(e){let{href:n,children:t}=e;return(0,a.jsx)(i.Z,{href:n,className:(0,r.Z)("card padding--lg",h.cardContainer),children:t})}function f(e){let{href:n,icon:t,title:s,description:i}=e;return(0,a.jsxs)(d,{href:n,children:[(0,a.jsxs)(o.Z,{as:"h2",className:(0,r.Z)("text--truncate",h.cardTitle),title:s,children:[t," ",s]}),i&&(0,a.jsx)("p",{className:(0,r.Z)("text--truncate",h.cardDescription),title:i,children:i})]})}function g(e){let{item:n}=e,t=(0,s.LM)(n),r=function(){let{selectMessage:e}=(0,l.c)();return n=>e(n,(0,u.I)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:n}))}();return t?(0,a.jsx)(f,{href:t,icon:"\uD83D\uDDC3\uFE0F",title:n.label,description:n.description??r(n.items.length)}):null}function b(e){let{item:n}=e,t=(0,c.Z)(n.href)?"\uD83D\uDCC4\uFE0F":"\uD83D\uDD17",r=(0,s.xz)(n.docId??void 0);return(0,a.jsx)(f,{href:n.href,icon:t,title:n.label,description:n.description??r?.description})}function p(e){let{item:n}=e;switch(n.type){case"link":return(0,a.jsx)(b,{item:n});case"category":return(0,a.jsx)(g,{item:n});default:throw Error(`unknown item type ${JSON.stringify(n)}`)}}function m(e){let{className:n}=e,t=(0,s.jA)();return(0,a.jsx)(j,{items:t.items,className:n})}function j(e){let{items:n,className:t}=e;if(!n)return(0,a.jsx)(m,{...e});let i=(0,s.MN)(n);return(0,a.jsx)("section",{className:(0,r.Z)("row",t),children:i.map((e,n)=>(0,a.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,a.jsx)(p,{item:e})},n))})}},11107:function(e,n,t){t.d(n,{c:function(){return c}});var a=t(67294),r=t(87262);let s=["zero","one","two","few","many","other"];function i(e){return s.filter(n=>e.includes(n))}let l={locale:"en",pluralForms:i(["one","other"]),select:e=>1===e?"one":"other"};function c(){let e=function(){let{i18n:{currentLocale:e}}=(0,r.Z)();return(0,a.useMemo)(()=>{try{return function(e){let n=new Intl.PluralRules(e);return{locale:e,pluralForms:i(n.resolvedOptions().pluralCategories),select:e=>n.select(e)}}(e)}catch(n){return console.error(`Failed to use Intl.PluralRules for locale "${e}".
Docusaurus will fallback to the default (English) implementation.
Error: ${n.message}
`),l}},[e])}();return{selectMessage:(n,t)=>(function(e,n,t){let a=e.split("|");if(1===a.length)return a[0];a.length>t.pluralForms.length&&console.error(`For locale=${t.locale}, a maximum of ${t.pluralForms.length} plural forms are expected (${t.pluralForms.join(",")}), but the message contains ${a.length}: ${e}`);let r=t.select(n);return a[Math.min(t.pluralForms.indexOf(r),a.length-1)]})(t,n,e)}}},50065:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return i}});var a=t(67294);let r={},s=a.createContext(r);function i(e){let n=a.useContext(s);return a.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);