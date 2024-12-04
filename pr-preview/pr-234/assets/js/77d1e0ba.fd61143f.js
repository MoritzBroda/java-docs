"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([["6148"],{47127:function(e,a,r){r.r(a),r.d(a,{metadata:()=>n,contentTitle:()=>u,default:()=>h,assets:()=>o,toc:()=>c,frontMatter:()=>l});var n=JSON.parse('{"id":"exercises/class-diagrams/class-diagrams05","title":"ClassDiagrams05","description":"","source":"@site/docs/exercises/class-diagrams/class-diagrams05.mdx","sourceDirName":"exercises/class-diagrams","slug":"/exercises/class-diagrams/class-diagrams05","permalink":"/java-docs/pr-preview/pr-234/exercises/class-diagrams/class-diagrams05","draft":false,"unlisted":false,"editUrl":"https://github.com/jappuccini/java-docs/tree/main/docs/exercises/class-diagrams/class-diagrams05.mdx","tags":[],"version":"current","frontMatter":{"title":"ClassDiagrams05","description":""},"sidebar":"exercisesSidebar","previous":{"title":"ClassDiagrams04","permalink":"/java-docs/pr-preview/pr-234/exercises/class-diagrams/class-diagrams04"},"next":{"title":"Aktivit\xe4tsdiagramme","permalink":"/java-docs/pr-preview/pr-234/exercises/activity-diagrams/"}}'),s=r("85893"),t=r("50065"),i=r("39661");let l={title:"ClassDiagrams05",description:""},u=void 0,o={},c=[{value:"Klassendiagramm",id:"klassendiagramm",level:2},{value:"Hinweise zur Klasse <em>SkatCardDeck</em>",id:"hinweise-zur-klasse-skatcarddeck",level:2},{value:"Konsolenausgabe",id:"konsolenausgabe",level:2},{value:"Hinweis",id:"hinweis",level:2}];function d(e){let a={code:"code",em:"em",h2:"h2",li:"li",mermaid:"mermaid",p:"p",pre:"pre",ul:"ul",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(a.ul,{children:["\n",(0,s.jsxs)(a.li,{children:["Erstelle die Aufz\xe4hlungen ",(0,s.jsx)(a.code,{children:"SkatCardColor"})," und ",(0,s.jsx)(a.code,{children:"SkatCardValue"})," sowie die\nKlassen ",(0,s.jsx)(a.code,{children:"SkatCard"})," und ",(0,s.jsx)(a.code,{children:"SkatCardDeck"})," anhand des abgebildeten Klassendiagramms"]}),"\n",(0,s.jsx)(a.li,{children:"Erstelle eine ausf\xfchrbare Klasse, welche ein Skatblatt erzeugt, mischt und auf\nder Konsole ausgibt"}),"\n"]}),"\n",(0,s.jsx)(a.h2,{id:"klassendiagramm",children:"Klassendiagramm"}),"\n",(0,s.jsx)(a.mermaid,{value:"classDiagram\n     SkatCard o-- SkatCardColor\n     SkatCard o-- SkatCardValue\n     SkatCardDeck o-- SkatCard\n\n    class SkatCardValue {\n        <<enumeration>>\n        SEVEN = Seven, 7\n        EIGHT = Eight, 8\n        NINE = Nine, 9\n        TEN = Ten, 10\n        JACK, Jack, 2\n        CHECKERS = Checkers, 3\n        KING = King, 4\n        ACE = Ace, 11\n        -description: String #123;final#125;\n        -value: int #123;final#125;\n        SkatCardValue(description: String, value: int)\n        +getDescription() String\n        +getValue() int\n    }\n\n    class SkatCardColor {\n        <<enumeration>>\n        DIAMONDS = Diamonds\n        HEARTS = Hearts\n        SPADE = Spade\n        CLUBS = Clubs\n        SkatCardColor(description: String)\n        -description: String #123;final#125;\n        +getDescription() String\n    }\n\n    class SkatCard {\n        -color: SkatCardColor #123;final#125;\n        -value: SkatCardValue #123;final#125;\n        +SkatCard(color: SkatCardColor, value: SkatCardValue)\n        +getColor() SkatCardColor\n        +getValue() SkatCardValue\n        +getCardDescription() String\n    }\n\n    class SkatCardDeck {\n        -skatCards: ArrayList~SkatCard~ #123;final#125;\n        +SkatCardDeck()\n        +getSkatCards() ArrayList~SkatCard~\n        +shuffleSkatCards() void\n    }"}),"\n",(0,s.jsxs)(a.h2,{id:"hinweise-zur-klasse-skatcarddeck",children:["Hinweise zur Klasse ",(0,s.jsx)(a.em,{children:"SkatCardDeck"})]}),"\n",(0,s.jsxs)(a.ul,{children:["\n",(0,s.jsx)(a.li,{children:"Der Konstruktor soll ein Skatblatt, bestehend aus 32 Karten, erzeugen"}),"\n",(0,s.jsxs)(a.li,{children:["Die Methode ",(0,s.jsx)(a.code,{children:"void shuffleSkatCards()"})," soll das Skatblatt mischen"]}),"\n"]}),"\n",(0,s.jsx)(a.h2,{id:"konsolenausgabe",children:"Konsolenausgabe"}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-console",children:"Kreuz K\xf6nig\nPik 10\nKreuz 9\nPik 9\nKreuz Bube\nPik Ass\nHerz Bube\nKaro Bube\nPik 8\nKaro Dame\n\u2026\n"})}),"\n",(0,s.jsx)(a.h2,{id:"hinweis",children:"Hinweis"}),"\n",(0,s.jsxs)(a.p,{children:["Die statische Methode ",(0,s.jsx)(a.code,{children:"T[] values()"})," einer Aufz\xe4hlung gibt alle\nAufz\xe4hlungskonstanten der Aufz\xe4hlung als Feld zur\xfcck."]}),"\n",(0,s.jsx)(i.Z,{pullRequest:"40",branchSuffix:"class-diagrams/05"})]})}function h(e={}){let{wrapper:a}={...(0,t.a)(),...e.components};return a?(0,s.jsx)(a,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},5525:function(e,a,r){r.d(a,{Z:()=>i});var n=r("85893");r("67294");var s=r("67026");let t="tabItem_Ymn6";function i(e){let{children:a,hidden:r,className:i}=e;return(0,n.jsx)("div",{role:"tabpanel",className:(0,s.Z)(t,i),hidden:r,children:a})}},47902:function(e,a,r){r.d(a,{Z:()=>x});var n=r("85893"),s=r("67294"),t=r("67026"),i=r("69599"),l=r("16550"),u=r("32000"),o=r("4520"),c=r("38341"),d=r("76009");function h(e){return s.Children.toArray(e).filter(e=>"\n"!==e).map(e=>{if(!e||s.isValidElement(e)&&function(e){let{props:a}=e;return!!a&&"object"==typeof a&&"value"in a}(e))return e;throw Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})?.filter(Boolean)??[]}function p(e){let{value:a,tabValues:r}=e;return r.some(e=>e.value===a)}var m=r("7227");let g="tabList__CuJ",f="tabItem_LNqP";function v(e){let{className:a,block:r,selectedValue:s,selectValue:l,tabValues:u}=e,o=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.o5)(),d=e=>{let a=e.currentTarget,r=u[o.indexOf(a)].value;r!==s&&(c(a),l(r))},h=e=>{let a=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{let r=o.indexOf(e.currentTarget)+1;a=o[r]??o[0];break}case"ArrowLeft":{let r=o.indexOf(e.currentTarget)-1;a=o[r]??o[o.length-1]}}a?.focus()};return(0,n.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,t.Z)("tabs",{"tabs--block":r},a),children:u.map(e=>{let{value:a,label:r,attributes:i}=e;return(0,n.jsx)("li",{role:"tab",tabIndex:s===a?0:-1,"aria-selected":s===a,ref:e=>o.push(e),onKeyDown:h,onClick:d,...i,className:(0,t.Z)("tabs__item",f,i?.className,{"tabs__item--active":s===a}),children:r??a},a)})})}function k(e){let{lazy:a,children:r,selectedValue:i}=e,l=(Array.isArray(r)?r:[r]).filter(Boolean);if(a){let e=l.find(e=>e.props.value===i);return e?(0,s.cloneElement)(e,{className:(0,t.Z)("margin-top--md",e.props.className)}):null}return(0,n.jsx)("div",{className:"margin-top--md",children:l.map((e,a)=>(0,s.cloneElement)(e,{key:a,hidden:e.props.value!==i}))})}function b(e){let a=function(e){let{defaultValue:a,queryString:r=!1,groupId:n}=e,t=function(e){let{values:a,children:r}=e;return(0,s.useMemo)(()=>{let e=a??h(r).map(e=>{let{props:{value:a,label:r,attributes:n,default:s}}=e;return{value:a,label:r,attributes:n,default:s}});return!function(e){let a=(0,c.lx)(e,(e,a)=>e.value===a.value);if(a.length>0)throw Error(`Docusaurus error: Duplicate values "${a.map(e=>e.value).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e},[a,r])}(e),[i,m]=(0,s.useState)(()=>(function(e){let{defaultValue:a,tabValues:r}=e;if(0===r.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!p({value:a,tabValues:r}))throw Error(`Docusaurus error: The <Tabs> has a defaultValue "${a}" but none of its children has the corresponding value. Available values are: ${r.map(e=>e.value).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return a}let n=r.find(e=>e.default)??r[0];if(!n)throw Error("Unexpected error: 0 tabValues");return n.value})({defaultValue:a,tabValues:t})),[g,f]=function(e){let{queryString:a=!1,groupId:r}=e,n=(0,l.k6)(),t=function(e){let{queryString:a=!1,groupId:r}=e;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!r)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:a,groupId:r}),i=(0,o._X)(t);return[i,(0,s.useCallback)(e=>{if(!t)return;let a=new URLSearchParams(n.location.search);a.set(t,e),n.replace({...n.location,search:a.toString()})},[t,n])]}({queryString:r,groupId:n}),[v,k]=function(e){var a;let{groupId:r}=e;let n=(a=r)?`docusaurus.tab.${a}`:null,[t,i]=(0,d.Nk)(n);return[t,(0,s.useCallback)(e=>{if(!!n)i.set(e)},[n,i])]}({groupId:n}),b=(()=>{let e=g??v;return p({value:e,tabValues:t})?e:null})();return(0,u.Z)(()=>{b&&m(b)},[b]),{selectedValue:i,selectValue:(0,s.useCallback)(e=>{if(!p({value:e,tabValues:t}))throw Error(`Can't select invalid tab value=${e}`);m(e),f(e),k(e)},[f,k,t]),tabValues:t}}(e);return(0,n.jsxs)("div",{className:(0,t.Z)("tabs-container",g),children:[(0,n.jsx)(v,{...a,...e}),(0,n.jsx)(k,{...a,...e})]})}function x(e){let a=(0,m.Z)();return(0,n.jsx)(b,{...e,children:h(e.children)},String(a))}},39661:function(e,a,r){r.d(a,{Z:function(){return u}});var n=r(85893);r(67294);var s=r(47902),t=r(5525),i=r(83012),l=r(45056);function u(e){let{pullRequest:a,branchSuffix:r}=e;return(0,n.jsxs)(s.Z,{children:[(0,n.jsxs)(t.Z,{value:"exercise",label:"Exercise",default:!0,children:[(0,n.jsx)(l.Z,{language:"console",children:`git switch exercises/${r}`}),(0,n.jsx)(i.Z,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/exercises/${r}/Exercise.java`,children:(0,n.jsx)("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"})})]}),(0,n.jsxs)(t.Z,{value:"solution",label:"Solution",children:[(0,n.jsx)(l.Z,{language:"console",children:`git switch solutions/${r}`}),(0,n.jsx)(i.Z,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/solutions/${r}/Exercise.java`,children:(0,n.jsx)("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"})})]}),(0,n.jsxs)(t.Z,{value:"pullrequest",label:"Pull Request",children:["Alle \xa0\xc4nderungen zwischen der Aufgabe und der L\xf6sung findest du im Pull Request"," ",(0,n.jsxs)(i.Z,{to:`https://github.com/jappuccini/java-exercises/pull/${a}/files?diff=split`,children:["PR#",a]})]})]})}}}]);