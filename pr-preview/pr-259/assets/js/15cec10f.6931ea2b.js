"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([["401"],{67386:function(e,r,n){n.r(r),n.d(r,{default:()=>p,frontMatter:()=>l,metadata:()=>t,assets:()=>u,toc:()=>c,contentTitle:()=>o});var t=JSON.parse('{"id":"exercises/generics/generics02","title":"Generics02","description":"","source":"@site/docs/exercises/generics/generics02.mdx","sourceDirName":"exercises/generics","slug":"/exercises/generics/generics02","permalink":"/java-docs/pr-preview/pr-259/exercises/generics/generics02","draft":false,"unlisted":false,"editUrl":"https://github.com/jappuccini/java-docs/tree/main/docs/exercises/generics/generics02.mdx","tags":[],"version":"current","frontMatter":{"title":"Generics02","description":""},"sidebar":"exercisesSidebar","previous":{"title":"Generics01","permalink":"/java-docs/pr-preview/pr-259/exercises/generics/generics01"},"next":{"title":"Generics03","permalink":"/java-docs/pr-preview/pr-259/exercises/generics/generics03"}}'),s=n("85893"),a=n("50065"),i=n("17490");let l={title:"Generics02",description:""},o=void 0,u={},c=[{value:"Klassendiagramm",id:"klassendiagramm",level:2}];function d(e){let r={a:"a",code:"code",h2:"h2",li:"li",mermaid:"mermaid",ul:"ul",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:["Passe die Klasse ",(0,s.jsx)(r.code,{children:"Crate"})," aus \xdcbungsaufgabe ",(0,s.jsx)(r.a,{href:"generics01",children:"Generics01"})," anhand des\nabgebildeten Klassendiagramms an"]}),"\n",(0,s.jsxs)(r.li,{children:["Passe die ausf\xfchrbare Klasse aus \xdcbungsaufgabe ",(0,s.jsx)(r.a,{href:"generics01",children:"Generics01"})," so an,\ndass sie fehlerfrei ausgef\xfchrt werden kann"]}),"\n"]}),"\n",(0,s.jsx)(r.h2,{id:"klassendiagramm",children:"Klassendiagramm"}),"\n",(0,s.jsx)(r.mermaid,{value:"classDiagram\n    Bottle <|-- BeerBottle : extends\n    Bottle <|-- WineBottle : extends\n\n    class Crate~T extends Bottle~ {\n        -box1: T\n        -box2: T\n        -box3: T\n        -box4: T\n        -box5: T\n        -box6: T\n        +insertBottle(bottle: T, box: int) void\n        +takeBottle(box: int) T\n    }\n\n    class Bottle {\n        <<abstract>>\n    }\n\n    class BeerBottle {\n        +chugALug() void\n    }\n\n    class WineBottle {\n\n    }"}),"\n",(0,s.jsx)(i.Z,{pullRequest:"53",branchSuffix:"generics/02"})]})}function p(e={}){let{wrapper:r}={...(0,a.a)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},97645:function(e,r,n){n.d(r,{Z:()=>a});var t=n("85893");n("67294");var s=n("67026");function a(e){let{children:r,hidden:n,className:a}=e;return(0,t.jsx)("div",{role:"tabpanel",className:(0,s.Z)("tabItem_Ymn6",a),hidden:n,children:r})}},58168:function(e,r,n){n.d(r,{Z:()=>x});var t=n("85893"),s=n("67294"),a=n("67026"),i=n("34718"),l=n("16550"),o=n("8714"),u=n("89207"),c=n("69413"),d=n("54510");function p(e){return s.Children.toArray(e).filter(e=>"\n"!==e).map(e=>{if(!e||s.isValidElement(e)&&function(e){let{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})?.filter(Boolean)??[]}function h(e){let{value:r,tabValues:n}=e;return n.some(e=>e.value===r)}var f=n("6735");function m(e){let{className:r,block:n,selectedValue:s,selectValue:l,tabValues:o}=e,u=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.o5)(),d=e=>{let r=e.currentTarget,n=o[u.indexOf(r)].value;n!==s&&(c(r),l(n))},p=e=>{let r=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{let n=u.indexOf(e.currentTarget)+1;r=u[n]??u[0];break}case"ArrowLeft":{let n=u.indexOf(e.currentTarget)-1;r=u[n]??u[u.length-1]}}r?.focus()};return(0,t.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":n},r),children:o.map(e=>{let{value:r,label:n,attributes:i}=e;return(0,t.jsx)("li",{role:"tab",tabIndex:s===r?0:-1,"aria-selected":s===r,ref:e=>{u.push(e)},onKeyDown:p,onClick:d,...i,className:(0,a.Z)("tabs__item","tabItem_LNqP",i?.className,{"tabs__item--active":s===r}),children:n??r},r)})})}function g(e){let{lazy:r,children:n,selectedValue:i}=e,l=(Array.isArray(n)?n:[n]).filter(Boolean);if(r){let e=l.find(e=>e.props.value===i);return e?(0,s.cloneElement)(e,{className:(0,a.Z)("margin-top--md",e.props.className)}):null}return(0,t.jsx)("div",{className:"margin-top--md",children:l.map((e,r)=>(0,s.cloneElement)(e,{key:r,hidden:e.props.value!==i}))})}function b(e){let r=function(e){let{defaultValue:r,queryString:n=!1,groupId:t}=e,a=function(e){let{values:r,children:n}=e;return(0,s.useMemo)(()=>{let e=r??p(n).map(e=>{let{props:{value:r,label:n,attributes:t,default:s}}=e;return{value:r,label:n,attributes:t,default:s}});return!function(e){let r=(0,c.lx)(e,(e,r)=>e.value===r.value);if(r.length>0)throw Error(`Docusaurus error: Duplicate values "${r.map(e=>e.value).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e},[r,n])}(e),[i,f]=(0,s.useState)(()=>(function(e){let{defaultValue:r,tabValues:n}=e;if(0===n.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!h({value:r,tabValues:n}))throw Error(`Docusaurus error: The <Tabs> has a defaultValue "${r}" but none of its children has the corresponding value. Available values are: ${n.map(e=>e.value).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return r}let t=n.find(e=>e.default)??n[0];if(!t)throw Error("Unexpected error: 0 tabValues");return t.value})({defaultValue:r,tabValues:a})),[m,g]=function(e){let{queryString:r=!1,groupId:n}=e,t=(0,l.k6)(),a=function(e){let{queryString:r=!1,groupId:n}=e;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!n)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:r,groupId:n});return[(0,u._X)(a),(0,s.useCallback)(e=>{if(!a)return;let r=new URLSearchParams(t.location.search);r.set(a,e),t.replace({...t.location,search:r.toString()})},[a,t])]}({queryString:n,groupId:t}),[b,x]=function(e){let{groupId:r}=e,n=r?`docusaurus.tab.${r}`:null,[t,a]=(0,d.Nk)(n);return[t,(0,s.useCallback)(e=>{n&&a.set(e)},[n,a])]}({groupId:t}),v=(()=>{let e=m??b;return h({value:e,tabValues:a})?e:null})();return(0,o.Z)(()=>{v&&f(v)},[v]),{selectedValue:i,selectValue:(0,s.useCallback)(e=>{if(!h({value:e,tabValues:a}))throw Error(`Can't select invalid tab value=${e}`);f(e),g(e),x(e)},[g,x,a]),tabValues:a}}(e);return(0,t.jsxs)("div",{className:(0,a.Z)("tabs-container","tabList__CuJ"),children:[(0,t.jsx)(m,{...r,...e}),(0,t.jsx)(g,{...r,...e})]})}function x(e){let r=(0,f.Z)();return(0,t.jsx)(b,{...e,children:p(e.children)},String(r))}},17490:function(e,r,n){n.d(r,{Z:function(){return o}});var t=n(85893);n(67294);var s=n(58168),a=n(97645),i=n(53367),l=n(31705);function o(e){let{pullRequest:r,branchSuffix:n}=e;return(0,t.jsxs)(s.Z,{children:[(0,t.jsxs)(a.Z,{value:"exercise",label:"Exercise",default:!0,children:[(0,t.jsx)(l.Z,{language:"console",children:`git switch exercises/${n}`}),(0,t.jsx)(i.Z,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/exercises/${n}/Exercise.java`,children:(0,t.jsx)("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"})})]}),(0,t.jsxs)(a.Z,{value:"solution",label:"Solution",children:[(0,t.jsx)(l.Z,{language:"console",children:`git switch solutions/${n}`}),(0,t.jsx)(i.Z,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/solutions/${n}/Exercise.java`,children:(0,t.jsx)("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"})})]}),(0,t.jsxs)(a.Z,{value:"pullrequest",label:"Pull Request",children:["Alle \xa0\xc4nderungen zwischen der Aufgabe und der L\xf6sung findest du im Pull Request"," ",(0,t.jsxs)(i.Z,{to:`https://github.com/jappuccini/java-exercises/pull/${r}/files?diff=split`,children:["PR#",r]})]})]})}}}]);