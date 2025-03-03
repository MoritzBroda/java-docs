"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([["1287"],{72322:function(e,n,r){r.r(n),r.d(n,{default:()=>h,frontMatter:()=>l,metadata:()=>s,assets:()=>o,toc:()=>c,contentTitle:()=>u});var s=JSON.parse('{"id":"exercises/generics/generics04","title":"Generics04","description":"","source":"@site/docs/exercises/generics/generics04.mdx","sourceDirName":"exercises/generics","slug":"/exercises/generics/generics04","permalink":"/java-docs/pr-preview/pr-270/exercises/generics/generics04","draft":false,"unlisted":false,"editUrl":"https://github.com/jappuccini/java-docs/tree/main/docs/exercises/generics/generics04.mdx","tags":[],"version":"current","frontMatter":{"title":"Generics04","description":""},"sidebar":"exercisesSidebar","previous":{"title":"Generics03","permalink":"/java-docs/pr-preview/pr-270/exercises/generics/generics03"},"next":{"title":"Assoziativspeicher (Maps)","permalink":"/java-docs/pr-preview/pr-270/exercises/maps/"}}'),i=r("85893"),a=r("50065"),t=r("17490");let l={title:"Generics04",description:""},u=void 0,o={},c=[{value:"Klassendiagramm",id:"klassendiagramm",level:2},{value:"Hinweise zur Klasse <em>Tournament</em>",id:"hinweise-zur-klasse-tournament",level:2},{value:"Konsolenausgabe",id:"konsolenausgabe",level:2}];function d(e){let n={code:"code",em:"em",h2:"h2",li:"li",mermaid:"mermaid",pre:"pre",ul:"ul",...(0,a.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Erstelle die Klassen ",(0,i.jsx)(n.code,{children:"Club"})," und ",(0,i.jsx)(n.code,{children:"Tournament"})," anhand des abgebildeten\nKlassendiagramms"]}),"\n",(0,i.jsx)(n.li,{children:"Erstelle eine ausf\xfchrbare Klasse, welche ein Turnier mit mehreren Vereinen\nerzeugt und die Paarungen ausgibt"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"klassendiagramm",children:"Klassendiagramm"}),"\n",(0,i.jsx)(n.mermaid,{value:"classDiagram\n    Tournament o-- Club\n    Tournament o-- Pair~T~\n\n    class Pair~T~ {\n        <<record>>\n        partA: T\n        partB: T\n    }\n\n    class Tournament {\n        <<record>>\n        title: String\n        clubs: List~Club~\n        pairs: List~Pair~Club~~\n        +addClub(club: Club) void\n        +pairs() List~Pair~Club~~\n    }\n\n    class Club {\n        <<record>>\n        name: String\n        marketValueInMillionEuros: int\n    }"}),"\n",(0,i.jsxs)(n.h2,{id:"hinweise-zur-klasse-tournament",children:["Hinweise zur Klasse ",(0,i.jsx)(n.em,{children:"Tournament"})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Die Methode ",(0,i.jsx)(n.code,{children:"void addClub(club: Club)"})," soll dem Turnier den eingehenden Verein\nhinzuf\xfcgen"]}),"\n",(0,i.jsxs)(n.li,{children:["Die Methode ",(0,i.jsx)(n.code,{children:"List<Pair<Club>> pairs()"})," soll aus den Vereinen des Turniers\nPaarungen f\xfcr Hin- und R\xfcckspiele bilden und zur\xfcckgeben"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"konsolenausgabe",children:"Konsolenausgabe"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-console",children:"SC Freiburg - Bayern Muenchen\nSC Freiburg - Borussia Dortmund\nBayern Muenchen - SC Freiburg\nBayern Muenchen - Borussia Dortmund\nBorussia Dortmund - SC Freiburg\nBorussia Dortmund - Bayern Muenchen\n"})}),"\n",(0,i.jsx)(t.Z,{pullRequest:"65",branchSuffix:"generics/04"})]})}function h(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},97645:function(e,n,r){r.d(n,{Z:()=>a});var s=r("85893");r("67294");var i=r("67026");function a(e){let{children:n,hidden:r,className:a}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,i.Z)("tabItem_Ymn6",a),hidden:r,children:n})}},58168:function(e,n,r){r.d(n,{Z:()=>v});var s=r("85893"),i=r("67294"),a=r("67026"),t=r("34718"),l=r("16550"),u=r("8714"),o=r("89207"),c=r("69413"),d=r("54510");function h(e){return i.Children.toArray(e).filter(e=>"\n"!==e).map(e=>{if(!e||i.isValidElement(e)&&function(e){let{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})?.filter(Boolean)??[]}function p(e){let{value:n,tabValues:r}=e;return r.some(e=>e.value===n)}var m=r("6735");function b(e){let{className:n,block:r,selectedValue:i,selectValue:l,tabValues:u}=e,o=[],{blockElementScrollPositionUntilNextRender:c}=(0,t.o5)(),d=e=>{let n=e.currentTarget,r=u[o.indexOf(n)].value;r!==i&&(c(n),l(r))},h=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{let r=o.indexOf(e.currentTarget)+1;n=o[r]??o[0];break}case"ArrowLeft":{let r=o.indexOf(e.currentTarget)-1;n=o[r]??o[o.length-1]}}n?.focus()};return(0,s.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":r},n),children:u.map(e=>{let{value:n,label:r,attributes:t}=e;return(0,s.jsx)("li",{role:"tab",tabIndex:i===n?0:-1,"aria-selected":i===n,ref:e=>{o.push(e)},onKeyDown:h,onClick:d,...t,className:(0,a.Z)("tabs__item","tabItem_LNqP",t?.className,{"tabs__item--active":i===n}),children:r??n},n)})})}function g(e){let{lazy:n,children:r,selectedValue:t}=e,l=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){let e=l.find(e=>e.props.value===t);return e?(0,i.cloneElement)(e,{className:(0,a.Z)("margin-top--md",e.props.className)}):null}return(0,s.jsx)("div",{className:"margin-top--md",children:l.map((e,n)=>(0,i.cloneElement)(e,{key:n,hidden:e.props.value!==t}))})}function f(e){let n=function(e){let{defaultValue:n,queryString:r=!1,groupId:s}=e,a=function(e){let{values:n,children:r}=e;return(0,i.useMemo)(()=>{let e=n??h(r).map(e=>{let{props:{value:n,label:r,attributes:s,default:i}}=e;return{value:n,label:r,attributes:s,default:i}});return!function(e){let n=(0,c.lx)(e,(e,n)=>e.value===n.value);if(n.length>0)throw Error(`Docusaurus error: Duplicate values "${n.map(e=>e.value).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e},[n,r])}(e),[t,m]=(0,i.useState)(()=>(function(e){let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:r}))throw Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${r.map(e=>e.value).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}let s=r.find(e=>e.default)??r[0];if(!s)throw Error("Unexpected error: 0 tabValues");return s.value})({defaultValue:n,tabValues:a})),[b,g]=function(e){let{queryString:n=!1,groupId:r}=e,s=(0,l.k6)(),a=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:n,groupId:r});return[(0,o._X)(a),(0,i.useCallback)(e=>{if(!a)return;let n=new URLSearchParams(s.location.search);n.set(a,e),s.replace({...s.location,search:n.toString()})},[a,s])]}({queryString:r,groupId:s}),[f,v]=function(e){let{groupId:n}=e,r=n?`docusaurus.tab.${n}`:null,[s,a]=(0,d.Nk)(r);return[s,(0,i.useCallback)(e=>{r&&a.set(e)},[r,a])]}({groupId:s}),x=(()=>{let e=b??f;return p({value:e,tabValues:a})?e:null})();return(0,u.Z)(()=>{x&&m(x)},[x]),{selectedValue:t,selectValue:(0,i.useCallback)(e=>{if(!p({value:e,tabValues:a}))throw Error(`Can't select invalid tab value=${e}`);m(e),g(e),v(e)},[g,v,a]),tabValues:a}}(e);return(0,s.jsxs)("div",{className:(0,a.Z)("tabs-container","tabList__CuJ"),children:[(0,s.jsx)(b,{...n,...e}),(0,s.jsx)(g,{...n,...e})]})}function v(e){let n=(0,m.Z)();return(0,s.jsx)(f,{...e,children:h(e.children)},String(n))}},17490:function(e,n,r){r.d(n,{Z:function(){return u}});var s=r(85893);r(67294);var i=r(58168),a=r(97645),t=r(53367),l=r(31705);function u(e){let{pullRequest:n,branchSuffix:r}=e;return(0,s.jsxs)(i.Z,{children:[(0,s.jsxs)(a.Z,{value:"exercise",label:"Exercise",default:!0,children:[(0,s.jsx)(l.Z,{language:"console",children:`git switch exercises/${r}`}),(0,s.jsx)(t.Z,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/exercises/${r}/Exercise.java`,children:(0,s.jsx)("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"})})]}),(0,s.jsxs)(a.Z,{value:"solution",label:"Solution",children:[(0,s.jsx)(l.Z,{language:"console",children:`git switch solutions/${r}`}),(0,s.jsx)(t.Z,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/solutions/${r}/Exercise.java`,children:(0,s.jsx)("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"})})]}),(0,s.jsxs)(a.Z,{value:"pullrequest",label:"Pull Request",children:["Alle \xa0\xc4nderungen zwischen der Aufgabe und der L\xf6sung findest du im Pull Request"," ",(0,s.jsxs)(t.Z,{to:`https://github.com/jappuccini/java-exercises/pull/${n}/files?diff=split`,children:["PR#",n]})]})]})}}}]);