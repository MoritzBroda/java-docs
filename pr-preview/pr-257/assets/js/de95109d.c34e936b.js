"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([["2867"],{98057:function(e,n,a){a.r(n),a.d(n,{default:()=>h,frontMatter:()=>t,metadata:()=>s,assets:()=>c,toc:()=>u,contentTitle:()=>o});var s=JSON.parse('{"id":"exercises/polymorphy/polymorphy04","title":"Polymorphism04","description":"","source":"@site/docs/exercises/polymorphy/polymorphy04.mdx","sourceDirName":"exercises/polymorphy","slug":"/exercises/polymorphy/polymorphy04","permalink":"/java-docs/pr-preview/pr-257/exercises/polymorphy/polymorphy04","draft":false,"unlisted":false,"editUrl":"https://github.com/jappuccini/java-docs/tree/main/docs/exercises/polymorphy/polymorphy04.mdx","tags":[],"version":"current","frontMatter":{"title":"Polymorphism04","description":""},"sidebar":"exercisesSidebar","previous":{"title":"Polymorphism03","permalink":"/java-docs/pr-preview/pr-257/exercises/polymorphy/polymorphy03"},"next":{"title":"Abstrakte und finale Klassen und Methoden","permalink":"/java-docs/pr-preview/pr-257/exercises/abstract-and-final/"}}'),r=a("85893"),i=a("50065"),l=a("17490");let t={title:"Polymorphism04",description:""},o=void 0,c={},u=[{value:"Klassendiagramm",id:"klassendiagramm",level:2},{value:"Hinweis zur Klasse <em>HighValueDice</em>",id:"hinweis-zur-klasse-highvaluedice",level:2},{value:"Hinweis zur Klasse <em>LowValueDice</em>",id:"hinweis-zur-klasse-lowvaluedice",level:2},{value:"Konsolenausgabe",id:"konsolenausgabe",level:2}];function d(e){let n={a:"a",code:"code",em:"em",h2:"h2",li:"li",mermaid:"mermaid",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Passe die Klasse ",(0,r.jsx)(n.code,{children:"Dice"})," aus \xdcbungsaufgabe\n",(0,r.jsx)(n.a,{href:"../class-diagrams/class-diagrams02",children:"ClassDiagrams02"})," anhand des abgebildeten\nKlassendiagramms an und erstelle die Klassen ",(0,r.jsx)(n.code,{children:"HighValueDice"})," und\n",(0,r.jsx)(n.code,{children:"LowValueDice"})]}),"\n",(0,r.jsxs)(n.li,{children:["Passe die Klasse ",(0,r.jsx)(n.code,{children:"Player"})," aus \xdcbungsaufgabe\n",(0,r.jsx)(n.a,{href:"../class-diagrams/class-diagrams02",children:"ClassDiagrams02"})," anhand des abgebildeten\nKlassendiagramms an"]}),"\n",(0,r.jsxs)(n.li,{children:["Passe die Methode ",(0,r.jsx)(n.code,{children:"boolean move(player: Player)"})," der Klasse ",(0,r.jsx)(n.code,{children:"DiceGame"})," aus\n\xdcbungsaufgabe ",(0,r.jsx)(n.a,{href:"../class-diagrams/class-diagrams02",children:"ClassDiagrams02"})," so an,\ndass jeder Spieler w\xe4hrend des Spiels einmal die M\xf6glichkeit hat, entweder nur\nmit 4-5-6-W\xfcrfeln oder 1-2-3-W\xfcrfeln zu w\xfcrfeln"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"klassendiagramm",children:"Klassendiagramm"}),"\n",(0,r.jsx)(n.mermaid,{value:"classDiagram\n    DiceGame o-- Dice\n    DiceGame o-- Player\n    DiceCup --o DiceGame\n    Dice <|-- LowValueDice : extends\n    Dice <|-- HighValueDice : extends\n\n    class Player {\n        -name: String\n        -score: int\n        -isActive: boolean\n        -specialAvailable: boolean\n        +Player(name: String)\n        +getName() String\n        +getScore() int\n        +setScore(int: score) void\n        +isActive() boolean\n        +setActive(isActive: boolean) void\n        +getSpecialAvailable() boolean\n        +setSpecialAvailable(specialAvailable: boolean) void\n    }\n\n    class Dice {\n        -id: int\n        #value: int\n        +Dice(id int)\n        +getId() int\n        +getValue() int\n        +rollTheDice() void\n    }\n\n    class LowValueDice {\n        +LowValueDice(id: int)\n        +rollTheDice() void\n    }\n\n    class HighValueDice {\n        +HighValueDice(id: int)\n        +rollTheDice() void\n    }\n\n    class DiceCup {\n        +rollTheDices(dices: ArrayList~Dice~) void\n        +rollTheDices(dices: Dice[]) void\n    }\n\n    class DiceGame {\n        -diceCup: DiceCup\n        -dices: ArrayList~Dice~\n        -players: ArrayList~Player~\n        -scanner: Scanner\n        -numberOfActivePlayers: int\n        +DiceGame(players: ArrayList~Player~)\n        +start() void\n        -move(player: Player) void\n    }"}),"\n",(0,r.jsxs)(n.h2,{id:"hinweis-zur-klasse-highvaluedice",children:["Hinweis zur Klasse ",(0,r.jsx)(n.em,{children:"HighValueDice"})]}),"\n",(0,r.jsxs)(n.p,{children:["Die Methode ",(0,r.jsx)(n.code,{children:"void rollTheDice()"}),' soll nur 4er, 5er und 6er "w\xfcrfeln".']}),"\n",(0,r.jsxs)(n.h2,{id:"hinweis-zur-klasse-lowvaluedice",children:["Hinweis zur Klasse ",(0,r.jsx)(n.em,{children:"LowValueDice"})]}),"\n",(0,r.jsxs)(n.p,{children:["Die Methode ",(0,r.jsx)(n.code,{children:"void rollTheDice()"}),' soll nur 1er, 2er und 3er "w\xfcrfeln".']}),"\n",(0,r.jsx)(n.h2,{id:"konsolenausgabe",children:"Konsolenausgabe"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-console",children:"Hans hat aktuell 0 Punkte\nHans, m\xf6chtest Du einmalig Spezialw\xfcrfel verwenden (true, false)?: true\nHans, welche Spezialw\xfcrfel m\xf6chtest Du verwenden (1=4-5-6-W\xfcrfel, 2=1-2-3-W\xfcrfel)?: 1\nHans, m\xf6chtest Du w\xfcrfeln (true, false)?: true\nHans hat 12 Punkte\nHans hat insgesamt 12 Punkte\n\u2026\nLisa hat aktuell 46 Punkte\nLisa, m\xf6chtest Du w\xfcrfeln (true, false)?: true\nLisa hat 12 Punkte\nLisa hat insgesamt 58 Punkte\nLisa hat verloren\nDer Sieger hei\xdft Hans und hat 49 Punkte\n"})}),"\n",(0,r.jsx)(l.Z,{pullRequest:"44",branchSuffix:"polymorphy/04"})]})}function h(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},97645:function(e,n,a){a.d(n,{Z:()=>i});var s=a("85893");a("67294");var r=a("67026");function i(e){let{children:n,hidden:a,className:i}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.Z)("tabItem_Ymn6",i),hidden:a,children:n})}},58168:function(e,n,a){a.d(n,{Z:()=>b});var s=a("85893"),r=a("67294"),i=a("67026"),l=a("34718"),t=a("16550"),o=a("8714"),c=a("89207"),u=a("69413"),d=a("54510");function h(e){return r.Children.toArray(e).filter(e=>"\n"!==e).map(e=>{if(!e||r.isValidElement(e)&&function(e){let{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})?.filter(Boolean)??[]}function p(e){let{value:n,tabValues:a}=e;return a.some(e=>e.value===n)}var m=a("6735");function v(e){let{className:n,block:a,selectedValue:r,selectValue:t,tabValues:o}=e,c=[],{blockElementScrollPositionUntilNextRender:u}=(0,l.o5)(),d=e=>{let n=e.currentTarget,a=o[c.indexOf(n)].value;a!==r&&(u(n),t(a))},h=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{let a=c.indexOf(e.currentTarget)+1;n=c[a]??c[0];break}case"ArrowLeft":{let a=c.indexOf(e.currentTarget)-1;n=c[a]??c[c.length-1]}}n?.focus()};return(0,s.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":a},n),children:o.map(e=>{let{value:n,label:a,attributes:l}=e;return(0,s.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>{c.push(e)},onKeyDown:h,onClick:d,...l,className:(0,i.Z)("tabs__item","tabItem_LNqP",l?.className,{"tabs__item--active":r===n}),children:a??n},n)})})}function f(e){let{lazy:n,children:a,selectedValue:l}=e,t=(Array.isArray(a)?a:[a]).filter(Boolean);if(n){let e=t.find(e=>e.props.value===l);return e?(0,r.cloneElement)(e,{className:(0,i.Z)("margin-top--md",e.props.className)}):null}return(0,s.jsx)("div",{className:"margin-top--md",children:t.map((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==l}))})}function g(e){let n=function(e){let{defaultValue:n,queryString:a=!1,groupId:s}=e,i=function(e){let{values:n,children:a}=e;return(0,r.useMemo)(()=>{let e=n??h(a).map(e=>{let{props:{value:n,label:a,attributes:s,default:r}}=e;return{value:n,label:a,attributes:s,default:r}});return!function(e){let n=(0,u.lx)(e,(e,n)=>e.value===n.value);if(n.length>0)throw Error(`Docusaurus error: Duplicate values "${n.map(e=>e.value).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e},[n,a])}(e),[l,m]=(0,r.useState)(()=>(function(e){let{defaultValue:n,tabValues:a}=e;if(0===a.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:a}))throw Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${a.map(e=>e.value).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}let s=a.find(e=>e.default)??a[0];if(!s)throw Error("Unexpected error: 0 tabValues");return s.value})({defaultValue:n,tabValues:i})),[v,f]=function(e){let{queryString:n=!1,groupId:a}=e,s=(0,t.k6)(),i=function(e){let{queryString:n=!1,groupId:a}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!a)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:n,groupId:a});return[(0,c._X)(i),(0,r.useCallback)(e=>{if(!i)return;let n=new URLSearchParams(s.location.search);n.set(i,e),s.replace({...s.location,search:n.toString()})},[i,s])]}({queryString:a,groupId:s}),[g,b]=function(e){let{groupId:n}=e,a=n?`docusaurus.tab.${n}`:null,[s,i]=(0,d.Nk)(a);return[s,(0,r.useCallback)(e=>{a&&i.set(e)},[a,i])]}({groupId:s}),x=(()=>{let e=v??g;return p({value:e,tabValues:i})?e:null})();return(0,o.Z)(()=>{x&&m(x)},[x]),{selectedValue:l,selectValue:(0,r.useCallback)(e=>{if(!p({value:e,tabValues:i}))throw Error(`Can't select invalid tab value=${e}`);m(e),f(e),b(e)},[f,b,i]),tabValues:i}}(e);return(0,s.jsxs)("div",{className:(0,i.Z)("tabs-container","tabList__CuJ"),children:[(0,s.jsx)(v,{...n,...e}),(0,s.jsx)(f,{...n,...e})]})}function b(e){let n=(0,m.Z)();return(0,s.jsx)(g,{...e,children:h(e.children)},String(n))}},17490:function(e,n,a){a.d(n,{Z:function(){return o}});var s=a(85893);a(67294);var r=a(58168),i=a(97645),l=a(53367),t=a(31705);function o(e){let{pullRequest:n,branchSuffix:a}=e;return(0,s.jsxs)(r.Z,{children:[(0,s.jsxs)(i.Z,{value:"exercise",label:"Exercise",default:!0,children:[(0,s.jsx)(t.Z,{language:"console",children:`git switch exercises/${a}`}),(0,s.jsx)(l.Z,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/exercises/${a}/Exercise.java`,children:(0,s.jsx)("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"})})]}),(0,s.jsxs)(i.Z,{value:"solution",label:"Solution",children:[(0,s.jsx)(t.Z,{language:"console",children:`git switch solutions/${a}`}),(0,s.jsx)(l.Z,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/solutions/${a}/Exercise.java`,children:(0,s.jsx)("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"})})]}),(0,s.jsxs)(i.Z,{value:"pullrequest",label:"Pull Request",children:["Alle \xa0\xc4nderungen zwischen der Aufgabe und der L\xf6sung findest du im Pull Request"," ",(0,s.jsxs)(l.Z,{to:`https://github.com/jappuccini/java-exercises/pull/${n}/files?diff=split`,children:["PR#",n]})]})]})}}}]);