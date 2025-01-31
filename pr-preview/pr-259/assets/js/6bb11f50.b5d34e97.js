"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([["2809"],{35427:function(e,s,r){r.r(s),r.d(s,{default:()=>p,frontMatter:()=>t,metadata:()=>a,assets:()=>c,toc:()=>u,contentTitle:()=>o});var a=JSON.parse('{"id":"exercises/class-diagrams/class-diagrams01","title":"ClassDiagrams01","description":"","source":"@site/docs/exercises/class-diagrams/class-diagrams01.mdx","sourceDirName":"exercises/class-diagrams","slug":"/exercises/class-diagrams/class-diagrams01","permalink":"/java-docs/pr-preview/pr-259/exercises/class-diagrams/class-diagrams01","draft":false,"unlisted":false,"editUrl":"https://github.com/jappuccini/java-docs/tree/main/docs/exercises/class-diagrams/class-diagrams01.mdx","tags":[],"version":"current","frontMatter":{"title":"ClassDiagrams01","description":""},"sidebar":"exercisesSidebar","previous":{"title":"Klassendiagramme","permalink":"/java-docs/pr-preview/pr-259/exercises/class-diagrams/"},"next":{"title":"ClassDiagrams02","permalink":"/java-docs/pr-preview/pr-259/exercises/class-diagrams/class-diagrams02"}}'),n=r("85893"),i=r("50065"),l=r("17490");let t={title:"ClassDiagrams01",description:""},o=void 0,c={},u=[{value:"Klassendiagramm",id:"klassendiagramm",level:2},{value:"Hinweis zur Klasse <em>Player</em>",id:"hinweis-zur-klasse-player",level:2},{value:"Konsolenausgabe",id:"konsolenausgabe",level:2},{value:"Hinweis",id:"hinweis",level:2}];function d(e){let s={a:"a",code:"code",em:"em",h2:"h2",li:"li",mermaid:"mermaid",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["Erstelle die Klasse ",(0,n.jsx)(s.code,{children:"Player"})," anhand des abgebildeten Klassendiagramms"]}),"\n",(0,n.jsxs)(s.li,{children:["Erstelle eine ausf\xfchrbare Klasse, welche ein einfaches W\xfcrfelduell zwischen 2\nSpielern simuliert:","\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"W\xfcrfelwert von Spieler 1 > W\xfcrfelwert von Spieler 2: Spieler 1 gewinnt"}),"\n",(0,n.jsx)(s.li,{children:"W\xfcrfelwert von Spieler 1 < W\xfcrfelwert von Spieler 2: Spieler 2 gewinnt"}),"\n",(0,n.jsx)(s.li,{children:"W\xfcrfelwert von Spieler 1 = W\xfcrfelwert von Spieler 2: Unentschieden"}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(s.li,{children:"Verwende die Klasse bereitgestellte Klasse Dice."}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"klassendiagramm",children:"Klassendiagramm"}),"\n",(0,n.jsx)(s.mermaid,{value:"classDiagram\n\n    class Player {\n        -name: String #123;final#125;\n        -score: int\n        +Player(name: String)\n        +getName() String\n        +getScore() int\n        +setScore(score: int) void\n    }"}),"\n",(0,n.jsxs)(s.h2,{id:"hinweis-zur-klasse-player",children:["Hinweis zur Klasse ",(0,n.jsx)(s.em,{children:"Player"})]}),"\n",(0,n.jsx)(s.p,{children:"Der Konstruktor soll den Namen initialisieren."}),"\n",(0,n.jsx)(s.h2,{id:"konsolenausgabe",children:"Konsolenausgabe"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-console",children:"Hans w\xfcrfelt eine 2\nLisa w\xfcrfelt eine 3\nLisa gewinnt\n"})}),"\n",(0,n.jsx)(s.h2,{id:"hinweis",children:"Hinweis"}),"\n",(0,n.jsxs)(s.p,{children:["Verwende die Klasse ",(0,n.jsx)(s.code,{children:"Dice"})," aus \xdcbungsaufgabe ",(0,n.jsx)(s.a,{href:"../oo/oo03",children:"OO03"})]}),"\n",(0,n.jsx)(l.Z,{pullRequest:"36",branchSuffix:"class-diagrams/01"})]})}function p(e={}){let{wrapper:s}={...(0,i.a)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},97645:function(e,s,r){r.d(s,{Z:()=>i});var a=r("85893");r("67294");var n=r("67026");function i(e){let{children:s,hidden:r,className:i}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,n.Z)("tabItem_Ymn6",i),hidden:r,children:s})}},58168:function(e,s,r){r.d(s,{Z:()=>x});var a=r("85893"),n=r("67294"),i=r("67026"),l=r("34718"),t=r("16550"),o=r("8714"),c=r("89207"),u=r("69413"),d=r("54510");function p(e){return n.Children.toArray(e).filter(e=>"\n"!==e).map(e=>{if(!e||n.isValidElement(e)&&function(e){let{props:s}=e;return!!s&&"object"==typeof s&&"value"in s}(e))return e;throw Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})?.filter(Boolean)??[]}function h(e){let{value:s,tabValues:r}=e;return r.some(e=>e.value===s)}var m=r("6735");function f(e){let{className:s,block:r,selectedValue:n,selectValue:t,tabValues:o}=e,c=[],{blockElementScrollPositionUntilNextRender:u}=(0,l.o5)(),d=e=>{let s=e.currentTarget,r=o[c.indexOf(s)].value;r!==n&&(u(s),t(r))},p=e=>{let s=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{let r=c.indexOf(e.currentTarget)+1;s=c[r]??c[0];break}case"ArrowLeft":{let r=c.indexOf(e.currentTarget)-1;s=c[r]??c[c.length-1]}}s?.focus()};return(0,a.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":r},s),children:o.map(e=>{let{value:s,label:r,attributes:l}=e;return(0,a.jsx)("li",{role:"tab",tabIndex:n===s?0:-1,"aria-selected":n===s,ref:e=>{c.push(e)},onKeyDown:p,onClick:d,...l,className:(0,i.Z)("tabs__item","tabItem_LNqP",l?.className,{"tabs__item--active":n===s}),children:r??s},s)})})}function g(e){let{lazy:s,children:r,selectedValue:l}=e,t=(Array.isArray(r)?r:[r]).filter(Boolean);if(s){let e=t.find(e=>e.props.value===l);return e?(0,n.cloneElement)(e,{className:(0,i.Z)("margin-top--md",e.props.className)}):null}return(0,a.jsx)("div",{className:"margin-top--md",children:t.map((e,s)=>(0,n.cloneElement)(e,{key:s,hidden:e.props.value!==l}))})}function v(e){let s=function(e){let{defaultValue:s,queryString:r=!1,groupId:a}=e,i=function(e){let{values:s,children:r}=e;return(0,n.useMemo)(()=>{let e=s??p(r).map(e=>{let{props:{value:s,label:r,attributes:a,default:n}}=e;return{value:s,label:r,attributes:a,default:n}});return!function(e){let s=(0,u.lx)(e,(e,s)=>e.value===s.value);if(s.length>0)throw Error(`Docusaurus error: Duplicate values "${s.map(e=>e.value).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e},[s,r])}(e),[l,m]=(0,n.useState)(()=>(function(e){let{defaultValue:s,tabValues:r}=e;if(0===r.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(s){if(!h({value:s,tabValues:r}))throw Error(`Docusaurus error: The <Tabs> has a defaultValue "${s}" but none of its children has the corresponding value. Available values are: ${r.map(e=>e.value).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return s}let a=r.find(e=>e.default)??r[0];if(!a)throw Error("Unexpected error: 0 tabValues");return a.value})({defaultValue:s,tabValues:i})),[f,g]=function(e){let{queryString:s=!1,groupId:r}=e,a=(0,t.k6)(),i=function(e){let{queryString:s=!1,groupId:r}=e;if("string"==typeof s)return s;if(!1===s)return null;if(!0===s&&!r)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:s,groupId:r});return[(0,c._X)(i),(0,n.useCallback)(e=>{if(!i)return;let s=new URLSearchParams(a.location.search);s.set(i,e),a.replace({...a.location,search:s.toString()})},[i,a])]}({queryString:r,groupId:a}),[v,x]=function(e){let{groupId:s}=e,r=s?`docusaurus.tab.${s}`:null,[a,i]=(0,d.Nk)(r);return[a,(0,n.useCallback)(e=>{r&&i.set(e)},[r,i])]}({groupId:a}),b=(()=>{let e=f??v;return h({value:e,tabValues:i})?e:null})();return(0,o.Z)(()=>{b&&m(b)},[b]),{selectedValue:l,selectValue:(0,n.useCallback)(e=>{if(!h({value:e,tabValues:i}))throw Error(`Can't select invalid tab value=${e}`);m(e),g(e),x(e)},[g,x,i]),tabValues:i}}(e);return(0,a.jsxs)("div",{className:(0,i.Z)("tabs-container","tabList__CuJ"),children:[(0,a.jsx)(f,{...s,...e}),(0,a.jsx)(g,{...s,...e})]})}function x(e){let s=(0,m.Z)();return(0,a.jsx)(v,{...e,children:p(e.children)},String(s))}},17490:function(e,s,r){r.d(s,{Z:function(){return o}});var a=r(85893);r(67294);var n=r(58168),i=r(97645),l=r(53367),t=r(31705);function o(e){let{pullRequest:s,branchSuffix:r}=e;return(0,a.jsxs)(n.Z,{children:[(0,a.jsxs)(i.Z,{value:"exercise",label:"Exercise",default:!0,children:[(0,a.jsx)(t.Z,{language:"console",children:`git switch exercises/${r}`}),(0,a.jsx)(l.Z,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/exercises/${r}/Exercise.java`,children:(0,a.jsx)("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"})})]}),(0,a.jsxs)(i.Z,{value:"solution",label:"Solution",children:[(0,a.jsx)(t.Z,{language:"console",children:`git switch solutions/${r}`}),(0,a.jsx)(l.Z,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/solutions/${r}/Exercise.java`,children:(0,a.jsx)("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"})})]}),(0,a.jsxs)(i.Z,{value:"pullrequest",label:"Pull Request",children:["Alle \xa0\xc4nderungen zwischen der Aufgabe und der L\xf6sung findest du im Pull Request"," ",(0,a.jsxs)(l.Z,{to:`https://github.com/jappuccini/java-exercises/pull/${s}/files?diff=split`,children:["PR#",s]})]})]})}}}]);