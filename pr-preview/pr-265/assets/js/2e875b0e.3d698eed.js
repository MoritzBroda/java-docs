"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([["2437"],{48801:function(e,t,n){n.r(t),n.d(t,{default:()=>h,frontMatter:()=>a,metadata:()=>r,assets:()=>c,toc:()=>u,contentTitle:()=>o});var r=JSON.parse('{"id":"exercises/generics/generics01","title":"Generics01","description":"","source":"@site/docs/exercises/generics/generics01.mdx","sourceDirName":"exercises/generics","slug":"/exercises/generics/generics01","permalink":"/java-docs/pr-preview/pr-265/exercises/generics/generics01","draft":false,"unlisted":false,"editUrl":"https://github.com/jappuccini/java-docs/tree/main/docs/exercises/generics/generics01.mdx","tags":[],"version":"current","frontMatter":{"title":"Generics01","description":""},"sidebar":"exercisesSidebar","previous":{"title":"Generische Programmierung","permalink":"/java-docs/pr-preview/pr-265/exercises/generics/"},"next":{"title":"Generics02","permalink":"/java-docs/pr-preview/pr-265/exercises/generics/generics02"}}'),s=n("85893"),i=n("50065"),l=n("17490");let a={title:"Generics01",description:""},o=void 0,c={},u=[{value:"Klassendiagramm",id:"klassendiagramm",level:2},{value:"Hinweis zur Klasse <em>BeerBottle</em>",id:"hinweis-zur-klasse-beerbottle",level:2},{value:"Hinweise zur Klasse <em>Crate</em>",id:"hinweise-zur-klasse-crate",level:2}];function d(e){let t={code:"code",em:"em",h2:"h2",li:"li",mermaid:"mermaid",p:"p",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["Erstelle die Klassen ",(0,s.jsx)(t.code,{children:"Bottle"}),", ",(0,s.jsx)(t.code,{children:"BeerBottle"}),", ",(0,s.jsx)(t.code,{children:"WineBottle"})," und ",(0,s.jsx)(t.code,{children:"Crate"})," anhand\ndes abgebildeten Klassendiagramms"]}),"\n",(0,s.jsx)(t.li,{children:"Erstelle eine ausf\xfchrbare Klasse, welche eine Getr\xe4nkiste sowie mehrere\nFlaschen erzeugt und die Flaschen in die Getr\xe4nkekiste stellt"}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"klassendiagramm",children:"Klassendiagramm"}),"\n",(0,s.jsx)(t.mermaid,{value:"classDiagram\n    Bottle <|-- BeerBottle : extends\n    Bottle <|-- WineBottle : extends\n    Crate o-- Bottle\n\n    class Crate {\n        -box1: Bottle\n        -box2: Bottle\n        -box3: Bottle\n        -box4: Bottle\n        -box5: Bottle\n        -box6: Bottle\n        +insertBottle(bottle: Bottle, box: int) void\n        +takeBottle(box: int) Bottle\n    }\n\n    class Bottle {\n        <<abstract>>\n    }\n\n    class BeerBottle {\n        +chugALug() void\n    }\n\n    class WineBottle {\n\n    }"}),"\n",(0,s.jsxs)(t.h2,{id:"hinweis-zur-klasse-beerbottle",children:["Hinweis zur Klasse ",(0,s.jsx)(t.em,{children:"BeerBottle"})]}),"\n",(0,s.jsxs)(t.p,{children:["Die Methode ",(0,s.jsx)(t.code,{children:"void chugALug()"}),' soll den Text "Ex und Hopp" auf der Konsole\nausgeben.']}),"\n",(0,s.jsxs)(t.h2,{id:"hinweise-zur-klasse-crate",children:["Hinweise zur Klasse ",(0,s.jsx)(t.em,{children:"Crate"})]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["Die Methode ",(0,s.jsx)(t.code,{children:"void insertBottle(bottle: Bottle, box: int)"})," soll eine Flasche in\neine der 6 Getr\xe4nkef\xe4cher einf\xfcgen"]}),"\n",(0,s.jsxs)(t.li,{children:["Die Methode ",(0,s.jsx)(t.code,{children:"Bottle takeBottle(box: int)"})," soll die Flasche des entsprechenden\nGetr\xe4nkefachs zur\xfcckgeben"]}),"\n"]}),"\n",(0,s.jsx)(l.Z,{pullRequest:"52",branchSuffix:"generics/01"})]})}function h(e={}){let{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},97645:function(e,t,n){n.d(t,{Z:()=>i});var r=n("85893");n("67294");var s=n("67026");function i(e){let{children:t,hidden:n,className:i}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,s.Z)("tabItem_Ymn6",i),hidden:n,children:t})}},58168:function(e,t,n){n.d(t,{Z:()=>g});var r=n("85893"),s=n("67294"),i=n("67026"),l=n("34718"),a=n("16550"),o=n("8714"),c=n("89207"),u=n("69413"),d=n("54510");function h(e){return s.Children.toArray(e).filter(e=>"\n"!==e).map(e=>{if(!e||s.isValidElement(e)&&function(e){let{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})?.filter(Boolean)??[]}function p(e){let{value:t,tabValues:n}=e;return n.some(e=>e.value===t)}var m=n("6735");function x(e){let{className:t,block:n,selectedValue:s,selectValue:a,tabValues:o}=e,c=[],{blockElementScrollPositionUntilNextRender:u}=(0,l.o5)(),d=e=>{let t=e.currentTarget,n=o[c.indexOf(t)].value;n!==s&&(u(t),a(n))},h=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{let n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{let n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1]}}t?.focus()};return(0,r.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},t),children:o.map(e=>{let{value:t,label:n,attributes:l}=e;return(0,r.jsx)("li",{role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,ref:e=>{c.push(e)},onKeyDown:h,onClick:d,...l,className:(0,i.Z)("tabs__item","tabItem_LNqP",l?.className,{"tabs__item--active":s===t}),children:n??t},t)})})}function f(e){let{lazy:t,children:n,selectedValue:l}=e,a=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){let e=a.find(e=>e.props.value===l);return e?(0,s.cloneElement)(e,{className:(0,i.Z)("margin-top--md",e.props.className)}):null}return(0,r.jsx)("div",{className:"margin-top--md",children:a.map((e,t)=>(0,s.cloneElement)(e,{key:t,hidden:e.props.value!==l}))})}function b(e){let t=function(e){let{defaultValue:t,queryString:n=!1,groupId:r}=e,i=function(e){let{values:t,children:n}=e;return(0,s.useMemo)(()=>{let e=t??h(n).map(e=>{let{props:{value:t,label:n,attributes:r,default:s}}=e;return{value:t,label:n,attributes:r,default:s}});return!function(e){let t=(0,u.lx)(e,(e,t)=>e.value===t.value);if(t.length>0)throw Error(`Docusaurus error: Duplicate values "${t.map(e=>e.value).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e},[t,n])}(e),[l,m]=(0,s.useState)(()=>(function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map(e=>e.value).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}let r=n.find(e=>e.default)??n[0];if(!r)throw Error("Unexpected error: 0 tabValues");return r.value})({defaultValue:t,tabValues:i})),[x,f]=function(e){let{queryString:t=!1,groupId:n}=e,r=(0,a.k6)(),i=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,c._X)(i),(0,s.useCallback)(e=>{if(!i)return;let t=new URLSearchParams(r.location.search);t.set(i,e),r.replace({...r.location,search:t.toString()})},[i,r])]}({queryString:n,groupId:r}),[b,g]=function(e){let{groupId:t}=e,n=t?`docusaurus.tab.${t}`:null,[r,i]=(0,d.Nk)(n);return[r,(0,s.useCallback)(e=>{n&&i.set(e)},[n,i])]}({groupId:r}),v=(()=>{let e=x??b;return p({value:e,tabValues:i})?e:null})();return(0,o.Z)(()=>{v&&m(v)},[v]),{selectedValue:l,selectValue:(0,s.useCallback)(e=>{if(!p({value:e,tabValues:i}))throw Error(`Can't select invalid tab value=${e}`);m(e),f(e),g(e)},[f,g,i]),tabValues:i}}(e);return(0,r.jsxs)("div",{className:(0,i.Z)("tabs-container","tabList__CuJ"),children:[(0,r.jsx)(x,{...t,...e}),(0,r.jsx)(f,{...t,...e})]})}function g(e){let t=(0,m.Z)();return(0,r.jsx)(b,{...e,children:h(e.children)},String(t))}},17490:function(e,t,n){n.d(t,{Z:function(){return o}});var r=n(85893);n(67294);var s=n(58168),i=n(97645),l=n(53367),a=n(31705);function o(e){let{pullRequest:t,branchSuffix:n}=e;return(0,r.jsxs)(s.Z,{children:[(0,r.jsxs)(i.Z,{value:"exercise",label:"Exercise",default:!0,children:[(0,r.jsx)(a.Z,{language:"console",children:`git switch exercises/${n}`}),(0,r.jsx)(l.Z,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/exercises/${n}/Exercise.java`,children:(0,r.jsx)("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"})})]}),(0,r.jsxs)(i.Z,{value:"solution",label:"Solution",children:[(0,r.jsx)(a.Z,{language:"console",children:`git switch solutions/${n}`}),(0,r.jsx)(l.Z,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/solutions/${n}/Exercise.java`,children:(0,r.jsx)("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"})})]}),(0,r.jsxs)(i.Z,{value:"pullrequest",label:"Pull Request",children:["Alle \xa0\xc4nderungen zwischen der Aufgabe und der L\xf6sung findest du im Pull Request"," ",(0,r.jsxs)(l.Z,{to:`https://github.com/jappuccini/java-exercises/pull/${t}/files?diff=split`,children:["PR#",t]})]})]})}}}]);