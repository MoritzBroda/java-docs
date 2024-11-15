"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([["2629"],{60699:function(e,n,r){r.r(n),r.d(n,{metadata:()=>i,contentTitle:()=>o,default:()=>p,assets:()=>c,toc:()=>u,frontMatter:()=>a});var i=JSON.parse('{"id":"exercises/exceptions/exceptions02","title":"Exceptions02","description":"","source":"@site/docs/exercises/exceptions/exceptions02.mdx","sourceDirName":"exercises/exceptions","slug":"/exercises/exceptions/exceptions02","permalink":"/java-docs/pr-preview/pr-223/exercises/exceptions/exceptions02","draft":false,"unlisted":false,"editUrl":"https://github.com/jappuccini/java-docs/tree/main/docs/exercises/exceptions/exceptions02.mdx","tags":[],"version":"current","frontMatter":{"title":"Exceptions02","description":""},"sidebar":"exercisesSidebar","previous":{"title":"Exceptions01","permalink":"/java-docs/pr-preview/pr-223/exercises/exceptions/exceptions01"},"next":{"title":"Exceptions03","permalink":"/java-docs/pr-preview/pr-223/exercises/exceptions/exceptions03"}}'),s=r("85893"),t=r("50065"),l=r("39661");let a={title:"Exceptions02",description:""},o=void 0,c={},u=[{value:"Klassendiagramm",id:"klassendiagramm",level:2},{value:"Hinweis zur Klasse <em>BarrelOverflowException</em>",id:"hinweis-zur-klasse-barreloverflowexception",level:2},{value:"Hinweise zur Klasse <em>Barrel</em>",id:"hinweise-zur-klasse-barrel",level:2},{value:"Konsolenausgabe",id:"konsolenausgabe",level:2}];function d(e){let n={code:"code",em:"em",h2:"h2",li:"li",mermaid:"mermaid",p:"p",pre:"pre",ul:"ul",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Erstelle die Ausnahmenklasse ",(0,s.jsx)(n.code,{children:"BarrelOverflowException"})," sowie die Klasse\n",(0,s.jsx)(n.code,{children:"Barrel"})," anhand des abgebildeten Klassendiagramms"]}),"\n",(0,s.jsx)(n.li,{children:"Erstelle eine ausf\xfchrbare Klasse, welche es dem Anwender erm\xf6glicht, ein Fass\nzu erzeugen und zu bef\xfcllen"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"klassendiagramm",children:"Klassendiagramm"}),"\n",(0,s.jsx)(n.mermaid,{value:"classDiagram\n\n    BarrelOverflowException <.. Barrel : throws\n\n    class Barrel {\n        -capacity: int\n        -fluidLevel: int\n        +Barrel(capacity: int)\n        +getCapacity() int\n        +getFluidLevel() int\n        +addFluid(value: int) void\n        +toString() String\n    }\n\n    class BarrelOverflowException {\n        <<exception>>\n        +BarrelOverflowException()\n    }"}),"\n",(0,s.jsxs)(n.h2,{id:"hinweis-zur-klasse-barreloverflowexception",children:["Hinweis zur Klasse ",(0,s.jsx)(n.em,{children:"BarrelOverflowException"})]}),"\n",(0,s.jsxs)(n.p,{children:["Der Konstruktor soll das Attribut ",(0,s.jsx)(n.code,{children:"detailMessage"})," initialisieren."]}),"\n",(0,s.jsxs)(n.h2,{id:"hinweise-zur-klasse-barrel",children:["Hinweise zur Klasse ",(0,s.jsx)(n.em,{children:"Barrel"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Der Konstruktor soll alle Attribute initialisieren. Jedes Fass soll dabei\nstandardm\xe4\xdfig leer sein"}),"\n",(0,s.jsxs)(n.li,{children:["Die Methode ",(0,s.jsx)(n.code,{children:"int getCapacity()"})," soll die Kapazit\xe4t des Fasses zur\xfcckgeben"]}),"\n",(0,s.jsxs)(n.li,{children:["Die Methode ",(0,s.jsx)(n.code,{children:"int getFluidLevel()"})," soll die aktuelle F\xfcllmenge des Fasses\nzur\xfcckgeben"]}),"\n",(0,s.jsxs)(n.li,{children:["Die Methode ",(0,s.jsx)(n.code,{children:"void addFluid(value: int)"})," soll den F\xfcllstand um den eingehenden\nBetrag erh\xf6hen. Ist der eingehende Betrag h\xf6her als die verf\xfcgbare\nRestkapazit\xe4t, soll der F\xfcllstand auf die maximale F\xfcllmenge gesetzt und\nanschlie\xdfend die Ausnahme ",(0,s.jsx)(n.code,{children:"BarrelOverflowException"})," ausgel\xf6st werden. Ist der\neingehende Betrag kleiner oder gleich gro\xdf wie die verf\xfcgbare Restkapazit\xe4t,\nsoll der F\xfcllstand um die eingehende Menge erh\xf6ht werden."]}),"\n",(0,s.jsxs)(n.li,{children:["Die Methode ",(0,s.jsx)(n.code,{children:"String toString()"})," soll alle Attribute in der Form ",(0,s.jsx)(n.em,{children:"Barrel\n[capacity=[maximale F\xfcllmenge]] [fluidlevel=[F\xfcllstand]]"})," zur\xfcckgeben"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"konsolenausgabe",children:"Konsolenausgabe"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-console",children:"Gib bitte die Kapazit\xe4t des Fasses ein: 100\nGib bitte die Menge der hinzuzuf\xfcgenden Fl\xfcssigkeit ein: 30\nF\xfcllstand: 30\nGib bitte die Menge der hinzuzuf\xfcgenden Fl\xfcssigkeit ein: 50\nF\xfcllstand: 80\nGib bitte die Menge der hinzuzuf\xfcgenden Fl\xfcssigkeit ein: 40\nF\xfcllstand: 100\nDas war der Tropfen, der das Fass zum \xdcberlaufen gebracht hat\n"})}),"\n",(0,s.jsx)(l.Z,{pullRequest:"50",branchSuffix:"exceptions/02"})]})}function p(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},5525:function(e,n,r){r.d(n,{Z:()=>l});var i=r("85893");r("67294");var s=r("67026");let t="tabItem_Ymn6";function l(e){let{children:n,hidden:r,className:l}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,s.Z)(t,l),hidden:r,children:n})}},47902:function(e,n,r){r.d(n,{Z:()=>j});var i=r("85893"),s=r("67294"),t=r("67026"),l=r("69599"),a=r("16550"),o=r("32000"),c=r("4520"),u=r("38341"),d=r("76009");function p(e){return s.Children.toArray(e).filter(e=>"\n"!==e).map(e=>{if(!e||s.isValidElement(e)&&function(e){let{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})?.filter(Boolean)??[]}function h(e){let{value:n,tabValues:r}=e;return r.some(e=>e.value===n)}var x=r("7227");let m="tabList__CuJ",f="tabItem_LNqP";function g(e){let{className:n,block:r,selectedValue:s,selectValue:a,tabValues:o}=e,c=[],{blockElementScrollPositionUntilNextRender:u}=(0,l.o5)(),d=e=>{let n=e.currentTarget,r=o[c.indexOf(n)].value;r!==s&&(u(n),a(r))},p=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{let r=c.indexOf(e.currentTarget)+1;n=c[r]??c[0];break}case"ArrowLeft":{let r=c.indexOf(e.currentTarget)-1;n=c[r]??c[c.length-1]}}n?.focus()};return(0,i.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,t.Z)("tabs",{"tabs--block":r},n),children:o.map(e=>{let{value:n,label:r,attributes:l}=e;return(0,i.jsx)("li",{role:"tab",tabIndex:s===n?0:-1,"aria-selected":s===n,ref:e=>c.push(e),onKeyDown:p,onClick:d,...l,className:(0,t.Z)("tabs__item",f,l?.className,{"tabs__item--active":s===n}),children:r??n},n)})})}function v(e){let{lazy:n,children:r,selectedValue:l}=e,a=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){let e=a.find(e=>e.props.value===l);return e?(0,s.cloneElement)(e,{className:(0,t.Z)("margin-top--md",e.props.className)}):null}return(0,i.jsx)("div",{className:"margin-top--md",children:a.map((e,n)=>(0,s.cloneElement)(e,{key:n,hidden:e.props.value!==l}))})}function b(e){let n=function(e){let{defaultValue:n,queryString:r=!1,groupId:i}=e,t=function(e){let{values:n,children:r}=e;return(0,s.useMemo)(()=>{let e=n??p(r).map(e=>{let{props:{value:n,label:r,attributes:i,default:s}}=e;return{value:n,label:r,attributes:i,default:s}});return!function(e){let n=(0,u.lx)(e,(e,n)=>e.value===n.value);if(n.length>0)throw Error(`Docusaurus error: Duplicate values "${n.map(e=>e.value).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e},[n,r])}(e),[l,x]=(0,s.useState)(()=>(function(e){let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:r}))throw Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${r.map(e=>e.value).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}let i=r.find(e=>e.default)??r[0];if(!i)throw Error("Unexpected error: 0 tabValues");return i.value})({defaultValue:n,tabValues:t})),[m,f]=function(e){let{queryString:n=!1,groupId:r}=e,i=(0,a.k6)(),t=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:n,groupId:r}),l=(0,c._X)(t);return[l,(0,s.useCallback)(e=>{if(!t)return;let n=new URLSearchParams(i.location.search);n.set(t,e),i.replace({...i.location,search:n.toString()})},[t,i])]}({queryString:r,groupId:i}),[g,v]=function(e){var n;let{groupId:r}=e;let i=(n=r)?`docusaurus.tab.${n}`:null,[t,l]=(0,d.Nk)(i);return[t,(0,s.useCallback)(e=>{if(!!i)l.set(e)},[i,l])]}({groupId:i}),b=(()=>{let e=m??g;return h({value:e,tabValues:t})?e:null})();return(0,o.Z)(()=>{b&&x(b)},[b]),{selectedValue:l,selectValue:(0,s.useCallback)(e=>{if(!h({value:e,tabValues:t}))throw Error(`Can't select invalid tab value=${e}`);x(e),f(e),v(e)},[f,v,t]),tabValues:t}}(e);return(0,i.jsxs)("div",{className:(0,t.Z)("tabs-container",m),children:[(0,i.jsx)(g,{...n,...e}),(0,i.jsx)(v,{...n,...e})]})}function j(e){let n=(0,x.Z)();return(0,i.jsx)(b,{...e,children:p(e.children)},String(n))}},39661:function(e,n,r){r.d(n,{Z:function(){return o}});var i=r(85893);r(67294);var s=r(47902),t=r(5525),l=r(83012),a=r(45056);function o(e){let{pullRequest:n,branchSuffix:r}=e;return(0,i.jsxs)(s.Z,{children:[(0,i.jsxs)(t.Z,{value:"exercise",label:"Exercise",default:!0,children:[(0,i.jsx)(a.Z,{language:"console",children:`git switch exercises/${r}`}),(0,i.jsx)(l.Z,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/exercises/${r}/Exercise.java`,children:(0,i.jsx)("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"})})]}),(0,i.jsxs)(t.Z,{value:"solution",label:"Solution",children:[(0,i.jsx)(a.Z,{language:"console",children:`git switch solutions/${r}`}),(0,i.jsx)(l.Z,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/solutions/${r}/Exercise.java`,children:(0,i.jsx)("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"})})]}),(0,i.jsxs)(t.Z,{value:"pullrequest",label:"Pull Request",children:["Alle \xa0\xc4nderungen zwischen der Aufgabe und der L\xf6sung findest du im Pull Request"," ",(0,i.jsxs)(l.Z,{to:`https://github.com/jappuccini/java-exercises/pull/${n}/files?diff=split`,children:["PR#",n]})]})]})}}}]);