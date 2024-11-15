"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([["1183"],{5903:function(e,n,t){t.r(n),t.d(n,{metadata:()=>r,contentTitle:()=>h,default:()=>x,assets:()=>c,toc:()=>o,frontMatter:()=>a});var r=JSON.parse('{"id":"documentation/hashing","title":"Schl\xfcsseltransformationen (Hashing)","description":"","source":"@site/docs/documentation/hashing.mdx","sourceDirName":"documentation","slug":"/documentation/hashing","permalink":"/java-docs/production/documentation/hashing","draft":false,"unlisted":false,"editUrl":"https://github.com/jappuccini/java-docs/tree/main/docs/documentation/hashing.mdx","tags":[{"inline":true,"label":"hashing","permalink":"/java-docs/production/tags/hashing"}],"version":"current","sidebarPosition":225,"frontMatter":{"title":"Schl\xfcsseltransformationen (Hashing)","description":"","sidebar_position":225,"tags":["hashing"]},"sidebar":"documentationSidebar","previous":{"title":"Java Collections Framework","permalink":"/java-docs/production/documentation/java-collections-framework"},"next":{"title":"B\xe4ume","permalink":"/java-docs/production/documentation/trees"}}'),i=t("85893"),s=t("50065"),l=t("47902"),d=t("5525");let a={title:"Schl\xfcsseltransformationen (Hashing)",description:"",sidebar_position:225,tags:["hashing"]},h=void 0,c={},o=[{value:"Hashtabellen",id:"hashtabellen",level:2},{value:"Hashfunktionen",id:"hashfunktionen",level:2},{value:"Kollisionen",id:"kollisionen",level:2}];function u(e){let n={admonition:"admonition",code:"code",h2:"h2",mermaid:"mermaid",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"Unter Schl\xfcsseltransformationen (Hashing) versteht man die Transformation einer\ngro\xdfen Datenmenge in eine kleinere. Die gr\xf6\xdfere Datenmenge wird dabei als\nSchl\xfcssel, die kleinere als Hashcode bezeichnet. Die Transformation erfolgt \xfcber\neine sogenannte Hashfunktion (auch Streuwertfunktion). Wichtig dabei ist, dass\nder Hashcode nur vom Zustand des Schl\xfcssels abh\xe4ngen darf."}),"\n",(0,i.jsx)(n.mermaid,{value:"flowchart\n    string1(Brot) --Hashing---\x3e hash1(407)\n    string2(Butter) --Hashing---\x3e hash2(630)\n    string3(Milch) --Hashing---\x3e hash3(493)\n    string4(Eier) --Hashing---\x3e hash4(389)"}),"\n",(0,i.jsx)(n.h2,{id:"hashtabellen",children:"Hashtabellen"}),"\n",(0,i.jsx)(n.p,{children:"Hashtabellen sind spezielle Datenstrukturen, die f\xfcr den schnellen Zugriff\nkonzipiert wurden. Mit Hilfe einer Hashfunktion wird der Index berechnet, an der\nein Schl\xfcssel gespeichert wird. Bei Hashtabellen soll durch das Hashing eine\ngleichm\xe4\xdfige Streuung der Eintr\xe4ge in der Tabelle erreicht werden. Aus diesem\nGrund werden Hashtabellen auch als Streuwerttabellen bezeichnet."}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Index"}),(0,i.jsx)(n.th,{children:"Schl\xfcssel"}),(0,i.jsx)(n.th,{children:"Hashcode"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"0"}),(0,i.jsx)(n.td,{children:"Butter"}),(0,i.jsx)(n.td,{children:"630"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"1"}),(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"2"}),(0,i.jsx)(n.td,{children:"Brot"}),(0,i.jsx)(n.td,{children:"407"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"3"}),(0,i.jsx)(n.td,{children:"Milch"}),(0,i.jsx)(n.td,{children:"493"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"4"}),(0,i.jsx)(n.td,{children:"Eier"}),(0,i.jsx)(n.td,{children:"389"})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"hashfunktionen",children:"Hashfunktionen"}),"\n",(0,i.jsxs)(l.Z,{children:[(0,i.jsxs)(d.Z,{value:"a",label:"Divisionsrestmethode",default:!0,children:[(0,i.jsxs)(n.p,{children:["Die Divisionsrest-Methode stellt eine einfache und schnelle Hashfunktion dar.\nDie Berechnung des Index erfolgt dabei gem\xe4\xdf der Formel ",(0,i.jsx)(n.code,{children:"\u210E(\uD835\uDC58) = \uD835\uDC58 \uD835\uDC5A\uD835\uDC5C\uD835\uDC51 \uD835\uDC5A"}),"."]}),(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Schl\xfcssel"}),(0,i.jsx)(n.th,{children:"Hashcode"}),(0,i.jsx)(n.th,{children:"Index"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Brot"}),(0,i.jsx)(n.td,{children:"407"}),(0,i.jsx)(n.td,{children:"407 \uD835\uDC5A\uD835\uDC5C\uD835\uDC51 5 = 2"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Butter"}),(0,i.jsx)(n.td,{children:"630"}),(0,i.jsx)(n.td,{children:"630 \uD835\uDC5A\uD835\uDC5C\uD835\uDC51 5 = 0"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Milch"}),(0,i.jsx)(n.td,{children:"493"}),(0,i.jsx)(n.td,{children:"493 \uD835\uDC5A\uD835\uDC5C\uD835\uDC51 5 = 3"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Eier"}),(0,i.jsx)(n.td,{children:"389"}),(0,i.jsx)(n.td,{children:"389 \uD835\uDC5A\uD835\uDC5C\uD835\uDC51 5 = 4"})]})]})]}),(0,i.jsx)(n.admonition,{title:"Legende",type:"note",children:(0,i.jsx)(n.p,{children:"\u210E(\uD835\uDC58) = Index, \uD835\uDC58 = Hashcode, \uD835\uDC5A\uD835\uDC5C\uD835\uDC51 = Modulo-Operation, \uD835\uDC5A = Tabellengr\xf6\xdfe"})})]}),(0,i.jsxs)(d.Z,{value:"b",label:"Multiplikative Methode",children:[(0,i.jsxs)(n.p,{children:["Die Multiplikative Methode stellt eine Hashfunktion dar, die man als\nVerallgemeinerung der Divisionsrest-Methode sehen kann. Die Berechnung des Index\nerfolgt dabei gem\xe4\xdf der Formel ",(0,i.jsx)(n.code,{children:"\u210E(\uD835\uDC58) = \u230A\uD835\uDC5A \u2217 (\uD835\uDC58 \u2217 \uD835\uDC34 \uD835\uDC5A\uD835\uDC5C\uD835\uDC51 1)\u230B"}),"."]}),(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Schl\xfcssel"}),(0,i.jsx)(n.th,{children:"Hashcode"}),(0,i.jsx)(n.th,{children:"Index"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Brot"}),(0,i.jsx)(n.td,{children:"407"}),(0,i.jsx)(n.td,{children:"\u230A5 \u2217 (407 \u2217 0,62 \uD835\uDC5A\uD835\uDC5C\uD835\uDC51 1)\u230B = 1"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Butter"}),(0,i.jsx)(n.td,{children:"630"}),(0,i.jsx)(n.td,{children:"\u230A5 \u2217 (630 \u2217 0,62 \uD835\uDC5A\uD835\uDC5C\uD835\uDC51 1)\u230B = 3"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Milch"}),(0,i.jsx)(n.td,{children:"493"}),(0,i.jsx)(n.td,{children:"\u230A5 \u2217 (493 \u2217 0,62 \uD835\uDC5A\uD835\uDC5C\uD835\uDC51 1)\u230B = 3"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Eier"}),(0,i.jsx)(n.td,{children:"389"}),(0,i.jsx)(n.td,{children:"\u230A5 \u2217 (389 \u2217 0,62 \uD835\uDC5A\uD835\uDC5C\uD835\uDC51 1)\u230B = 0"})]})]})]}),(0,i.jsx)(n.admonition,{title:"Legende",type:"note",children:(0,i.jsx)(n.p,{children:"\u210E(\uD835\uDC58) = Index, \uD835\uDC5A = Tabellengr\xf6\xdfe, \uD835\uDC58 = Hashcode, \uD835\uDC34 = Konstante, \uD835\uDC5A\uD835\uDC5C\uD835\uDC51 =\nModulo-Operation, \u230A \u230B = untere Gau\xdfklammer"})}),(0,i.jsx)(n.admonition,{title:"Hinweis",type:"note",children:(0,i.jsx)(n.p,{children:"Als Wert f\xfcr die Konstante \uD835\uDC34 wird gerne der Goldene Schnitt (~0,62) verwendet."})})]})]}),"\n",(0,i.jsx)(n.h2,{id:"kollisionen",children:"Kollisionen"}),"\n",(0,i.jsx)(n.p,{children:"Werden zu unterschiedlichen Schl\xfcsseln dieselben Indizes ermittelt, entstehen\ndadurch sogenannte Kollisionen. Um Kollisionen bestm\xf6glichen zu vermeiden, muss\neine geeignete Tabellengr\xf6\xdfe sowie eine geeignete Hashfunktion gew\xe4hlt werden.\nZur Aufl\xf6sung von Kollisionen gibt es verschiedene M\xf6glichkeiten."}),"\n",(0,i.jsxs)(l.Z,{children:[(0,i.jsxs)(d.Z,{value:"a",label:"Geschlossenes Hashing mit offener Adressierung",default:!0,children:[(0,i.jsx)(n.p,{children:"Beim geschlossenen Hashing mit offener Adressierung wird bei einer Kollision\n\xfcber unterschiedliche Verfahren eine freie Stelle in der Hashtabelle gesucht:\nBeim linearen Sondieren wird mit festen Intervallschritten nach einer freien\nStelle gesucht, beim quadratischen Sondieren wird der Intervallschritt nach\njedem erfolglosen Versuch quadriert und beim doppelten Hashing wird der\nIntervallschritt mit Hilfe einer zus\xe4tzlichen Hashfunktion berechnet."}),(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Index"}),(0,i.jsx)(n.th,{children:"Schl\xfcssel"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"0"}),(0,i.jsx)(n.td,{children:"Eier"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"1"}),(0,i.jsx)(n.td,{children:"Brot"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"2"}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"3"}),(0,i.jsx)(n.td,{children:"Butter"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"4"}),(0,i.jsx)(n.td,{children:"Milch"})]})]})]})]}),(0,i.jsxs)(d.Z,{value:"b",label:"Offenes Hashing mit geschlossener Adressierung",children:[(0,i.jsx)(n.p,{children:"Beim offenen Hashing mit geschlossener Adressierung werden alle Schl\xfcssel mit\ndemselben Index in einem Beh\xe4lter (Bucket) gespeichert. Diese Beh\xe4lter werden\noft mit Hilfe linearer Listen realisiert. Bei der Suche nach einem Schl\xfcssel\nmuss also zun\xe4chst der richtige Beh\xe4lter ermittelt und anschlie\xdfend der Beh\xe4lter\ndurchsucht werden."}),(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Index"}),(0,i.jsx)(n.th,{children:"Schl\xfcssel"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"0"}),(0,i.jsx)(n.td,{children:"Eier"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"1"}),(0,i.jsx)(n.td,{children:"Brot"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"2"}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"3"}),(0,i.jsx)(n.td,{children:"Butter, Milch"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"4"}),(0,i.jsx)(n.td,{})]})]})]})]})]})]})}function x(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},5525:function(e,n,t){t.d(n,{Z:()=>l});var r=t("85893");t("67294");var i=t("67026");let s="tabItem_Ymn6";function l(e){let{children:n,hidden:t,className:l}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,i.Z)(s,l),hidden:t,children:n})}},47902:function(e,n,t){t.d(n,{Z:()=>v});var r=t("85893"),i=t("67294"),s=t("67026"),l=t("69599"),d=t("16550"),a=t("32000"),h=t("4520"),c=t("38341"),o=t("76009");function u(e){return i.Children.toArray(e).filter(e=>"\n"!==e).map(e=>{if(!e||i.isValidElement(e)&&function(e){let{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})?.filter(Boolean)??[]}function x(e){let{value:n,tabValues:t}=e;return t.some(e=>e.value===n)}var j=t("7227");let m="tabList__CuJ",f="tabItem_LNqP";function g(e){let{className:n,block:t,selectedValue:i,selectValue:d,tabValues:a}=e,h=[],{blockElementScrollPositionUntilNextRender:c}=(0,l.o5)(),o=e=>{let n=e.currentTarget,t=a[h.indexOf(n)].value;t!==i&&(c(n),d(t))},u=e=>{let n=null;switch(e.key){case"Enter":o(e);break;case"ArrowRight":{let t=h.indexOf(e.currentTarget)+1;n=h[t]??h[0];break}case"ArrowLeft":{let t=h.indexOf(e.currentTarget)-1;n=h[t]??h[h.length-1]}}n?.focus()};return(0,r.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":t},n),children:a.map(e=>{let{value:n,label:t,attributes:l}=e;return(0,r.jsx)("li",{role:"tab",tabIndex:i===n?0:-1,"aria-selected":i===n,ref:e=>h.push(e),onKeyDown:u,onClick:o,...l,className:(0,s.Z)("tabs__item",f,l?.className,{"tabs__item--active":i===n}),children:t??n},n)})})}function b(e){let{lazy:n,children:t,selectedValue:l}=e,d=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){let e=d.find(e=>e.props.value===l);return e?(0,i.cloneElement)(e,{className:(0,s.Z)("margin-top--md",e.props.className)}):null}return(0,r.jsx)("div",{className:"margin-top--md",children:d.map((e,n)=>(0,i.cloneElement)(e,{key:n,hidden:e.props.value!==l}))})}function p(e){let n=function(e){let{defaultValue:n,queryString:t=!1,groupId:r}=e,s=function(e){let{values:n,children:t}=e;return(0,i.useMemo)(()=>{let e=n??u(t).map(e=>{let{props:{value:n,label:t,attributes:r,default:i}}=e;return{value:n,label:t,attributes:r,default:i}});return!function(e){let n=(0,c.lx)(e,(e,n)=>e.value===n.value);if(n.length>0)throw Error(`Docusaurus error: Duplicate values "${n.map(e=>e.value).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e},[n,t])}(e),[l,j]=(0,i.useState)(()=>(function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!x({value:n,tabValues:t}))throw Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map(e=>e.value).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}let r=t.find(e=>e.default)??t[0];if(!r)throw Error("Unexpected error: 0 tabValues");return r.value})({defaultValue:n,tabValues:s})),[m,f]=function(e){let{queryString:n=!1,groupId:t}=e,r=(0,d.k6)(),s=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t}),l=(0,h._X)(s);return[l,(0,i.useCallback)(e=>{if(!s)return;let n=new URLSearchParams(r.location.search);n.set(s,e),r.replace({...r.location,search:n.toString()})},[s,r])]}({queryString:t,groupId:r}),[g,b]=function(e){var n;let{groupId:t}=e;let r=(n=t)?`docusaurus.tab.${n}`:null,[s,l]=(0,o.Nk)(r);return[s,(0,i.useCallback)(e=>{if(!!r)l.set(e)},[r,l])]}({groupId:r}),p=(()=>{let e=m??g;return x({value:e,tabValues:s})?e:null})();return(0,a.Z)(()=>{p&&j(p)},[p]),{selectedValue:l,selectValue:(0,i.useCallback)(e=>{if(!x({value:e,tabValues:s}))throw Error(`Can't select invalid tab value=${e}`);j(e),f(e),b(e)},[f,b,s]),tabValues:s}}(e);return(0,r.jsxs)("div",{className:(0,s.Z)("tabs-container",m),children:[(0,r.jsx)(g,{...n,...e}),(0,r.jsx)(b,{...n,...e})]})}function v(e){let n=(0,j.Z)();return(0,r.jsx)(p,{...e,children:u(e.children)},String(n))}},50065:function(e,n,t){t.d(n,{Z:function(){return d},a:function(){return l}});var r=t(67294);let i={},s=r.createContext(i);function l(e){let n=r.useContext(s);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);