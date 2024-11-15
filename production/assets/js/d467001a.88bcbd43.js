"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([["7179"],{20608:function(e,r,t){t.r(r),t.d(r,{metadata:()=>a,contentTitle:()=>l,default:()=>p,assets:()=>c,toc:()=>u,frontMatter:()=>s});var a=JSON.parse('{"id":"exercises/comparators/comparators02","title":"Comparators02","description":"","source":"@site/docs/exercises/comparators/comparators02.mdx","sourceDirName":"exercises/comparators","slug":"/exercises/comparators/comparators02","permalink":"/java-docs/production/exercises/comparators/comparators02","draft":false,"unlisted":false,"editUrl":"https://github.com/jappuccini/java-docs/tree/main/docs/exercises/comparators/comparators02.mdx","tags":[],"version":"current","frontMatter":{"title":"Comparators02","description":""},"sidebar":"exercisesSidebar","previous":{"title":"Comparators01","permalink":"/java-docs/production/exercises/comparators/comparators01"},"next":{"title":"Schl\xfcsseltransformationen (Hashing)","permalink":"/java-docs/production/exercises/hashing/"}}'),n=t("85893"),i=t("50065"),o=t("39661");let s={title:"Comparators02",description:""},l=void 0,c={},u=[{value:"Klassendiagramm",id:"klassendiagramm",level:2},{value:"Hinweis zur Klasse CoordinateByDistanceToOriginPointComparator",id:"hinweis-zur-klasse-coordinatebydistancetooriginpointcomparator",level:2}];function d(e){let r={a:"a",code:"code",h2:"h2",li:"li",mermaid:"mermaid",p:"p",ul:"ul",...(0,i.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:["Erstelle die Klasse ",(0,n.jsx)(r.code,{children:"CoordinateByDistanceToOriginPointComparator"})," anhand des\nabgebildeten Klassendiagramms"]}),"\n",(0,n.jsxs)(r.li,{children:["Passe die ausf\xfchrbare Klasse aus \xdcbungsaufgabe ",(0,n.jsx)(r.a,{href:"comparators01",children:"Comparators01"}),"\nso an, dass die Koordinatenliste mit Hilfe der Klasse\n",(0,n.jsx)(r.code,{children:"CoordinateByDistanceToOriginPointComparator"})," sortiert wird"]}),"\n"]}),"\n",(0,n.jsx)(r.h2,{id:"klassendiagramm",children:"Klassendiagramm"}),"\n",(0,n.jsx)(r.mermaid,{value:"classDiagram\n    Comparator~Coordinate~ <|.. CoordinateByDistanceToOriginPointComparator : implements\n\n    class CoordinateByDistanceToOriginPointComparator {\n        +compare(coordinate1: Coordinate, coordinate2: Coordinate) int\n    }\n\n    class Comparator~Coordinate~ {\n        <<interface>>\n        +compare(o1: Coordinate, o2: Coordinate) int\n    }"}),"\n",(0,n.jsx)(r.h2,{id:"hinweis-zur-klasse-coordinatebydistancetooriginpointcomparator",children:"Hinweis zur Klasse CoordinateByDistanceToOriginPointComparator"}),"\n",(0,n.jsxs)(r.p,{children:["Die Methode ",(0,n.jsx)(r.code,{children:"int compare(coordinate1: Coordinate, coordinate2: Coordinate)"})," soll\nso implementiert werden, dass Koordinaten abfsteigend nach ihrem Abstand zum\nNullpunkt sortiert werden k\xf6nnen"]}),"\n",(0,n.jsx)(o.Z,{pullRequest:"48",branchSuffix:"comparators/02"})]})}function p(e={}){let{wrapper:r}={...(0,i.a)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},5525:function(e,r,t){t.d(r,{Z:()=>o});var a=t("85893");t("67294");var n=t("67026");let i="tabItem_Ymn6";function o(e){let{children:r,hidden:t,className:o}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,n.Z)(i,o),hidden:t,children:r})}},47902:function(e,r,t){t.d(r,{Z:()=>j});var a=t("85893"),n=t("67294"),i=t("67026"),o=t("69599"),s=t("16550"),l=t("32000"),c=t("4520"),u=t("38341"),d=t("76009");function p(e){return n.Children.toArray(e).filter(e=>"\n"!==e).map(e=>{if(!e||n.isValidElement(e)&&function(e){let{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})?.filter(Boolean)??[]}function m(e){let{value:r,tabValues:t}=e;return t.some(e=>e.value===r)}var h=t("7227");let f="tabList__CuJ",b="tabItem_LNqP";function g(e){let{className:r,block:t,selectedValue:n,selectValue:s,tabValues:l}=e,c=[],{blockElementScrollPositionUntilNextRender:u}=(0,o.o5)(),d=e=>{let r=e.currentTarget,t=l[c.indexOf(r)].value;t!==n&&(u(r),s(t))},p=e=>{let r=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{let t=c.indexOf(e.currentTarget)+1;r=c[t]??c[0];break}case"ArrowLeft":{let t=c.indexOf(e.currentTarget)-1;r=c[t]??c[c.length-1]}}r?.focus()};return(0,a.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":t},r),children:l.map(e=>{let{value:r,label:t,attributes:o}=e;return(0,a.jsx)("li",{role:"tab",tabIndex:n===r?0:-1,"aria-selected":n===r,ref:e=>c.push(e),onKeyDown:p,onClick:d,...o,className:(0,i.Z)("tabs__item",b,o?.className,{"tabs__item--active":n===r}),children:t??r},r)})})}function v(e){let{lazy:r,children:t,selectedValue:o}=e,s=(Array.isArray(t)?t:[t]).filter(Boolean);if(r){let e=s.find(e=>e.props.value===o);return e?(0,n.cloneElement)(e,{className:(0,i.Z)("margin-top--md",e.props.className)}):null}return(0,a.jsx)("div",{className:"margin-top--md",children:s.map((e,r)=>(0,n.cloneElement)(e,{key:r,hidden:e.props.value!==o}))})}function x(e){let r=function(e){let{defaultValue:r,queryString:t=!1,groupId:a}=e,i=function(e){let{values:r,children:t}=e;return(0,n.useMemo)(()=>{let e=r??p(t).map(e=>{let{props:{value:r,label:t,attributes:a,default:n}}=e;return{value:r,label:t,attributes:a,default:n}});return!function(e){let r=(0,u.lx)(e,(e,r)=>e.value===r.value);if(r.length>0)throw Error(`Docusaurus error: Duplicate values "${r.map(e=>e.value).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e},[r,t])}(e),[o,h]=(0,n.useState)(()=>(function(e){let{defaultValue:r,tabValues:t}=e;if(0===t.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!m({value:r,tabValues:t}))throw Error(`Docusaurus error: The <Tabs> has a defaultValue "${r}" but none of its children has the corresponding value. Available values are: ${t.map(e=>e.value).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return r}let a=t.find(e=>e.default)??t[0];if(!a)throw Error("Unexpected error: 0 tabValues");return a.value})({defaultValue:r,tabValues:i})),[f,b]=function(e){let{queryString:r=!1,groupId:t}=e,a=(0,s.k6)(),i=function(e){let{queryString:r=!1,groupId:t}=e;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!t)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:r,groupId:t}),o=(0,c._X)(i);return[o,(0,n.useCallback)(e=>{if(!i)return;let r=new URLSearchParams(a.location.search);r.set(i,e),a.replace({...a.location,search:r.toString()})},[i,a])]}({queryString:t,groupId:a}),[g,v]=function(e){var r;let{groupId:t}=e;let a=(r=t)?`docusaurus.tab.${r}`:null,[i,o]=(0,d.Nk)(a);return[i,(0,n.useCallback)(e=>{if(!!a)o.set(e)},[a,o])]}({groupId:a}),x=(()=>{let e=f??g;return m({value:e,tabValues:i})?e:null})();return(0,l.Z)(()=>{x&&h(x)},[x]),{selectedValue:o,selectValue:(0,n.useCallback)(e=>{if(!m({value:e,tabValues:i}))throw Error(`Can't select invalid tab value=${e}`);h(e),b(e),v(e)},[b,v,i]),tabValues:i}}(e);return(0,a.jsxs)("div",{className:(0,i.Z)("tabs-container",f),children:[(0,a.jsx)(g,{...r,...e}),(0,a.jsx)(v,{...r,...e})]})}function j(e){let r=(0,h.Z)();return(0,a.jsx)(x,{...e,children:p(e.children)},String(r))}},39661:function(e,r,t){t.d(r,{Z:function(){return l}});var a=t(85893);t(67294);var n=t(47902),i=t(5525),o=t(83012),s=t(45056);function l(e){let{pullRequest:r,branchSuffix:t}=e;return(0,a.jsxs)(n.Z,{children:[(0,a.jsxs)(i.Z,{value:"exercise",label:"Exercise",default:!0,children:[(0,a.jsx)(s.Z,{language:"console",children:`git switch exercises/${t}`}),(0,a.jsx)(o.Z,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/exercises/${t}/Exercise.java`,children:(0,a.jsx)("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"})})]}),(0,a.jsxs)(i.Z,{value:"solution",label:"Solution",children:[(0,a.jsx)(s.Z,{language:"console",children:`git switch solutions/${t}`}),(0,a.jsx)(o.Z,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/solutions/${t}/Exercise.java`,children:(0,a.jsx)("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"})})]}),(0,a.jsxs)(i.Z,{value:"pullrequest",label:"Pull Request",children:["Alle \xa0\xc4nderungen zwischen der Aufgabe und der L\xf6sung findest du im Pull Request"," ",(0,a.jsxs)(o.Z,{to:`https://github.com/jappuccini/java-exercises/pull/${r}/files?diff=split`,children:["PR#",r]})]})]})}}}]);