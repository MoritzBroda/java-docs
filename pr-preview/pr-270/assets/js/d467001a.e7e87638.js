"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([["7179"],{11683:function(e,r,a){a.r(r),a.d(r,{default:()=>p,frontMatter:()=>o,metadata:()=>t,assets:()=>c,toc:()=>u,contentTitle:()=>l});var t=JSON.parse('{"id":"exercises/comparators/comparators02","title":"Comparators02","description":"","source":"@site/docs/exercises/comparators/comparators02.mdx","sourceDirName":"exercises/comparators","slug":"/exercises/comparators/comparators02","permalink":"/java-docs/pr-preview/pr-270/exercises/comparators/comparators02","draft":false,"unlisted":false,"editUrl":"https://github.com/jappuccini/java-docs/tree/main/docs/exercises/comparators/comparators02.mdx","tags":[],"version":"current","frontMatter":{"title":"Comparators02","description":""},"sidebar":"exercisesSidebar","previous":{"title":"Comparators01","permalink":"/java-docs/pr-preview/pr-270/exercises/comparators/comparators01"},"next":{"title":"Schl\xfcsseltransformationen (Hashing)","permalink":"/java-docs/pr-preview/pr-270/exercises/hashing/"}}'),n=a("85893"),i=a("50065"),s=a("17490");let o={title:"Comparators02",description:""},l=void 0,c={},u=[{value:"Klassendiagramm",id:"klassendiagramm",level:2},{value:"Hinweis zur Klasse CoordinateByDistanceToOriginPointComparator",id:"hinweis-zur-klasse-coordinatebydistancetooriginpointcomparator",level:2}];function d(e){let r={a:"a",code:"code",h2:"h2",li:"li",mermaid:"mermaid",p:"p",ul:"ul",...(0,i.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:["Erstelle die Klasse ",(0,n.jsx)(r.code,{children:"CoordinateByDistanceToOriginPointComparator"})," anhand des\nabgebildeten Klassendiagramms"]}),"\n",(0,n.jsxs)(r.li,{children:["Passe die ausf\xfchrbare Klasse aus \xdcbungsaufgabe ",(0,n.jsx)(r.a,{href:"comparators01",children:"Comparators01"}),"\nso an, dass die Koordinatenliste mit Hilfe der Klasse\n",(0,n.jsx)(r.code,{children:"CoordinateByDistanceToOriginPointComparator"})," sortiert wird"]}),"\n"]}),"\n",(0,n.jsx)(r.h2,{id:"klassendiagramm",children:"Klassendiagramm"}),"\n",(0,n.jsx)(r.mermaid,{value:"classDiagram\n    Comparator~Coordinate~ <|.. CoordinateByDistanceToOriginPointComparator : implements\n\n    class CoordinateByDistanceToOriginPointComparator {\n        +compare(coordinate1: Coordinate, coordinate2: Coordinate) int\n    }\n\n    class Comparator~Coordinate~ {\n        <<interface>>\n        +compare(o1: Coordinate, o2: Coordinate) int\n    }"}),"\n",(0,n.jsx)(r.h2,{id:"hinweis-zur-klasse-coordinatebydistancetooriginpointcomparator",children:"Hinweis zur Klasse CoordinateByDistanceToOriginPointComparator"}),"\n",(0,n.jsxs)(r.p,{children:["Die Methode ",(0,n.jsx)(r.code,{children:"int compare(coordinate1: Coordinate, coordinate2: Coordinate)"})," soll\nso implementiert werden, dass Koordinaten abfsteigend nach ihrem Abstand zum\nNullpunkt sortiert werden k\xf6nnen"]}),"\n",(0,n.jsx)(s.Z,{pullRequest:"48",branchSuffix:"comparators/02"})]})}function p(e={}){let{wrapper:r}={...(0,i.a)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},97645:function(e,r,a){a.d(r,{Z:()=>i});var t=a("85893");a("67294");var n=a("67026");function i(e){let{children:r,hidden:a,className:i}=e;return(0,t.jsx)("div",{role:"tabpanel",className:(0,n.Z)("tabItem_Ymn6",i),hidden:a,children:r})}},58168:function(e,r,a){a.d(r,{Z:()=>g});var t=a("85893"),n=a("67294"),i=a("67026"),s=a("34718"),o=a("16550"),l=a("8714"),c=a("89207"),u=a("69413"),d=a("54510");function p(e){return n.Children.toArray(e).filter(e=>"\n"!==e).map(e=>{if(!e||n.isValidElement(e)&&function(e){let{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})?.filter(Boolean)??[]}function m(e){let{value:r,tabValues:a}=e;return a.some(e=>e.value===r)}var h=a("6735");function f(e){let{className:r,block:a,selectedValue:n,selectValue:o,tabValues:l}=e,c=[],{blockElementScrollPositionUntilNextRender:u}=(0,s.o5)(),d=e=>{let r=e.currentTarget,a=l[c.indexOf(r)].value;a!==n&&(u(r),o(a))},p=e=>{let r=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{let a=c.indexOf(e.currentTarget)+1;r=c[a]??c[0];break}case"ArrowLeft":{let a=c.indexOf(e.currentTarget)-1;r=c[a]??c[c.length-1]}}r?.focus()};return(0,t.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":a},r),children:l.map(e=>{let{value:r,label:a,attributes:s}=e;return(0,t.jsx)("li",{role:"tab",tabIndex:n===r?0:-1,"aria-selected":n===r,ref:e=>{c.push(e)},onKeyDown:p,onClick:d,...s,className:(0,i.Z)("tabs__item","tabItem_LNqP",s?.className,{"tabs__item--active":n===r}),children:a??r},r)})})}function b(e){let{lazy:r,children:a,selectedValue:s}=e,o=(Array.isArray(a)?a:[a]).filter(Boolean);if(r){let e=o.find(e=>e.props.value===s);return e?(0,n.cloneElement)(e,{className:(0,i.Z)("margin-top--md",e.props.className)}):null}return(0,t.jsx)("div",{className:"margin-top--md",children:o.map((e,r)=>(0,n.cloneElement)(e,{key:r,hidden:e.props.value!==s}))})}function v(e){let r=function(e){let{defaultValue:r,queryString:a=!1,groupId:t}=e,i=function(e){let{values:r,children:a}=e;return(0,n.useMemo)(()=>{let e=r??p(a).map(e=>{let{props:{value:r,label:a,attributes:t,default:n}}=e;return{value:r,label:a,attributes:t,default:n}});return!function(e){let r=(0,u.lx)(e,(e,r)=>e.value===r.value);if(r.length>0)throw Error(`Docusaurus error: Duplicate values "${r.map(e=>e.value).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e},[r,a])}(e),[s,h]=(0,n.useState)(()=>(function(e){let{defaultValue:r,tabValues:a}=e;if(0===a.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!m({value:r,tabValues:a}))throw Error(`Docusaurus error: The <Tabs> has a defaultValue "${r}" but none of its children has the corresponding value. Available values are: ${a.map(e=>e.value).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return r}let t=a.find(e=>e.default)??a[0];if(!t)throw Error("Unexpected error: 0 tabValues");return t.value})({defaultValue:r,tabValues:i})),[f,b]=function(e){let{queryString:r=!1,groupId:a}=e,t=(0,o.k6)(),i=function(e){let{queryString:r=!1,groupId:a}=e;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!a)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:r,groupId:a});return[(0,c._X)(i),(0,n.useCallback)(e=>{if(!i)return;let r=new URLSearchParams(t.location.search);r.set(i,e),t.replace({...t.location,search:r.toString()})},[i,t])]}({queryString:a,groupId:t}),[v,g]=function(e){let{groupId:r}=e,a=r?`docusaurus.tab.${r}`:null,[t,i]=(0,d.Nk)(a);return[t,(0,n.useCallback)(e=>{a&&i.set(e)},[a,i])]}({groupId:t}),x=(()=>{let e=f??v;return m({value:e,tabValues:i})?e:null})();return(0,l.Z)(()=>{x&&h(x)},[x]),{selectedValue:s,selectValue:(0,n.useCallback)(e=>{if(!m({value:e,tabValues:i}))throw Error(`Can't select invalid tab value=${e}`);h(e),b(e),g(e)},[b,g,i]),tabValues:i}}(e);return(0,t.jsxs)("div",{className:(0,i.Z)("tabs-container","tabList__CuJ"),children:[(0,t.jsx)(f,{...r,...e}),(0,t.jsx)(b,{...r,...e})]})}function g(e){let r=(0,h.Z)();return(0,t.jsx)(v,{...e,children:p(e.children)},String(r))}},17490:function(e,r,a){a.d(r,{Z:function(){return l}});var t=a(85893);a(67294);var n=a(58168),i=a(97645),s=a(53367),o=a(31705);function l(e){let{pullRequest:r,branchSuffix:a}=e;return(0,t.jsxs)(n.Z,{children:[(0,t.jsxs)(i.Z,{value:"exercise",label:"Exercise",default:!0,children:[(0,t.jsx)(o.Z,{language:"console",children:`git switch exercises/${a}`}),(0,t.jsx)(s.Z,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/exercises/${a}/Exercise.java`,children:(0,t.jsx)("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"})})]}),(0,t.jsxs)(i.Z,{value:"solution",label:"Solution",children:[(0,t.jsx)(o.Z,{language:"console",children:`git switch solutions/${a}`}),(0,t.jsx)(s.Z,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/solutions/${a}/Exercise.java`,children:(0,t.jsx)("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"})})]}),(0,t.jsxs)(i.Z,{value:"pullrequest",label:"Pull Request",children:["Alle \xa0\xc4nderungen zwischen der Aufgabe und der L\xf6sung findest du im Pull Request"," ",(0,t.jsxs)(s.Z,{to:`https://github.com/jappuccini/java-exercises/pull/${r}/files?diff=split`,children:["PR#",r]})]})]})}}}]);